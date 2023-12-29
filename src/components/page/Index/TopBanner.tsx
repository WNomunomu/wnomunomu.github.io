import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './indexPage.module.css'

import { Typewriter } from './Typewriter';

export const TopBanner = () => {
  return (
    <div className={styles['top-banner']}>
      <div className='const'>
        <div className="text-center text-light">
          <div className='fs-1'>Nomu</div>
          <div className='fs-1'>
            <Typewriter
              text="Welcome to Nomu's portfolio!"
              speed={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};