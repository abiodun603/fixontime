import React, {useEffect, useState, useReducer, useContext} from "react"
import Button from "../../components/button/Button"
import Header from "../../components/header/Header"
import {PageHeader, AddCustomer, HeaderContainer, Card2, FormWrapper} from "../dashboard/StyledGuards"
import {FromBx, Input, LoginForm } from "../login/Login__element"
import axios from "axios"
import { useForm } from '../../hooks/useForm';
// import
import {useHistory} from "react-router-dom"
import BCard from "../../components/blog-card/BCard"
import { Card, CardBody, CardForm, CardHeader, CardWrapper } from "../blog/StyledBlog"
import CardButton from "../../components/card-button/CardButton"
import File from "../../components/browserFile/File"
import ScrollTextArea from "../../components/scrollTextarea/ScrollTextArea"
import FormCard from "../../components/form-card/FormCard"

const AddLearn = (props) => {
    const history = useHistory();
    return (
        <>
             <Header
                header= "E-Learning"
            />
            {/*<BCard/> */}

            <FormCard
                header = "Edit post"
            >  
            <FromBx>
                <span>Title</span>
                <Input 
                    type = "text" 
                    placeholder = ""
                    name = "email"
                    required
                    // value = {values.email}
                    // onChange = {handleChange}
                    style={{background: "#FFFFFF"}}

                />
                    
                </FromBx>

                <FromBx>
                    <span>Thumbnail image</span>
                    <File/>
                </FromBx>

                <FromBx>
                    <span>Video link</span>
                    <Input 
                        type = "text" 
                        placeholder = ""
                        name = "email"
                        required
                        // value = {values.email}
                        // onChange = {handleChange}
                        style={{background: "#FFFFFF"}}

                    />
                </FromBx>
                <div style={{marginTop: 40}}></div>
                <CardButton
                    cancel = "Cancel"
                    submit= "Save"
                    onCancel = {() => history.push("/learn")}
                    onSubmit = {() => history.push("/learn")}
                />  
            </FormCard>                    
        </>
    )
}

export default AddLearn

