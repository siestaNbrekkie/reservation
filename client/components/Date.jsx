import React from 'react';
import Calendar from './Calendar';
import styled from 'styled-components';

const DateDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  padding-top: 112px;
`;

const DateBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 324px;
  height: 40px;
  margin-left: 24px;
  margin-right: 24px;
  border: 1px solid rgb(228, 231, 231);
  border-radius: 1px;
  font-size: 16px;
`;

const CheckInOut = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 140px;
  height: 40px;
  color: rgb(143,143,143);
`;

class Date extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkIn: false,
      checkOut: false,
    };

    this.handleClickCheckIn = this.handleClickCheckIn.bind(this);
    this.handleClickCheckOut = this.handleClickCheckOut.bind(this);
  }

  handleClickCheckIn(event) {
    event.preventDefault();
    console.log('checkIN!');

    this.setState({
      checkIn: true,
      checkOut: false,
    });
  }

  handleClickCheckOut(event) {
    event.preventDefault();
    console.log('checkOUT!');

    this.setState({
      checkOut: true,
      checkIn: false,
    });
  }

  render() {
    const { checkIn } = this.state;

    return (
      <DateDiv>
        <div style={{
          marginLeft: '24px', fontSize: '12px', color: 'rgb(72,72,72)', fontWeight: '600',
        }}
        >
          Dates
        </div>
        <DateBox>
          {/* <CheckInOut></CheckInOut> */}
          <CheckInOut style={{ paddingLeft: '8px' }} onClick={this.handleClickCheckIn}>Check-in</CheckInOut>
          --&gt;
          <CheckInOut style={{ paddingLeft: '7px' }} onClick={this.handleClickCheckOut}>Checkout</CheckInOut>
          {/* <Calendar /> */}
        </DateBox>
        {checkIn ? <Calendar /> : <div />}
      </DateDiv>
    );
  }
}

export default Date;
