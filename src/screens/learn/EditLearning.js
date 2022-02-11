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


const EditLearn = (props) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [value , setValue] = useState({
        title: "",
        url: ""
    })

    const history = useHistory();
    const list = useLocation();
    const {
      params: { id },
    } = useRouteMatch("/editLearn/:id");

    function handle(e){
        const newValue = {...value}
        newValue[e.target.name] = e.target.value
        setValue(newValue)
    }

    const handleSubmit =  (e) => {
        // const [value, setValue]
        e.preventDefault();
        console.log(value);
        // alert("boy")

		const url =  "https://fixontime.herokuapp.com/learnings/" + id;

        const formData = new FormData();
        formData.append("title", value.title);
        formData.append("url", value.url);
        // formData.append("categoryId", "4");
        formData.append("image", selectedFile);

        const token = JSON.parse(localStorage.getItem("user")).access_token

        axios.put(
            url ,
            formData,
			{
				headers: {
				 "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
			}}
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
                    history.push("/learn")
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
         axios.get("https://fixontime.herokuapp.com/learnings/" + id,
            {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        ).then((res) => {
            console.log(res.data)
           
            setValue(res.data)

        })        
    }, [id])
    return (
        <>
             <Header
                header= "E-Learning"
            />
            {/*<BCard/> */}

            <FormCard
                header = "Add new post"
            > 
            <FormWrapper onSubmit = {handleSubmit}>
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
                    <span>Video link</span>
                    <Input 
                        type = "text" 
                        placeholder = ""
                        name = "url"
                        required
                        value = {value.url}
                        onChange = {(e) => handle(e)}
                        style={{background: "#FFFFFF"}}

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


