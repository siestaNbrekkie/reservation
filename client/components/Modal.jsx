import React from 'react';
import PropTypes from 'prop-types';

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
      <div>
        MODAL
        <button
          type="button"
          onClick={(event) => onClose(event)}
        >
          Close
        </button>
      </div>
    );
  }
}

Modal.defaultProps = {
  showModal: false,
  onClose: () => {},
};

Modal.propTypes = {
  showModal: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
