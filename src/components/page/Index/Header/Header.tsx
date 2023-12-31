import { FC } from 'react';
import type { MutableRefObject } from "react";

import { ResponsiveAppBar, type Props } from "./ResponsiveAppBar";

export const Header: FC<Props> = (props) => {
  return (
    <>
      <ResponsiveAppBar
        topBannerRef={props.topBannerRef}
        aboutThisSiteRef={props.aboutThisSiteRef}
        aboutMeRef={props.aboutMeRef}
        worksRef={props.worksRef}
        mySkillSetRef={props.mySkillSetRef}
        contactMeRef={props.contactMeRef}
      />
    </>
  )
};