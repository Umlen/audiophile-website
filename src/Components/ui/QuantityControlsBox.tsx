import { type FunctionComponent } from 'react';
import stylesButtons from '@/styles/buttons.module.scss';
import stylesProduct from '@/styles/product.module.scss';

interface ControlBoxProps {
  id: string;
  quantity: number;
  class: string;
  minusBtnHandler: () => void;
  plusBtnHandler: () => void;
}

const QuantityControlsBox: FunctionComponent<ControlBoxProps> = (props) => {
  return (
    <div
      className={`${props.class} ${stylesProduct.baseQuantityWrapper}`}
      id={props.id}
    >
      <button
        className={stylesButtons.quantityControlButtons}
        onClick={props.minusBtnHandler}
      >
        -
      </button>
      <p>{props.quantity}</p>
      <button
        className={stylesButtons.quantityControlButtons}
        onClick={props.plusBtnHandler}
      >
        +
      </button>
    </div>
  );
};

export default QuantityControlsBox;
