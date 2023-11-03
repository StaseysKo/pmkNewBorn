import React, { useState, useCallback, useEffect, memo } from 'react';
import MaskedInput from 'react-text-mask';
import {
  DialogContentText,
  Stack,
  Paper,
  IconButton,
  Box,
  Typography,
  Dialog,
  DialogContent,
  TextField,
  Button,
  MenuItem,
  FormHelperText
} from "@mui/material";

import Fab from '@mui/material/Fab';
import { Icon } from '@iconify/react';
import phoneMessageIcon from '@iconify-icons/mdi/phone-message';
import crossIcon from '@iconify-icons/mdi/close';
import CloseIcon from '@mui/icons-material/Close';
import {_fastCommunication} from '_data';
import Popup from 'reactjs-popup';

import { CallBackForm } from './feedBackForms/callBackForm'


const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  zIndex: 9996,
  right: '20px'
};

const MessengerItem = memo(({ value, href, color, icon, label, handleRequestCall }) => (
  <a
    href={value === 'callback' ? null : href}
    target={value === 'callback' ? null : "_blank"}
    rel={value === 'callback' ? null : "noopener noreferrer"}
    onClick={(event) => {
      if (value === 'callback') {
        event.preventDefault();
        handleRequestCall();
      }
    }}
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <MenuItem sx={{ padding: '6px', typography: 'body2', display: 'flex', alignItems: 'center' }}>
      <Box sx={{ mr: 2, color, fontSize: 21 }}>
        <Icon icon={icon} />
      </Box>
      <Typography>{label}</Typography>
    </MenuItem>
  </a>
));

FloatingButton.displayName = 'FloatingButton';

export default function FloatingButton () {

  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phoneNumber: '', agreed: false });
  const [errorData, setErrorData] = useState({ name: false, phoneNumber: false, agreed: false });

  const handleClick = useCallback(() => setOpen(prev => !prev), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
    setErrorData({ name: false, phoneNumber: false, agreed: false });
  }, []);
  const handleRequestCall = useCallback(() => {
    setDialogOpen(true);
    setOpen(false);
  }, []);
  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setErrorData(prev => ({ ...prev, [id]: !value }));
  }, []);
  const handleSend = useCallback(() => {
    const errors = {
      name: !formData.name,
      phoneNumber: !formData.phoneNumber,
      agreed: !formData.agreed
    };
    if (errors.name || errors.phoneNumber || errors.agreed) {
      setErrorData(errors);
      return;
    }
    setFormData({ name: '', phoneNumber: '', agreed: false });
    setDialogOpen(false);
  }, [formData]);

  const handleGlobalClick = useCallback((event) => {
    if (open && !event.target.closest('.popup-content')) {
      setOpen(false);
    }
  }, [open]);

  const handleEscClose = useCallback((event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleGlobalClick, true);
    document.addEventListener('keydown', handleEscClose, true);
    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
      document.removeEventListener('keydown', handleEscClose, true);
    };
  }, [handleGlobalClick, handleEscClose]);
  

  return (
    <>
      <div style={buttonStyle}>
        <Fab color="primary" aria-label="add" onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Icon icon={open ? crossIcon : phoneMessageIcon} width={24} height={24} />
        </Fab>
      </div>

      <Popup
        open={open}
        onClose={handleClose}
        closeOnDocumentClick={false}
        position="bottom right"
        contentStyle={{
          position: 'fixed',
          bottom: '85px',
          right: '20px',
          zIndex: 9996,
          className: 'popup-content'
        }}
      >
        <Paper>
          <Box sx={{ p: 1 }}>
            {_fastCommunication.map(messenger => (
              <MessengerItem key={messenger.value} {...messenger} handleRequestCall={handleRequestCall} />
            ))}
          </Box>
        </Paper>
      </Popup>

      <Dialog sx={{zIndex: 9996}} open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth={'sm'}>
        <DialogContent sx={{ padding: 5 }}>
          <Stack sx={{ paddingBottom: 1 }}>
            <Typography variant="h3">Заказать обратный звонок</Typography>
            <IconButton edge="end" color="inherit" onClick={handleDialogClose} aria-label="close" sx={{ position: 'absolute', right: 24, top: 24, color: 'grey.500', '&:hover': { bgcolor: 'grey.700', color: 'common.white', } }}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <DialogContentText sx={{ fontSize: '0.9rem', paddingBottom: 2 }}>
            Обычно мы перезваниваем в течение 5 минут
          </DialogContentText>
          <CallBackForm sourcePage={`Заказан обратный звонок через кнопку быстрой связи`}/>

        </DialogContent>
      </Dialog>
    </>
  );
};
