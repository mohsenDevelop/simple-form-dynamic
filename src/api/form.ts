import { useState, useEffect } from 'react';

import { FORM_API } from '@config/apiUrls';
import { FormApi } from '@models/formApi';
import useHttpRequest from '@hooks/useHttpRequest';

export const useForm = () => {

    const { getRequest } = useHttpRequest();
    const [data, setData] = useState<FormApi.WidgetsList | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const queryCryptoList = () => {

        setLoading(true);
        getRequest(FORM_API)
            .then((resp) => {
                setData(resp?.data);
                setLoading(false);

            }).catch((err: any) => {
                setLoading(false);
                console.log('error-cryptoListQuery', err);

            });
    };

    useEffect(() => {
        queryCryptoList();
    }, []);

    return {
        loading,
        data
    };

};