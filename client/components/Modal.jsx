import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalDiv,
  ModalBody,
  CloseModal,
  FacebookDiv,
  GoogleDiv,
  EmailDiv,
  Divider,
  Lines,
} from './style';

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
            <img
              alt="X button"
              style={{ width: '12px', height: '12px' }}
              src="https://image.flaticon.com/icons/svg/1828/1828778.svg"
            />
          </CloseModal>
          <div
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '5px',
            }}
          >
            Sign up to book
          </div>
          <div
            style={{
              fontSize: '14px',
              marginBottom: '8px',
            }}
          >
            You&apos;re moments away from booking your stay.
          </div>
          <FacebookDiv>
            <img
              alt="Facebook logo"
              style={{ width: '16px', height: '16px', marginRight: '5px' }}
              src="https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Facebook-Logo.png"
            />
            Continue with Facebook
          </FacebookDiv>
          <GoogleDiv>
            <img
              alt="Google logo"
              style={{ width: '16px', height: '16px', marginRight: '5px' }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
            />
            Continue with Google
          </GoogleDiv>
          <Divider>
            <Lines />
            <div style={{ paddingLeft: '16px', paddingRight: '16px' }}>or</div>
            <Lines />
          </Divider>
          <div
            style={{
              borderBottom: '1px solid #E4E7E7',
              paddingTop: '9px',
              paddingBottom: '18px',
            }}
          >
            <EmailDiv>
              <svg
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{
                  height: '18px',
                  width: '18px',
                  display: 'block',
                  fill: 'currentcolor',
                  marginRight: '5px',
                }}
              >
                <path
                  d="m22.5 4h-21c-.83 0-1.5.67-1.5 1.51v12.99c0 .83.67 1.5 1.5 1.5h20.99a1.5 1.5 0 0 0 1.51-1.51v-12.98c0-.84-.67-1.51-1.5-1.51zm.5 14.2-6.14-7.91 6.14-4.66v12.58zm-.83-13.2-9.69 7.36c-.26.2-.72.2-.98 0l-9.67-7.36h20.35zm-21.17.63 6.14 4.67-6.14 7.88zm.63 13.37 6.3-8.1 2.97 2.26c.62.47 1.57.47 2.19 0l2.97-2.26 6.29 8.1z"
                  fillRule="evenodd"
                />
              </svg>
              Sign up with Email
            </EmailDiv>
          </div>
          <div
            style={{
              marginTop: '12px',
            }}
          >
            Already have an Airbnb account?
            <span
              style={{
                color: '#008489',
              }}
            >
              {' Log in'}
            </span>
          </div>
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
