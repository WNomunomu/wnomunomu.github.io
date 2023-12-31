import styles from './Gear.module.css';

export const Gear = () => {
  return (
    <div className={styles['gear-container']}>
      <div className={styles['gear-rotate']}></div>
      <div className={styles['gear-rotate-left']}></div>
    </div>
  );
};