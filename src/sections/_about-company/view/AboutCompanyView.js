// mui
import { styled } from '@mui/material/styles';

// data
import {_advantages, _clients, _partners, _gratefulCompanies} from '_data'

// component
import { Page } from 'src/components'

import { MainFeedBackForm } from 'src/components/feedBackForms/mainFeedBackForm'

import {
    AboutUsHeaderSection,
    AboutUsAdvantages,
    AboutUsClients,
    AboutUsPartners,
    GratefulImg
} from '../components'

import Layout from 'src/layouts';


import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from 'src/config';


const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: HEADER_MOBILE_HEIGHT,
    [theme.breakpoints.up('md')]: {
      paddingTop: HEADER_DESKTOP_HEIGHT,
    },
  }));


export default function AboutUsView() {

    return(
        <Page title='О компании | Чистоград ПМК'>
            <RootStyle>
                <AboutUsHeaderSection />

                <div id="advantages">
                    <AboutUsAdvantages advantages={_advantages}/>
                </div>

                <div id="clients">
                    <AboutUsClients clients={_clients}/>
                </div>

                <div id="partners">
                    <AboutUsPartners partners={_partners} />
                </div>

                <div id="commendations">
                    <GratefulImg gratefulCompanies={_gratefulCompanies}/>
                </div>

                <div id="discuss-the-project-form">
                    <MainFeedBackForm sourcePage={`Форма отправлена со страницы "О компании"`}/>
                </div>
            </RootStyle>
        </Page>
    );
}

AboutUsView.getLayout = function getLayout(page) {
    return <Layout transparentHeader>{page}</Layout>;
}