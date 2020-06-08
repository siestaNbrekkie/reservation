import React from 'react';
import { GuestDiv, GuestBox } from './style';

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
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        >
          <svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 4 4 L 10 13 L 16 4"
              stroke="rgb(72,72,72)"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </GuestBox>
  </GuestDiv>
);

export default Guest;
