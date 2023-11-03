import PropTypes from 'prop-types';
import searchIcon from '@iconify/icons-carbon/search';
// @mui
import { InputAdornment, FilledInput } from '@mui/material';
import { styled } from '@mui/material/styles';
//
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  width: '100%',
  '& .MuiAutocomplete-root': {
    '& .MuiInputAdornment-root': {
      marginTop: '0 !important',
    },
    '& .MuiFilledInput-root': {
      height: 56,
      padding: '0 12px',
    },
  },
}));

// ----------------------------------------------------------------------

SearchByPortfolio.propTypes = {
  sx: PropTypes.object,
};

export default function SearchByPortfolio({ sx, ...other }) {
  return (
    <RootStyle>
      <FilledInput
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <Iconify icon={searchIcon} sx={{ width: 24, height: 24, color: 'text.disabled' }} />
          </InputAdornment>
        }
        placeholder="Поиск по всем проектам..."
        sx={{
          '& .MuiFilledInput-input': { py: '18px' },
          ...sx,
        }}
        {...other}
      />
    </RootStyle>
  );
}
