import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
// components
import {AdvantageCard} from './';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(),
  [theme.breakpoints.up('xs')]: {
    marginTop: theme.spacing(5),
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(8),
  },
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(8),
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(10),
  },
}));


// ----------------------------------------------------------------------

AboutUsAdvantages.propTypes = {
  advantages: PropTypes.array,
};

export default function AboutUsAdvantages({ advantages }) {
  return (
    <RootStyle>
      <Container>
        <Box
          sx={{
            display: 'grid',
            gap: {xs: 1, sm: 1, md: 2, lg: 3},
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {advantages.map((advantage) => (
            <AdvantageCard key={advantage.advId} advantage={advantage} />
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
