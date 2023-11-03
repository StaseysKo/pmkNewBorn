import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from 'src/config';
// hooks
import { useRequest } from 'src/hooks';
// layouts
import Layout from 'src/layouts';
// components
import { Page } from 'src/components';
// sections
import { CareerJobList } from 'src/sections/_career/components';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------



export default function CareerView() {

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('/api/jobs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Обнаружена ошибка сети');
        }
        return response.json();
      })
      .then(data => setJobs(data))
      .catch(error => {
        console.error('Обнаружена ошибка:', error.message);
      });
  }, []);

  return (
    <Page title="Вакансии Чистоград ПМК">
      <RootStyle>
        <Container
            sx={{
                pb: { xs: 0, md: '64px' },
            }}
        >
          <Grid
            sx={{
              pt: { xs: 8, md: 10 },
              pb: { xs: 0, md: 0 },
            }}
          >
            <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
              <Typography variant="h1">
                Актуальные вакансии
              </Typography>
            </Grid>
          </Grid>
          <CareerJobList jobs={jobs} />
        </Container>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

CareerView.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};


// ----------------------------------------------------------------------

