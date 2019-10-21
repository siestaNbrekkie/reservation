import React from 'react';
import styled from 'styled-components';

const GuestDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  padding-top: 15px;
`;

const GuestBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 316px;
  height: 40px;
  margin-left: 24px;
  margin-right: 24px;
  border: 1px solid rgb(228, 231, 231);
  border-radius: 1px;
  font-size: 16px;
  color: rgb(72,72,72);
  padding-left: 8px;
`;

const Guest = () => (
  <GuestDiv>
    <div style={{
      marginLeft: '24px', fontSize: '12px', color: 'rgb(72,72,72)', fontWeight: '600',
    }}
    >
      Guests
    </div>
    <GuestBox>
      <div>1 guest</div>
      <div style={{
        marginRight: '16px', fontSize: '16px', color: 'rgb(72,72,72)', fontWeight: '600',
      }}
      >
        v
      </div>
    </GuestBox>
  </GuestDiv>
);

export default Guest;
