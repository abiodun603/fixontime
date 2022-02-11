import React from 'react';
import { ButtonCancel, ButtonContainer, ButtonSubmit } from './StyledButton';

const CardButton = ({children}) => {
  return (
      <>
            <ButtonContainer>
                {children}
            </ButtonContainer>
      </>
  )
};

export default CardButton;
