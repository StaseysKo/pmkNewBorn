import { useState } from 'react';
import PropTypes from 'prop-types';
import { serialize } from 'next-mdx-remote/serialize';
import { m } from 'framer-motion';

// @mui
import { styled} from '@mui/material/styles';
import { Container, Grid, Box, Typography, Divider, Stack} from '@mui/material';

// icons
import calendarIcon from '@iconify/icons-carbon/calendar';
import userIcon from '@iconify/icons-carbon/user';
import locationIcon from '@iconify/icons-carbon/location';
import mobileIcon from '@iconify/icons-carbon/mobile';
import timeIcon from '@iconify/icons-carbon/time';
import translateIcon from '@iconify/icons-carbon/translate';

// routes
import Routes from 'src/routes';

// utils
import {
    getProjectData,
    getProjectPaths,
  } from 'src/utils/projectDataFront.js';

// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from 'src/config';

// layouts
import Layout from 'src/layouts';

// components
import { Page, Markdown, DetailsGallery, TextIconLabel, SideCardProject, CardTags, CustomBreadcrumbs } from '/src/components';
import { Iconify } from 'src/components/iconify';
import { MainFeedBackForm } from 'src/components/feedBackForms/mainFeedBackForm'

// sections
import { Testimonials } from 'src/sections/_portfolio/components'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

ProjectPage.propTypes = {

    project: PropTypes.shape({
        content: PropTypes.object,
        metadata: PropTypes.shape({
            projectName: PropTypes.string,
            mainProjectImg: PropTypes.string,
            galleryProjectImgs: PropTypes.array,
            firstChar: PropTypes.string, 
            secondChar: PropTypes.string,
            thirdChar: PropTypes.string,
            fourthChar: PropTypes.string,
            fifthChar: PropTypes.string,
            sixthChar: PropTypes.string,
            firstCharValue: PropTypes.string, 
            secondCharValue: PropTypes.string,
            thirdCharValue: PropTypes.string,
            fourthCharValue: PropTypes.string,
            fifthCharValue: PropTypes.string,
            sixthCharValue: PropTypes.string,
            customerTestimonial: PropTypes.string,
        })
    })

};

export default function ProjectPage({ project }) {

    const { metadata, content } = project;
    const {
        projectName,
        mainProjectImg,
        galleryProjectImgs,
        firstChar, secondChar, thirdChar, fourthChar, fifthChar, sixthChar,
        firstCharValue, secondCharValue, thirdCharValue, fourthCharValue, fifthCharValue, sixthCharValue,
        customerTestimonial,
    } = metadata;
    
    const characteristics = [ //
      {icon: calendarIcon, label: firstChar, text: firstCharValue},
      {icon: userIcon, label: secondChar, text: secondCharValue},
      {icon: locationIcon, label: thirdChar, text: thirdCharValue},
      {icon: mobileIcon, label: fourthChar, text: fourthCharValue},
      {icon: timeIcon, label: fifthChar, text: fifthCharValue},
      {icon: translateIcon, label: sixthChar, text: sixthCharValue},
    ]

  return (
    <Page
      title={`${projectName} | Чистоград ПМК`}
    >
      <RootStyle>
        <Container>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
          >
            <Typography 
              variant="h2" 
              component="h1"
              sx={{ 
                mt: 5,
                mb: 3
              }}
            >
              {projectName}
            </Typography>
            <Stack
              sx={{ 
                mt: 5,
                mb: 3
              }}
              direction="row" alignItems="center" flexShrink={0}
            >
            </Stack>
          </Stack>
          <CustomBreadcrumbs
            sx={{ mb: 3}}
            links={[
              { name: 'Главная', href: '/' },
              { name: 'Все проекты', href: '/portfolio' },
              { name: projectName },
            ]}
          />
          <DetailsGallery images={galleryProjectImgs}/>
          <Grid
            container
            spacing={{ md: 8 }}
            direction={{ md: 'row-reverse' }}
          >
            <Grid item xs={12} sm={12} md={5} lg={4}>
              <SideCardProject metadata={metadata} />
              <CardTags metadata={metadata}/>
            </Grid>

            <Grid item xs= {12} sm= {12} md= {7} lg= {8}>
              <Markdown content={content} />
              <Divider sx={{ borderStyle: 'dashed', my: 5 }} />
              <Typography variant="h3" paragraph 
                sx={{  
                  mt: { xs: 5, md: 3 },
                  mb: { xs: 5, md: 4 },
                }}
              >
                Технические характеристики
              </Typography>
              <Box
                sx={{
                  mb: 6,
                  display: 'grid',
                  rowGap: 5,
                  columnGap: 3,
                  gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                  },
                }}
              >
                {characteristics.map((char, i) =>
                  char.label && char.text ? (
                    <OverviewItem
                      key={i}
                      icon={<Iconify icon={char.icon} />}
                      label={char.label}
                      text={char.text}
                    />
                  ) : null
                )}
              </Box>
              <Divider sx={{ borderStyle: 'dashed', mt: 5 }} />
              {
                  !!customerTestimonial && <Testimonials metadata={metadata} />
              }
            </Grid>
          </Grid>
        </Container>
        <MainFeedBackForm sourcePage={`Форма отправлена со страницы проекта в портфолио: ${projectName}`}/>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

ProjectPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

// Функция getStaticProps используется для извлечения данных, необходимых для предварительной генерации страницы.
// Это функция Next.js и вызывается на этапе сборки на сервере.
export async function getStaticProps({ params }) {
    // Извлекаем данные для конкретной услуги, указанной в параметрах маршрута.
    const project = getProjectData(params.project);
  
    return {
      // Возвращаем props, которые будут переданы в компонент страницы.
      // В данном случае, мы передаем данные только для конкретной услуги.
      props: {
        project: {
          ...project,
          // Сериализуем содержимое Markdown, чтобы его можно было безопасно отобразить на странице.
          content: await serialize(project.content),
        },
      },
    };
  }
  
  
  
  // ----------------------------------------------------------------------
  
  // Функция getStaticPaths используется для указания, какие пути доступны для предварительной генерации.
  // Это функция Next.js и вызывается на этапе сборки на сервере.
  export async function getStaticPaths() {
    // Извлекаем все доступные пути (слаги) для услуг.
    const files = getProjectPaths();
  
    return {
      // Указываем, какие пути следует предварительно сгенерировать.
      // Здесь мы преобразуем массив слагов в формат, который Next.js ожидает.
      paths: files.map(file => ({
        params: { project: file.params.slug }
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