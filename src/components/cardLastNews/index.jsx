import React from "react";

import { BadgeText, Container, DataProfile, DatePost, ImagePost, ImageProfile, ImageProfileContainer, NameProfile, ProfileContainer, TextCard } from "./styles";
import { TbCalendarEvent } from "react-icons/tb"

const CardLastNews = ({
  imageSrc,
  badge,
  text,
  profileImage,
  nameProfile,
  datePost,
}) => {

  return(
    <Container>
      <ImagePost src={imageSrc}/>
      <BadgeText>
        {badge}
      </BadgeText>
      <TextCard>
        {text}
      </TextCard>
      <ProfileContainer>
        <ImageProfileContainer>
          <ImageProfile src={profileImage}/>
        </ImageProfileContainer>
        <DataProfile>
          <NameProfile>
            {nameProfile}
          </NameProfile>
          <DatePost>
            <TbCalendarEvent />
            <span>{datePost}</span>
          </DatePost>
        </DataProfile>
      </ProfileContainer>
    </Container>
  );
};

export default CardLastNews;