import { AxiosResponse } from 'axios';

import { useApi } from './useApi';

const useHttpRequest = () => {

    const { get, post, remove, put } = useApi();

    const getRequest = (url: string, config?: any): Promise<AxiosResponse> => {

        return new Promise((resolve, reject) => {

            get(url, {
                validateStatus: (status: any) => {
                    if (status >= 200 && status <= 204) {

                        return true;
                    }

                }, ...config
            }).then((res) => {
                resolve(res);
            }).catch((error) => reject(error));
        });

    };

    const postRequest = (url: string, body: any, config?: any): Promise<AxiosResponse> => {

        return new Promise((resolve, reject) => {

            post(url, body, {
                validateStatus: (status: any) => {
                    if (status && status >= 200 && status <= 204) {

                        return true;
                    }

                }, ...config
            }).then((res) => {
                resolve(res);
            }).catch((error) => reject(error));
        });

    };

    const deleteRequest = (url: string, body?: any): Promise<AxiosResponse> => {

        return new Promise((resolve, reject) => {

            remove(url, body, {
                validateStatus: (status: any) => {
                    if (status >= 200 && status <= 204) {

                        return true;
                    }

                }
            }).then((res) => {
                resolve(res);
            }).catch((error) => reject(error));
        });

    };

    const updateRequest = async (url: string, body: any): Promise<AxiosResponse> => {

        return new Promise((resolve, reject) => {

            put(url, body, {
                validateStatus: (status: any) => {
                    if (status >= 200 && status <= 204) {

                        return true;
                    }

                }
            }).then((res) => {
                resolve(res);
            }).catch((error) => reject(error));
        });

    };

    return {
        getRequest,
        postRequest,
        deleteRequest,
        updateRequest
    };

};

export default useHttpRequest;