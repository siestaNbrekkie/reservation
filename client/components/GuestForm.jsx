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
  const {
    adults,
    children,
    infants,
    maxGuest,
    onClick,
    addAdults,
    subtractAdults,
    addChildren,
    subtractChildren,
    addInfants,
    subtractInfants,
  } = props;

  return (
    <GuestDropdown>
      <GuestChoices>
        <TypeOfGuest>
          <span style={{ textAlign: 'center', lineHeight: '30px', fontWeight: 'bold' }}>
            Adults
          </span>
        </TypeOfGuest>
        <GuestButtons>
          <CircleButton onClick={subtractAdults}>-</CircleButton>
          <span style={{ textAlign: 'center', lineHeight: '30px' }}>
            {adults}
          </span>
          <CircleButton onClick={addAdults}>+</CircleButton>
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
          <CircleButton onClick={subtractChildren}>-</CircleButton>
          <span style={{ textAlign: 'center', lineHeight: '30px' }}>
            {children}
          </span>
          <CircleButton onClick={addChildren}>+</CircleButton>
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
          <CircleButton onClick={subtractInfants}>-</CircleButton>
          <span style={{ textAlign: 'center', lineHeight: '30px' }}>
            {infants}
          </span>
          <CircleButton onClick={addInfants}>+</CircleButton>
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
