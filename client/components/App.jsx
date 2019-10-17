import React from 'react';
import axios from 'axios';
import Calendar from './Calendar';
import Guest from './Guest';
import ReserveButton from './ReserveButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingInfo: {},
    };
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


  render() {
    const { listingInfo } = this.state;

    if (!listingInfo) {
      return <div> </div>;
    }

    return (
      <div>
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
        <Calendar />
        <Guest />
        <ReserveButton />
      </div>
    );
  }
}

export default App;
