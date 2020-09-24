import styled from "styled-components/native";
import colors from "../../constants/colors";

export const ProfileContainer = styled.View`
  width: 100%;
  height: 70px;
  margin-top: 10px;
  /* background-color: red; */
  align-items: center;
  flex-direction: row;
  padding-right: 20px;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 8px;
  background-color: red;
`;

export const InfoContainer = styled.View`
  width: 60%;
  height: 50px;
  padding-left: 20px;
  justify-content: space-around;
  align-items: baseline;
  /* background-color: red; */
`;

export const TextPrimary = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 17px;
`;

export const City = styled.Text`
  color: gray;
`;

export const TimerContainer = styled.View`
  height: 50px;
  justify-content: flex-end;
  /* background-color: cyan; */
`;

export const TimerText = styled.Text`
  color: gray;
  /* background-color: red; */
`;

export const CardListContainer = styled.View`
  width: 100%;
  height: 180px;
  padding-top: 16px;
`;

export const CardBeerList = styled.ScrollView`
  /* width: 100%; */
  /* height: 10px; */

  /* padding-bottom: 20px; */
  /* background-color: red; */
`;

export const CardBeerContainer = styled.View`
  background-color: ${colors.black};
  height: 150px;
  width: 120px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  /* margin-left: 8px; */
  margin-right: 16px;
`;

export const CardBeerImage = styled.Image`
  height: 120px;
  width: 100%;
`;

export const CountersContainer = styled.View`
  height: 50px;
  width: 100%;
  /* background-color: white; */
  flex-direction: row;
  align-items: center;
`;

export const CounterGroupContainer = styled.View`
  height: 50px;
  width: 25%;
  justify-content: flex-start;
  /* background-color: cyan; */
  flex-direction: row;
  align-items: center;
`;

export const CounterGroupText = styled.Text`
  margin-left: 8px;
  color: white;
  font-weight: bold;
  font-size: 15px;
`;
