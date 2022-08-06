import React, { FunctionComponent, Component, useState } from 'react';
import styled from '@emotion/styled';
import { TiStar } from 'react-icons/ti';

const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 8px;
`;

const Rating: FunctionComponent = (): JSX.Element => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  return (
    <RatingWrapper>
      {[...Array(5)].map((el, i) => {
        const ratingValue = i + 1;
        return (
          <TiStar
            key={`id_${i}`}
            size={25}
            className="star"
            color={ratingValue <= (hovered || rating) ? '#ffc500' : '#dddada'}
            onMouseEnter={() => setHovered(ratingValue)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setRating(ratingValue)}
          />
        );
      })}
    </RatingWrapper>
  );
};

export default Rating;
