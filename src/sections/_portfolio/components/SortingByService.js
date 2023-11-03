import PropTypes from 'prop-types';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
// icons
import inventoryManagement from '@iconify/icons-carbon/inventory-management';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Autocomplete, InputAdornment, TextField } from '@mui/material';

// components
import { SearchNotFound } from 'src/components';
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

SortingByService.propTypes = {
  filterLocation: PropTypes.string,
  onChangeLocation: PropTypes.func,
  arrOfServicesNames: PropTypes.array
};

export default function SortingByService({ arrOfServicesNames, filterLocation, onChangeLocation }) {
  return (
    <RootStyle>
      <Autocomplete
        autoHighlight
        options={arrOfServicesNames}
        getOptionLabel={(option) => option}
        value={filterLocation}
        onChange={(event, value) => onChangeLocation(value)}
        noOptionsText={<SearchNotFound keyword={filterLocation} />}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            placeholder="Сортировка по услугам"
            InputProps={{
              ...params.InputProps,
              autoComplete: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify
                    icon={inventoryManagement}
                    sx={{ width: 24, height: 24, color: 'text.disabled', flexShrink: 0, mr: 1 }}
                  />
                </InputAdornment>
              ),
            }}
          />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option, inputValue);
          const parts = parse(option, matches);
          return (
            <Box component="li" {...props}>
              {parts.map((part, index) => (
                <Box
                  key={index}
                  component="span"
                  sx={{
                    ...(part.highlight && {
                      fontWeight: 'fontWeightBold',
                    }),
                  }}
                >
                  {part.text}
                </Box>
              ))}
            </Box>
          );
        }}
      />
    </RootStyle>
  );
}
