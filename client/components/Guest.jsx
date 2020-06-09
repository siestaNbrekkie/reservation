import React from 'react';
import { GuestDiv, GuestBox } from './style';

class Guest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    const { clicked } = this.state;

    let arrow = <svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 4 4 L 10 13 L 16 4"
        stroke="rgb(72,72,72)"
        fill="none"
      />
    </svg>

    if (clicked) {
      arrow = <svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 4 16 L 10 6 L 16 16"
          stroke="rgb(72,72,72)"
          fill="none"
        />
      </svg>
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
              {arrow}
            </div>
          </div>
        </GuestBox>
      </GuestDiv>
    );
  }
}

export default Guest;
