import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Layout from 'src/layouts';
import { _privacyPolicyData } from '_data'

import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, MARGIN_BOTTOM_DESKTOP } from 'src/config';


const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: HEADER_MOBILE_HEIGHT,
    [theme.breakpoints.up('md')]: {
      paddingTop: HEADER_DESKTOP_HEIGHT,
    },
    marginBottom: MARGIN_BOTTOM_DESKTOP
  }));

export default function PrivacyPolicyView() {


    return(
        <RootStyle>
            <Container>
                <Grid
                    justifyContent="center"
                    sx={{
                        pt: { xs: 8, md: 10 },
                        pb: { xs: 0, md: 0 },
                    }}
                >
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                        <Typography variant="h1">
                            Политика конфиденциальности
                        </Typography>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        pt: { xs: 10, md: '64px' },
                    }}
                >
                    {_privacyPolicyData.map((item, index) => (
                        <Accordion key={index}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            {item.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }} component="div">
                            {item.description.split('\n').map((paragraph, idx) => (
                                <p style={{ marginBottom: '16px' }} key={idx}>
                                    {paragraph}
                                </p>
                            ))}
                            </Typography>
                        </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>
        </RootStyle>
    );
}

PrivacyPolicyView.getLayout = function getLayout(page) {
    return <Layout transparentHeader>{page}</Layout>;
}

