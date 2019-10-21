import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Date from './Date';
import Guest from './Guest';
import ReserveButton from './ReserveButton';

const ResverationsDiv = styled.div`
  width: 374px;
  height: 456px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
`;

const DetailsDiv = styled.div`
  padding-top: 18px;
  margin-left: 25px;
`;

const Details = styled.span`
  color: rgb(72,72,72);
  font-family: 'Montserrat', sans-serif;
`;

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
    axios.get(`/api${window.location.pathname}`)
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
            *
            {listingInfo.ratings}
            </Details>
            <Details style={{ fontSize: '12px', color: '#828282' }}>
              {`  (${listingInfo.reviews} reviews)`}
            </Details>
          </div>
        </DetailsDiv>
        <Date />
        <Guest />
        <ReserveButton handleSubmit={this.handleSubmit} />
      </ResverationsDiv>
    );
  }
}

export default App;
