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
          <svg width="19" height="19" viewBox="0 0 1000 1000">
            <path
              d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"
              fill="rgb(72,72,72)"
            />
          </svg>
          <CheckInOut style={{ paddingLeft: '7px' }} onClick={this.handleClickCheckOut}>Checkout</CheckInOut>
        </DateBox>
        {checkIn ? <Calendar /> : <div />}
      </DateDiv>
    );
  }
}

export default Date;
