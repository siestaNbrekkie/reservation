import React from 'react';
import GuestForm from './GuestForm';
import { GuestDiv, GuestBox } from './style';

class Guest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      numOfGuests: 1,
      maxGuest: 0,
      lowerBoundGuestNum: 0,
      serviceFee: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { clicked } = this.state;
    const { maxGuest, lowerBoundGuestNum, serviceFee } = this.props;
    event.preventDefault();

    this.setState({
      clicked: !clicked,
      maxGuest,
      lowerBoundGuestNum,
      serviceFee,
    });
  }

  render() {
    const { clicked, numOfGuests, maxGuest, lowerBoundGuestNum, serviceFee } = this.state;

    let arrow = <svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 4 4 L 10 13 L 16 4"
        stroke="rgb(72,72,72)"
        fill="none"
      />
    </svg>
    let guest = 'guest';

    if (clicked) {
      arrow = <svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 4 16 L 10 6 L 16 16"
          stroke="rgb(72,72,72)"
          fill="none"
        />
      </svg>
    }

    if (numOfGuests > 1) {
      guest += 's';
    } else {
      guest = 'guest';
    }

    return (
      <GuestDiv>
        <div style={{
          marginLeft: '24px', fontSize: '12px', color: 'rgb(72,72,72)', fontWeight: '600',
        }}
        >
          Guests
        </div>
        <GuestBox onClick={this.handleClick}>
          <div>{numOfGuests} guest</div>
          <div style={{
            marginRight: '16px', fontSize: '16px', color: 'rgb(72,72,72)', fontWeight: '600',
          }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            >
              {arrow}
            </div>
          </div>
        </GuestBox>
        {clicked ? <GuestForm maxGuest={maxGuest} lowerBoundGuestNum={lowerBoundGuestNum} serviceFee={serviceFee} /> : <div />}
      </GuestDiv>
    );
  }
}

export default Guest;
