import PropTypes from 'prop-types';
// icons
import calendarIcon from '@iconify/icons-carbon/calendar';
import moneyIcon from '@iconify/icons-carbon/money';
import increaseLevel from '@iconify/icons-carbon/increase-level';
// @mui
import { Stack, Typography, Card } from '@mui/material';
// components
import { TextIconLabel } from 'src/components';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

VacancyPageCard.propTypes = {
    metadata: PropTypes.shape({
        requiredExperience: PropTypes.string,
        salary: PropTypes.string,
        employment: PropTypes.string,
    })
};


export default function VacancyPageCard({ metadata }) {
    const {requiredExperience, employment,  salary} = metadata;

  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={2}>
        <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={moneyIcon} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Зарплата в месяц </Typography>
              <Typography 
                variant="body2" 
                sx={{ color: 'text.secondary' }}
              >
                {salary}
              </Typography>
            </Stack>
          }
        />
        <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={calendarIcon} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Занятость </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {employment}
              </Typography>
            </Stack>
          }
        />

        <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={increaseLevel} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Опыт </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {requiredExperience}
              </Typography>
            </Stack>
          }
        />

      </Stack>
    </Card>
  );
}
