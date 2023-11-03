// @mui
import { Grid, Container, Typography } from '@mui/material';

import { SupplyFeedBackForm, SupplyFormCard } from 'src/components/feedBackForms/supplyFeedBackForm'

// ----------------------------------------------------------------------



export default function SupplyFeedBackFormComponents() {
  return (
    <Container
        sx={{
            pb: { xs: 5, md: 8 },
        }}
    >
        <Typography
            variant="h2"
            sx={{
                mb: 8,
                textAlign: { xs: 'center', md: 'unset' },
            }}
        >
            Оставить предложение
        </Typography>

        <Grid
            container
            spacing={{ xs: 8, md: 3 }}
            justifyContent="space-between"
            direction={{ xs: 'column-reverse', md: 'row' }}
        >
            <Grid item xs={12} md={8} lg={8}>
                <SupplyFeedBackForm sourcePage={`Форма отправлена со страницы "Поставщикам"`}/>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
                <SupplyFormCard />
            </Grid>
        </Grid>
    </Container>
  );
}
