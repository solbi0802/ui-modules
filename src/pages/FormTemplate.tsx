import React from 'react';
import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Form from 'components/Form';

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
      <Form maxLength={500} defaultValue={'입력폼입니다.'} />
      <Form
        maxLength={500}
        state={'disabled'}
        defaultValue={'비활성화상태입니다.'}
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
