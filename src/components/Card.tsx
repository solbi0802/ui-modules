import React, { FunctionComponent, Component } from 'react';
import styled from '@emotion/styled';
import Rating from './Rating';
import { CardPropType } from 'types/CardProp.types';

const CardWrapper = styled.div<{ layout: 'vertical' | 'horizontal' }>`
  display: flex;
  flex-direction: ${({ layout }) =>
    layout === 'horizontal' ? 'row' : 'column'};
  column: row;
  justify-content: center;
  align-items: flex-start;
  border: solid #d0c9c6 1px;
  border-radius: 8px;
`;

const CardImage = styled.img<{ layout: 'vertical' | 'horizontal' }>`
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
  border-bottom: solid #d0c9c6 1px;
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

const Card: FunctionComponent<CardPropType> = (
  props: CardPropType,
): JSX.Element => {
  const {
    layout = 'vertical',
    title,
    label,
    hilightText,
    crossoutText,
    contents,
    useRating = true,
  } = props;
  return (
    <CardWrapper layout={layout}>
      <CardImage src="/image.png" alt="카드 이미지" layout={layout}></CardImage>
      <TextWrapper>
        <CardLabel>{label}</CardLabel>
        <CardTitle>{title}</CardTitle>
        <SubTextWrapper>
          <HilightText>{hilightText}</HilightText>
          <CrossOutText>{crossoutText}</CrossOutText>
        </SubTextWrapper>
      </TextWrapper>
      {useRating && <Rating />}
      {contents && <Contents>{contents}</Contents>}
    </CardWrapper>
  );
};

export default Card;
