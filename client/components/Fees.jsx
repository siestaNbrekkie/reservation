import React from 'react';
import PropTypes from 'prop-types';
import { FeeBox, RowFees } from './style';

const Fees = (props) => {
  const { pricePerNight, numberOfNights, serviceFee } = props;
  const nightText = (numberOfNights === 1) ? 'night' : 'nights';

  return (
    <FeeBox>
      <RowFees>
        <div>
          {`$${pricePerNight} x ${numberOfNights} ${nightText}`}
        </div>
        <div>
          $
          {pricePerNight * numberOfNights}
        </div>
      </RowFees>
      <RowFees>
        <div>
          Cleaning fee
        </div>
        <div>
          $
          {Math.floor(Math.random() * (251 - 1) + 50)}
        </div>
      </RowFees>
      <RowFees>
        <div>
          Service fee
        </div>
        <div>
          $
          {serviceFee}
        </div>
      </RowFees>
    </FeeBox>
  );
};

Fees.defaultProps = {
  serviceFee: 0,
  pricePerNight: 0,
  numberOfNights: 1,
};

Fees.propTypes = {
  serviceFee: PropTypes.number,
  pricePerNight: PropTypes.number,
  numberOfNights: PropTypes.number,
};

export default Fees;
