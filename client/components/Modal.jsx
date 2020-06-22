import React from 'react';
import PropTypes from 'prop-types';
import { ModalDiv, ModalBody, CloseModal } from './style';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { showModal, onClose } = this.props;

    if (!showModal) {
      return null;
    }

    return (
      <ModalDiv>
        <ModalBody>
          <CloseModal
            onClick={(event) => onClose(event)}
          >
            {/* <img
            alt="X button"
            style={{ width: '15px', height: '15px' }}
            src="https://image.flaticon.com/icons/svg/1828/1828778.svg"
          /> */}
          x
          </CloseModal>
        MODAL
        </ModalBody>
      </ModalDiv>
    );
  }
}

Modal.defaultProps = {
  showModal: false,
  onClose: () => { },
};

Modal.propTypes = {
  showModal: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
