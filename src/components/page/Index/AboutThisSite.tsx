import { FC } from 'react';
import type { MutableRefObject } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  aboutThisSiteRef: MutableRefObject<HTMLDivElement | null>
}

export const AboutThisSite: FC<Props> = (props) => {

  const { aboutThisSiteRef } = props;

  return (
    <div
      className="text-center vh-100 bg-body d-flex align-items-center justify-content-center"
      ref={aboutThisSiteRef}
    >
      <div className='mx-auto col-lg-6 col-sm-8 col-8'>
        <div className="fs-1 fw-bold">About this site</div>
        <div className="fs-5">
          <div>ここはエンジニアNomuのポートフォリオサイトです。</div>
          <div>これまでに手がけた制作物、身につけたスキルをまとめています。</div>
          <div>あなたに、私のことをもっと深く知ってほしいと思って作りました。</div>
          <div>どうぞお茶でも飲みながらごゆるりとサイト内を散策してください。</div>
        </div>
      </div>
    </div>
  );
};
