import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { showModal } = this.props;

    if (!showModal) {
      return null;
    }

    return (
      <div>
        MODAL
      </div>
    );
  }
}

Modal.defaultProps = {
  showModal: false,
};

Modal.propTypes = {
  showModal: PropTypes.bool,
};

export default Modal;
