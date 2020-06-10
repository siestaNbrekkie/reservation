import styled from 'styled-components';

export const ResverationsDiv = styled.div`
  width: 374px;
  // height: 456px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
`;

export const DetailsDiv = styled.div`
  padding-top: 18px;
  padding-bottom: 10px;
  margin-left: 25px;
  margin-right: 25px;
  border-bottom: 1px solid rgb(228, 231, 231);
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
  top: 204px;
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
  margin-top: 60px;
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

export const GuestDropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 325px;
  height: 332px;
  color: rgb(72, 72, 72);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  font-family: 'Montserrat', sans-serif;
  z-index: 1;
  position: absolute;
  top: 271px;
  left: 33px;
  border-top: 2px solid #008489;
`;

export const GuestChoices = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TypeOfGuest = styled.div`
  margin-left: 18px;
  font-size: 16;
  font-weight: bold;
`;

export const GuestButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 106px;
  margin-right: 18px;
`;

export const CircleButton = styled.div`
  width: 32px;
  height: 30px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  line-height: 30px;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 24px;
  font-size: 16;
  font-weight: bold;
  color: #008489;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.input`
  width: 324px;
  height: 46px;
  color: white;
  background-color: rgb(234,85,92);
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid rgb(234,85,92);
  border-radius: 4px;
  margin: 15px 24px 15px 1px;
  cursor: pointer;
`;
