import PropTypes from 'prop-types';
import NextLink from 'next/link';
import chevronRight from '@iconify/icons-carbon/chevron-right';

// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Box, Button, Divider } from '@mui/material';
// hooks
import cssStyles from 'src/utils/cssStyles';
import useResponsive from 'src/hooks/useResponsive';
import Routes from 'src/routes';
// components
import { Image, BgOverlay, Typewriter } from 'src/components';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
    ...cssStyles(theme).bgImage(),
    overflow: 'hidden',
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      minHeight: '80vh',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: theme.spacing(15),
    },
  }));

HomeHeaderSection.propTypes = {
    services: PropTypes.array.isRequired,
  };

export default function HomeHeaderSection({services}) {
    return (
      <RootStyle>
        <Container>
          <Grid
            container
            spacing={{ xs: 8, md: 3 }}
            alignItems={{ md: 'center' }}
            justifyContent={{ md: 'space-between' }}
          >
    
              <Grid item xs={12} md={6} lg={6}>
                <Stack
                  spacing={5}
                  sx={{
                    textAlign: { xs: 'center', md: 'unset' },
                  }}
                >
    
    
                  <Stack spacing={3}>
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      lineHeight: 1.1,
                      color: 'common.white',
                      '@media (min-width: 1200px)' : {
                          fontSize: '4.7rem !important'
                      },
                      '@media (min-width: 1500px)': {
                          fontSize: '5.5rem !important',
                      }
                  }}
                  >
                      Производство{' '}
                      <Box component="span" sx={{ color: 'primary.main' }}>
                        <Typewriter /><br/>
                      </Box>
                      из металла
                    </Typography>

                    <Typography 
                      sx={{ 
                        color: 'grey.500',
                        '@media (min-width: 1500px)': {
                          fontSize: '1.1rem !important',
                        }
                      }}>
                      Проектируем и производим металлоконструкции {<br/>} любой сложности в Калининграде и области.
                    </Typography>
                  </Stack>
    
    
                  <Stack spacing={3} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
                      <NextLink href='/submit-application' passHref>
                        <Button
                          size="large"
                          variant="contained"
                        >
                          Оставить заявку
                        </Button>
                      </NextLink>
                      <NextLink href='/services' passHref>
                        <Button
                          size="large"
                          variant="outlined"
                          endIcon={<Iconify icon={chevronRight} />}
                        >
                          Все услуги
                        </Button>
                      </NextLink>
                    </Stack>
                    <Advantages />
                  </Stack>
              </Grid>
            
              <Grid item xs={12} md={6} lg={6} sx={{ display: { xs: 'none', md: 'block' }}}>
                <Grid container spacing={{ xs: 4, md: 3 }}>
                  {services?.map((service, index) => (
                    <Grid
                      key={service.serviceLink}
                      item
                      xs={12}
                      sm={6}
                    >
                      <ServiceCardMain service={service} order={index} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>

            </Grid>
          </Container>
        </RootStyle>
      );
}

// ----------------------------------------------------------------------

ServiceCardMain.propTypes = {
    order: PropTypes.number,
    service: PropTypes.shape({
      mainServiceImg: PropTypes.string,
      serviceName: PropTypes.string,
      serviceLink: PropTypes.string,
    }),
  };
  
  function ServiceCardMain({ service, order }) {
    const isDesktop = useResponsive('up', 'md');
  
    const { serviceName, mainServiceImg, serviceLink } = service;
  
    return (
      <Box
        sx={{
          width: 1,
          borderRadius: 2,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <BgOverlay
          sx={{
            opacity: 0,
            transition: (theme) =>
              theme.transitions.create('opacity', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.short,
              }),
            '&:hover': { opacity: 1 },
          }}
        >
          <Box
            sx={{
              width: 1,
              zIndex: 9,
              bottom: 24,
              display: 'flex',
              position: 'absolute',
              justifyContent: 'center',
            }}
          >
            <NextLink
              as={Routes.services.service(serviceLink)}
              href={Routes.services.service(serviceLink)}
              passHref
            >
              <Button sx={{textTransform:'none'}} size="small">{serviceName}</Button>
            </NextLink>
          </Box>
        </BgOverlay>
        <Image
          alt={serviceName}
          src={mainServiceImg}
          ratio={ '1/1'}
        />
        
      </Box>
    );
  }
  
  const DividerStyle = <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />;
  
  function Advantages() {
    return (
      <Stack
        spacing={3}
        direction={{ xs: 'column', md: 'row' }}
        divider={DividerStyle}
        sx={{ pt: { md: 3 } }}
      >
        <Stack spacing={{ md: 3 }} direction="row" divider={DividerStyle}>
          {Advantage(13, 'Лет опыта')}
          {Advantage(2000, 'Проектов')}
          {Advantage(149, 'Сотрудников')}
          {Advantage(3, 'Цеха')}
        </Stack>
      </Stack>
    );
  }
  
  function Advantage(total, label) {
    return (
      <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
        <Typography variant="h4">{(total)}</Typography>
        <Typography variant="body2" sx={{ opacity: 0.48 }}>
          {label}
        </Typography>
      </Stack>
    );
  }