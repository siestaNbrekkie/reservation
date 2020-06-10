import React from 'react';
import GuestForm from './GuestForm';
import { GuestDiv, GuestBox } from './style';

class Guest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      numOfGuests: 1,
      adults: 1,
      children: 0,
      infants: 0,
      maxGuest: 0,
      lowerBoundGuestNum: 0,
      serviceFee: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.addAdults = this.addAdults.bind(this);
    this.subtractAdults = this.subtractAdults.bind(this);
    this.addChildren = this.addChildren.bind(this);
    this.subtractChildren = this.subtractChildren.bind(this);
    this.addInfants = this.addInfants.bind(this);
    this.subtractInfants = this.subtractInfants.bind(this);
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

  addAdults() {
    const { numOfGuests, adults } = this.state;

    this.setState({
      adults: adults + 1,
      numOfGuests: numOfGuests + 1,
    });
  }

  subtractAdults() {
    const { numOfGuests, adults } = this.state;

    this.setState({
      adults: adults - 1,
      numOfGuests: numOfGuests - 1,
    });
  }

  addChildren() {
    const { numOfGuests, children } = this.state;

    this.setState({
      children: children + 1,
      numOfGuests: numOfGuests + 1,
    });
  }

  subtractChildren() {
    const { numOfGuests, children } = this.state;

    this.setState({
      children: children - 1,
      numOfGuests: numOfGuests - 1,
    });
  }

  addInfants() {
    const { infants } = this.state;

    this.setState({
      infants: infants + 1,
    });
  }

  subtractInfants() {
    const { infants } = this.state;

    this.setState({
      infants: infants - 1,
    });
  }

  render() {
    const {
      clicked,
      numOfGuests,
      adults,
      children,
      infants,
      maxGuest,
      lowerBoundGuestNum,
      serviceFee,
    } = this.state;

    let arrow = <svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 4 4 L 10 13 L 16 4"
        stroke="rgb(72,72,72)"
        fill="none"
      />
    </svg>

    let guest = 'guest';
    let infantStr = `${infants} infant`;
    let strOfGuests = '';

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

    if (infants > 1) {
      infantStr += 's';
    } else if (infants === 0) {
      infantStr = '';
    }

    if (!infants) {
      strOfGuests = `${numOfGuests} ${guest}`;
    } else if (infants > 0) {
      strOfGuests = `${numOfGuests} ${guest}, ${infantStr}`;
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
          <div>{strOfGuests}</div>
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
        {clicked ? (
          <GuestForm
            numOfGuests={numOfGuests}
            adults={adults}
            children={children}
            infants={infants}
            maxGuest={maxGuest}
            lowerBoundGuestNum={lowerBoundGuestNum}
            serviceFee={serviceFee}
            onClick={this.handleClick}
            addAdults={this.addAdults}
            subtractAdults={this.subtractAdults}
            addChildren={this.addChildren}
            subtractChildren={this.subtractChildren}
            addInfants={this.addInfants}
            subtractInfants={this.subtractInfants}
          />
        ) : <div />}
      </GuestDiv>
    );
  }
}

export default Guest;
