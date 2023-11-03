import PropTypes from 'prop-types';
// icons
import locationIcon from '@iconify/icons-carbon/location';
import timeIcon from '@iconify/icons-carbon/time';
import increaseLevel from '@iconify/icons-carbon/increase-level';
import moneyIcon from '@iconify/icons-carbon/money';
// next
import NextLink from 'next/link';
// @mui
import { Divider, Stack, Card, Typography, Grid } from '@mui/material';
// routes
import Routes from 'src/routes';
// components
import {
  TextIconLabel,
} from 'src/components';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------


CareerJobItem.propTypes = {
  job: PropTypes.object.isRequired,
};

export default function CareerJobItem({ job }) {
  const { jobTitle, placeOfWork, workAddress, requiredExperience, employment, salary, jobLink } = job

  return (
    <Card
      sx={{
        backgroundColor: '#252c35',
        boxShadow: (theme) => theme.customShadows.z8,
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >

      <Stack sx={{ p: 3, pb: 0 }}>

        <Stack spacing={0.5} sx={{ mt: 1, mb: 2 }}>
          <NextLink as={Routes.career.job(jobLink)} href={Routes.career.job(jobLink)} passHref>
            <Typography variant="h6" line={1}>
              {jobTitle}
            </Typography>
          </NextLink>

          <Typography variant="body3" sx={{ color: 'secondary.main' }}>
            {placeOfWork}
          </Typography>

          <TextIconLabel
            icon={<Iconify icon={locationIcon} sx={{ mr: 0.5, width: 18, height: 18 }} />}
            value={workAddress}
            sx={{ typography: 'body3', color: 'text.secondary' }}
          />
        </Stack>

      </Stack>

      <Divider sx={{ borderStyle: 'dashed', my: 2 }} />

      <Grid
        container
        spacing={1.5}
        sx={{
          p: 3,
          pt: 0,
          typography: 'body3',
          color: 'text.secondary',
          textTransform: 'capitalize',
        }}
      >
        <Grid item xs={6}>
          <TextIconLabel
            sx={{ textTransform: 'none' }}
            icon={<Iconify icon={increaseLevel} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={requiredExperience}
          />
        </Grid>

        <Grid item xs={6}>
          <TextIconLabel
            icon={<Iconify icon={timeIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={employment}
          />
        </Grid>

        <Grid item xs={6}>
          <TextIconLabel
            icon={<Iconify icon={moneyIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={salary}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
