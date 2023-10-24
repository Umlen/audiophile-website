import { type ComponentPropsWithoutRef, type FunctionComponent } from 'react';
import typography from '@/styles/typography.module.scss';
import stylesButtons from '@/styles/buttons.module.scss';

interface OrangeButtonProps extends ComponentPropsWithoutRef<'button'> {
  text: string;
}

const OrangeButtonWide: FunctionComponent<OrangeButtonProps> = ({
  text,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${stylesButtons.baseButton} ${stylesButtons.orangeButton} ${stylesButtons.fullWidthBtn} ${typography.upperCaseBold13px}`}
    >
      {text}
    </button>
  );
};

export default OrangeButtonWide;
