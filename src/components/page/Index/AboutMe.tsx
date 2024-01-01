import { FC } from 'react';
import type { MutableRefObject } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './indexPage.module.css'

type Props = {
  aboutMeRef: MutableRefObject<HTMLDivElement | null>
}

export const AboutMe: FC<Props> = (props) => {
  
  const { aboutMeRef } = props;

  return (
    <div
      className="vh-100 bg-body-secondary d-flex align-items-center justify-content-center"
      ref={aboutMeRef}
    >
      <div className='col-10 col-sm-10 col-md-8 col-xl-6'>
        <div className="fs-1 fw-bold text-center">About me</div>
        <div className="row mx-auto">
          <div className="col-lg-4 py-2">
            <img className="img-thumbnail" src='profile_icon.jpg' alt="Profile" />
          </div>
          <div className="col-lg-8 py-2">  
            <div className="fs-5">
              <div className="fs-2">Nomu</div>
              <div className='fs-4'>ソフトウェアエンジニア</div>
              <div className='fs-5'>Minecraftのコマンドをきっかけにプログラミングに沼る。主にTypeScriptを書いている。趣味は音楽と旅行。根っからの理系だが、最近になって文系に憧れ始めている。</div>
              <div className="d-flex align-items-center py-4">
                <i style={{ fontSize: '40px' }} className="devicon-github-original colored pe-2" />
                <a className="link-underline link-underline-opacity-0" href="https://github.com/WNomunomu" target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
