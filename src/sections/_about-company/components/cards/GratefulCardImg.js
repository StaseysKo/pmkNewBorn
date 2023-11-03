import React from 'react';
import PropTypes from 'prop-types';
// @mui
import { Typography, Card, Box, Stack } from '@mui/material';
// components
import Image from 'src/components/Image';

import { Lightbox, useLightBox } from 'src/components';

// ----------------------------------------------------------------------

GratefulCardImg.propTypes = {
  gratefulCompany: PropTypes.object,
};

export default function GratefulCardImg({ gratefulCompany }) {
  
  const slides = [{
    src: gratefulCompany?.thankYouPhoto
  }];

  const {
    selected: selectedImage,
    open: openLightbox,
    onOpen: handleOpenLightbox,
    onClose: handleCloseLightbox,
  } = useLightBox(slides);

  if (!gratefulCompany) {
    console.error("gratefulCompany is not provided!");
    return null;
  }

  const { companyName, thankYouPhoto, altTag } = gratefulCompany;

  return (
    <Card>
      <Box sx={{ position: 'relative'}}>
        <Image 
          ratio="3/4"
          src={thankYouPhoto} 
          alt={altTag}  
          sx={{ cursor: 'pointer' }}
          onClick={() => handleOpenLightbox(thankYouPhoto)}
        />
        <Lightbox
          index={selectedImage}
          slides={slides}
          open={openLightbox}
          close={handleCloseLightbox}
        />
      </Box>

      <Stack 
        spacing={0.5} 
        sx={{ 
          textAlign: 'center', 
          pt: 3, 
          pb: 1.5,
          '@media (min-width: 1200px)': {
            minHeight: '85px',
          }
          }}
        >
        <Typography variant="body2" sx={{ color: 'text.disabled' }}>
          {companyName}
        </Typography>
      </Stack>
    </Card>
  );
}
