import { useState, useEffect } from 'react';

import { Box, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ServicesFilter } from '../components';
import { ServiceCard } from 'src/components';

import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, MARGIN_BOTTOM_DESKTOP } from 'src/config';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  marginBottom: MARGIN_BOTTOM_DESKTOP,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function ServicesView() {

  const [services, setServices] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('/api/services')
      .then(response => {
        if (!response.ok) {
          throw new Error('Обнаружена ошибка сети');
        }
        return response.json();
      })
      .then(data => setServices(data))
      .catch(error => {
        console.error('Обнаружена ошибка:', error.message);
      });
  }, []);

  const filterServices = (services, searchText) => {
    return services.filter((service) => {
      return (
        searchText === '' ||
        service.serviceName.toLowerCase().includes(searchText.toLowerCase()) ||
        service.relatedServices.some((subService) =>
          subService.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    });
  };

  const handleChangeSearchText = (searchText) => {
    setSearchText(searchText);
  };

  const filteredServiceArray = filterServices(services, searchText);

  return (
    <RootStyle>
      <Container>
        <Stack pt={5} pb={5} spacing={3} direction={{ xs: 'column', md: 'row' }} alignItems="center">
          <ServicesFilter
            onFilterChange={handleChangeSearchText}
          />
        </Stack>
        <Box
          sx={{
            display: 'grid',
            rowGap: { xs: 4, md: 5 },
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
          }}
        >
          {filteredServiceArray.map((result) => (
            <ServiceCard key={result.id || result.serviceName} result={result} />
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}

