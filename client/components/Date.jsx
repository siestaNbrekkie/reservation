import React from 'react';
import Calendar from './Calendar';
import { DateDiv, DateBox, CheckInOut } from './style';

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
          <CheckInOut style={{ paddingLeft: '8px' }} onClick={this.handleClickCheckIn}>Check-in</CheckInOut>
          {/* --&gt; */}
          <svg width="27" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 25 h 25 L 19 17 M 26 25 L 19 34" stroke="#575757" strokeWidth="1" fill="transparent" />
          </svg>
          <CheckInOut style={{ paddingLeft: '7px' }} onClick={this.handleClickCheckOut}>Checkout</CheckInOut>
        </DateBox>
        {checkIn ? <Calendar /> : <div />}
      </DateDiv>
    );
  }
}

export default Date;
