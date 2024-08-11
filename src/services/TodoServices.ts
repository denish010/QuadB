import { ENDPOINT_ROUTE } from '../data/constant/common.constants'
import ApiService from './ApiServices'

export async function apiGetToDoListData<T>() {
    return ApiService.fetchData<T>({
        url: ENDPOINT_ROUTE,
        method: 'get',
    })
}

export async function apiAddToDoDataById<
    T,
    U extends Record<string, unknown>
>(data: U) {
    return ApiService.fetchData<T>({
        url: ENDPOINT_ROUTE,
        method: 'post',
        data,
    })
}

export async function apiPutToDoList<T, U extends Record<string, unknown>>(
    data: U
) {
    return ApiService.fetchData<T>({
        url: ENDPOINT_ROUTE,
        method: 'put',
        data,
    })
}

export async function apiDeleteToDo<
    T,
    U extends Record<string, unknown>
>(data: U) {
    return ApiService.fetchData<T>({
        url: ENDPOINT_ROUTE,
        method: 'delete',
        data,
    })
}
