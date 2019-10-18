import React from 'react';
import styled from 'styled-components';

const CalendarBox = styled.div`
  width: 333px;
  height: 332px;
  border: 1px solid grey;
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
  border: 1px solid grey;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const currentDay = new Date().getDay();
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const startDay = (((currentDay - (currentDate - 1)) % 7) + 7) % 7;

    let daysInMonth;
    let isLeapYear;

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
    } else {
      daysInMonth = 30;
    }

    return (
      <CalendarBox>
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
          <Dates> </Dates>
          <Dates> </Dates>
          <Dates>1</Dates>
          <Dates>2</Dates>
          <Dates>3</Dates>
          <Dates>4</Dates>
          <Dates>5</Dates>
        </Rows>
        <Rows>
          <Dates> </Dates>
          <Dates> </Dates>
          <Dates>1</Dates>
          <Dates>2</Dates>
          <Dates>3</Dates>
          <Dates>4</Dates>
          <Dates>5</Dates>
        </Rows>
        <Rows>
          <Dates> </Dates>
          <Dates> </Dates>
          <Dates>1</Dates>
          <Dates>2</Dates>
          <Dates>3</Dates>
          <Dates>4</Dates>
          <Dates>5</Dates>
        </Rows>
        <Rows>
          <Dates> </Dates>
          <Dates> </Dates>
          <Dates>1</Dates>
          <Dates>2</Dates>
          <Dates>3</Dates>
          <Dates>4</Dates>
          <Dates>5</Dates>
        </Rows>
        <Rows>
          <Dates> </Dates>
          <Dates> </Dates>
          <Dates>1</Dates>
          <Dates>2</Dates>
          <Dates>3</Dates>
          <Dates>4</Dates>
          <Dates>5</Dates>
        </Rows>
      </CalendarBox>
    );
  }
}

export default Calendar;
