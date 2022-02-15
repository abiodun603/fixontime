import React, {useEffect, useState, useReducer, useContext} from "react"
import axios from "axios"
import { Card} from "../blog/StyledBlog"
import { AuthContext } from "../../context/authContext/AuthContext" 
import {BiWorld} from "react-icons/bi"
import {RiContactsBook2Fill} from "react-icons/ri"
import {IoBookSharp} from "react-icons/io5"
import { DataGrid } from '@mui/x-data-grid';
import { ButtonDelete, ButtonDownload ,ButtonAction} from '../../components/mui-table/StyledTable';
import {MdOutlineDeleteForever} from "react-icons/md"
import {AiOutlineDownload} from "react-icons/ai"


const columns = [
    { field: 'id', headerName: 'Id', flex: 1 },
    { field: 'created_at', headerName: 'Date', flex: 1 },
    { field: 'firstName', headerName: 'Name',flex: 1 },
    { field: 'company', headerName: 'Company', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1,}
];

const Dashboard = (props) => {
    const {user} = useContext(AuthContext)
    // console.log(user)
    const [data, setData] = useState([])
    const [blog, setBlog] = useState("")
    const [learn, setLearn] = useState("")
    const [contact, setContact] = useState("")
    const [selectionModel, setSelectionModel] = useState([]);


    useEffect(() => {
        axios.get("https://fixontime.herokuapp.com/contacts",
                {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        ).then((res) => {
            setData(res.data.items)
            console.log(res.data.items)
        }) 

        axios.get("https://fixontime.herokuapp.com/posts/status/count",
                {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        ).then((res) => {
            // console.log(res.data);
            setBlog(res.data.count)
        }) 

        axios.get("https://fixontime.herokuapp.com/learnings/status/count",
                {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        ).then((res) => {
            console.log(res.data.count);
            setLearn(res.data.count)
        }) 

        axios.get("https://fixontime.herokuapp.com/contacts/status/count",
                {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        ).then((res) => {
            // console.log(res.data);
            setContact(res.data.count)
        }) 
    }, [setData])

    const handleDelete = async(ids,e) =>  {
        e.preventDefault();
        console.log(selectionModel)

        await axios.delete("https://fixontime.herokuapp.com/contacts/" + [ids],
                {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        ).then((res) => {
            console.log(res.data);
        }) 
    }
    return (
        <>
        <div style = {{display: "flex"}}>
            {/* Welcome Admin */}
            <Card
                style={{
                    width: 260,
                    height: 129,
                    backgroundColor: "rgba(3,7,98,.3)",
                    borderRadius: 6,
                    padding: 20,
                    marginRight: 10,
                    // marginBottom: 10
                }}
            >
                <div>
                    <div 
                        style = {{
                            display : "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <p
                            style = {{
                                fontWeight: "400",
                                fontSize: 18,
                                color: "#030762",
                                opacity: 1,
                                marginLeft: 10,
                                textAlign: "center"
                            }}
                        >Welcome</p>
                    </div>
                    <p
                        style = {{
                            color: "#030762",
                            fontWeight: "600",
                            textAlign: "center",
                            fontSize: 40,
                            marginTop: - 5
                        }}
                    >Admin</p>
                </div>
            </Card>
            {/* New Contact */}
            <Card
                style={{
                    width: 260,
                    height: 129,
                    backgroundColor: "rgba(33,150,83,.3)",
                    borderRadius: 6,
                    padding: 20,
                    marginRight: 10
                }}
            >
                <div>
                    <div 
                        style = {{
                            display : "flex",
                            alignItems: "center"
                        }}
                    >
                        {/* cicle + image */}
                        <div
                            style={{
                                width: 45,
                                height: 45,
                                borderRadius: 50,
                                background: "#FFFFFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#219653"
                            }}
                        >
                            <RiContactsBook2Fill/>
                        </div>
                        {/* text */}
                        <p
                            style = {{
                                fontWeight: "400",
                                fontSize: 18,
                                color: "#219653",
                                opacity: 1,
                                marginLeft: 10
                            }}
                        >New Contact</p>
                    </div>
                    <p
                        style = {{
                            color: "#219653",
                            fontWeight: "600",
                            textAlign: "center",
                            fontSize: 40,
                            marginTop: - 5
                        }}
                    >{contact}</p>
                </div>
            </Card>
            {/* Total Blog */}
            <Card
                style={{
                    width: 260,
                    height: 129,
                    backgroundColor: "rgba(242,153,74,.3)",
                    borderRadius: 6,
                    padding: 20,
                    marginRight: 10

                    // opacity: 0.3
                }}
            >
                <div>
                    <div 
                        style = {{
                            display : "flex",
                            alignItems: "center"
                        }}
                    >
                        {/* cicle + image */}
                        <div
                            style={{
                                width: 45,
                                height: 45,
                                borderRadius: 50,
                                background: "#FFFFFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                positive: "relative"
                            }}
                        >
                            <BiWorld
                                style= {{
                                    color: "#F2994A"
                                }}
                            />
                        </div>
                        {/* text */}
                        <p
                            style = {{
                                fontWeight: "400",
                                fontSize: 18,
                                color: "#F2994A",
                                opacity: 1,
                                marginLeft: 10
                            }}
                        >Total Blog</p>
                    </div>
                    <p
                        style = {{
                            color: "#F2994A",
                            fontWeight: "600",
                            textAlign: "center",
                            fontSize: 40,
                            marginTop: - 5
                        }}
                    >
                        {blog}
                    </p>
                </div>
            </Card>
            {/* E-Learngin */}
            <Card
                style={{
                    width: 260,
                    height: 129,
                    backgroundColor: "rgba(253,0,20,.3)",
                    borderRadius: 6,
                    padding: 20,
                    marginRight: 10

                    // opacity: 0.3
                }}
            >
                <div>
                    <div 
                        style = {{
                            display : "flex",
                            alignItems: "center"
                        }}
                    >
                        {/* cicle + image */}
                        <div
                            style={{
                                width: 45,
                                height: 45,
                                borderRadius: 50,
                                background: "#FFFFFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <IoBookSharp
                                style = {{
                                    color: "#FD0014"
                                }}
                            />
                        </div>
                        {/* text */}
                        <p
                            style = {{
                                fontWeight: "400",
                                fontSize: 18,
                                color: "#FD0014",
                                opacity: 1,
                                marginLeft: 10
                            }}
                        >E-Learning</p>
                    </div>
                    <p
                        style = {{
                            color: "#FD0014",
                            fontWeight: "600",
                            textAlign: "center",
                            fontSize: 40,
                            marginTop: - 5
                        }}
                    >{learn}</p>
                </div>
            </Card>
        </div>
            {/* <TableData
                rows = {data}
                columns = {columns} */}
            {/* /> */}
         
            <div style={{ height: 400, width: '100%',marginTop: 100 }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onSelectionModelChange={(item) => {setSelectionModel(item);}}
                    selectionModel={selectionModel}
                />
                <ButtonAction>
                    <ButtonDelete onClick = {(e) => handleDelete(selectionModel, e)}>
                        <MdOutlineDeleteForever/>
                        <span>Delete</span>
                    </ButtonDelete>
                    <ButtonDownload>
                        <AiOutlineDownload/>
                        <span>Download</span>
                    </ButtonDownload>
                </ButtonAction>
            </div>
            
        </>
    )
}

export default Dashboard


