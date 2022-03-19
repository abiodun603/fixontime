import React from 'react';
import { ButtonContainer } from './StyledButton';

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
