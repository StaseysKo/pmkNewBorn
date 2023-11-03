import PropTypes from 'prop-types';
// icons
import quotesIcon from '@iconify/icons-carbon/quotes';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Grid, Stack } from '@mui/material';
// components
import { Lightbox, useLightBox  } from 'src/components'

import { Iconify } from 'src/components/iconify';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 0),
  },
}));

const Thumbnail = styled('img')({
  maxWidth: '100px', // Максимальная ширина миниатюры
  maxHeight: '100px', // Максимальная высота миниатюры
  cursor: 'pointer',
});

// ----------------------------------------------------------------------

Testimonials.propTypes = {
  metadata: PropTypes.shape({
    customerTestimonial: PropTypes.string,
    testimonialFile: PropTypes.string,
  }),
};

export default function Testimonials({ metadata }) {
  const { customerTestimonial, testimonialFile } = metadata

  const slides = testimonialFile ? [{ src: testimonialFile }] : [];
  const {
    selected: selectedImage,
    open: openLightbox,
    onOpen: handleOpenLightbox,
    onClose: handleCloseLightbox,
  } = useLightBox(slides);

  return (
    <RootStyle>
      <Grid
        sx={{
          mt: { xs: 5, md: 5 },
        }}
        container
        spacing={3}
        alignItems="center"
      >
        <Grid item xs={12} md={12}>
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Отзыв заказчика
          </Typography>
          <Stack
            alignItems={{ xs: 'center', md: 'flex-start' }}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <Iconify
              icon={quotesIcon}
              sx={{ width: 48, height: 48, opacity: 0.48, color: 'primary.main' }}
            />
            <Typography
              sx={{
                mt: 2,
                mb: 5,
                lineHeight: 1.75,
                fontSize: { md: 20 },
              }}
            >
              {customerTestimonial}
            </Typography>
            {testimonialFile && (
              <Thumbnail sx={{ borderRadius: "5px", cursor: 'pointer'}} src={testimonialFile} alt="Отзыв" onClick={() => handleOpenLightbox(testimonialFile)} />
            )}
            <Lightbox
              index={selectedImage}
              slides={slides}
              open={openLightbox}
              close={handleCloseLightbox}
            />
          </Stack>
        </Grid>
      </Grid>
    </RootStyle>
  );
}