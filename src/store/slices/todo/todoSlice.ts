import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TodoSliceState = {
  avatar?: string;
  userName?: string;
  email?: string;
  todos: Array<Todo>;
  selectedTodo?: Todo | null;
  selectedTab?: string;
  theme?: string;
  display?: string;
  loading?: boolean;
  isError?: boolean;
};

export enum TodoStatus {
  TODO = "todo",
  COMPLETED = "completed"
}

export type Todo = {
  id: string;
  title: string;
  notes: string;
  steps: Array<string>;
  reminder?: Date;
  dueDate?: Date;
  repeat: boolean;
  important: boolean;
  status: TodoStatus;
  createdAt?: Date;
};

// Utility function to make API requests and handle errors
const makeApiRequest = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  return response.json();
};

// Generic async thunk creator to reduce boilerplate
const createAsyncThunkWithApi = <Returned, Arg>(
  typePrefix: string,
  apiCall: (arg: Arg) => Promise<Returned>
) => {
  return createAsyncThunk<Returned, Arg>(
    typePrefix,
    async (arg, { rejectWithValue }) => {
      try {
        return await apiCall(arg);
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );
};

// Async thunks
export const fetchTodo = createAsyncThunkWithApi(
  'todos/fetchTodos',
  async () => makeApiRequest<Array<Todo>>("http://localhost:3000/todo")
);

export const addTodo = createAsyncThunkWithApi(
  'todos/addTodo',
  async (newTodo: Todo) => makeApiRequest<Todo>("http://localhost:3000/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTodo)
  })
);

export const updateTodoThunk = createAsyncThunkWithApi(
  'todos/updateTodo',
  async (updatedTodo: Partial<Todo>) => makeApiRequest<Todo>(`http://localhost:3000/todo/${updatedTodo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedTodo)
  })
);

export const deleteTodoThunk = createAsyncThunkWithApi(
  'todos/deleteTodo',
  async (todoId: string) => {
    await makeApiRequest<void>(`http://localhost:3000/todo/${todoId}`, {
      method: "DELETE"
    });
    return todoId;
  }
);

const initialState: TodoSliceState = {
  avatar: "",
  userName: "",
  email: "",
  todos: [],
  selectedTab: "all-tasks",
  display: "grid",
  loading: false,
  isError: false
};

const todoSlice = createSlice({
  name: "todo-slice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TodoSliceState>) => {
      state.avatar = action.payload?.avatar;
      state.email = action.payload?.email;
      state.userName = action.payload?.userName;
    },
    setSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },
    changeTab: (state, action) => {
      state.selectedTab = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleDisplay: (state) => {
      state.display = state.display === "grid" ? "row" : "grid";
    }
  },
  extraReducers: (builder) => {
    const pendingReducer = (state: TodoSliceState) => {
      state.loading = true;
    };

    const rejectedReducer = (state: TodoSliceState, action: PayloadAction<any>) => {
      state.loading = false;
      state.isError = true;
      console.error("Error:", action.payload);
    };

    builder
      // Fetch Todos
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodo.pending, pendingReducer)
      .addCase(fetchTodo.rejected, rejectedReducer)
      // Add Todo
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
        state.loading = false;
      })
      .addCase(addTodo.pending, pendingReducer)
      .addCase(addTodo.rejected, rejectedReducer)
      // Update Todo
      .addCase(updateTodoThunk.fulfilled, (state, action) => {
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = { ...state.todos[index], ...action.payload };
        }
        state.loading = false;
      })
      .addCase(updateTodoThunk.pending, pendingReducer)
      .addCase(updateTodoThunk.rejected, rejectedReducer)
      // Delete Todo
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteTodoThunk.pending, pendingReducer)
      .addCase(deleteTodoThunk.rejected, rejectedReducer);
  }
});

export const {
  setUser,
  setSelectedTodo,
  changeTab,
  setTheme,
  toggleDisplay
} = todoSlice.actions;

export default todoSlice.reducer;
