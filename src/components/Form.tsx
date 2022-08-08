import React, { FunctionComponent, Component, useState } from 'react';
import styled from '@emotion/styled';
import { FormPropType, State } from 'types/FormProp.types';
import { useEffect } from 'react';

const FormWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 8px;
  width: 100%;
`;

const TextAreaSection = styled.textarea<{
  maxLength: number;
  state?: State;
  defaultValue?: string;
}>`
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 16px;
  text-align: left;
`;

const CounterTextSection = styled.span<{ contentState: State }>`
  position: absolute;
  border-radius: 4px;
  font-size: 12px;
  bottom: ${({ contentState }) =>
    contentState === 'default' ? '13px' : '6px'};
  right: 5px;
`;

const SaveButton = styled.button<{}>`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 4px;
  background-color: #ff7b30;
  color: #ffff;
  &:hover {
    background-color: #f26b1d;
  }
`;

const Form: FunctionComponent<FormPropType> = (
  props: FormPropType,
): JSX.Element => {
  const { maxLength, state = 'default', defaultValue = '' } = props;
  const [counter, setCounter] = useState(0);
  const [contentState, setContentState] = useState(state);
  const [isActiveButton, setIsActiveButton] = useState(false);

  useEffect(() => {
    if (defaultValue?.length > 0) {
      setCounter(maxLength - defaultValue?.length);
    }
  }, []);

  const calcLength = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;

    // 초기값과 내용이 같지 않을때만 save 버튼 활성화
    if (defaultValue !== inputValue) {
      setContentState('inputProgress');
      setCounter(maxLength - inputValue.length);
    }

    setIsActiveButton(!isActiveButton);
  };
  return (
    <FormWrapper>
      <TextAreaSection
        maxLength={maxLength}
        onKeyUp={e => {
          calcLength(e);
        }}
        placeholder={!defaultValue ? '내용이 있을 수도 있습니다.' : ''}
        readOnly={state === 'readonly'}
        disabled={state === 'disabled'}
        defaultValue={defaultValue}
      ></TextAreaSection>
      <CounterTextSection contentState={contentState}>
        {counter}
      </CounterTextSection>
      {contentState === 'inputProgress' && (
        <SaveButton
          disabled={!isActiveButton}
          onClick={(): void => {
            console.log('저장되었습니다.');
          }}
        >
          save
        </SaveButton>
      )}
    </FormWrapper>
  );
};

export default Form;
