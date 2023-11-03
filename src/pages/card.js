// next
import Head from 'next/head';
// layouts
import Layout from 'src/layouts';
// sections
import CardView from 'src/sections/_card/view';

// ----------------------------------------------------------------------

CardPage.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function CardPage() {
  return (
    <>
      <Head>
        <title>Карточка организации | Чистоград ПМК</title>
      </Head>
      <CardView />
    </>
  );
}
