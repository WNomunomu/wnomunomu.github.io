import { FC, useState, useEffect } from 'react';

import styles from './Typewriter.module.css';

type Props = {
  text: string
  speed: number
};

export const Typewriter: FC<Props> = (props) => {
  const { text, speed } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentIndex < text.length) {
        setCurrentIndex(currentIndex + 1);
      }
    }, speed);
  });

  return (
    <span className={styles['typewriter-text']}>
      {text.substring(0, currentIndex)}
      <span className={styles.cursor}>{'|'}</span>
    </span>
  )

};