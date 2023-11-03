import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Divider, Stack, Button, IconButton, Tooltip, Popover, MenuItem, Box } from '@mui/material';

import { Icon } from '@iconify/react';

import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import TextField from '@mui/material/TextField';


import CloseIcon from '@mui/icons-material/Close';

// components 
import { ManagerMessengersIcons } from 'src/components';
import { Iconify } from 'src/components/iconify';
import { CallBackForm } from 'src/components/feedBackForms/callBackForm'

// data
import { _shareProject } from '_data'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  backgroundColor: '#252c35',
  borderRadius: Number(theme.shape.borderRadius) * 2,
}));

// ----------------------------------------------------------------------

SideCardProject.propTypes = {
  metadata: PropTypes.shape({
    relevantService: PropTypes.string,
    adressOfTheObject: PropTypes.string,
    nameOfObject: PropTypes.string,
    yearOfWork: PropTypes.string,
    serviceProvided: PropTypes.string,
  }),
};

export default function SideCardProject({ metadata }) {
  const { serviceProvided, yearOfWork, nameOfObject, adressOfTheObject, relevantService } = metadata;

  const serviceLink = `/services/${relevantService}`

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleChangeFavorite = (event) => {
    setFavorite(event.target.checked);
  };
  return (
    <RootStyle>

      <Stack spacing={1}>
        <Typography 
          variant="h4"
          sx={{
            mb: 3
          }}
        >
          Детали
        </Typography>
      </Stack>
      
      <Stack spacing={1}>
        <Stack spacing={1}>
          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled'}}>
            Объект
          </Typography>
          <Typography variant="body2">{nameOfObject}</Typography>

          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled'}}>
            Адрес объекта
          </Typography>
          <Typography variant="body2">{adressOfTheObject}</Typography>

          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Услуга
          </Typography>
          <Typography variant="body2">{serviceProvided}</Typography>

          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled' }}>
            Год реализации
          </Typography>
          <Typography variant="body2">{yearOfWork}</Typography>

        </Stack>
      </Stack>
      
      <Stack sx ={{mt: 3.5}} direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <NextLink href={serviceLink} passHref>
            <Button
              color="inherit"
              variant="outlined"
              size="large"
              sx={{ width: '100%', textTransform: 'none'}}
            >
              Подробнее об услуге
            </Button>
          </NextLink>
          <Tooltip title="Поделиться проектом" arrow>
            <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
              <Iconify icon="carbon:share" />
            </IconButton>
          </Tooltip>
      </Stack>

      <Popover
          open={!!open}
          onClose={handleClose}
          anchorEl={open}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          PaperProps={{
            sx: { width: 220, p: 1 },
          }}
        >
          {_shareProject.map((share) => (
            <MenuItem key={share.value} onClick={() => share.action(handleClose)} sx={{ typography: 'body2', display: 'flex', alignItems: 'center' }}>
              <Box sx={{ mr: 2, color: share.color, fontSize: 17 }}>
                {share.icon}
              </Box>
              {share.label}
            </MenuItem>
          ))}
      </Popover>

    </RootStyle>
  );
}
