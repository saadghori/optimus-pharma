import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;