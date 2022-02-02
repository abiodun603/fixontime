import axios from 'axios';
import React from 'react';
import {useRouteMatch, useHistory, useLocation} from "react-router-dom"
import { useForm } from '../../hooks/useForm';
import {PageHeader, AddCustomer, HeaderContainer, Card2, FormWrapper} from "../dashboard/StyledGuards"
import { Button, FromBx, Input } from '../login/Login__element';



const Customers = () => {
	const history = useHistory();
	const list = useLocation();
  const {
    params: { id },
  } = useRouteMatch("/Customers/:id");


  const [values, handleChange] = useForm({
		name : "",
		email: "",
		age : "",
		origin: "",
		local: ""
	}); 

	const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(values);

		const url =  "https://candid-nest.herokuapp.com/soldiers/" + id;

		const data = {
			name: values.name,
			email: values.email,
			age: values.age,
			state_of_origin: values.origin,
			local_govt: values.local
		}
		const token = JSON.parse(localStorage.getItem("user")).access_token
		console.log(token)
		console.log(id)
		console.log(data)

        await axios.patch(
            url ,
            data,
			{
				headers: {
				 "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
			}}
        ).then(response => {

            console.log(response.data)
			alert("update successfull")
			
			history.push("/")
            })
            .catch(err => {
                console.log(err)
            })
    }


  return (
  	<>
      	<HeaderContainer>
			<PageHeader> Update Staff</PageHeader>
		</HeaderContainer>

		<Card2>
		<FormWrapper onSubmit = {handleSubmit}>
				<FromBx>
					<span>Update Staff Name</span>
					<Input type = "text" placeholder = {list.username} 
						name = "name"
						values = {values.name}
						onChange = {handleChange}
					/>
				</FromBx>
				<FromBx>
					<span>Update Staff Email</span>
					<Input type = "text" placeholder = "Enter Staff Email"
						name = "email"
						values = {values.email}
						onChange = {handleChange}
					/>
				</FromBx>
				<FromBx>
					<span>Update Staff Age</span>
					<Input type = "text" placeholder = "Enter Staff Age"
						name = "age" 
						values = {values.age}
						onChange = {handleChange}
					/>
				</FromBx>
				<FromBx>
					<span>Update Staff of Origin</span>
					<Input type = "text" placeholder = "Enter State of Origin"
						name="origin" 
						values = {values.origin}
						onChange = {handleChange}
					/>
				</FromBx>
				<FromBx>
					<span>Update Staff Government</span>
					<Input type = "text" placeholder = "Enter Staff L.G.A" 
						name = "local"
						values = {values.local}
						onChange = {handleChange}
					/>
				</FromBx>

				<FromBx style={{width: 200}}>
					<Button>UPDATE</Button>
				</FromBx>
			</FormWrapper>
		</Card2> 
  	</>);
};

export default Customers;
