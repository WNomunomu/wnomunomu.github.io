import { useRef } from 'react';

import { Header } from './Header';
import { TopBanner } from './TopBanner/TopBanner';
import { AboutThisSite } from './AboutThisSite';
import { AboutMe } from './AboutMe';
import { Works } from './Works/Works';
import { MySkillSet } from './MySkillSet';
import { ContactMe } from './ContactMe';
import { Footer } from './Footer';

export const Index = () => {

  const topBannerRef = useRef<null | HTMLDivElement>(null);
  const aboutThisSiteRef = useRef<null | HTMLDivElement>(null);
  const aboutMeRef = useRef<null | HTMLDivElement>(null);
  const worksRef = useRef<null | HTMLDivElement>(null);
  const mySkillSetRef = useRef<null | HTMLDivElement>(null);
  const contactMeRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <Header
        topBannerRef={topBannerRef}
        aboutThisSiteRef={aboutThisSiteRef}
        aboutMeRef={aboutMeRef}
        worksRef={worksRef}
        mySkillSetRef={mySkillSetRef}
        contactMeRef={contactMeRef}
      />
      <TopBanner
        topBannerRef={topBannerRef}
        aboutThisSiteRef={aboutThisSiteRef}
      />
      <AboutThisSite
        aboutThisSiteRef={aboutThisSiteRef}
      />
      <AboutMe
        aboutMeRef={aboutMeRef}
      />
      <Works
        worksRef={worksRef}
      />
      <MySkillSet
        mySkillSetRef={mySkillSetRef}
      />
      <ContactMe
        contactMeRef={contactMeRef}
      />
      <Footer />
    </>
  );
};