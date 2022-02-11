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
import { LearnContext } from "../../context/learningContext/LearnContext"
import { createLearn } from "../../context/learningContext/apiCalls"
import { ButtonCancel, ButtonSubmit } from "../../components/card-button/StyledButton"

const AddLearn = (props) => {
    const [selectedFile, setSelectedFile] = useState(null)

    const history = useHistory();
    const [values, handleChange] = useForm({
        title: "",
        link: ""
    })

    // useContext
    const {dispatch} = useContext(LearnContext)


    const handleForm = (e) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("url", values.link);
        formData.append("thumbnail", selectedFile);
        e.preventDefault();

        createLearn(formData, dispatch);

        console.log(values);
    }
    return (
        <>
             <Header
                header= "E-Learning"
            />
            {/*<BCard/> */}

            <FormCard
                header = "Add new post"
            > 
                <FormWrapper onSubmit = {handleForm} enctype = "multipart/form-data">
                    <FromBx>
                        <span>Title</span>
                        <Input 
                            type = "text" 
                            placeholder = ""
                            name = "title"
                            required
                            value = {values.title}
                            onChange = {handleChange}
                            style={{background: "#FFFFFF"}}

                        />
                    </FromBx>
                    <FromBx>
                        <span>Thumbnail image</span>
                        <File
                            onFileSelect={(file) => setSelectedFile(file)}
                        />
                    </FromBx>

                    <FromBx>
                        <span>Video link</span>
                        <Input 
                            type = "text" 
                            placeholder = ""
                            name = "link"
                            required
                            value = {values.link}
                            onChange = {handleChange}
                            style={{background: "#FFFFFF"}}

                        />
                    </FromBx>
                    <div style={{marginTop: 40}}></div>

                    <CardButton>
                        <ButtonCancel onClick ={() => history.push("/learn")} >
                            <span>
                                Cancel
                            </span>
                        </ButtonCancel>
                        <ButtonSubmit type = "submit">
                            Ok 
                        </ButtonSubmit>
                    </CardButton>
                    {/* <button type = "submit" >submit</button> */}
                </FormWrapper> 
            </FormCard>                    
        </>
    )
}

export default AddLearn


