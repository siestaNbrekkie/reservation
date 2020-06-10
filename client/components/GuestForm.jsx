import React from 'react';
import {
  GuestDropdown,
  GuestChoices,
  TypeOfGuest,
  GuestButtons,
  CircleButton,
  CloseButton,
} from './style';

const GuestForm = (props) => {
  const { numOfGuests, maxGuest, onClick, addGuests, subtractGuests } = props;

  return (
    <GuestDropdown>
      <GuestChoices>
        <TypeOfGuest>
          <span style={{ textAlign: 'center', lineHeight: '30px', fontWeight: 'bold' }}>
            Adults
          </span>
        </TypeOfGuest>
        <GuestButtons>
          <CircleButton onClick={subtractGuests}>-</CircleButton>
          <span style={{ textAlign: 'center', lineHeight: '30px' }}>
            {numOfGuests}
          </span>
          <CircleButton onClick={addGuests}>+</CircleButton>
        </GuestButtons>
      </GuestChoices>
      <GuestChoices>
        <TypeOfGuest>
          <span style={{ fontWeight: 'bold' }}>
            Children
          </span>
          <span style={{ fontSize: 14 }}>
            Ages 2-12
          </span>
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
          <span style={{ fontWeight: 'bold' }}>
            Infants
          </span>
          <span style={{ fontSize: 14 }}>
            Under 2
          </span>
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
        fontSize: 14,
        marginLeft: '14px',
        color: '#929292',
      }}
      >
        {maxGuest} guests maximum. Infants don’t count toward the number of guests.
      </div>
      <CloseButton onClick={onClick}>
        Close
      </CloseButton>
    </GuestDropdown>
  );
};

export default GuestForm;
