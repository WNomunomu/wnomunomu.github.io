import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './indexPage.module.css'

import { Typewriter } from './Typewriter';

import { Gear } from './Gear';

export const TopBanner = () => {
  return (
    <div
      className="vh-100 text-light d-flex justify-content-center align-items-center"
      style={{ backgroundColor: 'rgb(144, 202, 249)' }}
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
        <span className={`material-symbols-outlined mt-5 ${styles['scroll-down']}`} style={{ fontSize: '100px' }}>
          keyboard_double_arrow_down
        </span>
      </div>
    </div>
  );
};