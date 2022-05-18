import axios from "axios";
import React, {useState, useEffect} from "react"
import Header from "../../components/header/Header"
import TableData from "../../components/mui-table/TableData"
import { DataGrid } from '@mui/x-data-grid';
import { ButtonDelete, ButtonDownload ,ButtonAction} from '../../components/mui-table/StyledTable';
import {MdOutlineDeleteForever} from "react-icons/md"
import {AiOutlineDownload} from "react-icons/ai"

const columns = [
    { field: 'id', headerName: 'Id', flex: 1 },
    { field: 'email', headerName: 'Email',flex: 1 },
  ];
const Subscribe = () => {
    const [data, setData] = useState([])
    const [selectionModel, setSelectionModel] = useState([]);


    const deleteByIds = () => {
        let arrayids = []

        
    }

    useEffect(() => {
        axios.get("https://v1.api.seenergysolutions.org/api/subscriptions",
                {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
                }
            }
        ).then((res) => {
            console.log(res.data)
            // values.title = res.data.title
            setData(res.data.data)
        }) 
    }, [])

    console.log(data)

    const handleDelete = async(ids,e) =>  {
        e.preventDefault();
        // console.log(selectionModel)
        await axios.delete("https://fixontime.herokuapp.com/subscriptions/" + ids,
                {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        )
        setData(data.filter((item) => item.id !== ids));
        console.log(data);
    }
    return (
        <>
            <Header
                header = "Subscribe"
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

export default Subscribe