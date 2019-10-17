import React from 'react';
import Calendar from './Calendar';
import Guest from './Guest';
import ReserveButton from './ReserveButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Calendar />
        <Guest />
        <ReserveButton />
      </div>
    );
  }
}

export default App;
