import React, { FunctionComponent, Component, useState } from 'react';
import styled from '@emotion/styled';
import { FormPropType, State } from 'types/FormProp.types';
import { useEffect } from 'react';

const FormWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: 'center';
  align-items: 'center';
  border-radius: 8px;
  width: 100%;
`;

const TextAreaSection = styled.textarea<{ state: State }>`
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 16px;
  text-align: left;
  color: ${({ state }) => state === 'disabled' && '#ec414c'};
  outline-color: ${({ state }) =>
    state === 'readonly' ? '#787871' : '#5e96d9'};
`;

const CounterTextSection = styled.span<{ state: State }>`
  position: absolute;
  border-radius: 4px;
  font-size: 12px;
  bottom: 6px;
  right: ${({ state }) => (state === 'inputProgress' ? ' 62px' : '2px')};
`;

const SaveButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 4px;
  margin-left: 4px;
  background-color: #ff7b30;
  color: #ffff;
  &:hover {
    background-color: #f26b1d;
  }
  &:disabled {
    background-color: #787871;
  }
`;

const Form: FunctionComponent<FormPropType> = (
  props: FormPropType,
): JSX.Element => {
  const { maxLength, state = 'default', defaultValue = '' } = props;
  const [counter, setCounter] = useState<number>(0);
  const [contentState, setContentState] = useState<State>(state);
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(true);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (defaultValue?.length > 0) {
      setCounter(maxLength - defaultValue?.length);
    }
  }, []);

  const calcLength = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setContentState('inputProgress');
    setCounter(maxLength - inputValue.length);
    setValue(inputValue);
    // 초기값과 내용이 같지 않을때만 save 버튼 활성화
    if (defaultValue === inputValue) {
      setIsDisabledButton(true);
    } else {
      setIsDisabledButton(false);
    }
  };

  const onSubmit = (): void => {
    window.alert(`저장되었습니다. 입력 값 : ${value}`);
    setValue(''); // 입력 폼 초기화
  };

  return (
    <FormWrapper>
      <TextAreaSection
        maxLength={maxLength}
        onChange={calcLength}
        onKeyDown={calcLength}
        placeholder={!defaultValue ? '내용이 있을 수도 있습니다.' : ''}
        readOnly={state === 'readonly'}
        disabled={state === 'disabled'}
        defaultValue={defaultValue}
        value={value}
        state={contentState}
      ></TextAreaSection>
      <CounterTextSection state={contentState}>{counter}</CounterTextSection>
      {contentState === 'inputProgress' && (
        <SaveButton disabled={isDisabledButton} onClick={onSubmit}>
          save
        </SaveButton>
      )}
    </FormWrapper>
  );
};

export default Form;
