import PropTypes from 'prop-types';
// @mui
import { Stack, Box, Typography, Container, Grid } from '@mui/material';
import { alpha } from '@mui/material/styles';
import Link from '@mui/material/Link';

// icon
import { Icon } from '@iconify/react';

import TextMaxLine from 'src/components/TextMaxLine';

// ----------------------------------------------------------------------

DownloadFiles.propTypes = {
    filesArr: PropTypes.array,
    title: PropTypes.string,
  };

export default function DownloadFiles({filesArr, title}) {
  return (
    <Container
        sx={{
         pt: { xs: 5, md: '120px' },
        }}
    >
        <Typography
            variant="h2"
            sx={{
                mb: 8,
                textAlign: { xs: 'center', md: 'unset' },
            }}
        >
            {title}
        </Typography>
    
          <Grid container spacing={3}>
    
            <Grid item xs={12} md={12}>
              <Box
                gap={3}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(3, 1fr)',
                }}
              >
                {filesArr.map((file, index) => (
                    <Link 
                        key={index}
                        href={file.fileUrl} 
                        download
                        underline="none"
                        sx={{ 
                            color: 'inherit', 
                            textDecoration: 'none',
                        }}
                    >
                        <Stack
                            spacing={2}
                            direction="row"
                            alignItems="center"
                            sx={{
                                p: 2,
                                borderRadius: 2,
                                border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
                                transition: (theme) => theme.transitions.create('border-color', {
                                    easing: theme.transitions.easing.easeIn,
                                    duration: theme.transitions.duration.shortest,
                                }),
                                '&:hover': {
                                    border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 1)}`,
                                }
                            }}
                        >
                            <Stack spacing={0.5} flexGrow={1}>
                                <TextMaxLine variant="h6" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
                                    {file.fileName}
                                </TextMaxLine>
                            
                                <TextMaxLine variant="body2" line={1} sx={{ color: 'text.disabled' }}>
                                    {file.fileType} {file.fileSize}
                                </TextMaxLine>
                            </Stack>
                        
                            <Icon 
                                icon="ci:download" 
                                fontSize={22}
                            />
                        </Stack>
                    </Link>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
  );
}
