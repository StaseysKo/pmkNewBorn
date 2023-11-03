// next
import Head from 'next/head';
// layouts
import Layout from 'src/layouts';
// sections
import FaqView from 'src/sections/_faq/view';

// ----------------------------------------------------------------------

FaqPage.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function FaqPage() {
  return (
    <>
      <Head>
        <title>Частые вопросы | Чистоград ПМК</title>
      </Head>
      <FaqView />
    </>
  );
}
