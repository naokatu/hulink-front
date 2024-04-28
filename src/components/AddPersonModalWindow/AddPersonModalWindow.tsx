import { type FC } from 'react'

import Modal from 'react-modal'

import { type InputsLinkUser } from '@/types/inputsLinkUser'

import { ModalWindowForm } from '../ModalWindowForm'

interface AddPersonModalWindowProps {
  isOpen: boolean
  onClose: () => void
  buttonType: string | null
  linkUser: Array<string> | null
  addPersonSubmit: (data: InputsLinkUser) => void
  selectPersonSubmit: (data: InputsLinkUser) => void
}

export const AddPersonModalWindow: FC<AddPersonModalWindowProps> = ({
  addPersonSubmit,
  buttonType,
  linkUser,
  isOpen,
  onClose,
  selectPersonSubmit,
}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '25rem', // モーダルウィンドウの幅を指定
      height: '30rem', // モーダルウィンドウの高さを指定
    },
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="add Person Modal"
        ariaHideApp={false}
        style={customStyles}
      >
        <ModalWindowForm
          onClose={onClose}
          buttonType={buttonType}
          linkUser={linkUser}
          addPersonSubmit={addPersonSubmit}
          selectPersonSubmit={selectPersonSubmit}
        />
      </Modal>
    </>
  )
}
