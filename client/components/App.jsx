import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Date from './Date';
import Calendar from './Calendar';
import Guest from './Guest';
import ReserveButton from './ReserveButton';

const ResverationsDiv = styled.div`
  width: 374px;
  height: 456px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
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
        <div>
          $
          {listingInfo.pricePerNight}
          /night
        </div>
        <div>
          $
          {listingInfo.ratings}
          (
          {listingInfo.reviews}
          reviews)
        </div>
        <Date />
        <Calendar />
        <Guest />
        <ReserveButton handleSubmit={this.handleSubmit} />
      </ResverationsDiv>
    );
  }
}

export default App;
