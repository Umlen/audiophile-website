import { FunctionComponent } from 'react';
import typography from '@/styles/typography.module.scss';
import stylesButtons from '@/styles/buttons.module.scss';

type OrangeButtonProps = {
  clickHandler: () => void;
  text: string;
};

const OrangeButton: FunctionComponent<OrangeButtonProps> = ( {clickHandler, text} ) => {
  return (
    <button 
      onClick={clickHandler} 
      className={`${stylesButtons.baseButton} ${stylesButtons.orangeButton} ${typography.upperCaseBold13px}`}
    >
      {text}
    </button>
  );
};

export default OrangeButton;
