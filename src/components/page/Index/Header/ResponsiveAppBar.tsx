import { FC, useState, useRef, useEffect } from 'react';
import type { MutableRefObject } from 'react';

export type Props = {
  topBannerRef: MutableRefObject<HTMLDivElement | null>
  aboutThisSiteRef: MutableRefObject<HTMLDivElement | null>
  aboutMeRef: MutableRefObject<HTMLDivElement | null>
  worksRef: MutableRefObject<HTMLDivElement | null>
  mySkillSetRef: MutableRefObject<HTMLDivElement | null>
  contactMeRef: MutableRefObject<HTMLDivElement | null>
}

export const scrollToComponent = (ref: MutableRefObject<HTMLDivElement | null>) => {
  if (ref.current == null) {
    return;
  }

  ref.current.scrollIntoView();
}


export const ResponsiveAppBar: FC<Props> = (props) => {

  const {
    topBannerRef, aboutThisSiteRef, aboutMeRef, worksRef, mySkillSetRef, contactMeRef,
  } = props;

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
      {/* <div id="pc">
        <div className="fixed-top">
          <div className="mx-auto" style={{ width: '70%' }}>
            <div className="d-flex flex-row justify-content-end">
              {navItems.map((items, index) => (
                <div className="p-3 fs-5" key={index} style={{ cursor: 'pointer' }}>
                  <div onClick={() => scrollToComponent(items.ref)}>{items.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      <div id="sm">
        <div className="fixed-top">
          <div className="row">
            <div className="mx-auto">
              <span
                className="material-symbols-outlined text-light p-3 col-2"
                onClick={() => setIsOpen(true)}
                style={{ cursor: 'pointer', fontSize: '2rem'}}
              >
                menu
              </span>
              { isOpen && (
                <div
                  className="d-inline-block position-absolute top-0 start-0 bg-light vh-100 p-3"
                  ref={menuRef}
                >
                  {navItems.map((items, index) => (
                    <div
                      className="p-3 fs-5" key={index} style={{ cursor: 'pointer' }}
                      onClick={() => scrollToComponent(items.ref)}
                    >
                      {items.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
