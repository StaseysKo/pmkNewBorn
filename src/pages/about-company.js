// next
import Head from 'next/head';
// layouts
// import MainLayout from 'src/layouts/main';
import Layout from 'src/layouts';
// sections
import AboutCompanyView from 'src/sections/_about-company/view';

// ----------------------------------------------------------------------

AboutUsPage.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>О компании | Чистоград ПМК</title>
      </Head>
      <AboutCompanyView />
    </>
  );
}
