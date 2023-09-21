import { HTMLProps, ReactNode } from 'react';

interface MainLayoutProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export function MainLayout(props: MainLayoutProps) {
  const { children, ...rest } = props;

  return (
    <div
      {...rest}
    >
      {children}
    </div>
  );
}
