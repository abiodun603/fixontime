import React, {useEffect, useState, useReducer, useContext} from "react"
import Button from "../../components/button/Button"
import Table from "../../components/table/Table"
import {FiEdit, FiTrash2} from "react-icons/fi"
import ActionButton from "../../components/action-button/ActionButton"
import Header from "../../components/header/Header"
import {PageHeader, AddCustomer, HeaderContainer, Card2, FormWrapper} from "./StyledGuards"
import {AiOutlineUserAdd} from "react-icons/ai"
import {  DialogActions, DialogContent } from '@mui/material'
import {FromBx, Input, LoginForm } from "../login/Login__element"
import AlertDialog from "../../components/dialog/Dialog"
import axios from "axios"
import { useForm } from '../../hooks/useForm';
// import
import {useHistory} from "react-router-dom"
import { deleteStaff, getStaff } from "../../context/staffContext/apiCalls"
import { StaffContext } from "../../context/staffContext/StaffContext"
import BCard from "../../components/blog-card/BCard"
import { Card, CardBody, CardForm, CardHeader, CardWrapper } from "../blog/StyledBlog"
import CardButton from "../../components/card-button/CardButton"
import File from "../../components/browserFile/File"
import ScrollTextArea from "../../components/scrollTextarea/ScrollTextArea"
import Blog from "../blog/Blog"
import AddPost from "../blog/AddPost"
import EditPost from "../blog/EditPost"
import VideoFrame from "../../components/videoFrame/VideoFrame"
import TableData from "../../components/mui-table/TableData"

import Learn from "../learn/Learn"
import AddLearn from "../learn/AddLearn"
import Contact from "../contact/Contact"

const columns = [
    { field: 'created_at', headerName: 'Date', flex: 1 },
    { field: 'firstName', headerName: 'Name',flex: 1 },
    { field: 'company', headerName: 'Company', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1,}
];

const Dashboard = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://fixontime.herokuapp.com/contacts",
                {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        ).then((res) => {
            console.log(res.data)
            // values.title = res.data.title
            setData(res.data.items)
        }) 
    }, [])

    return (
        <>
            <TableData
                rows = {data}
                columns = {columns}
            />
        </>
    )
}

export default Dashboard


