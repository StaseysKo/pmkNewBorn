// next
import Head from 'next/head';
// layouts
import Layout from 'src/layouts';
// sections
import ContactsView from 'src/sections/_contacts/view';

// ----------------------------------------------------------------------

ContactsPage.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>Контакты | Чистоград ПМК</title>
      </Head>
      <ContactsView />
    </>
  );
}
