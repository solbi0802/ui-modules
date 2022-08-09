import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Home: FunctionComponent = (): JSX.Element => {
  const Container = styled.div`
    padding: 10px 10px;
  `;
  const UlSection = styled.ul`
    margin: 16px 16px;
  `;
  return (
    <Container>
      <h1>메인 화면</h1>
      <nav>
        <UlSection>
          <Link to="card">카드 UI</Link>
        </UlSection>
        <UlSection>
          <Link to="form">입력 폼 UI</Link>
        </UlSection>
      </nav>
    </Container>
  );
};

export default Home;
