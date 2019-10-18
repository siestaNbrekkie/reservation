import React from 'react';

class Date extends React.Component {
  constructor(props) {
    super(props)

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
    return (
      <div>
        <div onClick={this.handleClickCheckIn}>Check-in</div>
        -->
        <div onClick={this.handleClickCheckOut}>Checkout</div>
      </div>
    );
  }
}

// const Date = (props) => (
//   <div>
//     <div>Check-in</div>
//     -->
//     <div>Checkout</div>
//   </div>
// );

export default Date;
