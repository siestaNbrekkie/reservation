import React from 'react';
import {
  GuestDropdown,
  GuestChoices,
  TypeOfGuest,
  GuestButtons,
  CircleButton,
} from './style';

const GuestForm = (props) => {
  const { maxGuest } = props;

  return (
    <GuestDropdown>
      <GuestChoices>
        <TypeOfGuest>
          Adults
        </TypeOfGuest>
        <GuestButtons>
          <CircleButton>-</CircleButton>
          <span style={{ textAlign: 'center', lineHeight: '30px' }}>
            1
          </span>
          <CircleButton>+</CircleButton>
        </GuestButtons>
      </GuestChoices>
      <GuestChoices>
        <TypeOfGuest>
          Children
        </TypeOfGuest>
        <GuestButtons>
          <CircleButton>-</CircleButton>
          <span style={{ textAlign: 'center', lineHeight: '30px' }}>
            1
          </span>
          <CircleButton>+</CircleButton>
        </GuestButtons>
      </GuestChoices>
      <GuestChoices>
        <TypeOfGuest>
          Infants
        </TypeOfGuest>
        <GuestButtons>
          <CircleButton>-</CircleButton>
          <span style={{ textAlign: 'center', lineHeight: '30px' }}>
            1
          </span>
          <CircleButton>+</CircleButton>
        </GuestButtons>
      </GuestChoices>
      <div style={{
        fontSize: 10,
      }}
      >
        {maxGuest} guests maximum. Infants don’t count toward the number of guests.
      </div>
      <div>Close</div>
    </GuestDropdown>
  );
};

export default GuestForm;
