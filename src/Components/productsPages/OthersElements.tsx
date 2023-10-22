import Link from 'next/link';
import { FunctionComponent } from 'react';
import { OthersType } from '@/types/types';
import typography from '@/styles/typography.module.scss';
import stylesButtons from '@/styles/buttons.module.scss';
import stylesProduct from '@/styles/product.module.scss';

type OthersElementsType = {
  others: OthersType[];
  imageDimension: string;
};

const OthersElements: FunctionComponent<OthersElementsType> = ( {others, imageDimension} ) => {
  return (
    <section className={`${stylesProduct.gapContainer} ${stylesProduct.othersSection}`}>
      <h2 className={typography.mediumHeader}>you may also like</h2>
      <div className={stylesProduct.othersContainer}>
        {
          others.map((item, key) => (
            <div key={key} className={stylesProduct.otherItemWrapper}>
              <div
                className={`borderRadius ${stylesProduct.othersImg}`}
                style={{ backgroundImage: `url(${item.image[imageDimension]})` }}
              >
              </div>
              <h3 className={typography.smallHeader}>{item.name}</h3>
              <Link
                href={`/${item.slug}`}
                className={`${stylesButtons.baseButton} ${stylesButtons.orangeButton} ${typography.upperCaseBold13px}`}
              >
                see product
              </Link>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default OthersElements;
