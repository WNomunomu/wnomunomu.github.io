import { ReactNode } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

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
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
