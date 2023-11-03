import { Page } from 'src/components'

import Layout from 'src/layouts';

// @mui
import { Grid, Stack, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, MARGIN_BOTTOM_DESKTOP } from 'src/config';
// sections
import { SubmitApplicationForm } from 'src/components/feedBackForms/submitApplicationForm'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  marginBottom: MARGIN_BOTTOM_DESKTOP,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function SubmitApplicationView() {
  return (
    <Page title='Оставить заявку | Чистоград ПМК'>
      <RootStyle>
          <Stack spacing={2} sx={{ mt: 5, mb: 5, textAlign: 'center' }}>
              <Typography variant="h2">Свяжитесь с нами</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Рассмотрим вашу заявку и ответим в течение 1 рабочего дня
              </Typography>
          </Stack>
          <SubmitApplicationForm sourcePage=" Форма отправлена со страницы: 'Оставить заявку или /submit-application' "/>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------
SubmitApplicationView.getLayout = function getLayout(page) {
  return <Layout transparentHeader>{page}</Layout>;
}