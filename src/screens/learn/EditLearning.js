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


const EditLearn = (props) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [initialValue, setinitialValue] = useState()
    const [values, handleChange] = useForm({
      title: "",
      url: "",
  })

    const history = useHistory();
    const list = useLocation();
    const {
      params: { id },
    } = useRouteMatch("/admineditLearn/:id");

    const handleSubmit =  (e) => {
        // const [value, setValue]
        e.preventDefault();
        // alert("boy")

		const url =  "https://v1.api.seenergysolutions.org/api/learnings/" + id;

        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("url", values.url);
        formData.append("image", selectedFile);
        formData.append("_method", "put")
        const token = JSON.parse(localStorage.getItem("user")).data.token

        axios.post(
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
        ).then(response => {

            console.log(response.data)
			// alert("update successfully")
      swal({
          title: "Are you sure?",
          text: "E-Learning post have been updated successfully",
          icon: "success",
          confirmButtonColor: '#030762',
          // buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
              history.push("/adminlearn")
          } else {
            swal("Your imaginary file is safe!");
          }
      });
      })
      .catch(err => {
          console.log(err)
      })
    }


    useEffect( () => {
         axios.get("https://v1.api.seenergysolutions.org/api/learnings/" + id,
            {
              headers: {
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
              }
            }
        ).then((res) => {
          console.log(res.data.data)
          setinitialValue(res.data.data)
        })        
    }, [id])

    // console.log(initialValue.url)
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
                        placeholder = ""
                        name = "title"
                        required
                        value = {values.title}
                        onChange = {handleChange}
                        style={{background: "#FFFFFF"}}
                        defaultValue={initialValue.title}

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
                      name = "url"
                      required
                      value = {values.url}
                      onChange = {handleChange}
                      style={{background: "#FFFFFF"}}
                      // defaultValue={initialValue.url}

                    />
                </FromBx>
                <div style={{marginTop: 40}}></div>
                <CardButton>
                    <ButtonCancel >
                        <span>
                            Cancel
                        </span>
                    </ButtonCancel>
                    <ButtonSubmit type = "submit">
                        Ok 
                    </ButtonSubmit>
                </CardButton>
            </FormWrapper> 
                   
                {/* <button type="submit">submit</button> */}
            </FormCard>                    
        </>
    )
}

export default EditLearn


