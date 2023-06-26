import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import MenuItem from '@mui/material/MenuItem';
import { Button } from '@uiKits/button/Button';
import { colorPalette } from '@uiKits/colors';
import { TextField } from '@uiKits/textField/TextField';
import { Select } from '@uiKits/select/Select';

const PopoverPaperStyle = {
    background: '#fff',
    border: '1.5px solid rgba(198, 198, 199, 0.6)',
    boxShadow: 'unset',
    borderRadius: '6px',
    maxHeight: 200,
};

const Fields: FC<any> = (props) => {

    switch (props.type) {
        case 'textedit':
            return (

                <Stack
                    gap={'10px'}
                >
                    <Typography fontSize={14} fontWeight={500}>{props?.label ?? ''}</Typography>
                    <TextField
                        placeholder={props?.placeholder ?? ''}
                        fullWidth={true}
                        inputProps={{
                            autoComplete: 'off',
                        }}
                        sx={{
                            height: props?.height,
                            width: props?.width,
                        }}
                    />
                </Stack>
            );
        case 'selection':
            return (
                <Stack gap={'10px'}>
                    <Typography fontSize={16} fontWeight={500} >{props?.label ?? ''}</Typography>
                    <Select
                        label={''}
                        placeholder={'Select language'}
                        MenuProps={{
                            sx: {
                                '& .MuiPaper-root': PopoverPaperStyle,
                            },
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'left',
                            },
                            transformOrigin: {
                                vertical: 'top',
                                horizontal: 'left',
                            },
                            // anchorEl:
                        }}
                    >
                        {
                            props?.items ? props?.items.map((_lang: string) => (
                                <MenuItem key={_lang} value={_lang}>{_lang}</MenuItem>
                            ))
                                :
                                null
                        }
                    </Select>
                </Stack>
            );

        case 'button':
            return (
                <Button
                    variant={'contained'}
                    type={'button'}
                    backgroundColor={colorPalette.purple}
                    LabelColor={colorPalette.white}
                    sx={{
                        fontSize: 14,
                        fontWeight: 700,
                        height: props?.height,
                        width: props?.width,
                    }}
                >
                    {props?.text ?? ''}
                </Button>
            );
        default:
            throw new Error('Invalid Field Type');
    }
};

export default Fields;