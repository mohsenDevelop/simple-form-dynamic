import axios, { AxiosResponse } from 'axios';

import { BASE_URL_API } from '@config/apiUrls';

export const useApi = () => {

    const headers: any = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    const instance = axios.create({
        baseURL: BASE_URL_API,
        headers
    });

    // API respone interceptor
    instance.interceptors.response.use((response) => {
        return response;
    }, (error) => {

        const notificationParam: { message: string[] } = {
            message: [],
        };

        // Remove token and redirect
        if (error.response.status === 401) {
            notificationParam.message = ['Please login again'];
            // localStorage.removeItem(_TOKEN_NAME);
            // router.replace(ROOT_URL);
        }

        if (error.response.status === 500) {
            notificationParam.message = ['Server error'];
        }

        if (error.response.status === 400 || (error.response.status > 401 && error.response.status < 500)) {

            notificationParam.message = error?.response?.data?.message.length ? error?.response?.data.message : 'There is a connection problem';

        }

        if (notificationParam.message.length) {

            notificationParam.message.forEach((_mssg: string) => {
                // invoke toast
            });
        }

        return Promise.reject(error);
    });

    const get = (url: string, config?: any): Promise<AxiosResponse> => {
        return instance.get(url, config);
    };

    const post = (url: string, data?: any, config?: any): Promise<AxiosResponse> => {
        return instance.post(url, data, config);
    };

    const put = (url: string, data?: any, config?: any): Promise<AxiosResponse> => {
        return instance.put(url, data, config);
    };

    const remove = (url: string, data?: any, config?: any): Promise<AxiosResponse> => {
        return instance.delete(url, {
            data,
            ...config
        });
    };

    return {
        get,
        post,
        put,
        remove
    };
};