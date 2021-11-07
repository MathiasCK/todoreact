import React from 'react';
import styled from 'styled-components';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <Group>
      <StyledFormInput onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </Group>
  );
};

const Group = styled.div`
  position: relative;
  margin: 45px 0;
  .form-input-label {
    color: grey;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    &.shrink {
      top: -14px;
      font-size: 12px;
      color: black;
    }
  }
`;

const StyledFormInput = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  &:focus {
    outline: none;
  }
  &:focus ~ .form-input-label {
    top: -14px;
    font-size: 12px;
    color: black;
  }
`;

export default FormInput;
