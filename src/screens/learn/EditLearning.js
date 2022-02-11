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
    useEffect( () => {
         axios.get("https://fixontime.herokuapp.com/learnings/" + id,
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
            <FromBx>
                <span>Title</span>
                <Input 
                    type = "text" 
                    placeholder = ""
                    name = "email"
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
                        name = "link"
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
                    <ButtonSubmit type = "sumbit">
                        Ok 
                    </ButtonSubmit>
                </CardButton>
                   
                {/* <button type="submit">submit</button> */}
            </FormCard>                    
        </>
    )
}

export default EditLearn


