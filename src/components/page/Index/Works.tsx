import { useState } from 'react';

import { WorksModal } from './WorksModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './indexPage.module.css';

type Work = {
  mainImage: string,
  images: string[],
  title: string,
  text: string,
}

type Props = {
  work: Work,
}

const works: Work[] = [
  {
    mainImage: '/works/Marronnier/Marronnier.jpg',
    images: [],
    title: '蛟龍祭入場管理システムMarronnier',
    text: '',
  }
];

const WorksCard = (props: Props) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const { mainImage, images, title, text } = props.work;

  return (
    <>
      <div className="card" style={{width: '30%'}}>
        <img src={mainImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <button onClick={() => setModalOpen(true)} className="btn btn-primary">詳細</button>
        </div>
      </div>
      { isModalOpen && 
        <WorksModal
          images={images}
          title={title}
          text={text}
          setModalOpen={setModalOpen}
        />
      }
    </>
  );
};

export const Works = () => {
  return (
    <div className="text-center bg-body vh-100">
      <div className="mx-auto" style={{width: '70%'}}>
        <div className="fs-1 fw-bold mt-3">Works</div>
        <div className="fs-5">作品など</div>
        {works.map((work, index) => <WorksCard key={index} work={work} />)}
      </div>
    </div>
  );
};
