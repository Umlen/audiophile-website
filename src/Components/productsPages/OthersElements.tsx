import { type FunctionComponent } from 'react';
import { type OthersType } from '@/types/types';
import LinkAsButton from '../ui/LinkAsButton';
import typography from '@/styles/typography.module.scss';
import stylesProduct from '@/styles/product.module.scss';

interface OthersElementsProps {
  others: OthersType[];
  imageDimension: string;
}

const OthersElements: FunctionComponent<OthersElementsProps> = ({
  others,
  imageDimension,
}) => {
  return (
    <section
      className={`${stylesProduct.gapContainer} ${stylesProduct.othersSection}`}
    >
      <h2 className={typography.mediumHeader}>you may also like</h2>
      <div className={stylesProduct.othersContainer}>
        {others.map((product, key) => (
          <div key={key} className={stylesProduct.otherItemWrapper}>
            <div
              className={`borderRadius ${stylesProduct.othersImg}`}
              style={{
                backgroundImage: `url(${product.image[imageDimension]})`,
              }}
            ></div>
            <h3 className={typography.smallHeader}>{product.name}</h3>
            <LinkAsButton
              href={`/${product.slug}`}
              text="see product"
              linkStyle="orangeButton"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OthersElements;
