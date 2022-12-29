import styled from '@emotion/styled';
import { InputBase } from '@components/atom/Inputs';
import React, { useEffect } from 'react';

type MessageType = 'error' | 'success' | 'default';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  validate: {
    validation: RegExp | ((inputValue: string) => boolean);
    defaultMessage: string;
    errorMessage: string;
    successMessage: string;
  }[];
  onValidate?: (isValidate: boolean) => void;
}

/**
 * InputBase를 베이스로 사용하는 input입니다.
 * 다중 조건문 발리데이션 input 입니다.
 * validation , defaultMessage ,errorMessage ,successMessage가 명시되어있어야합니다. (메시지는 명시안되어있으면 에러는 안나지만 안나옴)
 * */
export function ValidateInput({ validate, onValidate, ...rest }: Props) {
  const [validateMessage, setValidateMessage] = React.useState<{ type: MessageType; message: string }[]>(
    validate.map((r) => ({ type: 'default', message: r.defaultMessage })),
  );
  const [isCheckValidationArr, setIsCheckValidationArr] = React.useState<boolean[]>(
    new Array(validate.length).fill(false),
  ); //조건문이 모두 맞으면 true
  const [isCheckValidation, setIsCheckValidation] = React.useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const inputValidated: { type: MessageType; message: string }[] = validate.map((r, idx) => {
      const prevIsCheckValidation = isCheckValidationArr || [];
      if (value === '') {
        prevIsCheckValidation[idx] = false;
        setIsCheckValidationArr(prevIsCheckValidation);
        return {
          type: 'default',
          message: r.defaultMessage,
        };
      }

      let validation; //정규식 혹은 ioc 제어역전함수 결과값 담는 변수
      if (r.validation instanceof RegExp) validation = r.validation.test(value);
      else if (typeof r.validation === 'function') validation = r.validation(value);

      if (!validation) {
        prevIsCheckValidation[idx] = false;
        setIsCheckValidationArr(prevIsCheckValidation);
        return {
          type: 'error',
          message: r.errorMessage,
        };
      }
      if (validation) {
        prevIsCheckValidation[idx] = true;
        setIsCheckValidationArr(prevIsCheckValidation);
        return {
          type: 'success',
          message: r.successMessage,
        };
      }
      prevIsCheckValidation[idx] = false;
      setIsCheckValidationArr(prevIsCheckValidation);
      return {
        type: 'default',
        message: r.defaultMessage,
      };
    });
    setValidateMessage(inputValidated);
  };

  const MessageRenderer = (type: MessageType, message: string) => {
    switch (type) {
      case 'success':
        return <SuccessMessage color={'#4caf50'}>{message}</SuccessMessage>;
      case 'error':
        return <ErrorMessage color={'#d32f2f'}>{message}</ErrorMessage>;
      case 'default':
        return <DefaultMessage color={'#b0b5ba'}>{message}</DefaultMessage>;
    }
  };

  useEffect(() => {
    const trueValidationArrLength = isCheckValidationArr.filter((f) => f).length;

    setIsCheckValidation(trueValidationArrLength === validate.length);
  }, [JSON.stringify(isCheckValidationArr)]);

  // useEffect(() => {
  //   if (onValidate)
  //     onValidate(isCheckValidationArr.filter((f) => (f.isCheck === true ? true : false)).length === validate.length);
  // }, [isCheckValidationArr]);
  useEffect(() => {
    if (onValidate) onValidate(isCheckValidation);
  }, [isCheckValidation]);

  return (
    <ValidateInputWrap>
      <InputBase {...rest} onChange={handleChange} />
      {validateMessage.map((r) => MessageRenderer(r.type, r.message))}
    </ValidateInputWrap>
  );
}

const ValidateInputWrap = styled.div``;

const SuccessMessage = styled.div`
  color: #4caf50;
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
`;

const DefaultMessage = styled.div`
  color: #b0b5ba;
`;
