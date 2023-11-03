import React from 'react';

import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MenuItem, Button, Typography, Stack, Divider, Container, Grid, Box } from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormProvider, { RHFTextField } from 'src/components/feedBackForms/hook-form';
import { createFormSchema } from '../hook-form/schema';


export const defaultValues = {
  fullName: '',
  phoneNumber: '',
  info: '',
};

export default function CallBackForm({ sourcePage }) {

  const methods = useForm({
    resolver: yupResolver(
      createFormSchema({
        includeFullName: true,
        includePhoneNumber: true,
      })
    ),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = async (data) => {

    data.sourcePage = sourcePage;
    data.formType = 'callBackForm';
  
    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        reset();
        toast.success('Форма отправлена', {
          style: { 
            borderRadius: '8px', 
            background: '#FA541C',
          }
        });
      } else {
        toast.error('Ошибка при отправке формы');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы', error);
      toast.error('Ошибка при отправке формы');
    }
  };    

  const onError = (errors) => {
    console.log('Сообщение об ошибке', JSON.stringify(errors, null, 2));
    // toast.error('Ошибка при отправке формы!');
  };


return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit, onError)}>
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        closeButton={false}
        hideProgressBar
        transition={Slide}
      />
      <Stack spacing={3.5}>
          <Stack spacing={2.5}> 
            <RHFTextField variant="outlined" name="fullName" label="Имя" />
            <RHFTextField variant="outlined" name="phoneNumber" label="Телефон" />
            <RHFTextField multiline rows={2} variant="outlined" name="info" label="Тема обращения" />
          </Stack>
          <Stack spacing={1}>
            <Button type="submit" size="large" variant="contained">
              Отправить
            </Button>
            <Typography 
              variant="body3" 
              sx={{ 
                color: "text.secondary", 
                opacity: 0.8,
                mb: 10 
              }}
            >
              Нажимая на кнопку, вы соглашаетесь с положение об обработке и защите персональных данных
            </Typography>
          </Stack>
      </Stack>
    </FormProvider>
  );
}

