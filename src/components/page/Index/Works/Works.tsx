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
    mainImage: '/works/Marronnier/第二次GPA資料/スライド1.jpg',
    images: [
      '/works/Marronnier/第二次GPA資料/スライド1.jpg',
      '/works/Marronnier/第二次GPA資料/スライド8.jpg',
      '/works/Marronnier/第二次GPA資料/スライド10.jpg',
      '/works/Marronnier/第二次GPA資料/スライド11.jpg',
      '/works/Marronnier/第二次GPA資料/スライド16.jpg',
    ],
    title: '蛟龍祭入場管理システムMarronnier',
    text: '県立前橋高校在学中に開発した文化祭入場管理システム。入場管理だけでなく、チケットの生成や会場内の混雑状況を計算し地図に表示することもできる。',
    tech: ['HTML・CSS', 'JS', 'Python・Django', 'MySQL', 'GCP']
  },
  {
    mainImage: '/works/Marronnier/第二次GPA資料/スライド1.jpg',
    images: [
      '/works/Marronnier/第二次GPA資料/スライド1.jpg',
      '/works/Marronnier/第二次GPA資料/スライド8.jpg',
      '/works/Marronnier/第二次GPA資料/スライド10.jpg',
      '/works/Marronnier/第二次GPA資料/スライド11.jpg',
      '/works/Marronnier/第二次GPA資料/スライド16.jpg',
    ],
    title: '蛟龍祭入場管理システムMarronnier',
    text: '県立前橋高校在学中に開発した文化祭入場管理システム。入場管理だけでなく、チケットの生成や会場内の混雑状況を計算し地図に表示することもできる。',
    tech: ['HTML・CSS', 'JS', 'Python・Django', 'MySQL', 'GCP']
  },
  {
    mainImage: '/works/Marronnier/第二次GPA資料/スライド1.jpg',
    images: [
      '/works/Marronnier/第二次GPA資料/スライド1.jpg',
      '/works/Marronnier/第二次GPA資料/スライド8.jpg',
      '/works/Marronnier/第二次GPA資料/スライド10.jpg',
      '/works/Marronnier/第二次GPA資料/スライド11.jpg',
      '/works/Marronnier/第二次GPA資料/スライド16.jpg',
    ],
    title: '蛟龍祭入場管理システムMarronnier',
    text: '県立前橋高校在学中に開発した文化祭入場管理システム。入場管理だけでなく、チケットの生成や会場内の混雑状況を計算し地図に表示することもできる。',
    tech: ['HTML・CSS', 'JS', 'Python・Django', 'MySQL', 'GCP']
  },
  {
    mainImage: '/works/Marronnier/第二次GPA資料/スライド1.jpg',
    images: [
      '/works/Marronnier/第二次GPA資料/スライド1.jpg',
      '/works/Marronnier/第二次GPA資料/スライド8.jpg',
      '/works/Marronnier/第二次GPA資料/スライド10.jpg',
      '/works/Marronnier/第二次GPA資料/スライド11.jpg',
      '/works/Marronnier/第二次GPA資料/スライド16.jpg',
    ],
    title: '蛟龍祭入場管理システムMarronnier',
    text: '県立前橋高校在学中に開発した文化祭入場管理システム。入場管理だけでなく、チケットの生成や会場内の混雑状況を計算し地図に表示することもできる。',
    tech: ['HTML・CSS', 'JS', 'Python・Django', 'MySQL', 'GCP']
  },
];

const WorksCard = (props: WorksCardProps) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const { mainImage, images, title, text, tech } = props.work;

  return (
    <>
      <div className="col-md-4 my-4">
        <div className="card">
          <img src={mainImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <button
              className='button fs-6 text-light border-0 py-2 px-3 rounded'
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
      className="text-center bg-body py-4"
      ref={worksRef}
    >
      <div className="mx-auto" style={{ width: '70%' }}>
        <div className="fs-1 fw-bold">Works</div>
        <div className="fs-5">作品など</div>
        <div className="row">
          {works.map((work, index) => <WorksCard key={index} work={work} />)}
        </div>
      </div>
    </div>
  );
};
