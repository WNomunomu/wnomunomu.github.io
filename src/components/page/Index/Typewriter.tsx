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
      if (currentIndex < text.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }, speed);
  });

  return (
    <span>
      {text.substring(0, currentIndex)}
      <span className={styles.cursor}>{' ▎'}</span>
    </span>
  )

};