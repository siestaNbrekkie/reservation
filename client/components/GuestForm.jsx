import React from 'react';
import {
  GuestDropdown,
  GuestChoices,
  GuestButtons,
  CircleButton,
} from './style';

const GuestForm = () => {
  return (
    <GuestDropdown>
      <GuestChoices>
        <div style={{
          marginLeft: '18px',
          fontSize: 16,
          fontWeight: 'bold',
        }}
        >
          Adults
        </div>
        <GuestButtons>
          <CircleButton>-</CircleButton>
          <span style={{ textAlign: 'center', lineHeight: '30px' }}>
            1
          </span>
          <CircleButton>+</CircleButton>
        </GuestButtons>
      </GuestChoices>
      <GuestChoices>
        Children
      </GuestChoices>
      <GuestChoices>
        Infants
      </GuestChoices>
      <div>Min guest notice</div>
      <div>Close</div>
    </GuestDropdown>
  );
};

export default GuestForm;
