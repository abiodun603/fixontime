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
import { DashboardCard } from "./StyledGuards"


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
      const accesstokem = JSON.parse(localStorage.getItem("user")).data.token;
      console.log(accesstokem)
      axios.get("https://v1.api.seenergysolutions.org/api/analytics",
              {
              headers: {
                  "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
              }
          }
      ).then((res) => {
          setData(res.data.data)
      }) 

    }, [setData])

    useEffect(() => {
      axios.get("https://v1.api.seenergysolutions.org/api/contacts",
        {
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
        }
      }).then((res) => {
          console.log(res.data)
          setData(res.data.data)
      }) 
  }, [])


    const handleDelete = async(ids,e) =>  {
        e.preventDefault();
        console.log(selectionModel)

        await axios.delete("https://v1.api.seenergysolutions.org/api/contacts/" + [ids],
                {
                headers: {
                  "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
                }
            }
        ).then((res) => {
            console.log(res.data);
        }) 
    }

    console.log(contact)
    return (
        <>
        <DashboardCard>
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
                    >{data.newContact_count}</p>
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
                        {data.post_count}
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
                    >{data.learning_count}</p>
                </div>
            </Card>
        </DashboardCard>
            {/* <TableData
                rows = {data}
                columns = {columns} */}
            {/* /> */}
         
            <div style={{ height: 400, width: '100%',marginTop: 100 }}>
                <DataGrid
                    rows={contact}
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


