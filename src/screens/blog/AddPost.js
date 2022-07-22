import React, { useState, useContext} from "react"
import Header from "../../components/header/Header"
import {FromBx, Input } from "../login/Login__element"
import { useForm } from '../../hooks/useForm';
import {FormWrapper } from "../blog/StyledBlog"
import File from "../../components/browserFile/File"
import ScrollTextArea from "../../components/scrollTextarea/ScrollTextArea"
import FormCard from "../../components/form-card/FormCard"
import { BlogContext } from "../../context/blogContext/BlogContext";
import { createBlog } from "../../context/blogContext/apiCalls";
import { ButtonCancel, ButtonSubmit } from "../../components/card-button/StyledButton";
import CardButton from "../../components/card-button/CardButton";
import { Puff } from "react-loading-icons";
import { useHistory } from "react-router-dom";

const AddPost = () => {
    const history = useHistory();
    const [values, handleChange] = useForm({
        title: "",
        content: "",
    })
    const [selectedFile, setSelectedFile] = useState(null)
    // useContext
    const {dispatch, isFetching} = useContext(BlogContext)

    console.log(isFetching);
    const handleForm = (e) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("content", values.content);
        formData.append("category_id", "2");
        formData.append("image", selectedFile);
        e.preventDefault();
        createBlog(formData, dispatch);
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
              <div style={{textAlign: "center", background: "#D6F3E9", fontSize: "13px", padding: ".8rem", marginBottom: "12px"}}>Image size must not be greater than 512kb</div>
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
                <CardButton>
                  <ButtonCancel  onClick = {() => history.push("/adminBlog")}>
                    <span>
                      Cancel
                    </span>
                  </ButtonCancel>
                  <ButtonSubmit type = "sumbit">
                    {
                      !isFetching ? "Ok" :  <Puff/>
                    }
                  </ButtonSubmit>
                </CardButton>
            </FormWrapper> 
          </FormCard>                    
        </>
    )
}

export default AddPost


