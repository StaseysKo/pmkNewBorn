import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/system';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

import { Icon } from "@iconify/react";
import fileUploadOutline from "@iconify/icons-mdi/file-upload-outline";



const RemoveFileButtonInner = styled(Box)(({ theme }) => ({
  width: 24,
  height: 24,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  border: '1px solid',
  borderColor: 'common.white',
  transition: 'background-color 0.3s',
}));

const RemoveFileButton = styled(Box)(({ theme }) => ({
  width: 32,
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  opacity: 0,
  transition: 'opacity 0.3s, left 0.3s',
  zIndex: 1,
  '&:hover': {
    '& svg': {
      fill: theme.palette.common.white,
      stroke: theme.palette.common.white,
    },
  },
}));

const FileContainer = styled(Box)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 0,
  height: 32,
  transition: 'padding-left 0.3s',
  '&:hover': {
    '& .removeFileButton': {
      opacity: 1,
      left: 0,
    },
    paddingLeft: '32px',
  },
  minHeight: "48px",
});


export function DropZone ({ handleDrop, uploadedFiles }) {
    const onDrop = useCallback(
      (acceptedFiles, fileRejections) => {
        handleDrop(acceptedFiles, fileRejections);
      },
      [handleDrop]
    );
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  
    return (
      <Box
        {...getRootProps()}
        sx={{
          border: "2px dashed",
          borderColor: isDragActive ? "primary.main" : "grey.500",
          borderRadius: 1,
          padding: 2,
          textAlign: "center",
          mb: 3,
          cursor: "pointer",
          minHeight: "148px",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Icon icon={fileUploadOutline} height="58" />
            <Typography>Отпустите кнопку мыши, чтобы прикрепить файлы</Typography>
          </Box>
        ) : (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Icon icon={fileUploadOutline} height="58" />
            <Typography>
              Нажмите для загрузки или перетащите файлы в область
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", opacity: 0.8 }}>
              Размер файла не должен превышать 20 MB
            </Typography>
          </Box>
        )}
      </Box>
    );
  }
  


export function FileList ({ uploadedFiles, handleRemoveFile }) {
  return (
    uploadedFiles.length > 0 && (
      <Box
        marginBottom={4}
        sx={{
          border: "2px dashed",
          borderColor: "grey.500",
          borderRadius: 1,
          padding: 2,
          minHeight: "48px",
        }}
      >
        <Stack spacing={1}>
          {uploadedFiles.map((file) => (
            <FileContainer key={file.name}> {/* Используйте уникальный идентификатор файла */}
              <InsertDriveFileOutlinedIcon />
              <Typography sx={{ marginLeft: 1 }}>{file.name}</Typography>
              <RemoveFileButton
                className="removeFileButton"
                onClick={(e) => handleRemoveFile(file, e)}
              >
                <RemoveFileButtonInner>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L9 9M9 1L1 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </RemoveFileButtonInner>
              </RemoveFileButton>
            </FileContainer>
          ))}
        </Stack>
      </Box>
    )
  );
};