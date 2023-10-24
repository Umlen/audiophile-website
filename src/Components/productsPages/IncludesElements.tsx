import { type FunctionComponent } from 'react';
import { type IncludesType } from '@/types/types';
import typography from '@/styles/typography.module.scss';
import stylesProduct from '@/styles/product.module.scss';

interface IncludesElementsProps {
  includes: IncludesType[];
}

const IncludesElements: FunctionComponent<IncludesElementsProps> = ({
  includes,
}) => {
  return (
    <section
      className={`${stylesProduct.gapContainer} ${stylesProduct.includesSection}`}
    >
      <h2 className={typography.mediumHeader}>in the box</h2>
      <div>
        {includes.map((item, key) => (
          <p key={key}>
            <span
              className={`${typography.baseText} ${typography.highlightText} ${stylesProduct.marginRight}`}
            >
              {item.quantity}x
            </span>
            <span className={typography.baseText}>{item.item}</span>
          </p>
        ))}
      </div>
    </section>
  );
};

export default IncludesElements;
