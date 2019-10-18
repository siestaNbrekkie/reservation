import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Calendar from './Calendar';
import Guest from './Guest';
import ReserveButton from './ReserveButton';

const GreenDiv = styled.div`
  background-color: green;
  color: white;
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
      <div>
        <GreenDiv>
          $
          {listingInfo.pricePerNight}
          /night
        </GreenDiv>
        <div>
          $
          {listingInfo.ratings}
          (
          {listingInfo.reviews}
          reviews)
        </div>
        <Calendar />
        <Guest />
        <ReserveButton handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
