import React, {useEffect, useState, useReducer, useContext} from "react"
import Button from "../../components/button/Button"
import Table from "../../components/table/Table"
import {FiEdit, FiTrash2} from "react-icons/fi"
import ActionButton from "../../components/action-button/ActionButton"
import Header from "../../components/header/Header"
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
import BCard from "../../components/blog-card/BCard"

const staffsTableHead = [
    "",
    "name",
    "age",
    "email",
    "action"
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const Dashboard = (props) => {

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
                            // onClick ={()  => navigate(item.id)}

                        />
                        <ActionButton
                            // onClick ={()  => handleDelete(item.id)}
                            icon = {<FiTrash2/>}
                            type = "warning"
                        />                        
                    </span>
                </td>
            </tr>             
        
    ) 
    return (
        <>
            <Header
                header= "Blog Post"
                title = "New Blog Post"
                onClick = {() => alert("you clicked me")}
            />
            <BCard/>
        </>
    )
}

export default Dashboard