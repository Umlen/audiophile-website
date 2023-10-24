import { type ComponentPropsWithoutRef, type FunctionComponent } from 'react';
import typography from '@/styles/typography.module.scss';
import stylesButtons from '@/styles/buttons.module.scss';

interface OrangeButtonProps extends ComponentPropsWithoutRef<'button'> {
  text: string;
}

const OrangeButton: FunctionComponent<OrangeButtonProps> = ({
  text,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${stylesButtons.baseButton} ${stylesButtons.orangeButton} ${typography.upperCaseBold13px}`}
    >
      {text}
    </button>
  );
};

export default OrangeButton;
