import React, { FunctionComponent, Component } from 'react';
import styled from '@emotion/styled';
import Rating from './Rating';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 8px;
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  background-color: #f8f7f7fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  border: solid #d0c9c6 1px;
`;

const CardLabel = styled.p`
  color: #929292;
  font-size: 14px;
  margin-left: 8px;
  margin-top: 8px;
  font-weight: 500;
`;

const CardTitle = styled.p`
  font-size: 16px;
  margin: 8px 0 0 8px;
  font-weight: 500;
`;

const SubTextWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 12px;
  padding: 8px 8px;
`;

const HilightText = styled.p`
  font-size: 14px;
  color: #ec414c;
`;

const CrossOutText = styled.p`
  font-size: 12px;
  text-decoration: line-through;
  color: #929292;
  margin-left: 8px;
`;

const Contents = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 200px;
  height: 20px;
  padding: 8px 8px;
`;

const Card: FunctionComponent = (): JSX.Element => {
  return (
    <CardWrapper>
      <CardImage src="/image.png"></CardImage>
      <TextWrapper>
        <CardLabel>CardLabel</CardLabel>
        <CardTitle>CardTitle</CardTitle>
        <SubTextWrapper>
          <HilightText>Hilight</HilightText>
          <CrossOutText>CrossOut</CrossOutText>
        </SubTextWrapper>
      </TextWrapper>
      <Rating />
      <Contents>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        consequatur vero veniam aperiam nulla soluta nisi nam deserunt cumque
        distinctio. Quisquam animi sapiente laboriosam et debitis ipsam laborum
        ad fugiat.
      </Contents>
    </CardWrapper>
  );
};

export default Card;
