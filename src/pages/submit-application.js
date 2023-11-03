// next
import Head from 'next/head';

import Layout from 'src/layouts';

import SubmitApplicationView from 'src/sections/_submitApplication/view';


// ----------------------------------------------------------------------

SubmitApplication.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function SubmitApplication() {
  return (
    <>
      <Head>
        <title>Оставить заявку | Чистоград ПМК</title>
      </Head>
      <SubmitApplicationView />
    </>
  );
}
