import React from "react";
import Container from "../../components/container";
import {
  // Title,
  // HeaderContainer,
  ProfileContainer,
  Avatar,
  InfoContainer,
  TextPrimary,
  City,
  TimerContainer,
  TimerText,
  CardListContainer,
  CardBeerList,
  CardBeerContainer,
  CardBeerImage,
  CountersContainer,
  CounterGroupContainer,
  CounterGroupText,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import colors from "../../constants/colors";
import BeerImage from "../../assets/beer.png";

export default function index() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU",
          }}
        />
        <InfoContainer>
          <TextPrimary>John Wendy</TextPrimary>
          <City>Boston</City>
        </InfoContainer>
        <TimerContainer>
          <TimerText>2 mins ago</TimerText>
        </TimerContainer>
      </ProfileContainer>

      <CardListContainer>
        <CardBeerList horizontal showsHorizontalScrollIndicator={false}>
          <CardBeerContainer>
            <CardBeerImage source={BeerImage} resizeMode="contain" />
          </CardBeerContainer>
          <CardBeerContainer>
            <CardBeerImage source={BeerImage} resizeMode="contain" />
          </CardBeerContainer>
          <CardBeerContainer>
            <CardBeerImage source={BeerImage} resizeMode="contain" />
          </CardBeerContainer>
          <CardBeerContainer>
            <CardBeerImage source={BeerImage} resizeMode="contain" />
          </CardBeerContainer>
        </CardBeerList>
      </CardListContainer>

      <CountersContainer>
        <CounterGroupContainer>
          <AntDesign name="hearto" color="red" size={30} />
          <CounterGroupText>54</CounterGroupText>
        </CounterGroupContainer>
        <CounterGroupContainer>
          <Feather name="message-square" size={30} color={colors.yellow} />
          <CounterGroupText>54</CounterGroupText>
        </CounterGroupContainer>
      </CountersContainer>

      <ProfileContainer>
        <Avatar
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU",
          }}
        />
        <InfoContainer>
          <TextPrimary>John Wendy</TextPrimary>
          <City>Boston</City>
        </InfoContainer>
        <TimerContainer>
          <TimerText>2 mins ago</TimerText>
        </TimerContainer>
      </ProfileContainer>

      <CardListContainer>
        <CardBeerList horizontal showsHorizontalScrollIndicator={false}>
          <CardBeerContainer>
            <CardBeerImage source={BeerImage} resizeMode="contain" />
          </CardBeerContainer>
          <CardBeerContainer>
            <CardBeerImage source={BeerImage} resizeMode="contain" />
          </CardBeerContainer>
          <CardBeerContainer>
            <CardBeerImage source={BeerImage} resizeMode="contain" />
          </CardBeerContainer>
          <CardBeerContainer>
            <CardBeerImage source={BeerImage} resizeMode="contain" />
          </CardBeerContainer>
        </CardBeerList>
      </CardListContainer>

      <CountersContainer>
        <CounterGroupContainer>
          <AntDesign name="hearto" color="red" size={30} />
          <CounterGroupText>54</CounterGroupText>
        </CounterGroupContainer>
        <CounterGroupContainer>
          <Feather name="message-square" size={30} color={colors.yellow} />
          <CounterGroupText>54</CounterGroupText>
        </CounterGroupContainer>
      </CountersContainer>
    </Container>
  );
}
