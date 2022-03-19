import React from 'react';
import { Card, CardBody, CardForm, CardHeader, CardWrapper } from '../../screens/blog/StyledBlog';

const FormCard = (props) => {
  return (
    <>
        <CardWrapper>
            <Card>
                <CardHeader>
                    <p>{props.header}</p>
                </CardHeader>
                <CardBody>
                    <CardForm>
                        {props.children}
                    </CardForm>
                </CardBody>
            </Card>
        </CardWrapper>
    </>
  );
};

export default FormCard;
