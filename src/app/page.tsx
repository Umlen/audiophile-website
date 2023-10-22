import Image from 'next/image';
import { FunctionComponent } from 'react';
import decorCirclesSvg from '/public/assets/home/pattern-circles.svg';

import Header from '@/Components/Header';
import CategoriesMenu from '@/Components/menus/CategoriesMenu';
import LinkAsButton from '@/Components/ui/LinkAsButton';
import Footer from '@/Components/Footer';
import About from '@/Components/About';

import stylesHome from '@/styles/home.module.scss';
import typography from '@/styles/typography.module.scss';

const Home: FunctionComponent = () => {
  return (
    <>
      <div className={`lrPaddingContainer ${stylesHome.sliderWrapper}`}>
        <Header />
        <section className={stylesHome.slider}>
          <p className={`${typography.widespaceText} ${stylesHome.superLowOpacity}`}>new product</p>
          <h1 className={typography.largeHeader}>XX99 Mark II HeadphoneS</h1>
          <p className={`${typography.baseText} ${stylesHome.lowOpacity}`}>
            Experience natural, lifelike audio and exceptional build
            quality made for the passionate music enthusiast.
          </p>
          <LinkAsButton 
            href='/xx99-mark-two-headphones'
            text='see product'
            linkStyle='orangeButton'
          />
        </section>
      </div>
      <CategoriesMenu />
      <main className={`lrPaddingContainer ${stylesHome.mainProducts}`}>
        <section className={`borderRadius ${stylesHome.higlightSection}`}>
          <Image src={decorCirclesSvg} alt='' className={stylesHome.decorCirclesSvg} />
          <div className={stylesHome.higlightProductImage}></div>
          <div className={stylesHome.higlightProductInfo}>
            <h2 className={typography.largeHeader}>zx9 speaker</h2>
            <p className={typography.baseText}>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <LinkAsButton 
              href='/zx9-speaker'
              text='see product'
              linkStyle='blackButton'
            />
          </div>
        </section>
        <section className={`borderRadius ${stylesHome.bgImageSection}`}>
          <h2 className={typography.smallHeader}>zx7 speaker</h2>
          <LinkAsButton 
            href='/zx7-speaker'
            text='see product'
            linkStyle='borderedButton'
          />
        </section>
        <section className={`borderRadius ${stylesHome.dividedSection}`}>
          <div className={`borderRadius ${stylesHome.dividedProductImage}`}></div>
          <div className={`borderRadius ${stylesHome.dividedProductInfo}`}>
            <h2 className={typography.smallHeader}>yx1 earphones</h2>
            <LinkAsButton 
              href='/yx1-earphones'
              text='see product'
              linkStyle='borderedButton'
            />
          </div>
        </section>
      </main>
      <About />
      <Footer />
    </>
  );
};

export default Home;
