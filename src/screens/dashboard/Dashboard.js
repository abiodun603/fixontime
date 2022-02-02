import React, {useEffect, useState, useReducer, useContext} from "react"
import Button from "../../components/button/Button"
import Table from "../../components/table/Table"
import {FiEdit, FiTrash2} from "react-icons/fi"
import ActionButton from "../../components/action-button/ActionButton"
import {PageHeader, AddCustomer, HeaderContainer, Card2, FormWrapper} from "./StyledGuards"
import {AiOutlineUserAdd} from "react-icons/ai"
import {  DialogActions, DialogContent } from '@mui/material'
import {FromBx, Input } from "../login/Login__element"
import AlertDialog from "../../components/dialog/Dialog"
import axios from "axios"
import { useForm } from '../../hooks/useForm';
// import
import {useHistory} from "react-router-dom"
import { deleteStaff, getStaff } from "../../context/staffContext/apiCalls"
import { StaffContext } from "../../context/staffContext/StaffContext"
const staffsTableHead = [
    "",
    "name",
    "age",
    "email",
    "action"
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const Dashboard = (props) => {
    const [open, setOpen] = useState(false);
    const [StaffLists, setStaffLists] = useState([]);
    const [editOpen, setEditOpen] = useState(false)
    const [values, handleChange] = useForm({
        name : "",
        email: "",
        age : "",
        origin: "",
        local: ""
    });  

    const {staff, dispatch} = useContext(StaffContext)

    // init history
    const history = useHistory()

    const navigate = (id) => {
        history.push(`/Customers/${id}`)
        alert("you")
    }


    // const [editOpen, setEditOpen] = useState(false)
    const handleClickOpen = (props) => {
        setOpen(true);
    };
    const handleClickClose = () => {
        setOpen(false);
    }
    // edid Modal
    const handleEditOpen = () => {
        setEditOpen(true);
    }
    const handleEditClose = () => {
        setEditOpen(false);
    }
    // get token from localStorage
    const token = localStorage.getItem("token");

    // Fetch All Staff
    useEffect(() => { 
        getStaff(dispatch)
    }, [dispatch])  

    // Add New Staff
    const handleSubmit = async (e) => {
        const url =  "https://candid-nest.herokuapp.com/soldiers";

        const data = {
            name: values.name,
            email: values.email,
            age: values.age,
            state_of_origin: values.origin,
            local_govt: values.local
        }
        // e.preventDefault();
        console.log(values);

        await axios.post(
            url ,
            data,
			{
				headers: {
				 "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
			}}
        ).then(response => {

            console.log(response.data)
			alert("Add Staff successful")
			
			history.push("/")
            })
            .catch(err => {
                console.log(err)
            })
    }

    // work on this later
    // useEffect(() => { 
    //     getStaff(dispatch)
    // },[dispatch]) 
    // Delete Staff
    const handleDelete = (id) => {
       deleteStaff(id, dispatch)
       console.log(id)
    }

    // update record
    const handleUpdate =(e, id) => {
        e.preventDefault();
        alert(id);
    }



    // Render Staff
    const renderBody = (item, index) => (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>
                    <span style={{display: "flex"}}>
                        {/* <ActionButton
                            icon = {<AiOutlineFolderView/>}
                            type = "view"
                        /> */}
                        <ActionButton
                            icon = {<FiEdit/>}
                            type = "edit"
                            onClick ={()  => navigate(item.id)}

                        />
                        <ActionButton
                            onClick ={()  => handleDelete(item.id)}
                            icon = {<FiTrash2/>}
                            type = "warning"
                        />                        
                    </span>
                </td>
            </tr>             
        
    ) 
    return (
        <>
            <HeaderContainer>
                <PageHeader>Staff</PageHeader>
                <AddCustomer  onClick={handleClickOpen}>
                    <AiOutlineUserAdd/>
                </AddCustomer>
            </HeaderContainer>

            {/* Staff Card */}
            <Card2>
                <Table
                   
                    headData = {staffsTableHead}
                    renderHead = {(item, index) => renderHead(item, index)}
                    bodyData = {staff}
                    renderBody = {(item, index) => renderBody(item, index)}
                />
            </Card2>

            {/* Dialog for Adding Staff */}
            <AlertDialog
                open={open}
                onClose={handleClickClose}
                title={"Enter New Staff"}
            >
                <FormWrapper onSubmit = {handleSubmit}>
                    <DialogContent>
                        <FromBx>
                            <span>Staff Name</span>
                            <Input type = "text" placeholder = "Enter Staff Name" 
                                name = "name"
                                values = {values.name}
                                onChange = {handleChange}
                            />
                        </FromBx>
                        <FromBx>
                            <span>Staff Email</span>
                            <Input type = "text" placeholder = "Enter Staff Email"
                                name = "email"
                                values = {values.email}
                                onChange = {handleChange}
                            />
                        </FromBx>
                        <FromBx>
                            <span>Staff Age</span>
                            <Input type = "text" placeholder = "Enter Staff Age"
                                name = "age" 
                                values = {values.age}
                                onChange = {handleChange}
                            />
                        </FromBx>
                        <FromBx>
                            <span>Staff State of Origin</span>
                            <Input type = "text" placeholder = "Enter State of Origin"
                                name="origin" 
                                values = {values.origin}
                                onChange = {handleChange}
                            />
                        </FromBx>
                        <FromBx>
                            <span>Staff Local Government</span>
                            <Input type = "text" placeholder = "Enter L.G.A" 
                                name = "local"
                                values = {values.local}
                                onChange = {handleChange}
                            />
                        </FromBx>
                    </DialogContent>
                    <DialogActions>
                        <FromBx style={{width: 200}}>
                            <Button>SUBMIT</Button>
                        </FromBx>
                    </DialogActions>
                </FormWrapper>
            </AlertDialog>
        </>
    )
}

export default Dashboard