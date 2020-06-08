import React from 'react';
import { Button } from './style';

const ReserveButton = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" value="Reserve" />
    </form>
  );
};

export default ReserveButton;
