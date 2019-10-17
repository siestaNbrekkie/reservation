import React from 'react';
import axios from 'axios';
import Calendar from './Calendar';
import Guest from './Guest';
import ReserveButton from './ReserveButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingInfo: [],
    };
  }

  componentDidMount() {
    this.getListings();
  }

  getListings() {
    axios.get('/listings')
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
    // const { listingInfo } = this.state;
    // const firstListing = listingInfo[0];
    const firstListing = this.state.listingInfo[0];
    // console.log('inside render', firstListing);
    // console.log(firstListing.pricePerNight);
    console.log(firstListing);

    return (
      <div>
        <div>
          $
          {/* {firstListing.pricePerNight} */}
          /night
        </div>
        <div>
          $
          {/* {firstListing.ratings} */}
          (
          {/* {firstListing.reviews} */}
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
