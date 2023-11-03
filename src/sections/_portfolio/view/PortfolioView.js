import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Stack, Box, Typography, Grid, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import industries from '_data/industries.js'

import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, MARGIN_BOTTOM_DESKTOP } from 'src/config';

import { SearchByPortfolio, SortingByService, SortedByIndustries } from '../components';
import { ProjectCard } from 'src/components';



// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  marginBottom: MARGIN_BOTTOM_DESKTOP,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function PortfolioView() {

  const router = useRouter();

  const [searchText, setSearchText] = useState('');
  
  const [shownCards, setShownCards] = useState(6);

  const [filters, setFilters] = useState({
    filterCategories: router.query.category || null,
    filterLocation: null,
  });

  //получаем массив всех проектов
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('/api/projects')
      .then(response => {
        if (!response.ok) {
          throw new Error('Обнаружена ошибка сети');
        }
        return response.json();
      })
      .then(data => setProjects(data))
      .catch(error => {
        console.error('Обнаружена ошибка:', error.message);
      });
  }, []);

  //получаю массив всех услуг (временная мера, нет смысла запрашивать все услуги ради одного свойства)
  const [services, setServices] = useState([]);
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

  //получаем массив только из названий услуг, для того чтобы использовать в выпадающем списке фильтра по услугам
  const arrOfServicesNames = services.map((el) => {
    return el.serviceName
  })

  //получаем массив только из названий отраслей, для того чтобы использовать в выпадающем списке фильтра по отраслям
  const arrOfIndustriesNames = industries.map(el => el.name)

  useEffect(() => {
    Promise.all([
      fetch('/api/projects').then(res => res.json()),
      fetch('/api/services').then(res => res.json())
    ])
    .then(([projectsData, servicesData]) => {
      setProjects(projectsData);
      setServices(servicesData);
      const arrOfServicesNames = servicesData.map((el) => el.serviceName);
      const arrOfIndustriesNames = industries.map(el => el.name);
      const categoryFromUrl = router.query.category;
  
      // Теперь, когда у вас есть все данные, вы можете обновить фильтры
      if (categoryFromUrl) {
        if (arrOfServicesNames.includes(categoryFromUrl)) {
          setFilters(prevFilters => ({ ...prevFilters, filterLocation: categoryFromUrl }));
        }
        if (arrOfIndustriesNames.includes(categoryFromUrl)) {
          setFilters(prevFilters => ({ ...prevFilters, filterCategories: categoryFromUrl }));
        }
      }
    })
    .catch(error => {
      console.error('Обнаружена ошибка:', error.message);
    });
  }, [router.isReady]);

  const handleFilterChange = (type, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [type]: value }));
  };

  const filteredProjectArray = projects.filter((project) => (
    (!filters.filterCategories || filters.filterCategories === project.industryOfWork) &&
    (!filters.filterLocation || filters.filterLocation === project.serviceProvided) &&
    (searchText === '' || project.projectName.toLowerCase().includes(searchText.toLowerCase()))
  ));

 
  return (
    <RootStyle>
      <Container>
        <Box sx={{ pt: 5, pb: 16 }}>
          <Stack pb={5} spacing={3} direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }} alignItems="center">
          
            <SearchByPortfolio
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <SortingByService
              arrOfServicesNames={arrOfServicesNames}
              filterLocation={filters.filterLocation}
              onChangeLocation={(value) => handleFilterChange('filterLocation', value)}
            />
            <SortedByIndustries
              arrOfIndustriesNames={arrOfIndustriesNames}
              filterCategories={filters.filterCategories}
              onChangeCategory={(value) => handleFilterChange('filterCategories', value)}
            />
          </Stack>

          <Box
            sx={{
              display: "grid",
              rowGap: { xs: 4, md: 5 },
              columnGap: 3,
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
            }}
          >
            {filteredProjectArray.length === 0 ? (
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                direction="column"
                sx={{ gridColumn: '1 / -1' }}
              >
                <Typography variant="h6" mt={2}>Ничего не найдено</Typography>
              </Grid>
            ) : (
              filteredProjectArray.slice(0, shownCards).map((result) => (
                <ProjectCard key={result.id} result={result} />
              ))
            )}
          </Box>

          {shownCards < filteredProjectArray.length && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
              <Button size="large" variant="outlined" onClick={() => setShownCards(filteredProjectArray.length)}>Показать все</Button>
            </Box>
          )}
        </Box>
      </Container>
    </RootStyle>
  );
}
