import React from 'react';
import Calendar from './Calendar';
import Guest from './Guest';

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
      </div>
    );
  }
}

export default App;
