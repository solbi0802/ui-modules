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
  width: ${({ layout }) => (layout === 'horizontal' ? 'auto' : '50%')};
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 8px rgba(68, 66, 66, 0.3);
    transition: 0.3s box-shadow;
  }
`;

const CardImage = styled.img<{ layout: 'vertical' | 'horizontal' }>`
  position: relative;
  width: ${({ layout }) => (layout === 'horizontal' ? '40%' : '100%')};
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  transition: transform 0.5s ease-in-out;
`;

const ContentWrapper = styled.div<{ layout: 'vertical' | 'horizontal' }>`
  background-color: #f8f7f7fa;
  display: flex;
  flex-direction: column;
  justify-content: ${({ layout }) =>
    layout === 'horizontal' ? 'flex-start' : 'center'};
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding-left: ${({ layout }) => layout === 'horizontal' && '8px'};
`;

const TextWrapper = styled.div<{ layout: 'vertical' | 'horizontal' }>`
  background-color: #f8f7f7fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  border-bottom: ${({ layout }) =>
    layout === 'horizontal' ? 'none' : 'solid #d0c9c6 1px;'};
`;

const CardLabel = styled.p<{ layout: 'vertical' | 'horizontal' }>`
  color: #929292;
  font-size: 14px;
  margin-left: 8px;
  margin-top: ${({ layout }) => (layout === 'horizontal' ? '0' : '8px')};
  font-weight: 500;
`;

const CardTitle = styled.p<{ layout: 'vertical' | 'horizontal' }>`
  display: -webkit-box;
  padding: 8px 0 0 8px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: ${({ layout }) => (layout === 'horizontal' ? 700 : 500)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${({ layout }) => layout === 'horizontal' && 'pre-line'};
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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

const Contents = styled.span<{ layout: 'vertical' | 'horizontal' }>`
  display: -webkit-box;
  line-height: 1.5;
  width: ${({ layout }) => layout === 'vertical' && '50%'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${({ layout }) => layout === 'horizontal' && 'pre-line'};
  -webkit-line-clamp: ${({ layout }) => (layout === 'horizontal' ? 3 : 1)};
  -webkit-box-orient: vertical;
  color: #929292;
`;

const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
      <ContentWrapper layout={layout}>
        {layout === 'vertical' ? (
          <>
            <TextWrapper layout={layout}>
              <CardLabel layout={layout}>{label}</CardLabel>
              <CardTitle layout={layout}>{title}</CardTitle>
              <SubTextWrapper>
                <HilightText>{hilightText}</HilightText>
                <CrossOutText>{crossoutText}</CrossOutText>
              </SubTextWrapper>
            </TextWrapper>
            {useRating && <Rating />}
            {contents && <Contents layout={layout}>{contents}</Contents>}
          </>
        ) : (
          <>
            <TextWrapper layout={layout}>
              <CardTitle layout={layout}>{title}</CardTitle>
              {contents && <Contents layout={layout}>{contents}</Contents>}
            </TextWrapper>
            <RatingWrapper>
              {useRating && <Rating />}
              <CardLabel layout={layout}>{`| ${label}`}</CardLabel>
            </RatingWrapper>
          </>
        )}
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;
