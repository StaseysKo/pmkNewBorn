import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { useState } from 'react';
import NextLink from 'next/link';
// icons
import chevronDown from '@iconify/icons-carbon/chevron-down';
import chevronRight from '@iconify/icons-carbon/chevron-right';
// @mui
import { styled } from '@mui/material/styles';

import {
  Box,
  Grid,
  Link,
  Stack,
  Divider,
  Collapse,
  Container,
  Typography,List, ListItem, ListItemText
} from '@mui/material';
// hooks
import { useResponsive } from 'src/hooks';
// components
import { Logo, SocialNetworksButton } from 'src/components';
import { Iconify } from 'src/components/iconify';
//
import { PageLinks } from '../nav/NavConfig';

import { HEADER_DESKTOP_HEIGHT } from 'src/config'

const ForwardedLink = React.forwardRef((props, ref) => (
  <Link ref={ref} rel="noopener" {...props} />
));


const handleAnchorLinkClick = (e) => {
  const href = e.currentTarget.getAttribute('href');
  if (href && href.includes('#')) {
    e.preventDefault();
    const [path, hash] = href.split('#');

    // Navigate to the new page
    Router.push(path).then(() => {
      if (window) {
        const element = document.getElementById(hash);
        if (element) {
          const topOffset = element.getBoundingClientRect().top + window.pageYOffset - HEADER_DESKTOP_HEIGHT;
          window.scrollTo({
            top: topOffset,
            behavior: 'smooth',
          });
        }
      }
    });
  }
};


const LinkStyle = styled('div')(({ theme }) => ({
  ...theme.typography.body3,
  marginTop: theme.spacing(1),
  color: theme.palette.text.secondary,
  whiteSpace: 'nowrap',
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));


Footer.displayName = 'Footer';
DesktopFooter.displayName = 'DesktopFooter';
MobileFooter.displayName = 'MobileFooter';

export default function Footer() {
    
    const isDesktop = useResponsive('up', 'md');

    const lists = PageLinks.filter((list) => list.subheader !== 'Coming Soon');
  
    const renderLists = isDesktop
    ? lists
    : lists.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  return (
    <>
        <Divider />

        <Container sx={{ py: { xs: 8, md: 10} }}>
          <Grid container>
            {/* КОНТАКТНЫЙ БЛОК */}
            <Grid item xs={12} md={5}>
                <Stack spacing={{ xs: 3, md: 5 }}>
                <Stack alignItems="flex-start" spacing={3}>
                    <Logo isSimple/>
                    <Typography variant="body3" sx={{ maxWidth: '400px', color: 'text.secondary' }}>
                        Проектируем и производим высококачественные промышленные металлоконструкции и металлоизделия <br></br>для широкого спектра сфер жизнедеятельности
                    </Typography>
                </Stack>

                <Stack spacing={2}>
                    <Typography variant="h6">Контакты</Typography>
                    <LinkStyle href="tel:+79097924715">+7 (909) 792-47-15</LinkStyle>
                    <LinkStyle href="mailto:pmk@chistograd39.com">hello@chistograd-pmk.ru</LinkStyle>
                    <SocialNetworksButton />
                </Stack>

                <Stack spacing={2}>
                    <Stack spacing={1}>
                    <Typography variant="h6">Режим работы</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Пн-Пт с 08:00 до 18:00
                    </Typography>
                    </Stack>
                </Stack>
                </Stack>
            </Grid>

            {/* ДИНАМИЧНЫЙ БЛОК: ДЕСКСТОП ИЛИ МОБИЛЬНЫЙ*/}

            {isDesktop ? (
                // ДЕСКСТОП
                <DesktopFooter lists={lists} />
            ) : (
                // МОБИЛЬНЫЙ
                <Stack sx={{pt: '24px'}} spacing={1.5}>
                    {renderLists.map((list, index) => (
                    <MobileFooter key={index} list={list} />
                    ))}
                </Stack>
            )}
            
          </Grid>
        </Container>

        <Divider />

        {/* СОГЛАСИЕ НА ОБРАБОТКУ */}
        <Container>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2.5}
                justifyContent="space-between"
                sx={{ py: 3, textAlign: 'center' }}
            >
                <Typography variant="body3" sx={{ color: 'text.secondary' }}>
                © 2023. Все права защищены
                </Typography>
                <Stack direction="row" spacing={3} justifyContent="center">

                <NextLink href='/privacy-policy'>
                  <Typography variant="body3" sx={{ color: 'text.secondary' }}>
                    Положение об обработке и защите персональных данных
                  </Typography>
                </NextLink>
    
                </Stack>
            </Stack>
        </Container>

    </>
  );
}

