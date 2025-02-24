// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import '../styles/globals.css'; // Global styles, including Tailwind

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
