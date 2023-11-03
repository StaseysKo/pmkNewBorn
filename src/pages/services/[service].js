import PropTypes from 'prop-types';
import { serialize } from 'next-mdx-remote/serialize';

// mui
import { Container, Grid, Box, Stack, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

//icons
import checkmarkIcon from '@iconify/icons-carbon/checkmark';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

// layouts
import Layout from 'src/layouts';

// components
import { Page, Markdown, TextIconLabel, HowItWork, DetailsGallery, SideCardService, CustomBreadcrumbs } from 'src/components';
import { Iconify } from 'src/components/iconify';

import {SubmitApplicationForm} from 'src/components/feedBackForms/submitApplicationForm'

import {
    getServiceData,
    getServicePaths,
  } from 'src/utils/serviceDataFront.js';

import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, MARGIN_BOTTOM_DESKTOP } from 'src/config';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: HEADER_MOBILE_HEIGHT,
    marginBottom: MARGIN_BOTTOM_DESKTOP,
    [theme.breakpoints.up('md')]: {
      paddingTop: HEADER_DESKTOP_HEIGHT,
    },
  }));

  ServicePage.propTypes = {
    service: PropTypes.shape({
        content: PropTypes.object,
        metadata: PropTypes.shape({
            serviceName: PropTypes.string,
            galleryServiceImgs: PropTypes.array,
            typeOfMetal: PropTypes.string,
            productionTime: PropTypes.string,
            price: PropTypes.string,
            serviceBenefits: PropTypes.array,
        })
    })
};



export default function ServicePage({ service }) {

    const { metadata, content } = service;
    const { serviceName, serviceBenefits, galleryServiceImgs, typeOfMetal, productionTime, price, manager } = metadata;

    return (
        <Page
            title={`${serviceName} | Чистоград ПМК`}
        >
          <RootStyle>
            <Container sx={{ overflow: 'hidden' }}>

              <Typography 
                variant="h2" 
                component="h1"
                sx={{ 
                  mt: 5,
                  mb: 3
                }}
              >
                {serviceName}
              </Typography>

              <CustomBreadcrumbs
                sx={{ mb: 3}}
                links={[
                  { name: 'Главная', href: '/' },
                  { name: 'Все услуги', href: '/services' },
                  { name: serviceName },
                ]}
              />

              <DetailsGallery images={galleryServiceImgs}/>

              <Grid
                container
                spacing={{ md: 8 }}
                direction={{ md: 'row-reverse' }}
                sx={{
                  pb: { xs: 10, md: 10 },
                }}
              >
                <Grid item xs={12} sm={12} md={5} lg={4}>
                  <SideCardService serviceName={serviceName} metadata={metadata} />
                </Grid>

                <Grid item xs= {12} sm= {12} md= {7} lg= {8}>
                  <Markdown content={content} />

                  <Divider sx={{ borderStyle: 'dashed', my: 5 }} />
                  
                  <section>
                      <Typography variant="h3" paragraph 
                        sx={{  
                          mt: { xs: 5, md: 3 },
                          mb: { xs: 5, md: 4 },
                        }}
                      >
                        Общие характеристики
                      </Typography>
                      <Box
                        sx={{
                          mb: '40px',
                          display: 'grid',
                          rowGap: 5,
                          columnGap: 3,
                          gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(1, 1fr)',
                            md: 'repeat(2, 1fr)',
                            lg: 'repeat(3, 1fr)',
                          },
                        }}
                      >
                        <OverviewItem
                          icon={<PaymentsOutlinedIcon />}
                          label="Стоимость"
                          text={price}
                        />
                        <OverviewItem
                          icon={<AccessTimeOutlinedIcon />}
                          label="Срок изготовления"
                          text={productionTime}
                        />
                        <OverviewItem
                          icon={<SettingsOutlinedIcon />}
                          label="Вид металла"
                          text={typeOfMetal}
                        />
                      </Box>
                  </section>
                  <Divider sx={{ borderStyle: 'dashed', my: 5 }} />
                  <Typography variant="h3" paragraph 
                    sx={{  
                      mt: { xs: 5, md: 3 },
                      mb: { xs: 5, md: 4 },
                    }}
                  >
                    Преимущества
                  </Typography>
                  <section>
                    <Box
                      sx={{
                        display: 'grid',
                        rowGap: {xs: 5, sx: 5, md: 3, lg: 3 },
                        columnGap: 3,
                        gridTemplateColumns: {
                          xs: 'repeat(1, 1fr)',
                          sm: 'repeat(2, 1fr)',
                        },
                      }}
                    >
                      {serviceBenefits.map((option) => (
                        <TextIconLabel
                          key={option.label}
                          icon={
                            <Iconify
                              icon={checkmarkIcon}
                              sx={{
                                mr: 2,
                                width: 20,
                                height: 20,
                                color: 'primary.main',
                                ...(!option.enabled && { color: 'currentColor' }),
                              }}
                            />
                          }
                          value={option.label}
                          sx={{
                            fontSize: '1rem',
                            ...(!option.enabled && { color: 'text.disabled' }),
                          }}
                        />
                      ))}
                    </Box>
                  </section>
                </Grid>
                
              </Grid>
              <Grid item xs={12} md={12}>
                  <HowItWork />
              </Grid>
            </Container>

            <Divider sx={{ my: 10 }} />

            <div id="submit-application">
              <Stack spacing={2} sx={{ mt: 5, mb: 5, textAlign: 'center' }}>
                  <Typography variant="h2">Заявка на сотрудничество</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    Рассмотрим вашу заявку и ответим в течение 1 рабочего дня
                  </Typography>
              </Stack>
            </div>
            <SubmitApplicationForm sourcePage={`Форма отправлена со страницы услуги: ${serviceName}`} manager={manager} />
          </RootStyle>
        </Page>
      );
    }

// ----------------------------------------------------------------------

ServicePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

// Функция getStaticProps используется для извлечения данных, необходимых для предварительной генерации страницы.
// Это функция Next.js и вызывается на этапе сборки на сервере.
export async function getStaticProps({ params }) {
  // Извлекаем данные для конкретной услуги, указанной в параметрах маршрута.
  const service = getServiceData(params.service);

  return {
    // Возвращаем props, которые будут переданы в компонент страницы.
    // В данном случае, мы передаем данные только для конкретной услуги.
    props: {
      service: {
        ...service,
        // Сериализуем содержимое Markdown, чтобы его можно было безопасно отобразить на странице.
        content: await serialize(service.content),
      },
    },
  };
}



// ----------------------------------------------------------------------

// Функция getStaticPaths используется для указания, какие пути доступны для предварительной генерации.
// Это функция Next.js и вызывается на этапе сборки на сервере.
export async function getStaticPaths() {
  // Извлекаем все доступные пути (слаги) для услуг.
  const files = getServicePaths();

  return {
    // Указываем, какие пути следует предварительно сгенерировать.
    // Здесь мы преобразуем массив слагов в формат, который Next.js ожидает.
    paths: files.map(file => ({
      params: { service: file.params.slug }
    })),
    // Указываем, что отсутствующие пути не должны использовать fallback-страницу.
    fallback: false,
  };
}

  
// ----------------------------------------------------------------------




OverviewItem.propTypes = {
  icon: PropTypes.any,
  label: PropTypes.string,
  text: PropTypes.string,
};

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <TextIconLabel
      spacing={1.5}
      alignItems="flex-start"
      icon={icon}
      value={
        <Stack spacing={0.5}>
          <Typography variant="body2">{label}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{text}</Typography>
        </Stack>
      }
      sx={{ '& svg': { width: 24, height: 24 } }}
    />
  );
}
