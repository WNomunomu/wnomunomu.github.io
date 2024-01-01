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
      <div className='mx-auto col-10 col-sm-10 col-md-8 col-xl-6'>
        <div className="fs-1 fw-bold">About this site</div>
        <div className="fs-5">
          <div>エンジニアNomuのポートフォリオサイトへようこそ。</div>
          <div>ここでは、私がこれまでに手がけた制作物や</div>
          <div>身につけたスキルを紹介しています。</div>
          <div>お茶を片手に、どうぞごゆっくりとサイト内をご覧ください。</div>
        </div>
      </div>
    </div>
  );
};
