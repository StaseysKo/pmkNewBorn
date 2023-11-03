// next
import Head from 'next/head';
// layouts
// import MainLayout from 'src/layouts/main';
import Layout from 'src/layouts';
// sections
import HomeView from 'src/sections/_home/view';

// ----------------------------------------------------------------------

HomePage.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Главная | Чистоград ПМК</title>
      </Head>
      <HomeView />
    </>
  );
}
