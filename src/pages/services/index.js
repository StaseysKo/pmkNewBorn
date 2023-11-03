// next
import Head from 'next/head';
// layouts
// import MainLayout from 'src/layouts/main';
import Layout from 'src/layouts';
// sections
import ServicesView from 'src/sections/_services/view'

// ----------------------------------------------------------------------

ServicesPage.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Услуги | Чистоград ПМК</title>
      </Head>
      <ServicesView />
    </>
  );
}
