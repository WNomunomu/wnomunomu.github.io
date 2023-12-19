import { Typography } from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './indexPage.module.css'

export const TopBanner = () => {

  return (
    <div className={styles['top-banner-container']}>
      <div className='container'>
        <div className="text-center text-light">
          <div>WNomunomu</div>
          <div>WNomunomuのポートフォリオ</div>
        </div>
      </div>
    </div>
  );

};