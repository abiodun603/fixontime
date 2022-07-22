import axios from "axios";
import React, {useState, useEffect} from "react"
import Header from "../../components/header/Header"
import TableData from "../../components/mui-table/TableData"
import { DataGrid } from '@mui/x-data-grid';
import { ButtonDelete, ButtonDownload ,ButtonAction} from '../../components/mui-table/StyledTable';
import {MdOutlineDeleteForever} from "react-icons/md"
import {AiOutlineDownload} from "react-icons/ai"
import Contact from "../contact/Contact";
import swal from "sweetalert";

const columns = [
    // { field: 'id', headerName: 'Id', flex: 1 },
    { field: 'email', headerName: 'Email',flex: 1 },
  ];

  
const Subscribe = () => {
    const [data, setData] = useState([])
    const [selectionModel, setSelectionModel] = useState([]);
    
    useEffect(() => {
      getSubscriptions();
    }, [])

    const getSubscriptions = () => {
      axios.get("https://v1.api.seenergysolutions.org/api/subscriptions",
      {
      headers: {
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
      }
        }
      ).then((res) => {
        console.log(res.data)
        setData(res.data.data)
      }) 
    }

    const handleDelete = async(ids,e) =>  {
      e.preventDefault();
      await axios.delete("https://v1.api.seenergysolutions.org/api/subscriptions/" + ids,
              {
              headers: {
                  "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
              }
          }
      ).then(res => {
        console.log(res);
          swal({
            title: "Subscription deleted successfully",
            icon: "success",
            confirmButtonColor: '#030762',
            dangerMode: true,
          }).then((res) => {
            getSubscriptions();
            if (res) {
            } else {
              swal("Your imaginary file is safe!");
            }
        }); 
      })
      .then((res) =>{
        getSubscriptions()
      })
    }

    const handleDownload = async(e) => {
      e.preventDefault()
      await axios({
        url: 'https://v1.api.seenergysolutions.org/api/subscriptions/csv/download',
        method: 'GET',
        headers: {
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
        },
        responseType: 'blob', // important
      }).then((response) => {
         const url = window.URL.createObjectURL(new Blob([response.data]));
         const link = document.createElement('a');
         link.href = url;
         link.setAttribute('download', 'subscribe.csv'); //or any other extension
         document.body.appendChild(link);
         link.click();
      });
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
                    <ButtonDownload onClick={handleDownload}>
                        <AiOutlineDownload/>
                        <span>Download</span>
                    </ButtonDownload>
                </ButtonAction>
            </div>
        </>
    )
}

export default Subscribe