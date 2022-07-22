import React, { useState, useContext, useEffect} from "react"
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
import { useRouteMatch } from "react-router-dom";
import axios from "axios";

const ContactView = () => {
  const history = useHistory();
  const [data, setData] = useState("")
  const {
    params: { id },
  } = useRouteMatch("/adminviewcontact/:id");

  useEffect(() => {      
    const getId = async () => {
      await axios.get("https://v1.api.seenergysolutions.org/api/contacts/" + id,
        {
          headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
          }
        }
    ).then((res) => {
      // console.log(res.data.data)
      setData(res?.data?.data)

    })    
    }

    getId();
  }, [id])  

  console.log(data)

  return (
      <>
        <Header
          header= "Contact"
        />
        {/*<BCard/> */}
        <FormCard
          header = "Contact information"
        >  
          <FormWrapper>

            <div>
              <p>Name</p>
              <h4>{data.firstName} {data.lastName}</h4>
            </div>

            <div>
              <p>Email</p>
              <h4>{data.email}</h4>
            </div>

            <div>
              <p>Subject</p>
              <h4>{data.subject}</h4>
            </div>

            <div>
              <p>Message</p>
              <p>{data.message}</p>
            </div>
            
            <div style={{marginTop: 40}}></div>
            <CardButton>
              {/* <ButtonCancel  onClick = {() => history.push("/adminBlog")}>
                <span>
                  Cancel
                </span>
              </ButtonCancel> */}
              <ButtonSubmit type = "sumbit" onClick = {() => history.push("/admincontact")}>
                Ok
                {/* {
                  !isFetching ? "Ok" :  <Puff/>
                } */}
              </ButtonSubmit>
            </CardButton>
          </FormWrapper> 
        </FormCard>                    
      </>
  )
}

export default ContactView


