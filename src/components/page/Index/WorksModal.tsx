import { FC } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

type Props = {
  images: string[]
  title: string
  text: string
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

export const WorksModal: FC<Props> = (props) => {

  const { images, title, text, setModalOpen } = props;

  return (
    <Modal isOpen={true} centered={true}>
      <ModalHeader toggle={() => setModalOpen(false)}>{title}</ModalHeader>
      <ModalBody>
        {text}
      </ModalBody>
    </Modal>
  );
};