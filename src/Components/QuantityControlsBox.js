import buttons from '@/styles/buttons.module.scss';
import productStyle from '@/styles/product.module.scss';

function QuantityControlsBox(props) {
    return (
        <div className={productStyle.quantityWrapper} id={props.id}>
            <button className={buttons.quantityControlButtons} onClick={props.minusBtnHandler}>
                -
            </button>
            <p>{props.quantity}</p>
            <button className={buttons.quantityControlButtons} onClick={props.plusBtnHandler}>
                +
            </button>
        </div>
    );
}

export default QuantityControlsBox;