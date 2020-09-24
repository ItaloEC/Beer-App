import styled from "styled-components/native";
import colors from "../../constants/colors";

export const Container = styled.ScrollView`
  background-color: ${colors.dark_grey};
  color: black;
  width: 100%;
  height: 100%;
  padding: 20px 0px 0px 16px;
  /* justify-content: center;
  align-items: center; */
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 30px;
  font-weight: bold;
  /* background-color: green; */
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  /* background-color: red; */
`;
