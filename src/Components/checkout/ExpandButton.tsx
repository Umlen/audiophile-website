import { type FunctionComponent } from 'react';
import typography from '@/styles/typography.module.scss';
import stylesCompletedOrder from '@/styles/completedOrder.module.scss';

interface ExpandButtonProps {
  isExpand: boolean;
  numberOfProducts: number;
  expandToggler: () => void;
}

const ExpandButton: FunctionComponent<ExpandButtonProps> = (props) => {
  const { isExpand, numberOfProducts, expandToggler } = props;

  return (
    <p
      className={`${typography.baseText} ${stylesCompletedOrder.expandButton}`}
      onClick={expandToggler}
    >
      {isExpand ? 'View less' : `and ${numberOfProducts - 1} other item(s)`}
    </p>
  );
};

export default ExpandButton;
