import React from 'react';
import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Form from 'components/Form';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 68px;
  width: 768px;
  margin: 0 auto;
  padding: 16px 0 48px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormTemplate: FunctionComponent = (): JSX.Element => {
  return (
    <Container>
      <h2>입력 폼 UI</h2>
      <Link to="/">메인 페이지로 이동</Link>
      <Link to="/card">카드 UI로 이동</Link>
      <Form maxLength={500} defaultValue={'입력폼입니다.'} />
      <Form
        maxLength={500}
        state={'disabled'}
        defaultValue={'비활성화 상태입니다.'}
      />
      <Form
        maxLength={500}
        state={'readonly'}
        defaultValue={'읽기 전용 상태입니다.'}
      />
    </Container>
  );
};

export default FormTemplate;
