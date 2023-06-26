import Stack from '@mui/material/Stack';

import { colorPalette } from '@uiKits/colors';
import { useForm } from '@api/form';
import { FormApi } from '@models/formApi';
import Fields from './components/Fields';

const HomePage = () => {

    const { data, loading } = useForm();

    return (
        <Stack
            alignItems={'center'}
            pt={'80px'}
        >
            <Stack
                width={data?.width}
                height={data?.height}
                bgcolor={colorPalette.white}
                borderRadius={'20px'}
                p={'37px'}
                gap={'32px'}
            >

                {
                    data?.ui ?
                        data.ui.map((_el: FormApi.UiType, _index: number) => (
                            <Fields {..._el} />
                        ))
                        :
                        null
                }

            </Stack>
        </Stack>
    );
};

export default HomePage;