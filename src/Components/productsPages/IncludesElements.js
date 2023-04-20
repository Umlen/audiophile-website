import typography from '@/styles/typography.module.scss';
import productStyle from '@/styles/product.module.scss';

function IncludesElements(props) {
  const elements = props.includes.map((item, key) => {
    return (
      <p key={key}>
        <span className={`${typography.baseText} ${typography.highlightText} ${productStyle.marginRight}`}>
          {item.quantity}x
        </span>
        <span className={typography.baseText}>
          {item.item}
        </span>
      </p>
    );
  });

  return (
    <section className={`${productStyle.gapContainer} ${productStyle.includesSection}`}>
      <h2 className={typography.mediumHeader}>in the box</h2>
      <div>
        {elements}
      </div>
    </section>
  );
}

export default IncludesElements;