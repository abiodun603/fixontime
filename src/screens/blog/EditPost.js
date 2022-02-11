import React, {useEffect, useState, useReducer, useContext} from "react"
import {useRouteMatch, useHistory, useLocation} from "react-router-dom"

import Button from "../../components/button/Button"
import Header from "../../components/header/Header"
import {PageHeader, AddCustomer, HeaderContainer, Card2, FormWrapper} from "../dashboard/StyledGuards"
import {FromBx, Input, LoginForm } from "../login/Login__element"
import axios from "axios"
import { useForm } from '../../hooks/useForm';
// import
// import {useHistory} from "react-router-dom"
import BCard from "../../components/blog-card/BCard"
import { Card, CardBody, CardForm, CardHeader, CardWrapper } from "../blog/StyledBlog"
import CardButton from "../../components/card-button/CardButton"
import File from "../../components/browserFile/File"
import ScrollTextArea from "../../components/scrollTextarea/ScrollTextArea"
import FormCard from "../../components/form-card/FormCard"

const EditPost = (props) => {
    // const [values, handleChange] = useForm({title: "",content: ""})
    const [selectedFile, setSelectedFile] = useState(null)
    const [value , setValue] = useState({
        title: "",
        content: ""
    })
    const history = useHistory();
    const list = useLocation();
    const {
      params: { id },
    } = useRouteMatch("/editPost/:id");

    function handle(e){
        const newValue = {...value}
        newValue[e.target.name] = e.target.value
        setValue(newValue)
    }

    const handleSubmit =  (e) => {
        // const [value, setValue]
        e.preventDefault();
        console.log(value);
        alert("boy")

		const url =  "https://fixontime.herokuapp.com/posts/" + id;

        const formData = new FormData();
        formData.append("title", value.title);
        formData.append("content", value.content);
        formData.append("categoryId", "4");
        formData.append("image", selectedFile);

        // const token = JSON.parse(localStorage.getItem("user")).access_token
       
        // const data = {
		// 	title: values.title,
		// 	content: values.content,
		// }

        // await axios.put(
        //     url ,
        //     data,
		// 	{
		// 		headers: {
		// 		 "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
		// 	}}
        // ).then(response => {

        //     console.log(response.data)
		// 	alert("update successfully")
			
		// 	history.push("/")
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    useEffect(() => {
            axios.get("https://fixontime.herokuapp.com/posts/" + id,
                {
                    headers: {
                        "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                    }
                }
            ).then((res) => {
                console.log(res.data)
                // values.title = res.data.title
                setValue(res.data)
            })        
    }, [])
    return (
        <>
             <Header
                header= "E-Learing"
                title="New Post"

            />
            {/*<BCard/> */}

            <FormCard
                header = "Edit blog post"
            >
                <FormWrapper onSubmit = {handleSubmit} enctype = "multipart/form-data">

                </FormWrapper>
                <FromBx>
                    <span>Title</span>
                    <Input 
                        type = "text" 
                        placeholder = ""
                        name = "title"
                        required
                        value = {value.title}
                        onChange = {(e) => handle(e)}
                        // value = {values.title}
                        // onChange = {handleChange}
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
                        // value = {values.text}
                        // onChange = {handleChange}
                        value = {value.content}
                        onChange = {(e) => handle(e)}
                    />
                </FromBx>
                <div style={{marginTop: 40}}></div>
                {/* <CardButton
                    cancel = "Cancel"
                    submit= "Save"
                    onCancel = {() => history.push("/blog")}
                    onSubmit = {() => history.push("/blog")}
                />   */}
                <button type="submit">submit</button>
            </FormCard>                      
        </>
    )
}

export default EditPost


