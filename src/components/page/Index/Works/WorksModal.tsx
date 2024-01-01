import { FC } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import { WorksCarousel } from './WorksCarousel';

type Props = {
  images: string[]
  title: string
  text: string
  tech: string[]
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

export const WorksModal: FC<Props> = (props) => {

  const { images, title, text, tech, setModalOpen } = props;

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
      </ModalBody>
    </Modal>
  );
};