import React from 'react';
import styled from 'styled-components';

const CalendarBox = styled.div`
  width: 333px;
  height: 332px;
  border: 1px solid rgb(228, 231, 231);
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
      currentDay: new Date().getDay(),
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      daysInMonth: 0,
      startDay: 0,
    };

    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.obtainDaysInMonth = this.obtainDaysInMonth.bind(this);
    this.obtainDaysInPrevMonth = this.obtainDaysInPrevMonth.bind(this);
    this.obtainDaysInNextMonth = this.obtainDaysInNextMonth.bind(this);
  }

  componentDidMount() {
    const { currentDay, currentDate } = this.state;

    const numDaysInMonth = this.obtainDaysInMonth();

    this.setState({
      startDay: (((currentDay - (currentDate - 1)) % 7) + 7) % 7,
      daysInMonth: numDaysInMonth,
    });
  }

  obtainDaysInMonth() {
    const { currentMonth, currentYear } = this.state;

    let isLeapYear;
    let numDaysInMonth;

    if (currentYear % 4 !== 0) {
      isLeapYear = false;
    } else if (currentYear % 100 !== 0) {
      isLeapYear = true;
    } else if (currentYear % 400 !== 0) {
      isLeapYear = false;
    } else {
      isLeapYear = true;
    }

    if (currentMonth === 1) {
      if (isLeapYear) {
        numDaysInMonth = 29;
      } else {
        numDaysInMonth = 28;
      }
    } else if (currentMonth < 7 && currentMonth % 2 === 0) {
      numDaysInMonth = 31;
    } else if (currentMonth > 6 && currentMonth % 2 === 1) {
      numDaysInMonth = 31;
    } else {
      numDaysInMonth = 30;
    }

    return numDaysInMonth;
  }

  obtainDaysInPrevMonth() {
    const { currentMonth, currentYear } = this.state;

    const prevMonth = (((currentMonth - 1) % 12) + 12) % 12;
    let isLeapYear;
    let numDaysInPrevMonth;

    if (currentYear % 4 !== 0) {
      isLeapYear = false;
    } else if (currentYear % 100 !== 0) {
      isLeapYear = true;
    } else if (currentYear % 400 !== 0) {
      isLeapYear = false;
    } else {
      isLeapYear = true;
    }

    if (prevMonth === 1) {
      if (isLeapYear) {
        numDaysInPrevMonth = 29;
      } else {
        numDaysInPrevMonth = 28;
      }
    } else if (prevMonth < 7 && prevMonth % 2 === 0) {
      numDaysInPrevMonth = 31;
    } else if (prevMonth > 6 && prevMonth % 2 === 1) {
      numDaysInPrevMonth = 31;
    } else {
      numDaysInPrevMonth = 30;
    }

    return numDaysInPrevMonth;
  }

  obtainDaysInNextMonth() {
    const { currentMonth, currentYear } = this.state;

    const nextMonth = (((currentMonth + 1) % 12) + 12) % 12;
    let isLeapYear;
    let numDaysInNextMonth;

    if (currentYear % 4 !== 0) {
      isLeapYear = false;
    } else if (currentYear % 100 !== 0) {
      isLeapYear = true;
    } else if (currentYear % 400 !== 0) {
      isLeapYear = false;
    } else {
      isLeapYear = true;
    }

    if (nextMonth === 1) {
      if (isLeapYear) {
        numDaysInNextMonth = 29;
      } else {
        numDaysInNextMonth = 28;
      }
    } else if (nextMonth < 7 && nextMonth % 2 === 0) {
      numDaysInNextMonth = 31;
    } else if (nextMonth > 6 && nextMonth % 2 === 1) {
      numDaysInNextMonth = 31;
    } else {
      numDaysInNextMonth = 30;
    }

    return numDaysInNextMonth;
  }

  handleLeftClick(event) {
    event.preventDefault();

    const {
      currentMonth,
      currentYear,
      startDay,
    } = this.state;

    const daysInPrevMonth = this.obtainDaysInPrevMonth();

    console.log(`LEFT was clicked!`);

    if (currentMonth === 0) {
      this.setState({
        currentYear: currentYear - 1,
      });
    }

    this.setState({
      leftArrow: true,
      rightArrow: false,
      currentMonth: (((currentMonth - 1) % 12) + 12) % 12,
      startDay: (((startDay - daysInPrevMonth) % 7) + 7) % 7,
      daysInMonth: daysInPrevMonth,
    });
  }

  handleRightClick(event) {
    event.preventDefault();

    const {
      currentMonth,
      currentYear,
      startDay,
      daysInMonth,
    } = this.state;

    console.log(`RIGHT was clicked!`);

    if (currentMonth === 11) {
      this.setState({
        currentYear: currentYear + 1,
      });
    }

    const numDaysInNextMonth = this.obtainDaysInNextMonth();

    this.setState({
      rightArrow: true,
      leftArrow: false,
      currentMonth: (currentMonth + 1) % 12,
      startDay: (((startDay + daysInMonth) % 7) + 7) % 7,
      daysInMonth: numDaysInNextMonth,
    });
  }

  render() {
    const {
      currentMonth,
      currentYear,
      startDay,
      daysInMonth,
    } = this.state;

    const Months = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    };

    const row1 = [];
    const row2 = [];
    const row3 = [];
    const row4 = [];
    const row5 = [];
    const row6 = [];

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
      } else if (row5.length < 7) {
        row5.push(i);
      } else {
        row6.push(i);
      }
    }

    let numOflastEmptyDivs;

    if (row6.length) {
      numOflastEmptyDivs = 7 - row6.length;

      for (let i = 0; i < numOflastEmptyDivs; i += 1) {
        row6.push(' ');
      }
    } else {
      numOflastEmptyDivs = 7 - row5.length;

      for (let i = 0; i < numOflastEmptyDivs; i += 1) {
        row5.push(' ');
      }
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
        <Rows>
          {row6.map((day) => <Dates>{day}</Dates>)}
        </Rows>
      </CalendarBox>
    );
  }
}

export default Calendar;
