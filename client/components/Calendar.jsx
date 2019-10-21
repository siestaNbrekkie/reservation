import React from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';

const CalendarBox = styled.div`
  width: 333px;
  height: 332px;
  color: rgb(72, 72, 72);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  font-family: 'Montserrat', sans-serif;
  // font-family: 'Roboto', sans-serif;
  // font-family: 'Nunito Sans', sans-serif;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MonthAndYear = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 27px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  // font-family: 'Roboto', sans-serif;
  // font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  font-size: 18px;
`;

const ArrowBox = styled.div`
  width: 37px;
  height: 31px;
  margin-top: 18px;
  margin-bottom: 18px;
  border: 1px solid rgb(228, 231, 231);
  border-radius: 3px;
  cursor: pointer;
`;

const Rows = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  margin: 0.07px;
  `;

const Days = styled.div`
  width: 41px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(117,117,117);
  font-size: 11.67px;
  margin: 0.07px;
`;

const Dates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 39px;
  text-align: center;
  border: 0.4px solid rgb(228, 231, 231);
  font-size: 14px;
  font-weight: bold;
  
  ${(props) => (props.available === false)
    && css`
      text-decoration: line-through;
      color: rgb(216,216,216);
    `}
  
  ${(props) => (props.available === undefined)
    && css`
    border: none;
    `}

  ${(props) => (props.available)
    && css`
    :hover {
      background-color: rgb(228, 231, 231);
    };
    cursor: pointer;
    `}
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
      dates: {},
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

    this.getDates();

    this.setState({
      startDay: (((currentDay - (currentDate - 1)) % 7) + 7) % 7,
      daysInMonth: numDaysInMonth,
    });
  }

  getDates() {
    axios.get(`/api${window.location.pathname}dates`)
      .then((response) => {
        console.log(response);
        this.setState({
          dates: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
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
      dates,
    } = this.state;

    if (!Object.keys(dates).length) {
      return <div> </div>;
    }

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
          <Days>Su</Days>
          <Days>Mo</Days>
          <Days>Tu</Days>
          <Days>We</Days>
          <Days>Th</Days>
          <Days>Fr</Days>
          <Days>Sa</Days>
        </Rows>
        <Rows>
          {row1.map((day) => <Dates available={dates[`${Months[currentMonth].toLowerCase()}${day}`]}>{day}</Dates>)}
        </Rows>
        <Rows>
          {row2.map((day) => <Dates available={dates[`${Months[currentMonth].toLowerCase()}${day}`]}>{day}</Dates>)}
        </Rows>
        <Rows>
          {row3.map((day) => <Dates available={dates[`${Months[currentMonth].toLowerCase()}${day}`]}>{day}</Dates>)}
        </Rows>
        <Rows>
          {row4.map((day) => <Dates available={dates[`${Months[currentMonth].toLowerCase()}${day}`]}>{day}</Dates>)}
        </Rows>
        <Rows>
          {row5.map((day) => <Dates available={dates[`${Months[currentMonth].toLowerCase()}${day}`]}>{day}</Dates>)}
        </Rows>
        <Rows>
          {row6.map((day) => <Dates available={dates[`${Months[currentMonth].toLowerCase()}${day}`]}>{day}</Dates>)}
        </Rows>
      </CalendarBox>
    );
  }
}

export default Calendar;
