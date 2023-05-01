import typography from '@/styles/typography.module.scss';
import completedOrder from '@/styles/completedOrder.module.scss';

function ExpandButton(props) {
  if (props.isExpand) {
    return (
      <p className={`${typography.baseText} ${completedOrder.expandButton}`} onClick={props.expandToggler}>
        View less
      </p> 
    );
  } else if (!props.isExpand) {
    return (
      <p className={`${typography.baseText} ${completedOrder.expandButton}`} onClick={props.expandToggler}>
        and {props.numberOfProducts - 1} other item(s)
      </p> 
    );
  }
}

export default ExpandButton;