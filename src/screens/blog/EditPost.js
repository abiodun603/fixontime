import React, {useEffect, useState} from "react"
import {useRouteMatch, useHistory} from "react-router-dom"
import Header from "../../components/header/Header"
import {FormWrapper} from "../dashboard/StyledGuards"
import {FromBx, Input } from "../login/Login__element"
import axios from "axios"
import CardButton from "../../components/card-button/CardButton"
import File from "../../components/browserFile/File"
import ScrollTextArea from "../../components/scrollTextarea/ScrollTextArea"
import FormCard from "../../components/form-card/FormCard"
import { ButtonCancel, ButtonSubmit } from "../../components/card-button/StyledButton"
import swal from "sweetalert"

const EditPost = (props) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [value , setValue] = useState({
        title: "",
        content: ""
    })
    const history = useHistory();
    const {
      params: { id },
    } = useRouteMatch("/editPost/:id");

    function handle(e){
        const newValue = {...value}
        newValue[e.target.name] = e.target.value
        setValue(newValue)
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(value);
		const url =  "https://fixontime.herokuapp.com/posts/" + id;
        const formData = new FormData();
        formData.append("title", value.title);
        formData.append("content", value.content);
        formData.append("categoryId", "4");
        formData.append("image", selectedFile);

        axios.put(
            url ,
            formData,
			{
				headers: {
				 "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
			}}
        ).then(response => {
            swal({
                title: "Are you sure?",
                text: "Blog post have been up successfully",
                icon: "success",
                confirmButtonColor: '#030762',
                dangerMode: true,
              }).then((willDelete) => {
                if (willDelete) {
                    history.push("/blog")
                } else {
                  swal("Your imaginary file is safe!");
                }
            });
            })
            .catch(err => {
                console.log(err)
            })
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
                setValue(res.data)
            })        
    }, [id])  //take note of this 
    return (
        <>
             <Header
                header= "E-Learing"
                title="New Post"
                onClick = {() => history.push("/addPost")}
            />
            <FormCard
                header = "Edit blog post"
            >
                <FormWrapper onSubmit = {handleSubmit} enctype = "multipart/form-data">

                <FromBx>
                    <span>Title</span>
                    <Input 
                        type = "text" 
                        placeholder = ""
                        name = "title"
                        required
                        value = {value.title}
                        onChange = {(e) => handle(e)}
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
                        value = {value.content}
                        onChange = {(e) => handle(e)}
                    />
                </FromBx>
                <div style={{marginTop: 40}}></div>
                <CardButton>
                    <ButtonCancel>
                        <span>
                            Cancel
                        </span>
                    </ButtonCancel>
                    <ButtonSubmit type = "submit">
                        Ok 
                    </ButtonSubmit>
                </CardButton>
            </FormWrapper>

            </FormCard>                      
        </>
    )
}

export default EditPost


