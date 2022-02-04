import React from 'react';
import { ButtonCancel, ButtonContainer, ButtonSubmit } from './StyledButton';

const CardButton = (props) => {
  return (
      <>
            <ButtonContainer>
                <ButtonCancel onClick={props.onCancel}>
                    <span>
                         {props.cancel}
                    </span>
                </ButtonCancel>
                <ButtonSubmit onClick = {props.onSubmit}>
                       {props.submit} 
                </ButtonSubmit>
            </ButtonContainer>
      </>
  )
};

export default CardButton;
