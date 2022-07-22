import React, {useEffect, useState, useReducer, useContext} from "react"
import Header from "../../components/header/Header"
import {FromBx, Input, LoginForm } from "../login/Login__element"
import axios from "axios"
// import
import {useRouteMatch, useHistory, useLocation} from "react-router-dom"
import CardButton from "../../components/card-button/CardButton"
import File from "../../components/browserFile/File"
import FormCard from "../../components/form-card/FormCard"
import { ButtonCancel, ButtonSubmit } from "../../components/card-button/StyledButton"
import swal from "sweetalert"
import {FormWrapper } from "../blog/StyledBlog"
import { useForm } from "../../hooks/useForm"
import { Puff } from "react-loading-icons"


const EditLearn = (props) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const history = useHistory();
    const {
      params: { id },
    } = useRouteMatch("/admineditLearn/:id");

    const handleSubmit = async (e) => {
      e.preventDefault();
      setisLoading(true);
		  const link =  "https://v1.api.seenergysolutions.org/api/learnings/" + id;
      const formData = new FormData();
      console.log(url)
      formData.append("title", title);
      formData.append("url", url);
      formData.append("thumbnail", selectedFile);
      formData.append("_method", "PUT")
      const token = JSON.parse(localStorage.getItem("user")).data.token
      for (var value of formData.values()) {
        console.log(value);
     }
      await axios.post(
        link ,
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Bearer " + token
          },
          validateStatus : status => {
            return true;
          }
      }).then(response => {
        setisLoading(false)
        swal({
          text: "E-Learning post have been updated successfully",
          icon: "success",
          confirmButtonColor: '#030762',
          dangerMode: true,
        })})
        .catch(err => {
            console.log(err)
            setisLoading(false)
        })
    }


    useEffect( () => {
      const getId = async() => {
        await axios.get("https://v1.api.seenergysolutions.org/api/learnings/" + id,
          {
            headers: {
              "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
            }
          }
      ).then((res) => {
        setTitle(res?.data?.data?.title);
        setUrl(res?.data?.data?.url)
      })}
      getId();     
    }, [id])

    return (
        <>
             <Header
                header= "E-Learning"
            />
            {/*<BCard/> */}

            <FormCard
                header = "Edit E-Learining"
            > 
            <FormWrapper onSubmit = {handleSubmit}>
              <FromBx>
                <span>Title</span>
                <Input 
                  type = "text" 
                  name = "title"
                  required
                  value = {title}
                  onChange = {(e) => setTitle(e.target.value)}
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
                      name = "url"
                      required
                      value = {url}
                      onChange = {(e) => setUrl(e.target.value)}
                      style={{background: "#FFFFFF"}}
                    />
                </FromBx>
                <div style={{marginTop: 40}}></div>
                <CardButton>
                    <ButtonCancel  onClick = {() => history.push("/adminlearn")}>
                        <span>
                            Cancel
                        </span>
                    </ButtonCancel>
                    <ButtonSubmit type = "submit">
                      {
                        !isLoading ? "Ok" : <Puff />
                      }
                    </ButtonSubmit>
                </CardButton>
            </FormWrapper> 
                   
                {/* <button type="submit">submit</button> */}
            </FormCard>                    
        </>
    )
}

export default EditLearn


