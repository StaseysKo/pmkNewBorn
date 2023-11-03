import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Layout from 'src/layouts';
import { _faqData } from '_data'

import { StillHaveQuestionsForm } from 'src/components/feedBackForms/stillHaveQuestionsForm'

import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, MARGIN_BOTTOM_DESKTOP } from 'src/config';


const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: HEADER_MOBILE_HEIGHT,
    [theme.breakpoints.up('md')]: {
      paddingTop: HEADER_DESKTOP_HEIGHT,
    },
  }));

export default function FaqView() {


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
                            Частые вопросы
                        </Typography>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        pt: { xs: 10, md: '64px' },
                    }}
                >
                    {_faqData.map((faq, index) => (
                        <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            {faq.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography  sx={{ color: 'text.secondary' }}>{faq.answer}</Typography>
                        </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>
            <StillHaveQuestionsForm sourcePage={`Форма отправлена со страницы "Частые вопросы"`}/>
        </RootStyle>
    );
}

FaqView.getLayout = function getLayout(page) {
    return <Layout transparentHeader>{page}</Layout>;
}

