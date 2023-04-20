import about from '@/styles/about.module.scss';
import typography from '@/styles/typography.module.scss';

function About() {
  return (
    <div role='complementary' className={`lrPaddingContainer ${about.about}`}>
      <div className={`borderRadius ${about.image}`}></div>
      <div className={`borderRadius ${about.text}`}>
        <h2 className={typography.bigHeader}>
          Bringing you the <span className={typography.highlightText}>best</span> audio gear
        </h2>
        <p className={typography.baseText}>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones,
          earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
          rooms available for you to browse and experience a wide range of our products. Stop by our store
          to meet some of the fantastic people who make Audiophile the best place to buy your portable
          audio equipment.
        </p>
      </div>
    </div>
  );
}

export default About;