//------------------------------------------------------------------------------------------------


function DesktopFooter ({ lists }) {
    return (
        <>
            {/* Услуги */}
            <Grid item xs={12} md={5}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h6">Услуги</Typography>
                      <List>
                      {lists.find(list => list.subheader === 'Услуги')?.items.map((item, index) => (
                          <ListItem sx={{pt: '4px', pl: '0px', pb: '0px'}} key={index}>
                              <ListItemText>
                                <NextLink href={item.path} passHref>
                                  <LinkStyle onClick={handleAnchorLinkClick}>
                                        {item.title}
                                    </LinkStyle>
                                </NextLink>
                              </ListItemText>
                          </ListItem> 
                      ))}
                      </List>
                </div>
            </Grid>
  
            {/* О компании и поддержка */}
            <Grid item xs={12} md={2}>
              <Grid>
              <Typography variant="h6">О компании</Typography>
              <List>
                {lists.find(list => list.subheader === 'О компании')?.items.map((item, index) => (
                  <ListItem sx={{pt: '4px', pl: '0px', pb: '0px'}} key={index}>
                    <ListItemText>
                      <NextLink href={item.path} passHref>
                        <LinkStyle onClick={handleAnchorLinkClick}>
                          {item.title}
                        </LinkStyle>
                      </NextLink>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
              </Grid>
              <Grid sx={{mt: '40px'}}>
                <Typography variant="h6">Поддержка</Typography>
                  <List>
                      {lists.find(list => list.subheader === 'Поддержка')?.items.map((item, index) => (
                          <ListItem sx={{pt: '4px', pl: '0px', pb: '0px'}} key={index}>
                            <ListItemText>
                              <NextLink href={item.path} passHref>
                                <LinkStyle onClick={handleAnchorLinkClick}>
                                  {item.title}
                                </LinkStyle>
                              </NextLink>
                            </ListItemText>
                          </ListItem>
                      ))}
                  </List>
              </Grid>
            </Grid>
        </>
    );
}

//------------------------------------------------------------------------------------------------

MobileFooter.propTypes = {
    list: PropTypes.shape({
      items: PropTypes.array,
      subheader: PropTypes.string,
    }),
  };
  
  function MobileFooter({ list }) {
    const { subheader, items } = list;
  
    const [expand, setExpand] = useState(false);
  
    const onExpand = () => {
      setExpand(!expand);
    };
  
    return (
      <Stack spacing={1.5} alignItems="flex-start">
        <Typography
          variant="h6"
          onClick={onExpand}
          sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          {subheader}
          <Iconify
            icon={expand ? chevronDown : chevronRight}
            sx={{ width: 20, height: 20, ml: 0.5 }}
          />
        </Typography>
  
        <Collapse in={expand} sx={{ width: 1 }}>
          <Box
            sx={{
              display: 'grid',
              rowGap: 1,
              columnGap: 3,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              },
            }}
          >
            {items?.map((link) => (
              <NextLink href={link.path} passHref key={link.title}>
                <LinkStyle onClick={handleAnchorLinkClick} href={link.path}>
                  {link.title}
                </LinkStyle>
              </NextLink>
            ))}
          </Box>
        </Collapse>
      </Stack>
    );
  }

//------------------------------------------------------------------------------------------------
