import PropTypes from 'prop-types';
import NextLink from 'next/link';
// @mui
import { Box, Stack, Button, AppBar, Container } from '@mui/material';
// hooks
import { useOffSetTop, useResponsive } from 'src/hooks';
// components
import { Logo } from 'src/components';
//
import Searchbar from './Searchbar';

import { NavMobile, NavDesktop, navConfig } from '../nav';
import { ToolbarStyle, ToolbarShadowStyle } from './HeaderToolbarStyle';

// ----------------------------------------------------------------------

Header.propTypes = {
  transparent: PropTypes.bool,
};

export default function Header({ transparent }) {

  const isDesktop = useResponsive('up', 'md');

  const isScrolling = useOffSetTop(10);

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle disableGutters transparent={transparent} scrolling={isScrolling}>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ lineHeight: 0, position: 'relative' }}>
            <Logo isSimple onDark={transparent && !isScrolling} />
          </Box>

          {isDesktop && (
            <NavDesktop
              isScrolling={isScrolling}
              isTransparent={transparent}
              navConfig={navConfig}
            />
          )}

          <Stack spacing={2} direction="row" alignItems="center">

            {isDesktop && (
              <Stack direction="row" spacing={1}>
                <Searchbar></Searchbar>
                <NextLink href='/submit-application' passHref>
                  <Button variant="contained">
                    Оставить заявку
                  </Button>
                </NextLink>
              </Stack>
            )}
          </Stack>

          {!isDesktop && (
            <NavMobile
              navConfig={navConfig}
              sx={{
                ml: 1,
                ...(isScrolling && { color: 'text.primary' }),
              }}
            />
          )}
        </Container>
      </ToolbarStyle>

      {isScrolling && <ToolbarShadowStyle />}
    </AppBar>
  );
}
