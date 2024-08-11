import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BellIcon from '../../../components/svg/BellIcon';
import CalendarIcon from '../../../components/svg/CalendarIcon';
import RepeatIcon from '../../../components/svg/RepeatIcon';
import { v4 } from 'uuid';
import { addTodo, TodoStatus } from '../../../store/slices/todo/todoSlice';
import { FC } from '../../../types/common.types';
import classNames from 'classnames';
import { RootState } from '../../../store';
import { createTodo } from '../../../store/slices/todo/todoSlice';
import {
  CULTURED_100_1,
  DARK_JUNGLE_GREEN_100_1,
} from '../../../tw-config/colors';

const initialDetails = {
  title: '',
  dueDate: '',
  reminder: '',
  repeat: false,
  notes: '',
};

const AddTodo: FC<{ expandTodoInput: boolean }> = ({ expandTodoInput }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.todo.theme);
  const [todoDetails, setTodoDetails] = useState(initialDetails);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTodoDetails((prev) => ({ ...prev, [name]: value }));
  };

  const toggleRepeat = () =>
    setTodoDetails((prev) => ({ ...prev, repeat: !prev.repeat }));

  const resetTodoDetails = () => {
    setTodoDetails(initialDetails);
  };

  const handleAddTodo = () => {
    if (!todoDetails.title) return;

    const newTodo = {
      id: v4(),
      title: todoDetails.title,
      notes: todoDetails.notes,
      steps: [],
      repeat: todoDetails.repeat,
      dueDate: (todoDetails.dueDate as any) ?? new Date(),
      important: true,
      status: TodoStatus.TODO,
    };

    // Dispatch the createTodo action
    dispatch(addTodo(newTodo) as any);

    resetTodoDetails();
  };

  const iconColor = isDarkMode ? DARK_JUNGLE_GREEN_100_1 : CULTURED_100_1;

  return (
    <div
      className={classNames(
        'flex transition-all duration-300 overflow-hidden',
        expandTodoInput ? 'h-[178px]' : 'h-0',
      )}
    >
      <div
        className={classNames(
          'h-full w-full border-t-[1.5px] border-fernGreen-100-o33 py-4 px-5 dark:bg-darkCharcoal-100-1',
          {
            'bg-gradient-to-t from-japaneseLaurel-100-o1a to-aeroBlueGreen-100-o1a': isDarkMode,
          },
        )}
      >
        <div className="w-full h-[calc(100%-36px)]">
          <textarea
            name="title"
            className="resize-none bg-transparent w-full h-full placeholder:text-darkJungleGreen-100-ob8 dark:placeholder:text-white-100-1 dark:text-white-100-1 text-[15px] leading-5 focus:outline-none"
            placeholder="Add A Task"
            value={todoDetails.title}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="h-9 flex justify-between">
          <div className="flex gap-[26px] items-center">
            <button>
              <BellIcon fill={iconColor} />
            </button>
            <button onClick={toggleRepeat}>
              <RepeatIcon
                fill={todoDetails.repeat ? 'green' : iconColor}
              />
            </button>
            <button>
              <CalendarIcon fill={iconColor} />
            </button>
          </div>
          <button
            className="uppercase bg-japaneseLaurel-100-o29 dark:bg-japaneseLaurel-100-oe0 text-japaneseLaurel-100-1 dark:text-americanSilver-100-1 font-outfit-medium text-[15px] leading-5 px-4 py-2 rounded-lg font-medium disabled:text-gray-400"
            onClick={handleAddTodo}
            disabled={!todoDetails.title.trim()}
          >
            <span>add task</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
