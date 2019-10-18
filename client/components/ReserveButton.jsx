import React from 'react';

const ReserveButton = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input type="submit" value="Reserve" />
    </form>
  );
};

export default ReserveButton;
