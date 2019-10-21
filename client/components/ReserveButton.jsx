import React from 'react';
import styled from 'styled-components';

const Button = styled.input`
  width: 326px;
  height: 46px;
  color: white;
  background-color: rgb(234,85,92);
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid rgb(234,85,92);
  border-radius: 4px;
  margin-top: 74px;
  margin-left: 24px;
  margin-right: 24px;
`;

const ReserveButton = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" value="Reserve" />
    </form>
  );
};

export default ReserveButton;
