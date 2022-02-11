import React, {useEffect, useState, useReducer, useContext} from "react"
import Header from "../../components/header/Header"
import {FromBx, Input, LoginForm } from "../login/Login__element"
import { useForm } from '../../hooks/useForm';
// import
import {useHistory} from "react-router-dom"
import {FormWrapper } from "../blog/StyledBlog"
import File from "../../components/browserFile/File"
import ScrollTextArea from "../../components/scrollTextarea/ScrollTextArea"
import FormCard from "../../components/form-card/FormCard"
import { BlogContext } from "../../context/blogContext/BlogContext";
import { createBlog } from "../../context/blogContext/apiCalls";
import swal from 'sweetalert';
import { ButtonCancel, ButtonSubmit } from "../../components/card-button/StyledButton";
import CardButton from "../../components/card-button/CardButton";

const AddPost = (props) => {
    const history = useHistory();
    const [values, handleChange] = useForm({
        title: "",
        content: ""
    })
    const [selectedFile, setSelectedFile] = useState(null)

    // useContext
    const {dispatch} = useContext(BlogContext)


    const handleForm = (e) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("content", values.content);
        formData.append("categoryId", "4");
        formData.append("image", selectedFile);
        e.preventDefault();

        createBlog(formData, dispatch);

        console.log(values);
    }

    return (
        <>
             <Header
                header= "Blog Post"
            />
            {/*<BCard/> */}

            <FormCard
                header = "Add blog post"
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
                        <span>Blog text</span>
                        <ScrollTextArea
                            value = {values.text}
                            onChange = {handleChange}
                        />
                    </FromBx>
                    <div style={{marginTop: 40}}></div>
                    {/* <CardButton
                        cancel = "Cancel"
                        submit= "Save"
                        onCancel = {() => history.push("/blog")}
                    />  */}
                     <CardButton>
                        <ButtonCancel>
                            <span>
                                Cancel
                            </span>
                        </ButtonCancel>
                        <ButtonSubmit type = "sumbit">
                            Ok 
                        </ButtonSubmit>
                    </CardButton>
                </FormWrapper> 
            </FormCard>                    
        </>
    )
}

export default AddPost


