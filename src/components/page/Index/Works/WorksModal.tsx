import { FC } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import { WorksCarousel } from './WorksCarousel';

type Props = {
  images: string[]
  title: string
  text: string
  tech: string[]
  githubLink: string
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

export const WorksModal: FC<Props> = (props) => {

  const { images, title, text, tech, githubLink, setModalOpen } = props;

  return (
    <Modal isOpen={true} centered={true}>
      <ModalHeader toggle={() => setModalOpen(false)}>{title}</ModalHeader>
      <ModalBody>
        <WorksCarousel images={images} />
        <div className="mt-3">{text}</div>
        <div className="mt-3">使用言語・技術</div>
        <ul>
          {tech.map((tech, index) => <li key={index}>{tech}</li>)}
        </ul>
        <div className="d-flex align-items-center">
          <i style={{ fontSize: '30px' }} className="devicon-github-original colored pe-2" />
          <a className="link-underline link-underline-opacity-0" href={githubLink} target="_blank">GitHub repository</a>
        </div>
      </ModalBody>
    </Modal>
  );
};