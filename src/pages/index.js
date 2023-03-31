import Head from 'next/head';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

function Home() {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <Footer />
      </main>
    </>
  );
}

export default Home;