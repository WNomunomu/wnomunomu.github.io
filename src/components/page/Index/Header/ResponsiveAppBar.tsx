import { FC, useState, useRef, useEffect } from 'react';
import type { MutableRefObject } from 'react';

import { useHeaderScroll } from './responsive-app-bar-utils';
import { useMediaQuery } from './responsive-app-bar-utils';

import styles from './ResponsiveAppBar.module.css'

export type Props = {
  topBannerRef: MutableRefObject<HTMLDivElement | null>
  aboutThisSiteRef: MutableRefObject<HTMLDivElement | null>
  aboutMeRef: MutableRefObject<HTMLDivElement | null>
  worksRef: MutableRefObject<HTMLDivElement | null>
  mySkillSetRef: MutableRefObject<HTMLDivElement | null>
  contactMeRef: MutableRefObject<HTMLDivElement | null>
}

type navItemsType = {
  title: string;
  ref: MutableRefObject<HTMLDivElement | null>;
}

type AppBarProps = {
  navItems: navItemsType[]
  headerStyle: string
}

export const scrollToComponent = (ref: MutableRefObject<HTMLDivElement | null>) => {
  if (ref.current == null) {
    return;
  }

  ref.current.scrollIntoView();
}

const DesktopAppBar: FC<AppBarProps> = (props) => {
  const { navItems, headerStyle } = props;

  return (
    <div className={`${headerStyle} text-light w-100`}>
      <div className="d-flex flex-row justify-content-end justify-content-center">
        {navItems.map((items, index) => (
          <div
            className="p-3 fs-5 user-select-none"
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={() => scrollToComponent(items.ref)}
          >
            <div>{items.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileAppBar: FC<AppBarProps> = (props) => {
  const { navItems, headerStyle } = props;

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={headerStyle}>
      <div className="mx-auto">
        <span
          className="material-symbols-outlined text-light p-3 col-2"
          onClick={() => setIsOpen(true)}
          style={{ cursor: 'pointer', fontSize: '2rem' }}
        >
          menu
        </span>
        {isOpen && (
          <div
            className="d-inline-block position-absolute top-0 start-0 bg-light vh-100 p-3 z-1"
            ref={menuRef}
          >
            {navItems.map((items, index) => (
              <div
                className="p-3 fs-5 user-select-none" key={index} style={{ cursor: 'pointer' }}
                onClick={() => scrollToComponent(items.ref)}
              >
                {items.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};



export const ResponsiveAppBar: FC<Props> = (props) => {

  const {
    topBannerRef, aboutThisSiteRef, aboutMeRef, worksRef, mySkillSetRef, contactMeRef,
  } = props;

  const isDesktop: boolean = useMediaQuery('(min-width: 768px)')
  const isHeaderDefault = useHeaderScroll();

  const headerStyle = isHeaderDefault ? styles['header-default'] : styles['header-fixed'];

  const navItems = [
    { title: 'Top', ref: topBannerRef },
    { title: 'About this site', ref: aboutThisSiteRef },
    { title: 'About me', ref: aboutMeRef },
    { title: 'Works', ref: worksRef },
    { title: 'SkillSet', ref: mySkillSetRef },
    { title: 'Contact me', ref: contactMeRef },
  ]

  return (
    <>
      { isDesktop
        ?
          <DesktopAppBar
            navItems={navItems}
            headerStyle={headerStyle}
          />
        :
          <MobileAppBar
            navItems={navItems}
            headerStyle={headerStyle}
          />
      }
    </>
  );
};
