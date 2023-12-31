import { FC } from 'react';
import type { MutableRefObject } from 'react';

import { scrollToComponent } from '../Header/ResponsiveAppBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './TopBanner.module.css'

import { Typewriter } from './Typewriter';

import { Gear } from './Gear';

type Props = {
  topBannerRef: MutableRefObject<HTMLDivElement | null>
  aboutThisSiteRef: MutableRefObject<HTMLDivElement | null>
}

export const TopBanner: FC<Props> = (props) => {

  const { topBannerRef, aboutThisSiteRef } = props;

  return (
    <div
      className="vh-100 text-light d-flex justify-content-center align-items-center"
      style={{ backgroundColor: 'rgb(144, 202, 249)' }}
      ref={topBannerRef}
    >
      <div className="text-center">
        <div className='fw-bold' style={{ fontSize: '4.0rem' }}>
          <Typewriter
            text="Welcome to Nomu's portfolio!"
            speed={100}
          />
        </div>
        <div className="d-flex justify-content-center fs-1">
          <Gear />
        </div>
        <span
          className={`material-symbols-outlined mt-5 ${styles['scroll-down']}`}
          style={{ fontSize: '100px', cursor: 'pointer' }}
          onClick={() => scrollToComponent(aboutThisSiteRef)}
        >
          keyboard_double_arrow_down
        </span>
      </div>
    </div>
  );
};