import Head from 'next/head';
import Link from 'next/link';
import homeStyles from '@/styles/home.module.scss';
import Header from '@/Components/Header';
import CategoriesMenu from '@/Components/CategoriesMenu';
import Footer from '@/Components/Footer';

function Home() {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <div className={`lrPaddingContainer ${homeStyles.sliderWrapper}`}>
          <Header />
          <section className={homeStyles.slider}>
            <p className={`widespaceText ${homeStyles.superLowOpacity}`}>new product</p>
            <h1 className='largeHeader'>XX99 Mark II HeadphoneS</h1>
            <p className={`baseText ${homeStyles.lowOpacity}`}>
                Experience natural, lifelike audio and exceptional build 
                quality made for the passionate music enthusiast.
            </p>
            <Link href='/' className='upperCaseBold13px baseButton orangeButton'>
                see product
            </Link>
          </section>
        </div>
        <CategoriesMenu />
        <Footer />
      </main>
    </>
  );
}

export default Home;