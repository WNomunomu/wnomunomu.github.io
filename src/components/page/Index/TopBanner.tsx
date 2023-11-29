import { Typography } from '@mui/material';

import styles from '../../../../styles/indexPage.module.css'

export const TopBanner = () => {

  return (
    <div className={styles['top-banner-container']}>
      <div className='container'>
        <div className='center'>
          <Typography
            variant='h3'
            component='div'
          >
            WNomunomu Lab!
          </Typography>
          <Typography
            variant='h5'
            component='div'
          >
            WNomunomuのポートフォリオへようこそ！
          </Typography>
        </div>
      </div>
    </div>
  );

};