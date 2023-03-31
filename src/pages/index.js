import Head from 'next/head';
import Image from 'next/image';
//import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Header from '@/Components/Header';

function Home() {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <h1>123 asdfghjkl</h1>
        <h4>123 asdfghjkl</h4>
        <p>123 asdfghjkl</p>
      </main>
    </>
  );
}

export default Home;