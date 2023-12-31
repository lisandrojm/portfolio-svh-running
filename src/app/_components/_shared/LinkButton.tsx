/* src/app/_components/_shared/LinkButton.tsx */

import React from 'react';
import CustomLink from '@/_components/_shared/CustomLink';
import { Button, Props as ButtonProps } from '../_ui/Button';

interface LinkButtonProps extends ButtonProps {
  href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children, ...buttonProps }) => {
  return (
    <CustomLink href={href}>
      <Button {...buttonProps}>{children}</Button>
    </CustomLink>
  );
};

export default LinkButton;
