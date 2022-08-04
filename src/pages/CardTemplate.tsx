import React from 'react';
import Card from 'components/Card';
import { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  width: 768px;
  margin: 0 auto;
  padding: 16px 0 48px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const CardTemplate: FunctionComponent = (): JSX.Element => {
  return (
    <Container>
      <Card></Card>
      <Card></Card>
    </Container>
  );
};

export default CardTemplate;
