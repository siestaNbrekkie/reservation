import React from 'react';
import {
  GuestDropdown,
  GuestChoices,
  TypeOfGuest,
  GuestButtons,
  CircleButton,
  NumberSpan,
  CloseButton,
} from './style';

const GuestForm = (props) => {
  const {
    adults,
    childrenGuests,
    infants,
    maxGuest,
    onClick,
    addGuests,
    subtractGuests,
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
          <CircleButton id="adultsSubtract" onClick={subtractGuests}>-</CircleButton>
          <NumberSpan>
            {adults}
          </NumberSpan>
          <CircleButton
            id="adultsAdd"
            style={{ borderColor: '#222222', color: '#222222' }}
            onClick={addGuests}
          >
            +
          </CircleButton>
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
          <CircleButton id="childrenGuestsSubtract" onClick={subtractGuests}>-</CircleButton>
          <NumberSpan>
            {childrenGuests}
          </NumberSpan>
          <CircleButton id="childrenGuestsAdd" onClick={addGuests}>+</CircleButton>
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
          <CircleButton id="infantsSubtract" onClick={subtractGuests}>-</CircleButton>
          <NumberSpan>
            {infants}
          </NumberSpan>
          <CircleButton id="infantsAdd" onClick={addGuests}>+</CircleButton>
        </GuestButtons>
      </GuestChoices>
      <div style={{
        fontSize: 14,
        marginLeft: '14px',
        color: '#929292',
      }}
      >
        {maxGuest}
        {' '}
        guests maximum. Infants don’t count toward the number of guests.
      </div>
      <CloseButton onClick={onClick}>
        Close
      </CloseButton>
    </GuestDropdown>
  );
};

export default GuestForm;
