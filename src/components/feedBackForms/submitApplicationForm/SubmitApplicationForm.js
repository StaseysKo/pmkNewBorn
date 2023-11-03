import React, { useCallback, useState } from 'react';

import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button, Typography, Stack, Container, Grid } from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormProvider, { RHFTextField } from 'src/components/feedBackForms/hook-form';

import { FileList, DropZone } from 'src/components/feedBackForms/hook-form/DropZone';

import { createFormSchema } from '../hook-form/schema';



export const defaultValues = {
    company: '',
    contactPerson: '',
    email: '',
    phoneNumber: '',
    objectInfo: '',
    addPlusInfo: '',
};

export default function SubmitApplicationForm({ sourcePage, manager }) { 

    const methods = useForm({
        resolver: yupResolver(
          createFormSchema({
            includeCompany: true,
            includeContactPerson: true,
            includeEmail: true,
            includePhoneNumber: true,
            includeObjectInfo: true,
          })
        ),
        defaultValues,
    });
    
    const { reset, handleSubmit } = methods;

    const onSubmit = async (data) => {
        const formData = new FormData();
      
        for (const [key, value] of Object.entries(data)) {
          formData.append(key, value);
        }
      
        uploadedFiles.forEach((file) => {
          formData.append('files', file);
        });
      
        data.sourcePage = sourcePage;
        data.manager = manager;
        data.formType = 'submitApplication';
        formData.append('sourcePage', sourcePage);
        formData.append('manager', manager);
        formData.append('formType', 'submitApplication');
      
        try {
          const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            body: formData,
          });
      
          if (response.ok) {
            reset();
            setUploadedFiles([]);
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

    const [uploadedFiles, setUploadedFiles] = useState([]);
  
    const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB в байтах
    const MAX_FILES = 5;
    
    const handleDrop = (acceptedFiles, fileRejections) => {
      // Проверка на максимальное количество файлов
      if (uploadedFiles.length + acceptedFiles.length > MAX_FILES) {
        alert(`Вы не можете прикрепить более ${MAX_FILES} файлов.`);
        return;
      }
    
      const newFiles = acceptedFiles.filter(file => {
        // Проверка на размер файла
        if (file.size > MAX_FILE_SIZE) {
          alert(`Файл "${file.name}" превышает максимальный размер в 20 МБ`);
          return false;
        }
        return true;
      });
    
      setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };
    
  
    const handleRemoveFile = (file, e) => {
      e.stopPropagation(); // Остановка всплытия события
      setUploadedFiles((prevFiles) =>
        prevFiles.filter((prevFile) => prevFile !== file)
      );
    };

    return (
        <Container>
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
            <Grid justifyContent="center">
                <Grid item xs={12} md={8}>
                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit, onError)}>
                        <Stack spacing={3.5}>
                            <Stack spacing={2.5}> 
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2.5, md: 2 }}>
                                    <RHFTextField name="company" label="Наименование организации" />
                                    <RHFTextField name="contactPerson" label="Контактное лицо" />
                                </Stack>

                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2.5, md: 2 }}>
                                    <RHFTextField name="email" label="Почта" />
                                    <RHFTextField name="phoneNumber" label="Телефон" />
                                </Stack>

                                <RHFTextField name="objectInfo" fullWidth label="Наименование и адрес объекта" />
                                <RHFTextField name="addPlusInfo" fullWidth multiline rows={4} label="Дополнительная информация" />

                                <DropZone handleDrop={handleDrop} uploadedFiles={uploadedFiles} />
                                <FileList uploadedFiles={uploadedFiles} handleRemoveFile={handleRemoveFile} />
                            </Stack>

                            <Stack spacing={1}>
                                <Button type="submit" size="large" variant="contained">
                                    Оставить заявку
                                </Button>
                                <Typography 
                                    variant="body3" 
                                    sx={{ 
                                        color: "text.secondary", 
                                        opacity: 0.8, 
                                        mb: 10,
                                        textAlign: "center"
                                    }}
                                >
                                    Нажимая на кнопку, вы соглашаетесь с положение об обработке и защите персональных данных
                                </Typography>
                            </Stack>
                        </Stack>
                    </FormProvider>
                </Grid>
            </Grid>
        </Container>
    );
}
