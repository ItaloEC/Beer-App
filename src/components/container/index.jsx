import React from "react";
import { Container, HeaderContainer, Title } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../constants/colors";

export default function Index({ children }) {
  return (
    <Container>
      <HeaderContainer>
        <Title>Feed</Title>
        <AntDesign name="menufold" size={24} color={colors.white} />
      </HeaderContainer>
      {children}
    </Container>
  );
}
