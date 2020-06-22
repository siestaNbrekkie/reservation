import React from 'react';
import axios from 'axios';
import { ResverationsDiv, DetailsDiv, Details } from './style';

import Date from './Date';
import Guest from './Guest';
import Fees from './Fees';
import ReserveButton from './ReserveButton';
import Modal from './Modal';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingInfo: {},
      numberOfNights: 1,
      showFees: false,
      showModal: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculateNights = this.calculateNights.bind(this);
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

  calculateNights(checkIn, checkOut) {
    const nights = checkOut.day - checkIn.day;

    this.setState({
      numberOfNights: nights,
      showFees: true,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { showModal } = this.state;

    this.setState({
      showModal: !showModal,
    });
  }

  render() {
    const {
      listingInfo,
      numberOfNights,
      showFees,
      showModal,
    } = this.state;

    const fees = showFees ? (
      <Fees
        pricePerNight={listingInfo.pricePerNight}
        numberOfNights={numberOfNights}
        serviceFee={listingInfo.serviceFee}
      />
    ) : <div />;

    const textUnderButton = showFees ? (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '24px',
        fontSize: 12,
        color: '#8F8F8F',
      }}
      >
        You won&apos;t be charged yet
      </div>
    ) : <div />;

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
              <img
                alt="Ratings star"
                style={{ width: '9px', height: '9px' }}
                src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAwMCAxMDAwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyMwMDg0ODknPjxwYXRoIGQ9J005NzIgMzgwYzkgMjggMiA1MC0yMCA2N0w3MjUgNjE5bDg3IDI4MGMxMSAzOS0xOCA3NS01NCA3NS0xMiAwLTIzLTQtMzMtMTJMNDk5IDc5MCAyNzMgOTYyYTU4IDU4IDAgMCAxLTc4LTEyIDUwIDUwIDAgMCAxLTgtNTFsODYtMjc4TDQ2IDQ0N2MtMjEtMTctMjgtMzktMTktNjcgOC0yNCAyOS00MCA1Mi00MGgyODBsODctMjc5YzctMjMgMjgtMzkgNTItMzkgMjUgMCA0NyAxNyA1NCA0MWw4NyAyNzdoMjgwYzI0IDAgNDUgMTYgNTMgNDB6Jy8+PC9zdmc+"
              />
              {` ${listingInfo.ratings}`}
            </Details>
            <Details style={{ fontSize: '12px', color: '#828282' }}>
              {`  (${listingInfo.reviews} reviews)`}
            </Details>
          </div>
        </DetailsDiv>
        <Date
          calculateNights={this.calculateNights}
        />
        <Guest
          maxGuest={listingInfo.maxGuest}
          lowerBoundGuestNum={listingInfo.lowerBoundGuestNum}
        />
        {fees}
        <ReserveButton handleSubmit={this.handleSubmit} />
        <Modal
          showModal={showModal}
          onClose={this.handleSubmit}
        />
        {textUnderButton}
      </ResverationsDiv>
    );
  }
}

export default App;
