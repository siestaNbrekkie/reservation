import React from 'react';
import CheckInCalendar from './CheckInCalendar';
import CheckOutCalendar from './CheckOutCalendar';
import { DateDiv, DateBox, CheckInOut } from './style';

class Date extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkIn: false,
      checkOut: false,
      hover: false,
      hoverCheckout: false,
      dateClicked: {},
    };

    this.handleDateClick = this.handleDateClick.bind(this);
    this.handleClickCheckIn = this.handleClickCheckIn.bind(this);
    this.handleClickCheckOut = this.handleClickCheckOut.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverCheckout = this.handleHoverCheckout.bind(this);
  }

  handleClickCheckIn(event) {
    event.preventDefault();

    this.setState({
      checkIn: true,
      checkOut: false,
    });
  }

  handleClickCheckOut(event) {
    event.preventDefault();

    this.setState({
      checkOut: true,
      checkIn: false,
    });
  }

  handleHover() {
    const { hover } = this.state;

    this.setState({
      hover: !hover,
    });
  }

  handleHoverCheckout() {
    const { hoverCheckout } = this.state;

    this.setState({
      hoverCheckout: !hoverCheckout,
    });
  }

  handleDateClick(date) {
    // console.log('clicked date', date);
    this.setState({
      checkIn: false,
      checkOut: true,
      dateClicked: date,
    });
  }

  render() {
    const {
      checkIn,
      checkOut,
      hover,
      hoverCheckout,
      dateClicked,
    } = this.state;

    let defaultBackground = 'transparent';
    let defaultBackgroundCheckout = 'transparent';

    if (hover || checkIn) {
      defaultBackground = '#B1ECED';
    }

    if (Object.keys(dateClicked).length && checkOut) {
      defaultBackgroundCheckout = '#B1ECED';
    } else if (!hoverCheckout) {
      defaultBackgroundCheckout = 'transparent';
    } else if (hoverCheckout || checkOut) {
      defaultBackgroundCheckout = '#B1ECED';
    }

    const firstRender = checkOut ? (
      <CheckOutCalendar
        checkInDate={dateClicked}
      />
    ) : <div />;

    const checkInText = Object.keys(dateClicked).length
      ? `${dateClicked.day}/${dateClicked.month}/${dateClicked.year}`
      : 'Check-in';

    return (
      <DateDiv>
        <div style={{
          marginLeft: '24px', fontSize: '12px', color: 'rgb(72,72,72)', fontWeight: '600',
        }}
        >
          Dates
        </div>
        <DateBox>
          <CheckInOut
            style={{ paddingLeft: '8px', backgroundColor: `${defaultBackground}` }}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            onClick={this.handleClickCheckIn}
          >
            {checkInText}
          </CheckInOut>
          {/* --&gt; */}
          <svg width="27" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 25 h 25 L 19 17 M 26 25 L 19 34" stroke="#575757" strokeWidth="1" fill="transparent" />
          </svg>
          <CheckInOut
            style={{ paddingLeft: '7px', backgroundColor: `${defaultBackgroundCheckout}` }}
            onMouseEnter={this.handleHoverCheckout}
            onMouseLeave={this.handleHoverCheckout}
            onClick={this.handleClickCheckOut}
          >
            Checkout
          </CheckInOut>
        </DateBox>
        {checkIn ? (
          <CheckInCalendar
            checkIn={checkIn}
            checkOut={checkOut}
            clickDate={this.handleDateClick}
          />
        ) : firstRender}
      </DateDiv>
    );
  }
}

export default Date;
