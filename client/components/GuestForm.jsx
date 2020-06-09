import React from 'react';
import { GuestChoices } from './style';

const GuestForm = () => {
  return (
    <GuestChoices>
      <div>Adults</div>
      <div>Children</div>
      <div>Infants</div>
      <div>Min guest notice</div>
      <div>Close</div>
    </GuestChoices>
  );
};

export default GuestForm;
