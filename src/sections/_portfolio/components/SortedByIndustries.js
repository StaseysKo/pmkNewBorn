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
import roundBusiness from '@iconify/icons-ic/round-business';

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

SortedByIndustries.propTypes = {
  arrOfIndustriesNames: PropTypes.array,
  filterCategories: PropTypes.string,
  onChangeCategory: PropTypes.func,
};

export default function SortedByIndustries({ arrOfIndustriesNames, filterCategories, onChangeCategory }) {
  return (
    <RootStyle>
      <Autocomplete
        autoHighlight
        options={arrOfIndustriesNames}
        getOptionLabel={(option) => option}
        value={filterCategories}
        onChange={(event, value) => onChangeCategory(value)}
        noOptionsText={<SearchNotFound keyword={filterCategories} />}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            placeholder="Сортировка по отраслям"
            InputProps={{
              ...params.InputProps,
              autoComplete: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify
                    icon={roundBusiness}
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
