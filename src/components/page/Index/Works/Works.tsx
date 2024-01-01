import { useState, FC } from 'react';
import type { MutableRefObject } from 'react';

import { WorksModal } from './WorksModal';

import 'bootstrap/dist/css/bootstrap.min.css';

type Work = {
  mainImage: string,
  images: string[],
  title: string,
  text: string,
  tech: string[],
}

type WorksCardProps = {
  work: Work,
}

type WorksProps = {
  worksRef: MutableRefObject<HTMLDivElement | null>
}

const works: Work[] = [
  {
    mainImage: '/works/Marronnier/picture1.jpg',
    images: [
      '/works/Marronnier/picture1.jpg',
      '/works/Marronnier/picture2.jpg',
      '/works/Marronnier/picture3.jpg',
      '/works/Marronnier/picture4.jpg',
      '/works/Marronnier/picture5.jpg',
    ],
    title: '蛟龍祭入場管理システムMarronnier',
    text: '県立前橋高校在学中に開発した文化祭入場管理システムです。入場管理だけでなく、チケットの生成や会場内の混雑状況を計算し地図に表示することもできます。文化祭当日は合計4000人以上の入場管理を行いました。',
    tech: ['HTML・CSS', 'JS', 'Python', 'Django', 'MySQL', 'GoogleCloud']
  },
  {
    mainImage: '/works/Portfolio/picture1.jpg',
    images: [
      '/works/Portfolio/picture1.jpg',
      '/works/Portfolio/picture2.jpg',
      '/works/Portfolio/picture3.jpg',
      '/works/Portfolio/picture4.jpg',
    ],
    title: "Nomu's portfolio",
    text: 'このホームページです。Next.jsを用いて、レスポンシブで動的な楽しいサイトに仕上げました。GitHub Pagesを用いて公開しています。CSSアニメーションを用いて作成したトップバナーの歯車のアニメーションがちょっとした自慢です。',
    tech: ['HTML・CSS', 'JS', 'React', 'Next.js', 'Git']
  },
];

const WorksCard = (props: WorksCardProps) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const { mainImage, images, title, text, tech } = props.work;

  return (
    <>
      <div className="col-lg-4 col-md-6 my-4">
        <div className="card position-static h-100">
          <div className="h-75">
            <img src={mainImage} className="card-img-top" alt={mainImage} />
          </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title flex-grow-1">{title}</h5>
            <button
              className='button fs-6 text-light border-0 py-2 px-3 rounded align-items-end mx-auto'
              type="button"
              onClick={() => setModalOpen(true)}
            >
                詳細
            </button>
          </div>
        </div>
        {isModalOpen &&
          <WorksModal
            images={images}
            title={title}
            text={text}
            tech={tech}
            setModalOpen={setModalOpen}
          />
        }
      </div>
    </>
  );
};

export const Works: FC<WorksProps> = (props) => {
  const { worksRef } = props;

  return (
    <div
      className="text-center bg-body py-5"
      ref={worksRef}
    >
      <div className="mx-auto w-75">
        <div className="fs-1 fw-bold">Works</div>
        <div className="fs-5">こだわりの制作物を紹介します。ぜひご覧になってください。</div>
        <div className="row">
          {works.map((work, index) => <WorksCard key={index} work={work} />)}
        </div>
      </div>
    </div>
  );
};
