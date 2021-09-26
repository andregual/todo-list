import React from 'react';
import styled from 'styled-components';
import checkmark from '../../assets/images/icon-check.svg';

<style></style>;

export const Label = styled.label`
  cursor: pointer;
`;

export const Input = styled.input`
  & {
    position: absolute;
    transform: scale(0);
  }
`;

export const CheckboxSpan = styled.span`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) =>
    props.isChecked ? props.theme.colors.gradient : 'transparent'};

  border: ${(props) =>
    props.isChecked ? 'none' : `1px solid ${props.theme.colors.greyText}`};

  transition: all 0.5s ease;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.hover};
  }
`;

export const Checkmark = styled.span`
  background-image: url(${checkmark});
  width: 11px;
  height: 9px;
`;

const Checkbox = (props) => {
  if (props.disabledCheckbox) {
    return <CheckboxSpan />;
  }

  return (
    <>
      <Label>
        <Input type='checkbox' onChange={props.checkboxClicked} />
        <CheckboxSpan isChecked={props.checked}>
          {props.checked && <Checkmark></Checkmark>}
        </CheckboxSpan>
      </Label>
    </>
  );
};

export default Checkbox;
