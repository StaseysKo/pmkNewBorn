import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { TextField, InputAdornment } from '@mui/material';
import roundBusiness from '@iconify/icons-ic/round-business';

import { Iconify } from 'src/components/iconify';

const RootStyle = styled('div')(({ theme }) => ({
  width: '100%',
  '& .MuiFilledInput-input': {
    paddingTop: theme.spacing(2.2),
    paddingBottom: theme.spacing(2.2),
  },
}));

ServicesFilter.propTypes = {
  onFilterChange: PropTypes.func,
};

export default function ServicesFilter({ onFilterChange }) {
  return (
    <RootStyle>
      <TextField
        fullWidth
        sx={{
          minHeight: 56
        }}
        variant="filled"
        placeholder="Поиск по услугам..."
        onChange={(event) => onFilterChange(event.target.value)}
        InputProps={{
          autoComplete: 'search',
          startAdornment: (
            <InputAdornment position="end">
              <Iconify
                icon={roundBusiness}
                sx={{ 
                  width: 24, 
                  height: 24, 
                  color: 'text.disabled', 
                  flexShrink: 0, 
                  mr: 2
                }}
              />
            </InputAdornment>
          ),
        }}
      />
    </RootStyle>
  );
}
