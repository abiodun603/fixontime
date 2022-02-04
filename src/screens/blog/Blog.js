import React, {useEffect, useState, useReducer, useContext} from "react"
import Button from "../../components/button/Button"
import Table from "../../components/table/Table"
import {FiEdit, FiTrash2} from "react-icons/fi"
import ActionButton from "../../components/action-button/ActionButton"
import Header from "../../components/header/Header"
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

const Blog = (props) => {
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

export default Blog


