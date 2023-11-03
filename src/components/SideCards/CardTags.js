import Link from 'next/link';

import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Chip, Stack } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  marginTop: 40,
  border:' solid 1px rgba(145, 158, 171, 0.24)'
}));


// ----------------------------------------------------------------------

CardTags.propTypes = {
  metadata: PropTypes.shape({
    categories: PropTypes.array,
  }),
};

export default function CardTags({ metadata }) {
  const { categories } = metadata;

  return (
    <RootStyle>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Категории
      </Typography>
      <Stack direction="row" flexWrap="wrap">
        {categories.map((catagorie) => (
          <Link
            key={catagorie}
            href={`/portfolio?category=${encodeURIComponent(catagorie)}`}
            passHref
            target="_blank" 
            rel="noopener noreferrer" 
          >
            <Chip
              label={catagorie}
              clickable
              sx={{ m: 0.5 }}
            />
          </Link>
        ))}
      </Stack>
    </RootStyle>
  );
}


