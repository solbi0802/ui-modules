import React, { FunctionComponent, Component } from 'react';
import styled from '@emotion/styled';
import { BsStar, BsStarFill } from 'react-icons/bs';

const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 8px;
`;

const Rating: FunctionComponent = (): JSX.Element => {
  return (
    <RatingWrapper>
      <BsStarFill color="#ffc500"></BsStarFill>
      <BsStar></BsStar> <BsStar></BsStar> <BsStar></BsStar> <BsStar></BsStar>
    </RatingWrapper>
  );
};

export default Rating;
