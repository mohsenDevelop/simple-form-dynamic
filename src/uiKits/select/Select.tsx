import { styled } from '@mui/material/styles';
import MuiSelect from '@mui/material/Select';

export const Select = styled(MuiSelect)(() => ({
    height: 44,
    fontSize: 14,
    color: '#000',
    '& .tick-icon': {
        display: 'none',
    },
    fieldset: {
        border: '1px solid rgba(0, 0, 0, 0.25)',
        borderRadius: 6,
    },
}));