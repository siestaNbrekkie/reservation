import React from 'react';
import axios from 'axios';
import { ResverationsDiv, DetailsDiv, Details } from './style';

import Date from './Date';
import Guest from './Guest';
import ReserveButton from './ReserveButton';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingInfo: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getListing();
  }

  getListing() {
    axios.get(`http://localhost:3002/api${window.location.pathname}`)
      .then((response) => {
        this.setState({
          listingInfo: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    window.alert('Submitting form!');
  };

  render() {
    const { listingInfo } = this.state;

    if (!listingInfo) {
      return <div> </div>;
    }

    return (
      <ResverationsDiv>
        <DetailsDiv>
          <div>
            <Details style={{ fontWeight: 'bold', fontSize: '22px' }}>
              $
            {listingInfo.pricePerNight}
            </Details>
            <Details style={{ fontWeight: '600', fontSize: '12px' }}>
              {'   '}
              per night
            </Details>
          </div>
          <div>
            <Details style={{ fontWeight: 'bold', fontSize: '12px' }}>
              <img style={{ width: '9px', height: '9px' }}
                src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAwMCAxMDAwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyMwMDg0ODknPjxwYXRoIGQ9J005NzIgMzgwYzkgMjggMiA1MC0yMCA2N0w3MjUgNjE5bDg3IDI4MGMxMSAzOS0xOCA3NS01NCA3NS0xMiAwLTIzLTQtMzMtMTJMNDk5IDc5MCAyNzMgOTYyYTU4IDU4IDAgMCAxLTc4LTEyIDUwIDUwIDAgMCAxLTgtNTFsODYtMjc4TDQ2IDQ0N2MtMjEtMTctMjgtMzktMTktNjcgOC0yNCAyOS00MCA1Mi00MGgyODBsODctMjc5YzctMjMgMjgtMzkgNTItMzkgMjUgMCA0NyAxNyA1NCA0MWw4NyAyNzdoMjgwYzI0IDAgNDUgMTYgNTMgNDB6Jy8+PC9zdmc+"
              />
              {` ${listingInfo.ratings}`}
            </Details>
            <Details style={{ fontSize: '12px', color: '#828282' }}>
              {`  (${listingInfo.reviews} reviews)`}
            </Details>
          </div>
        </DetailsDiv>
        <svg width="28" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
          {/* <line x1="16" x2="25" y1="16" y2="25" stroke="#575757" strokeWidth="2" />
          <line x1="0" x2="25" y1="25" y2="25" stroke="#575757" strokeWidth="2" />
          <line x1="25" x2="16" y1="25" y2="34" stroke="#575757" strokeWidth="2" /> */}
          {/* <path d="M 0 25 h 25 L 17 17 M 26 25 L 17 34" stroke="#575757" strokeWidth="2" fill="none" /> */}
        </svg>
        <Date />
        <Guest />
        <ReserveButton handleSubmit={this.handleSubmit} />
      </ResverationsDiv>
    );
  }
}

export default App;
