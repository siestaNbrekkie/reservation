import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled, { css } from 'styled-components';
import {
  CalendarBox,
  TopHeader,
  MonthAndYear,
  ArrowBox,
  Rows,
  Days,
} from './style';

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
  
  ${(props) => (props.available === false || props.unavailable)
    && css`
      text-decoration: line-through;
      color: rgb(216,216,216);
      pointer-events: none;
    `}
  
  ${(props) => (typeof props.day === 'string')
    && css`
      border: none;
    `}

  ${(props) => (typeof props.day === 'number' && props.available === undefined)
    && css`
      :hover {
        background-color: #B1ECED;
      };
      cursor: pointer;
    `}

    ${(props) => (props.checkInDate)
    && css`
      background-color: #008489;
      color: white;
      pointer-events: none;
    `}
`;


class CheckOutCalendar extends React.Component {
  constructor(props) {
    super(props);

    const { checkInDate } = this.props;

    this.state = {
      currentDay: checkInDate.dayOfWeek,
      currentDate: checkInDate.day,
      currentMonth: checkInDate.month,
      currentYear: checkInDate.year,
      daysInMonth: 0,
      startDay: 0,
      dates: {},
      nextUnavailableDate: {},
    };

    this.getDates = this.getDates.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.obtainDaysInMonth = this.obtainDaysInMonth.bind(this);
    this.obtainDaysInPrevMonth = this.obtainDaysInPrevMonth.bind(this);
    this.obtainDaysInNextMonth = this.obtainDaysInNextMonth.bind(this);
    this.getNextUnavailableDate = this.getNextUnavailableDate.bind(this);
  }

  componentDidMount() {
    const { currentDay, currentDate, currentMonth } = this.state;
    const numDaysInMonth = this.obtainDaysInMonth();

    this.getDates(currentMonth);

    this.setState({
      startDay: (((currentDay - (currentDate - 1)) % 7) + 7) % 7,
      daysInMonth: numDaysInMonth,
    });
  }

  getDates(month) {
    axios.get(`http://localhost:3002/api${window.location.pathname}unavailable_dates`, {
      params: {
        month,
      },
    })
      .then((response) => {
        const datesData = response.data;
        const modifiedDates = {};
        const { dates } = this.state;

        for (let i = 0; i < datesData.length; i += 1) {
          modifiedDates[`${datesData[i].day}/${datesData[i].month}/${datesData[i].year}`] = false;
        }

        this.setState({
          dates: modifiedDates,
        });

        if (!Object.keys(dates).length) {
          this.getNextUnavailableDate();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getNextUnavailableDate() {
    const { dates } = this.state;
    const { checkInDate } = this.props;
    const datesArr = Object.keys(dates);
    let closestDate;

    for (let i = 0; i < datesArr.length; i += 1) {
      const dateSplit = datesArr[i].split('/');

      if (closestDate === undefined && Number(dateSplit[0]) > checkInDate.day) {
        closestDate = Number(dateSplit[0]);
      } else if (Number(dateSplit[0]) < closestDate && Number(dateSplit[0]) > checkInDate.day) {
        closestDate = Number(dateSplit[0]);
      }

      if (i === datesArr.length - 1) {
        this.setState({
          nextUnavailableDate: {
            day: closestDate,
            month: Number(dateSplit[1]),
            year: Number(dateSplit[2]),
          },
        });
      }
    }
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

    if (currentMonth === 2) {
      if (isLeapYear) {
        numDaysInMonth = 29;
      } else {
        numDaysInMonth = 28;
      }
    } else if (currentMonth < 8 && currentMonth % 2 === 1) {
      numDaysInMonth = 31;
    } else if (currentMonth > 7 && currentMonth % 2 === 0) {
      numDaysInMonth = 31;
    } else {
      numDaysInMonth = 30;
    }

    return numDaysInMonth;
  }

  obtainDaysInPrevMonth() {
    const { currentMonth, currentYear } = this.state;

    const prevMonth = (currentMonth - 1) ? (currentMonth - 1) : 12;
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

    if (prevMonth === 2) {
      if (isLeapYear) {
        numDaysInPrevMonth = 29;
      } else {
        numDaysInPrevMonth = 28;
      }
    } else if (prevMonth < 8 && prevMonth % 2 === 1) {
      numDaysInPrevMonth = 31;
    } else if (prevMonth > 7 && prevMonth % 2 === 0) {
      numDaysInPrevMonth = 31;
    } else {
      numDaysInPrevMonth = 30;
    }

    return numDaysInPrevMonth;
  }

  obtainDaysInNextMonth() {
    const { currentMonth, currentYear } = this.state;

    const nextMonth = (currentMonth + 1) === 13 ? 1 : (currentMonth + 1);
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

    if (nextMonth === 2) {
      if (isLeapYear) {
        numDaysInNextMonth = 29;
      } else {
        numDaysInNextMonth = 28;
      }
    } else if (nextMonth < 8 && nextMonth % 2 === 1) {
      numDaysInNextMonth = 31;
    } else if (nextMonth > 7 && nextMonth % 2 === 0) {
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

    if (currentMonth === 1) {
      this.setState({
        currentYear: currentYear - 1,
      });
    }

    this.setState({
      currentMonth: (currentMonth - 1) ? (currentMonth - 1) : 12,
      startDay: (((startDay - daysInPrevMonth) % 7) + 7) % 7,
      daysInMonth: daysInPrevMonth,
    });

    const currentDateBeforeAsyncSetState = (currentMonth - 1 === 0) ? 12 : currentMonth - 1;
    this.getDates(currentDateBeforeAsyncSetState);
  }

  handleRightClick(event) {
    event.preventDefault();

    const {
      currentMonth,
      currentYear,
      startDay,
      daysInMonth,
    } = this.state;

    if (currentMonth === 12) {
      this.setState({
        currentYear: currentYear + 1,
      });
    }

    const numDaysInNextMonth = this.obtainDaysInNextMonth();

    this.setState({
      currentMonth: (currentMonth + 1) === 13 ? 1 : (currentMonth + 1),
      startDay: (((startDay + daysInMonth) % 7) + 7) % 7,
      daysInMonth: numDaysInNextMonth,
    });

    const currentDateBeforeAsyncSetState = (currentMonth + 1 === 13) ? 1 : currentMonth + 1;
    this.getDates(currentDateBeforeAsyncSetState);
  }

  render() {
    const {
      currentMonth,
      currentYear,
      startDay,
      daysInMonth,
      dates,
      nextUnavailableDate,
    } = this.state;

    const { checkInDate } = this.props;

    if (!Object.keys(dates).length) {
      return <div> </div>;
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
          <ArrowBox
            style={{
              pointerEvents: (currentMonth <= checkInDate.month && currentYear <= checkInDate.year ? 'none' : 'auto'),
              borderColor: (currentMonth <= checkInDate.month && currentYear <= checkInDate.year ? '#EBEBEB' : 'rgb(228, 231, 231)'),
              color: (currentMonth <= checkInDate.month && currentYear <= checkInDate.year ? '#EBEBEB' : 'rgb(228, 231, 231)'),
            }}
            onClick={this.handleLeftClick}
          >
            <svg width="19" height="19" viewBox="0 0 1000 1000">
              <path
                d="M 336 275 L 126 485 h 806 c 13 0 23 10 23 23 s -10 23 -23 23 H 126 l 210 210 c 11 11 11 21 0 32 c -5 5 -10 7 -16 7 s -11 -2 -16 -7 L 55 524 c -11 -11 -11 -21 0 -32 l 249 -249 c 21 -22 53 10 32 32 Z"
                fill={currentMonth <= checkInDate.month && currentYear <= checkInDate.year ? '#EBEBEB' : '#484848'}
              />
            </svg>
          </ArrowBox>
          <MonthAndYear>
            {Months[currentMonth]}
            {' '}
            {currentYear}
          </MonthAndYear>
          <ArrowBox onClick={this.handleRightClick}>
            <svg width="19" height="19" viewBox="0 0 1000 1000">
              <path
                d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"
                fill="#484848"
              />
            </svg>
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
          {row1.map((day) => (
            (
              <Dates
                day={day}
                available={dates[`${day}/${currentMonth}/${currentYear}`]}
                checkInDate={checkInDate.day === day
                  && checkInDate.month === currentMonth
                  && checkInDate.year === currentYear}
                unavailable={
                  (day < checkInDate.day
                    && currentMonth <= checkInDate.month
                    && currentYear <= checkInDate.year)
                  || (day > nextUnavailableDate.day
                    && currentMonth >= nextUnavailableDate.month
                    && currentYear >= nextUnavailableDate.year)
                  || (currentMonth > nextUnavailableDate.month
                    || currentYear > nextUnavailableDate.year)
                }
              >
                {day}
              </Dates>

            )
          ))}
        </Rows>
        <Rows>
          {row2.map((day) => (
            <Dates
              day={day}
              available={dates[`${day}/${currentMonth}/${currentYear}`]}
              checkInDate={checkInDate.day === day
                && checkInDate.month === currentMonth
                && checkInDate.year === currentYear}
              unavailable={
                (day < checkInDate.day
                  && currentMonth <= checkInDate.month
                  && currentYear <= checkInDate.year)
                || (day > nextUnavailableDate.day
                  && currentMonth >= nextUnavailableDate.month
                  && currentYear >= nextUnavailableDate.year)
                || (currentMonth > nextUnavailableDate.month
                  || currentYear > nextUnavailableDate.year)
              }
            >
              {day}
            </Dates>
          ))}
        </Rows>
        <Rows>
          {row3.map((day) => (
            <Dates
              day={day}
              available={dates[`${day}/${currentMonth}/${currentYear}`]}
              checkInDate={checkInDate.day === day
                && checkInDate.month === currentMonth
                && checkInDate.year === currentYear}
              unavailable={
                (day < checkInDate.day
                  && currentMonth <= checkInDate.month
                  && currentYear <= checkInDate.year)
                || (day > nextUnavailableDate.day
                  && currentMonth >= nextUnavailableDate.month
                  && currentYear >= nextUnavailableDate.year)
                || (currentMonth > nextUnavailableDate.month
                  || currentYear > nextUnavailableDate.year)
              }
            >
              {day}
            </Dates>
          ))}
        </Rows>
        <Rows>
          {row4.map((day) => (
            <Dates
              day={day}
              available={dates[`${day}/${currentMonth}/${currentYear}`]}
              checkInDate={checkInDate.day === day
                && checkInDate.month === currentMonth
                && checkInDate.year === currentYear}
              unavailable={
                (day < checkInDate.day
                  && currentMonth <= checkInDate.month
                  && currentYear <= checkInDate.year)
                || (day > nextUnavailableDate.day
                  && currentMonth >= nextUnavailableDate.month
                  && currentYear >= nextUnavailableDate.year)
                || (currentMonth > nextUnavailableDate.month
                  || currentYear > nextUnavailableDate.year)
              }
            >
              {day}
            </Dates>
          ))}
        </Rows>
        <Rows>
          {row5.map((day) => (
            <Dates
              day={day}
              available={dates[`${day}/${currentMonth}/${currentYear}`]}
              checkInDate={checkInDate.day === day
                && checkInDate.month === currentMonth
                && checkInDate.year === currentYear}
              unavailable={
                (day < checkInDate.day
                  && currentMonth <= checkInDate.month
                  && currentYear <= checkInDate.year)
                || (day > nextUnavailableDate.day
                  && currentMonth >= nextUnavailableDate.month
                  && currentYear >= nextUnavailableDate.year)
                || (currentMonth > nextUnavailableDate.month
                  || currentYear > nextUnavailableDate.year)
              }
            >
              {day}
            </Dates>
          ))}
        </Rows>
        <Rows>
          {row6.map((day) => (
            <Dates
              day={day}
              available={dates[`${day}/${currentMonth}/${currentYear}`]}
              checkInDate={checkInDate.day === day
                && checkInDate.month === currentMonth
                && checkInDate.year === currentYear}
              unavailable={
                (day < checkInDate.day
                  && currentMonth <= checkInDate.month
                  && currentYear <= checkInDate.year)
                || (day > nextUnavailableDate.day
                  && currentMonth >= nextUnavailableDate.month
                  && currentYear >= nextUnavailableDate.year)
                || (currentMonth > nextUnavailableDate.month
                  || currentYear > nextUnavailableDate.year)
              }
            >
              {day}
            </Dates>
          ))}
        </Rows>
      </CalendarBox>
    );
  }
}

CheckOutCalendar.defaultProps = {
  checkInDate: {},
};

CheckOutCalendar.propTypes = {
  checkInDate: PropTypes.shape({
    dayOfWeek: PropTypes.number,
    day: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
  }),
};

export default CheckOutCalendar;
