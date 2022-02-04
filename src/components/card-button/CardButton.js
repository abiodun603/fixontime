import React from 'react';
import { ButtonCancel, ButtonContainer, ButtonSubmit } from './StyledButton';

const CardButton = (props) => {
  return (
      <>
            <ButtonContainer>
                <ButtonCancel>
                    <span>
                         {props.cancel}
                    </span>
                </ButtonCancel>
                <ButtonSubmit>
                       {props.submit} 
                </ButtonSubmit>
            </ButtonContainer>
      </>
  )
};

export default CardButton;
