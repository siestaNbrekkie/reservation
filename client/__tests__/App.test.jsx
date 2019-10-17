import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import App from '../components/App';
import Calendar from '../components/Calendar';

configure({ adapter: new Adapter() });

// shallow rendering
describe('<App />', () => {
  it('renders one <Calendar /> component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Calendar)).to.have.lengthOf(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <App>
        <div className="pricePerNight" />
        <div className="ratings" />
      </App>
    ));

    expect(wrapper.contains(<div className="pricePerNight" />)).to.equal(true);
    expect(wrapper.contains(<div className="ratings" />)).to.equal(true);
  });

  it('simulates click events', () => {
    const myMock = jest.fn();
    const wrapper = shallow(<App onClick={myMock} />);
    wrapper.find('button').simulate('click');

    expect(myMock).to.have.property('callCount', 1);
  });
});
