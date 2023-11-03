import React from 'react';
import PropTypes from 'prop-types';

import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import {GratefulCardImg} from './';


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
    marginTop: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

GratefulImg.propTypes = {
  gratefulCompanies: PropTypes.array.isRequired,
};


export default function GratefulImg({gratefulCompanies}) {
  return (
    <RootStyle>
      <Container>
          <Typography
              variant="h2"
              sx={{
                mb: 8,
                textAlign: { xs: 'center', md: 'unset' },
              }}
          >
            Благодарности
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gap: { xs: 4, sm: 4, md: 2, lg: 3 },
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
            }}
          >
            {gratefulCompanies.map((gratefulCompany) => (
              <GratefulCardImg key={gratefulCompany.id} gratefulCompany={gratefulCompany} />
            ))}
          </Box>
      </Container>
    </RootStyle>
  );
}
