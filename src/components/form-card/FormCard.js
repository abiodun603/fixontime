import React from 'react';
import { Card, CardBody, CardForm, CardHeader, CardWrapper } from '../../screens/blog/StyledBlog';
import { FromBx, Input } from '../../screens/login/Login__element';
import File from '../browserFile/File';
import CardButton from '../card-button/CardButton';
import ScrollTextArea from '../scrollTextarea/ScrollTextArea';

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
