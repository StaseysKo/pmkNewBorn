// next
import Head from 'next/head';
// layouts
import Layout from 'src/layouts';
// sections
import PrivacyPolicyView from 'src/sections/_privacy-policy/view';

// ----------------------------------------------------------------------

PrivacyPolicy.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Политика конфиденциальности | Чистоград ПМК</title>
      </Head>
      <PrivacyPolicyView />
    </>
  );
}
