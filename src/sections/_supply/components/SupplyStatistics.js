// @mui
import { Stack, Box, Paper, Typography, Container, Divider } from '@mui/material';

import { CountUpNumber } from 'src/components';

// ----------------------------------------------------------------------

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function SupplyStatistics() {
  return (
    <Container
      sx={{
        pt: { xs: 5, md: '80px' },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 8,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        Статистика закупок
      </Typography>

      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        <Box
          gap={3}
          display="grid"
          gridTemplateRows={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
              <Paper
                  sx={{
                    p: 5,
                    borderRadius: 2,
                    bgcolor: 'background.neutral',
                  }}
              >
                <Typography variant="h1" component="h2" gutterBottom>
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{ verticalAlign: 'middle', mr: 0.5}}
                  >
                    {'>'}
                  </Typography>
                  <CountUpNumber
                    start={1500 / 5}
                    end={1500}
                    formattingFn={formatNumber}
                  />
                  {
                    <Typography
                      variant="h5"
                      component="span"
                      sx={{ verticalAlign: 'botton', ml: 1, color: 'primary.main' }}
                    >
                      закупок
                    </Typography>
                  }
                </Typography>
              <Stack spacing={5}>
                <Stack spacing={5} direction="row" alignItems="center">
                  <Stack spacing={1} flexGrow={1}>
                    <Typography
                      variant="body2"
                      sx={{ mt: 5, fontSize: 18, lineHeight: 1.95, color: 'text.secondary' }}
                    >
                      - проведено за 2023 год
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              </Paper>
              <Paper
                  sx={{
                    p: 5,
                    borderRadius: 2,
                    bgcolor: 'background.neutral',
                  }}
              >
                <Typography variant="h1" component="h2" gutterBottom>
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{ verticalAlign: 'middle', mr: 0.5}}
                  >
                    {'>'}
                  </Typography>
                  <CountUpNumber
                    start={2000 / 5}
                    end={2000}
                    formattingFn={formatNumber}
                  />
                  {
                    <Typography
                      variant="h5"
                      component="span"
                      sx={{ verticalAlign: 'botton', ml: 1, color: 'primary.main' }}
                    >
                      объектов
                    </Typography>
                  }
                </Typography>
              <Stack spacing={5}>
                <Stack spacing={5} direction="row" alignItems="center">
                  <Stack spacing={1} flexGrow={1}>
                    <Typography
                      variant="body2"
                      sx={{ mt: 5, fontSize: 18, lineHeight: 1.95, color: 'text.secondary' }}
                    >
                      - реализовано с 2013 года
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              </Paper>
        </Box>
        <Paper
          sx={{
            p: 5,
            borderRadius: 2,
            bgcolor: 'background.neutral',
          }}
        >
            <Typography variant="h2" gutterBottom>
                <Typography
                  variant="h4"
                  component="span"
                  sx={{ verticalAlign: 'middle', mr: 0.5}}
                >
                  {'>'}
                </Typography>
              <CountUpNumber
                start={4000 / 5}
                end={4000}
                formattingFn={formatNumber}
              />
              {
                <Typography
                  variant="h5"
                  component="span"
                  sx={{ verticalAlign: 'botton', ml: 1, color: 'primary.main' }}
                >
                  тонн
                </Typography>
              }
            </Typography>
            <Stack spacing={5}>
              <Stack spacing={5} direction="row" alignItems="center">
                <Stack spacing={1} flexGrow={1}>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 16, lineHeight: 1.95, color: 'text.secondary' }}
                  >
                    - куплено за все время
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider sx={{ my: { xs: 0, md: 5 } }} />
            <Typography variant="h2" gutterBottom>
                <Typography
                  variant="h4"
                  component="span"
                  sx={{ verticalAlign: 'middle', mr: 0.5}}
                >
                  {'>'}
                </Typography>
              <CountUpNumber
                start={380 / 5}
                end={380}
                formattingFn={formatNumber}
              />
              {
                <Typography
                  variant="h5"
                  component="span"
                  sx={{ verticalAlign: 'botton', ml: 1, color: 'primary.main' }}
                >
                  тонн
                </Typography>
              }
            </Typography>
            <Stack spacing={5}>
              <Stack spacing={5} direction="row" alignItems="center">
                <Stack spacing={1} flexGrow={1}>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 16, lineHeight: 1.95, color: 'text.secondary' }}
                  >
                    - куплено за 2023 год
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider sx={{ my: { xs: 0, md: 5 } }} />
            <Typography variant="h2" gutterBottom>
              <Typography
                  variant="h4"
                  component="span"
                  sx={{ verticalAlign: 'middle', mr: 0.5}}
                >
                  {'>'}
                </Typography>
              <CountUpNumber
                start={2 / 5}
                end={2}
                formattingFn={formatNumber}
              />
              {
                <Typography
                  variant="h5"
                  component="span"
                  sx={{ verticalAlign: 'botton', ml: 1, color: 'primary.main' }}
                >
                  тонны
                </Typography>
              }
            </Typography>
            <Stack spacing={5}>
              <Stack spacing={5} direction="row" alignItems="center">
                <Stack spacing={1} flexGrow={1}>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 16, lineHeight: 1.95, color: 'text.secondary' }}
                  >
                    - средний объем закупки
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
        </Paper>
      </Box>
    </Container>
  );
}
