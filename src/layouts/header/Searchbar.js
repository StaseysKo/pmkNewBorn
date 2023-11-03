import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//icon
import searchIcon from '@iconify/icons-carbon/search';
import CloseIcon from '@mui/icons-material/Close';
// @mui
import { styled } from '@mui/material/styles';
import { Input, InputAdornment, ClickAwayListener, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Modal, Box, IconButton, Container } from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from 'src/config';
// components
import { ServiceCard, ProjectCard } from 'src/components';
import { Iconify } from 'src/components/iconify';
import { IconButtonAnimate } from 'src/components/animate';

// ----------------------------------------------------------------------
// Стили

const SearchbarStyle = styled('div')(({ theme }) => ({
    zIndex: 99,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: HEADER_MOBILE_HEIGHT,
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', 
    boxShadow: theme.customShadows.z8,
    backgroundColor: 'transparent', 
    border: 'solid 1px rgba(145, 158, 171, 0.12);',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2, 3, 2, 3), 
    [theme.breakpoints.up('md')]: {
      height: HEADER_DESKTOP_HEIGHT,
    },
  }));
  
  const SearchResultsModal = styled(Modal)(({ theme }) => ({
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const ModalBox = styled(Box)(({ theme }) => ({
    background: '#161c24',
    width: '100%', 
    height: '100%', 
    overflowY: 'scroll', 
    padding: theme.spacing(2),
    boxSizing: 'border-box',
  }));

// ----------------------------------------------------------------------
// Основной компонент

export default function Searchbar({ sx }) {

    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch('/api/services')
        .then(response => response.json())
        .then(data => setServices(data));
    }, []);

    const [projects, setProjects] = useState([]);

    useEffect(() => {
      fetch('/api/projects')
        .then(response => response.json())
        .then(data => setProjects(data));
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const searchInput = useRef(null);

  
    const [searchMode, setSearchMode] = useState('services');
  
    const handleSearchMode = (event, newMode) => {
      if (newMode !== null) {
        setSearchMode(newMode);
        setSearchTerm('');
        setSearchResults([]);
        setShowResults(false);
      }
    };

    const searchServices = (query) => {
      let matchedItems = [];
      services.forEach(serviceItem => {
        if(serviceItem.serviceName.toLowerCase().includes(query)) {
          matchedItems.push(serviceItem);
        }
        serviceItem.relatedServices.forEach(relatedService => {
          if(relatedService.toLowerCase().includes(query) && !matchedItems.includes(serviceItem)) {
            matchedItems.push(serviceItem);
          }
        });
      });
      return matchedItems;
    };

    const searchProjects = (query) => {
      let matchedItems = [];
      projects.forEach(projectItem => {
        ['projectName', 'serviceProvided', 'industryOfWork', 'adressOfTheObject'].forEach(field => {
          if(projectItem[field].toLowerCase().includes(query) && !matchedItems.includes(projectItem)) {
            matchedItems.push(projectItem);
          }
        });
      });
      return matchedItems;
    };

    const handleChange = (e) => {
      const value = e.target.value.toLowerCase();
      setSearchTerm(value);

      let newResults = [];
      
      if(value) {
        newResults = searchMode === 'services' ? searchServices(value) : searchProjects(value);
      }

      setSearchResults(newResults);
      setShowResults(newResults.length > 0);
    };

    const [isOpen, setOpen] = useState(false);
  
    const handleOpen = () => {
      setSearchTerm('');
      setSearchResults([]);
      setShowResults(true);
      setOpen((prev) => !prev);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <IconButtonAnimate color="inherit" onClick={handleOpen} sx={sx}>
          <Iconify icon={searchIcon} sx={{ width: 20, height: 20 }} />
        </IconButtonAnimate>
  
        <SearchResultsModal
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="search-results-modal-title"
          aria-describedby="search-results-modal-description"
        >
          <ModalBox>
            <Container
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
          <ToggleButtonGroup
            value={searchMode}
            exclusive
            onChange={handleSearchMode}
            centered="true"
            sx={{
              marginTop: '20px', 
              marginBottom: '20px',
            }}
          >
            <ToggleButton 
              value="services"
              aria-label="search services"
              sx={{
                padding: '10px', 
                fontSize: '13px', 
                minHeight: '30px', 
                minWidth: '100px',
                textTransform: 'none',
              }}
            >
              По услугам
            </ToggleButton>
            <ToggleButton 
              value="projects" 
              aria-label="search portfolio"
              sx={{
                padding: '10px', 
                fontSize: '13px', 
                minHeight: '30px', 
                minWidth: '100px',
                textTransform: 'none',
              }}
            >
              По проектам
            </ToggleButton>
          </ToggleButtonGroup>
            </Container>
            <Container>
              <SearchbarStyle>
                    <Input
                      ref={searchInput}
                      type="text"
                      value={searchTerm}
                      onChange={handleChange}
                      autoFocus
                      fullWidth
                      disableUnderline
                      placeholder={searchMode === 'services' ? "Поиск по услугам…" : "Поиск по проектам в портфолио…"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton onClick={handleClose}>
                            <CloseIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                      startAdornment={
                        <InputAdornment position="start">
                          <Iconify
                            icon={searchIcon}
                            sx={{ color: 'text.disabled', width: 20, height: 20 }}
                          />
                        </InputAdornment>
                      }
                      sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
                    />
              </SearchbarStyle>
            </Container>
            <Container>
                {showResults && (
                  <Box 
                    sx={{ 
                      display: 'grid', 
                      rowGap: { xs: 2, sm: 3, md: 4 },
                      columnGap: { xs: 2, sm: 3, md: 3 },
                      gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: searchMode === 'services' ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
                        lg: searchMode === 'services' ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)',
                      },
                      marginTop: '44px'
                    }}
                  >
                    {searchResults.length > 0 && searchTerm !== '' ? (
                      searchMode === 'services'
                        ? searchResults.map(result => <ServiceCard key={result.id} result={result} onClose={handleClose}/>)
                        : searchResults.map(result => <ProjectCard key={result.id} result={result} onClose={handleClose}/>)
                    ) : null}
                  </Box>
                )}
            </Container>
          </ModalBox>
        </SearchResultsModal>
      </div>
    </ClickAwayListener>
  );
}

// ----------------------------------------------------------------------
// PropTypes
  
Searchbar.propTypes = {
  sx: PropTypes.object,
};