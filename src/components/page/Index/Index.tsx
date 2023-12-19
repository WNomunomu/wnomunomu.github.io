import { Typography } from '@mui/material';

import { TopBanner } from './TopBanner';
import { AboutThisSite } from './AboutThisSite';
import { AboutMe } from './AboutMe';
import { Works } from './Works';
import { MySkillSet } from './MySkillSet';
import { ContactMe } from './ContactMe';

import styles from './indexPage.module.css'

export const Index = () => {
  return (
    <>
      <TopBanner />
      <AboutThisSite />
      <AboutMe />
      <Works />
      <MySkillSet />
      <ContactMe />
    </>
  );
};