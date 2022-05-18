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
import { useForm } from '../../hooks/useForm';


const EditPost = (props) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [values, handleChange] = useForm({
      title: "",
      content: ""
  });
    
    const [value , setValue] = useState({
        title: "",
        content: ""
    })
    const history = useHistory();
    const {
      params: { id },
    } = useRouteMatch("/admineditPost/:id");

    function handle(e){
        const newValue = {...value}
        newValue[e.target.name] = e.target.value
        setValue(newValue)
    }

 

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(values)

        const token = JSON.parse(localStorage.getItem("user")).data.token;
	    	const url =  "https://v1.api.seenergysolutions.org/api/posts/" + id;
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("content", values.content);
        formData.append("category_id", 2);
        formData.append("image", selectedFile);
        formData.append("_method", "PUT")

        // console.log(selectedFile);
        for (var value of formData.values()) {
          console.log(value);
       }

        await axios.post(
            url ,
            formData,
        {
          headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token
        },
        validateStatus : status => {
          return true;
        }
      }
        ).then(res => {
          console.log(res)
            swal({
                title: "Are you sure?",
                text: "Blog post have been up successfully",
                icon: "success",
                confirmButtonColor: '#030762',
                dangerMode: true,
              }).then((willDelete) => {
                if (willDelete) {
                    history.push("/adminblog")
                } else {
                  swal("Your imaginary file is safe!");
                }
            });
            })
            .catch(err => {
                console.log(err)
            })
    }

    // useEffect(() => {
    //         axios.get("https://v1.api.seenergysolutions.org/api/posts/" + id,
    //             {
    //                 headers: {
    //                     "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
    //                 }
    //             }
    //         ).then((res) => {
    //             console.log(res.data)
    //             setValue(res.data)
    //         })        
    // }, [id])  
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
                        value = {values.content}
                        onChange = {handleChange}
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


