import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import homeStyles from '@/styles/home.module.scss';
import Header from '@/Components/Header';
import CategoriesMenu from '@/Components/CategoriesMenu';
import Footer from '@/Components/Footer';
import decorCirclesSvg from '/public/assets/home/pattern-circles.svg';

function Home() {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
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
      <main className={`lrPaddingContainer ${homeStyles.mainProducts}`}>
        <section className={`borderRadius ${homeStyles.higlightSection}`}>
          <Image src={decorCirclesSvg} alt='' className={homeStyles.decorCirclesSvg}/>
          <div className={homeStyles.higlightProductImage}></div>
          <div className={homeStyles.higlightProductInfo}>
            <h2 className='largeHeader'>zx9 speaker</h2>
            <p className='baseText'>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Link href='/' className='baseButton blackButton upperCaseBold13px'>see product</Link>
          </div>
        </section>

        <section className={`borderRadius ${homeStyles.bgImageSection}`}>
          <h2 className='smallHeader'>zx7 speaker</h2>
          <Link href='/' className='baseButton borderedButton upperCaseBold13px'>see product</Link>
        </section>

        <section className={`borderRadius ${homeStyles.dividedSection}`}>
          <div className={`borderRadius ${homeStyles.dividedProductImage}`}></div>
          <div className={`borderRadius ${homeStyles.dividedProductInfo}`}>
            <h2 className='smallHeader'>yx1 earphones</h2>
            <Link href='/' className='baseButton borderedButton upperCaseBold13px'>see product</Link>
          </div>
        </section>
      </main>
      <div role="complementary"></div>
      <Footer />
    </>
  );
}

export default Home;