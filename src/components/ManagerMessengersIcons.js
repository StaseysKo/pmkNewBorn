import PropTypes from 'prop-types';
// @mui
import { alpha } from '@mui/material/styles';
import { Stack, IconButton, Button, Link } from '@mui/material';
//
import { Iconify } from 'src/components/iconify';

import { Viber } from 'src/components';

// ----------------------------------------------------------------------

ManagerMessengersIcons.propTypes = {
  initialColor: PropTypes.bool,
  links: PropTypes.objectOf(PropTypes.string),
  simple: PropTypes.bool,
  sx: PropTypes.object,
};

export default function ManagerMessengersIcons({
  initialColor = false,
  simple = true,
  links = {},
  sx,
  ...other
}) {


  const MESSENGERS = [
    {
      name: 'Viber',
      Component: Viber,
      socialColor: '#7360F2',
      path: links.viber || '#viber-link',
    },
    {
      name: 'WhatsApp',
      icon: "logos:whatsapp-icon",
      socialColor: '#25D366',
      path: links.whatsapp || '#whatsapp-link',
    },
    {
      name: 'Telegram',
      icon: "logos:telegram" ,
      socialColor: '#0088cc',
      path: links.telegram || '#telegram-link',
    },

  ];

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center">
      {MESSENGERS.map((social) => {
          const { name, Component, icon, path, socialColor } = social;
          return simple ? (
              <Link
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <IconButton
                      color="inherit"
                      sx={{
                          ...(initialColor && {
                              color: socialColor,
                              '&:hover': {
                                  bgcolor: alpha(socialColor, 0.08),
                              },
                          }),
                          ...sx,
                      }}
                      {...other}
                  >
                      {Component ? <Component /> : <Iconify icon={icon} sx={{ width: 20, height: 20 }} />}
                  </IconButton>
              </Link>
          ) : (
              <Button
                  key={name}
                  href={path}
                  color="inherit"
                  variant="outlined"
                  size="small"
                  startIcon={Component ? <Component /> : <Iconify icon={icon} />}
                  sx={{
                      m: 0.5,
                      flexShrink: 0,
                      ...(initialColor && {
                          color: socialColor,
                          borderColor: socialColor,
                          '&:hover': {
                              borderColor: socialColor,
                              bgcolor: alpha(socialColor, 0.08),
                          },
                      }),
                      ...sx,
                  }}
                  {...other}
              >
                  {name}
              </Button>
          );
      })}

    </Stack>
  );
}
