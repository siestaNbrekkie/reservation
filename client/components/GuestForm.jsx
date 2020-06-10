import React from 'react';
import PropTypes from 'prop-types';
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
    numOfGuests,
    adults,
    childrenGuests,
    infants,
    maxGuest,
    onClick,
    addGuests,
    subtractGuests,
  } = props;

  const maxGuestsReached = {
    pointerEvents: (numOfGuests === maxGuest ? 'none' : 'auto'),
    borderColor: (numOfGuests === maxGuest ? '#EBEBEB' : '#222222'),
    color: (numOfGuests === maxGuest ? '#EBEBEB' : '#222222'),
  };

  return (
    <GuestDropdown>
      <GuestChoices>
        <TypeOfGuest>
          <span style={{ textAlign: 'center', lineHeight: '30px', fontWeight: 'bold' }}>
            Adults
          </span>
        </TypeOfGuest>
        <GuestButtons>
          <CircleButton
            style={{
              pointerEvents: (adults === 1 ? 'none' : 'auto'),
              borderColor: (adults === 1 ? '#EBEBEB' : '#222222'),
              color: (adults === 1 ? '#EBEBEB' : '#222222'),
            }}
            id="adultsSubtract"
            onClick={subtractGuests}
          >
            -
          </CircleButton>
          <NumberSpan>
            {adults}
          </NumberSpan>
          <CircleButton
            style={maxGuestsReached}
            id="adultsAdd"
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
          <CircleButton
            style={{
              pointerEvents: (childrenGuests === 0 ? 'none' : 'auto'),
              borderColor: (childrenGuests === 0 ? '#EBEBEB' : '#222222'),
              color: (childrenGuests === 0 ? '#EBEBEB' : '#222222'),
            }}
            id="childrenGuestsSubtract"
            onClick={subtractGuests}
          >
            -
          </CircleButton>
          <NumberSpan>
            {childrenGuests}
          </NumberSpan>
          <CircleButton
            style={maxGuestsReached}
            id="childrenGuestsAdd"
            onClick={addGuests}
          >
            +
          </CircleButton>
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
          <CircleButton
            style={{
              pointerEvents: (infants === 0 ? 'none' : 'auto'),
              borderColor: (infants === 0 ? '#EBEBEB' : '#222222'),
              color: (infants === 0 ? '#EBEBEB' : '#222222'),
            }}
            id="infantsSubtract"
            onClick={subtractGuests}
          >
            -
          </CircleButton>
          <NumberSpan>
            {infants}
          </NumberSpan>
          <CircleButton
            style={{
              pointerEvents: (infants === 5 ? 'none' : 'auto'),
              borderColor: (infants === 5 ? '#EBEBEB' : '#222222'),
              color: (infants === 5 ? '#EBEBEB' : '#222222'),
            }}
            id="infantsAdd"
            onClick={addGuests}
          >
            +
          </CircleButton>
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

GuestForm.defaultProps = {
  numOfGuests: 0,
  adults: 0,
  childrenGuests: 0,
  infants: 0,
  maxGuest: 0,
  onClick: () => {},
  addGuests: () => {},
  subtractGuests: () => {},
};

GuestForm.propTypes = {
  numOfGuests: PropTypes.number,
  adults: PropTypes.number,
  childrenGuests: PropTypes.number,
  infants: PropTypes.number,
  maxGuest: PropTypes.number,
  onClick: PropTypes.func,
  addGuests: PropTypes.func,
  subtractGuests: PropTypes.func,
};


export default GuestForm;
