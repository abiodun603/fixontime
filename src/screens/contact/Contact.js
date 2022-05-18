import React, {useState, useEffect} from "react"
import Header from "../../components/header/Header"
import axios from "axios"
import { DataGrid } from '@mui/x-data-grid';
import { ButtonDelete, ButtonDownload ,ButtonAction} from '../../components/mui-table/StyledTable';
import {MdOutlineDeleteForever} from "react-icons/md"
import {AiOutlineDownload} from "react-icons/ai"



const columns = [
    { field: 'created_at', headerName: 'Date', flex: 1 },
    { field: 'firstName', headerName: 'Name',flex: 1 },
    { field: 'company', headerName: 'Company', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1,}
  ];
const Contact = () => {
    const [data, setData] = useState([])
    const [selectionModel, setSelectionModel] = useState([]);

    useEffect(() => {
        axios.get("https://v1.api.seenergysolutions.org/api/contacts",
                {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
                }
            }
        ).then((res) => {
            console.log(res.data)
            setData(res.data.data)
        }) 
    }, [])

    const handleDelete = async(ids,e) =>  {
        e.preventDefault();
        console.log(selectionModel)

        await axios.delete("https://fixontime.herokuapp.com/contacts/" + ids,
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
            <Header
                header = "Contact"
            />
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

export default Contact