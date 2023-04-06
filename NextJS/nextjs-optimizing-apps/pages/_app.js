import Layout from '../components/layout/layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        {/* Apply to all page components */}
        <title>Next Events</title>
        <meta name='description' content='Next JS Events' />
        {/* Ensure that page is responsive and scales correctly */}
        <meta name='viewport' content='initial-scale=1.0,width=device-width' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
