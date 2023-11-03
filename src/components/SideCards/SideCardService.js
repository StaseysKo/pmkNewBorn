import React, { useState } from 'react';
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Divider, Stack, Button, IconButton, Tooltip, DialogContentText } from '@mui/material';

import { Icon } from '@iconify/react';

import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import TextField from '@mui/material/TextField';


import CloseIcon from '@mui/icons-material/Close';

// components 
import { ManagerMessengersIcons } from 'src/components';
import { SpecialistConsultationForm } from 'src/components/feedBackForms/specialistConsultationForm'
import { HEADER_DESKTOP_HEIGHT } from 'src/config'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  backgroundColor: '#252c35',
  borderRadius: Number(theme.shape.borderRadius) * 2,
}));

// ----------------------------------------------------------------------

const handleAnchorLinkClick = (e) => {
  const href = e.currentTarget.getAttribute('href');
  if (href.startsWith('#')) {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - HEADER_DESKTOP_HEIGHT;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  }
};

// ----------------------------------------------------------------------

SideCardService.propTypes = {
  serviceName: PropTypes.string,
  metadata: PropTypes.shape({
    managerMessengers: PropTypes.object,
    manager: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default function SideCardService({ metadata, serviceName }) {
  const { manager, managerMessengers, email, phone } = metadata;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <RootStyle>
      <Stack spacing={3}>

        <Stack spacing={1}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Менеджер направления
          </Typography>
          <Typography variant="body2">{manager}</Typography>

          <Typography variant="overline" sx={{ color: 'text.disabled', pt: 1 }}>
            Контактный телефон:
          </Typography>
          <Typography variant="body2" sx={{ pb: 1 }}>
            <a href={`tel:${phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {phone}
            </a>
          </Typography>

          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Контактная почта:
          </Typography>


          <Typography variant="body2" sx={{ pb: 1 }}>
            <a href={`mailto:${email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {email}
            </a>
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography variant="subtitle2">Написать:</Typography>
          <ManagerMessengersIcons initialColor links={managerMessengers} />
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <Button
            href="#submit-application"
            onClick={handleAnchorLinkClick}
            color="inherit"
            variant="outlined"
            size="large"
            sx={{ width: '100%' }}
          >
            Оставить заявку
          </Button>
          <Tooltip title="Бесплатная консультация специалиста" arrow>
          <Button size="large" color="inherit" variant="outlined" onClick={handleClickOpen}>
            <Icon
              icon="bx:support"
              width="2rem"
              height="2rem"
            />
          </Button>
          </Tooltip>
        </Stack>
        <Dialog sx={{ zIndex: 9999 }} open={open} onClose={handleClose}>
          <DialogContent 
            sx={{ padding: 5 }}
          >
            <Stack sx={{ paddingBottom: 1 }}>
              <Typography variant="h3">Консультация специалиста</Typography>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                sx={{
                  position: 'absolute',
                  right: 24,
                  top: 24,
                  color: 'grey.500',
                  '&:hover': {
                    bgcolor: 'grey.700',
                    color: 'common.white',
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
            <DialogContentText sx={{ fontSize: '0.9rem', paddingBottom: 2 }}>
              Наш специалист свяжется с вами и ответит на любые ваши вопросы.
            </DialogContentText>
            <SpecialistConsultationForm sourcePage={`Нужна консультация по услуге: '${serviceName}'.`} manager={manager}/>
          </DialogContent>
        </Dialog>

      </Stack>
    </RootStyle>
  );
}
