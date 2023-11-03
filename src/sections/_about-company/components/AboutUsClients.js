// @mui
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Container, Stack, Typography, Button } from '@mui/material';
// components
import { SvgColor, Carousel } from 'src/components';
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


AboutUsClients.propTypes = {
  clients: PropTypes.array,
};

export default function AboutUsClients({ clients }) {
  const theme = useTheme();

  const carouselSettings = {
    speed: 12000,
    arrows: false,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    cssEase: 'linear',
    autoplaySpeed: 0,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  };

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
              <Typography variant="h2">Наши клиенты</Typography>

              <NextLink href='/portfolio' passHref>
                <Button
                  endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
                  sx={{ display: { xs: 'none', md: 'inline-flex' } }}
                >
                  Портфолио
                </Button>
            </NextLink>
          </Stack>
        <Carousel {...carouselSettings}>
          {clients.map((client) => (
            <SvgColor
              key={client.id}
              src={client.image}
              sx={{ width: 106, height: 32, color: 'grey.500', opacity: 0.8 }}
            />
          ))}
        </Carousel>
      </Container>
    </RootStyle>
  );
}

