import React, {useState, useEffect} from "react"
import Header from "../../components/header/Header"
import axios from "axios"
import { DataGrid } from '@mui/x-data-grid';
import { ButtonDelete, ButtonDownload ,ButtonAction} from '../../components/mui-table/StyledTable';
import {MdOutlineDeleteForever} from "react-icons/md"
import {AiOutlineDownload, AiOutlineEye} from "react-icons/ai"
import swal from "sweetalert";
import { useHistory } from "react-router-dom";


const columns = [
  { field: 'created_at', headerName: 'Date', flex: 1 },
  { field: 'firstName', headerName: 'Name',flex: 1 },
  { field: 'company', headerName: 'Company', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1,}
];

const Contact = () => {
  const [data, setData] = useState([])
  const [selectionModel, setSelectionModel] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getContacts();
  }, [])

  const getContacts = () => {
    axios.get("https://v1.api.seenergysolutions.org/api/contacts",
    {
    headers: {
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
    }}
    ).then((res) => {
      console.log(res.data)
      setData(res.data.data)
    }) 
  }


  const handleDelete = async(ids,e) =>  {
    e.preventDefault();
    await axios.delete("https://v1.api.seenergysolutions.org/api/contacts/" + [ids],
      {
        headers: {
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
        }
      }
    ).then(res => {
      console.log(res);
        swal({
          title: "Contact deleted successfully",
          icon: "success",
          confirmButtonColor: '#030762',
          dangerMode: true,
        }).then((res) => {
          getContacts();
          if (res) {
          } else {
            swal("Your imaginary file is safe!");
          }
      }); 
    })
    .then((res) =>{
      getContacts();
    })
  }

  const handleDownload = async(e) => {
    e.preventDefault()
    await axios({
      url: 'https://v1.api.seenergysolutions.org/api/contacts/csv/download ',
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
      },
      responseType: 'blob', // important
    }).then((response) => {
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', 'contact.csv'); //or any other extension
       document.body.appendChild(link);
       link.click();
    });
  }

  const handleView = (ids,e) => {
    e.preventDefault();
    const id = ids.join("");
    history.push(`/adminviewcontact/${id}`)

    
    // try{
    //   await axios.get("https://v1.api.seenergysolutions.org/api/contacts/" + id, 
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
    //     },
    //     validateStatus : status => {
    //       return true;
    //     }
    //   }).then(res => {

    //   });

    //   }catch (err) {
    //     console.log(err.message)
    //   }
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
                  <ButtonDownload onClick={(e) => handleView(selectionModel, e)} >
                    <AiOutlineEye/>
                    <span>View</span>
                  </ButtonDownload>
                  <ButtonDownload onClick={handleDownload} >
                    <AiOutlineDownload/>
                    <span>Download</span>
                  </ButtonDownload>
                  <ButtonDelete onClick = {(e) => handleDelete(selectionModel, e)}>
                    <MdOutlineDeleteForever/>
                    <span>Delete</span>
                  </ButtonDelete>
                </ButtonAction>
            </div>
        </>
    )
}

export default Contact