import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import dynamic from 'next/dynamic';

import { Box, Typography, Stack, Paper, Container, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

import { TextIconLabel } from 'src/components';
import { Iconify } from 'src/components/iconify';
import Layout from 'src/layouts';
import { StillHaveQuestionsForm } from 'src/components/feedBackForms/stillHaveQuestionsForm'
import { _contactData } from '_data'

import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, MARGIN_BOTTOM_DESKTOP } from 'src/config';

// icons
import locationIcon from '@iconify/icons-carbon/location';
import mobileIcon from '@iconify/icons-carbon/mobile';
import emailIcon from '@iconify/icons-carbon/email';

const ContactMap = dynamic(() => import('src/components/map/ContactMap'));

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: HEADER_MOBILE_HEIGHT,
    [theme.breakpoints.up('md')]: {
      paddingTop: HEADER_DESKTOP_HEIGHT,
    },
  }));

export default function ContactsView() {


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
                            Свяжитесь с нами
                        </Typography>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                    display: 'grid',
                    pt: { xs: 10, md: '64px' },
                    pb: { xs: 10, md: '32px' },
                    gap: 4,
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                    },
                    }}
                >
                    {_contactData.map((contact) => (
                        <OfficeCard key={contact.id} contactData={contact} />
                    ))}
                </Box>
                <Box sx={{ height: 520, overflow: 'hidden', borderRadius: 2, mb: {xs: 0, md: '64px'} }}>
                    {/* <ContactMap location={resMain} sx={{ borderRadius: 2 }} /> */}
                    {/* <ContactMap
                        locations={[
                            { title: "Офис", address: "236038, г. Калининград, ул. Индустриальная, 4", latlng: [54.750535569919194, 20.563442999999996] },
                            { title: "Производство", address: "238321, пос. Константиновка, Калининградская обл.", latlng: [54.79819789684093, 20.668402000000004] }
                        ]} 
                        sx={{ borderRadius: 2 }} 
                    /> */}
                    <ContactMap
                        locations={_contactData} 
                        sx={{ borderRadius: 2 }} 
                    />
                </Box>
            </Container>
            <StillHaveQuestionsForm sourcePage={`Форма отправлена со страницы "Контакты"`}/>
        </RootStyle>
    );
}

ContactsView.getLayout = function getLayout(page) {
    return <Layout transparentHeader>{page}</Layout>;
}


OfficeCard.propTypes = {
    contactData: PropTypes.shape({
      title: PropTypes.string,
      address: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
    }),
  };
  
  function OfficeCard({ contactData }) {
    const { title, address, email, phone } = contactData;
  
    return (
        <Paper
            component={m.div}
            sx={{
            backgroundColor: '#252c35',
            borderRadius: 2,
            }}
        >
            <Stack spacing={3.5} sx={{ p: 3 }} component={m.div} variants={{ hover: { opacity: 0.8 } }}>
                <Box display="flex" alignItems="center">
                    <Typography variant="h3" sx={{ mb: 0.5, mr: 1 }}>
                        {title}
                    </Typography>
                </Box>
                <Divider sx={{ borderStyle: 'dashed', my: 2 }} />
                <Stack spacing={0.5}>
                    <TextIconLabel
                        icon={<Iconify icon={locationIcon} sx={{ mr: 1, width: 24, height: 24 }} />}
                        value={
                            <>Адрес</>
                        }
                        sx={{ typography: 'h6', mb: 0.5 }}
                    />
                    <Typography variant="body2">{address}</Typography>
                </Stack>
        
                <Stack spacing={0.5}>
                    <TextIconLabel
                        icon={<Iconify icon={mobileIcon} sx={{ mr: 1, width: 24, height: 24 }} />}
                        value="Телефон"
                        sx={{ typography: 'h6', mb: 0.5 }}
                    />
                    <Typography variant="body2">{phone}</Typography>
                </Stack>
        
                <Stack spacing={0.5}>
                    <TextIconLabel
                        icon={<Iconify icon={emailIcon} sx={{ mr: 1, width: 24, height: 24 }} />}
                        value="Email"
                        sx={{ typography: 'h6', mb: 0.5 }}
                    />
                    <Typography variant="body2">{email}</Typography>
                </Stack>
            </Stack>
        </Paper>
    );
  }