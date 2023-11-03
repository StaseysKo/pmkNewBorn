import PropTypes from 'prop-types';
// @mui
import { Box } from '@mui/material';
// components
import {CareerJobItem} from './'

// ----------------------------------------------------------------------

CareerJobList.propTypes = {
  jobs: PropTypes.array.isRequired,
};

export default function CareerJobList({ jobs }) {

  return (
    <>
      <Box
        sx={{
          pt: { xs: 10, md: '64px' },
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          columnGap: 4,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
        }}
      >
        {jobs.map((job, index) => <CareerJobItem key={index} job={job} />)}
      </Box>
    </>
  );
}
