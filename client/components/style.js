import styled from 'styled-components';

export const ResverationsDiv = styled.div`
  width: 374px;
  height: 456px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
`;

export const DetailsDiv = styled.div`
  padding-top: 18px;
  margin-left: 25px;
`;

export const Details = styled.span`
  color: rgb(72,72,72);
  font-family: 'Montserrat', sans-serif;
`;

export const CalendarBox = styled.div`
  width: 333px;
  height: 332px;
  color: rgb(72, 72, 72);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  font-family: 'Montserrat', sans-serif;
  z-index: 1;
  position: absolute;
  top: 242px;
  left: 32px;
`;

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const MonthAndYear = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 27px;
  margin-bottom: 28px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18px;
`;

export const ArrowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 31px;
  margin-top: 18px;
  margin-bottom: 18px;
  border: 1px solid rgb(228, 231, 231);
  border-radius: 3px;
  cursor: pointer;
`;

export const Rows = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.07px;
`;

export const Days = styled.div`
  width: 41px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(117,117,117);
  font-size: 11.67px;
  margin: 0.07px;
`;

export const DateDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  padding-top: 112px;
`;

export const DateBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 324px;
  height: 40px;
  margin-left: 24px;
  margin-right: 24px;
  border: 1px solid rgb(228, 231, 231);
  border-radius: 1px;
  font-size: 16px;
`;

export const CheckInOut = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 140px;
  height: 40px;
  color: rgb(143,143,143);
  cursor: text;
`;

export const GuestDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  padding-top: 15px;
`;

export const GuestBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 316px;
  height: 40px;
  margin-left: 24px;
  margin-right: 24px;
  border: 1px solid rgb(228, 231, 231);
  border-radius: 1px;
  font-size: 16px;
  color: rgb(72,72,72);
  padding-left: 8px;
`;

export const Button = styled.input`
  width: 326px;
  height: 46px;
  color: white;
  background-color: rgb(234,85,92);
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid rgb(234,85,92);
  border-radius: 4px;
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
  cursor: pointer;
`;
