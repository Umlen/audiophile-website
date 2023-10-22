import Link from "next/link";
import { FunctionComponent } from 'react';
import { LinkPropsType } from '@/types/types';
import typography from '@/styles/typography.module.scss';
import stylesButtons from '@/styles/buttons.module.scss';

interface LinkAsButtonProps extends LinkPropsType {
  linkStyle: string;
}

const LinkAsButton: FunctionComponent<LinkAsButtonProps> = ( {href, text, linkStyle} ) => {
  const className = `${stylesButtons.baseButton} ${stylesButtons[linkStyle]} ${typography.upperCaseBold13px}`
  return (
    <Link 
      href={href} 
      className={className}
    >
      {text}
    </Link>
  );
};

export default LinkAsButton;
