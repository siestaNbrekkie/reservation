import React from 'react';
import styled from 'styled-components';

const CalendarBox = styled.div`
  width: 333px;
  height: 332px;
  border: 1px solid grey;
  color: rgb(72, 72, 72)
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MonthAndYear = styled.div`
  text-align: center;
  font-family: Cereal;
`;

const ArrowBox = styled.div`
  width: 37px;
  height: 31px;
  border: 1px solid rgb(228, 231, 231);
  border-radius: 3px;
`;

const Rows = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Dates = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40px;
  height: 39px;
  text-align: center;
  border: 1px solid rgb(228, 231, 231);
`;


class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftArrow: false,
      rightArrow: false,
    };

    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleLeftClick(event) {
    event.preventDefault();

    console.log(`LEFT was clicked!`);
    this.setState({
      leftArrow: true,
      rightArrow: false,
    });
  }

  handleRightClick(event) {
    event.preventDefault();

    console.log(`RIGHT was clicked!`);
    this.setState({
      rightArrow: true,
      leftArrow: false,
    });
  }

  render() {
    const currentDay = new Date().getDay();
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const startDay = (((currentDay - (currentDate - 1)) % 7) + 7) % 7;

    let isLeapYear;
    let daysInMonth;

    if (currentYear % 4 !== 0) {
      isLeapYear = false;
    } else if (currentYear % 100 !== 0) {
      isLeapYear = true;
    } else if (currentYear % 400 !== 0) {
      isLeapYear = false;
    } else {
      isLeapYear = true;
    }

    if (currentMonth === 2) {
      if (isLeapYear) {
        daysInMonth = 29;
      } else {
        daysInMonth = 28;
      }
    } else if (currentMonth < 8 && currentMonth % 2 === 1) {
      daysInMonth = 31;
    } else if (currentMonth > 7 && currentMonth % 2 === 0) {
      daysInMonth = 31;
    } else {
      daysInMonth = 30;
    }

    const Months = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    };

    const row1 = [];
    const row2 = [];
    const row3 = [];
    const row4 = [];
    const row5 = [];

    for (let i = 0; i < startDay; i += 1) {
      row1.push(' ');
    }

    for (let i = 1; i <= daysInMonth; i += 1) {
      if (row1.length < 7) {
        row1.push(i);
      } else if (row2.length < 7) {
        row2.push(i);
      } else if (row3.length < 7) {
        row3.push(i);
      } else if (row4.length < 7) {
        row4.push(i);
      } else {
        row5.push(i);
      }
    }

    const numOflastEmptyDivs = 7 - row5.length;

    for (let i = 0; i < numOflastEmptyDivs; i += 1) {
      row5.push(' ');
    }

    return (
      <CalendarBox>
        <TopHeader>
          <ArrowBox onClick={this.handleLeftClick}>
            &lt;--
          </ArrowBox>
          <MonthAndYear>
            {Months[currentMonth]}
            {' '}
            {currentYear}
          </MonthAndYear>
          <ArrowBox onClick={this.handleRightClick}>
            --&gt;
          </ArrowBox>
        </TopHeader>
        <Rows>
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
        </Rows>
        <Rows>
          {row1.map((day) => <Dates>{day}</Dates>)}
        </Rows>
        <Rows>
          {row2.map((day) => <Dates>{day}</Dates>)}
        </Rows>
        <Rows>
          {row3.map((day) => <Dates>{day}</Dates>)}
        </Rows>
        <Rows>
          {row4.map((day) => <Dates>{day}</Dates>)}
        </Rows>
        <Rows>
          {row5.map((day) => <Dates>{day}</Dates>)}
        </Rows>
      </CalendarBox>
    );
  }
}

export default Calendar;
