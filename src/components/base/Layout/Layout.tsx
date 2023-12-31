import { ReactNode } from 'react';

import { Footer } from '../../page/Index/Footer';

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <main>{children}</main>
      <Footer />
    </>
  );
};
