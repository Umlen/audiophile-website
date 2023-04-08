import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import home from '@/styles/home.module.scss';
import typography from '@/styles/typography.module.scss';
import buttons from '@/styles/buttons.module.scss';

import Header from '@/Components/Header';
import CategoriesMenu from '@/Components/CategoriesMenu';
import About from '@/Components/About';
import Footer from '@/Components/Footer';

import decorCirclesSvg from '/public/assets/home/pattern-circles.svg';

function Home() {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={`lrPaddingContainer ${home.sliderWrapper}`}>
        <Header />
        <section className={home.slider}>
          <p className={`${typography.widespaceText} ${home.superLowOpacity}`}>new product</p>
          <h1 className={typography.largeHeader}>XX99 Mark II HeadphoneS</h1>
          <p className={`${typography.baseText} ${home.lowOpacity}`}>
            Experience natural, lifelike audio and exceptional build 
            quality made for the passionate music enthusiast.
          </p>
          <Link 
            href='/xx99-mark-two-headphones' 
            className={`${buttons.baseButton} ${buttons.orangeButton} ${typography.upperCaseBold13px}`}
          >
            see product
          </Link>
        </section>
      </div>
      <CategoriesMenu />
      <main className={`lrPaddingContainer ${home.mainProducts}`}>
        <section className={`borderRadius ${home.higlightSection}`}>
          <Image src={decorCirclesSvg} alt='' className={home.decorCirclesSvg}/>
          <div className={home.higlightProductImage}></div>
          <div className={home.higlightProductInfo}>
            <h2 className={typography.largeHeader}>zx9 speaker</h2>
            <p className={typography.baseText}>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Link 
              href='/zx9-speaker' 
              className={`${buttons.baseButton} ${buttons.blackButton} ${typography.upperCaseBold13px}`}
            >
              see product
            </Link>
          </div>
        </section>
        <section className={`borderRadius ${home.bgImageSection}`}>
          <h2 className={typography.smallHeader}>zx7 speaker</h2>
          <Link 
            href='/zx7-speaker' 
            className={`${buttons.baseButton} ${buttons.borderedButton} ${typography.upperCaseBold13px}`}
          >
            see product
          </Link>
        </section>
        <section className={`borderRadius ${home.dividedSection}`}>
          <div className={`borderRadius ${home.dividedProductImage}`}></div>
          <div className={`borderRadius ${home.dividedProductInfo}`}>
            <h2 className={typography.smallHeader}>yx1 earphones</h2>
            <Link 
              href='/yx1-earphones' 
              className={`${buttons.baseButton} ${buttons.borderedButton} ${typography.upperCaseBold13px}`}
            >
              see product
            </Link>
          </div>
        </section>
      </main>
      <About />
      <Footer />
    </>
  );
}

export default Home;