import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './style';

const ReserveButton = (props) => {
  const { handleSubmit } = props;
  return (
    <div style={{
      borderTop: '1px solid rgb(228, 231, 231)',
      marginTop: '35px',
      marginLeft: '24px',
      marginRight: '26px',
    }}
    >
      <form onSubmit={handleSubmit}>
        <Button type="submit" value="Reserve" />
      </form>
    </div>
  );
};

ReserveButton.defaultProps = {
  handleSubmit: () => {},
};

ReserveButton.propTypes = {
  handleSubmit: PropTypes.func,
};

export default ReserveButton;
