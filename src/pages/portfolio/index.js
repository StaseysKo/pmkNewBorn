// next
import Head from 'next/head';
// layouts
// import MainLayout from 'src/layouts/main';
import Layout from 'src/layouts';
// sections
import PortfolioView from 'src/sections/_portfolio/view'

// ----------------------------------------------------------------------

PortfolioPage.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Портфолио | Чистоград ПМК</title>
      </Head>
      <PortfolioView />
    </>
  );
}
