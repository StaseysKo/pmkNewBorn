import NextLink from 'next/link';
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Container, Box, Button } from '@mui/material';
// components
import { SvgIconStyle } from 'src/components';
import { Iconify } from 'src/components/iconify';

import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(),
  [theme.breakpoints.up('xs')]: {
    marginTop: theme.spacing(5),
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(8),
  },
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(8),
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(15),
  },
}));


// ----------------------------------------------------------------------

AboutUsPartners.propTypes = {
  partners: PropTypes.array.isRequired,
};

export default function AboutUsPartners({ partners }) {
  return (
    <RootStyle>
      <Container>
        <Stack
            direction="row"
            alignItems="center"
            justifyContent={{ xs: 'center', md: 'space-between' }}
            sx={{
              mb: { xs: 8, md: 8 },
            }}
          >
            <Typography variant="h2">Наши партнеры</Typography>

            <NextLink href='/supply' passHref>
              <Button
                endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
                sx={{ display: { xs: 'none', md: 'inline-flex' } }}
              >
                Поставщикам
              </Button>
           </NextLink>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            rowGap: { xs: 4, md: 5 },
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {partners.map((partner) => (
            <SvgIconStyle
              key={partner.id}
              src={partner.image}
              sx={{
                width: 106,
                height: 32,
                color: 'grey.50080',
                mr: { xs: 'auto' },
                ml: { xs: 'auto', md: 'unset' },
              }}
            />
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
