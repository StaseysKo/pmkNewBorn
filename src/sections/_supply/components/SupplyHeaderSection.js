// @mui
import { styled, alpha } from '@mui/material/styles';

import { Stack, Button, Container, Typography, Grid } from '@mui/material';
// components
import { Iconify } from 'src/components/iconify';

import { bgGradient } from 'src/utils/cssStyles';

import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from 'src/config';

import Layout from 'src/layouts';

// ----------------------------------------------------------------------


const RootStyle = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: 'images/backgrounds/background_1.jpg',
  }),
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

const handleAnchorLinkClick = (e) => {
  const href = e.currentTarget.getAttribute('href');
  if (href.startsWith('#')) {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - HEADER_DESKTOP_HEIGHT;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  }
};

export default function SupplyHeaderSection() {
  return (
    <RootStyle>
      <Container>
        <Grid 
          columnSpacing={3} 
          alignItems="center"
          sx={{
            py: { xs: 8, md: 10 },
          }}
        >
            <Grid item xs={12} md={12}>
              <Stack
                spacing={5}
                justifyContent="center"
                alignItems={{ xs: 'center', md: 'flex-start' }}
                sx={{

                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <Typography variant="h1">
                  Уважаемые партнеры
                </Typography>

                <Typography sx={{ lineHeight: 1.95, color: 'text.secondary' }}>
                  Наша компания придает большое значение эффективной закупке материалов. Результатом этого является долгосрочная система взаимоотношений с&nbsp;нашими поставщиками. Приглашаем к&nbsp;плодотворному сотрудничеству компании, работающие в&nbsp;следующих направлениях: нержавеющая сталь, черный металлопрокат, оцинкованная сталь.
                </Typography>

                <Button
                  href="#become-a-supplier"
                  onClick={handleAnchorLinkClick}
                  color="inherit"
                  size="large"
                  variant="contained"
                  endIcon={<Iconify icon="carbon:launch" />}
                  rel="noopener"
                  sx={{
                    textTransform: 'none',
                  }}

                >
                  Стать поставщиком
                </Button>
              </Stack>
            </Grid>
          </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

SupplyHeaderSection.getLayout = function getLayout(page) {
  return <Layout transparent>{page}</Layout>;
};