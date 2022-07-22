import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { AdminWrappper } from './styled.admin'
import {styled} from "@mui/material/styles"
import { RiContactsBook2Fill } from 'react-icons/ri';
import { TableContainer } from '../dashboard/styled.dashboard';
import { DataGrid } from '@mui/x-data-grid';
import {IoAddOutline} from "react-icons/io5"
import {Backdrop } from "@mui/material"
import {Card, CardContent, CardActions,CardHeader } from "@mui/material"
import Button from '../../components/button/Button';
import { COLORS } from '../../assets/theme';
import {useForm} from "react-hook-form"
import axios from "axios"
import swal from "sweetalert";
import { ButtonAction, ButtonDelete } from '../../components/mui-table/StyledTable';
import { MdOutlineDeleteForever } from 'react-icons/md';


const columns = [
  // { field: 'id'},
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'created_at', headerName: 'Date', flex: 1 },
  { field: 'email', headerName: 'Email',flex: 1 },
  // { field: 'action', headerName: 'Action', flex: 1 },
];

const StyledGridOverlay = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  '& .ant-empty-img-1': {
    fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
  },
  '& .ant-empty-img-2': {
    fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
  },
  '& .ant-empty-img-3': {
    fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
  },
  '& .ant-empty-img-4': {
    fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
  },
  '& .ant-empty-img-5': {
    fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
    fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
  },
}));



function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        width="120"
        height="100"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No Admin Record Yet</Box>
    </StyledGridOverlay>
  );
}

const Admin = () => {
  const [selectionModel, setSelectionModel] = useState([]);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [test, setTest] = useState("")
  const { handleSubmit, errors, formState, register } = useForm({
    mode: "onChange"
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const getAdmin = () => {
    axios.get("https://v1.api.seenergysolutions.org/api/admins",
    {
    headers: {
      "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
    }
      }
    ).then((res) => {
      setData(res.data)
    }) 
  }

  console.log(data)

  const handleDelete = async(ids,e) =>  {
    e.preventDefault();
    await axios.delete("https://v1.api.seenergysolutions.org/api/admins/" + [ids],
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
          // getContacts();
          if (res) {
          } else {
            swal("Your imaginary file is safe!");
          }
      }); 
    })
    .then((res) =>{
      getAdmin();
    })
  }

  const onSubmit = async(data, ids) =>  {
    console.log(data)
    try{
      await axios({
        method: "post",
        url: "https://v1.api.seenergysolutions.org/api/admins" , 
        data: {
          name: data.name,
          email: data.email,
          password: data.password
        },
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
        }
      }).then(res => {
        console.log(res);
          swal({
            title: "User account has been created",
            icon: "success",
            confirmButtonColor: '#030762',
            dangerMode: true,
          }).then((res) => {
            getAdmin();
            if (res) {
            } else {
              swal("Your imaginary file is safe!");
            }
        }); 
      })
      .then((res) =>{
        getAdmin()
      })
    }catch(err){
      console.log(err)
    }
  }

  const count = data.filter(function(item){
    return item
  }).length; // 6

  console.log(count)

  useEffect(() => {
    getAdmin();
  }, [])

  return (
    <AdminWrappper>
      <div className='admin__card'>
        {/* Welcome Admin */}
        <div className="card__container green">
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
                  color: "#219653",
                  marginRight: "5px"
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
                >All users</p>
            </div>
            <p
              style = {{
                color: "#219653",
                fontWeight: "600",
                textAlign: "center",
                fontSize: 40,
                marginTop: - 5
              }}
            >{count}</p>
          </div>
        </div>
      </div>

      <TableContainer>
        
        <div style={{ height: 400, width: '100%',marginTop: 100 }}>
          <div className="table__action">
              <p>Account</p>

              <div className ="flex items-center">
                <button onClick = {(e) => handleDelete(selectionModel, e)}>
                  <MdOutlineDeleteForever /> Delete 
                </button>
                <button onClick={handleToggle}>
                  <IoAddOutline /> Add new user 
                </button>
              </div>
          </div>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            onSelectionModelChange={(item) => {setSelectionModel(item);}}
            selectionModel={selectionModel}
            components={{
              NoRowsOverlay: CustomNoRowsOverlay,
            }}
          />
      
        </div>

        {/* BACKDROP ON CLICK */}
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            // onClick={handleClose}
          >
            <Card sx={{width: 400}}>
              <CardHeader
                title = "Add new user"
                sx={{textAlign: "center", color: COLORS.blue,background: "rgba(3, 7 , 98, 0.1)", fontWeight: "700"}}
              />
              <div className='my__doc sideBar'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <CardContent>
                    <div className="form_container" style={{flexDirection: "column"}}>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                      </label>
                      <input {...register("name")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
                    </div>
                    <div class="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                      </label>
                      <input {...register("email")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        New password
                      </label>
                      <input {...register("password")} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                    </div>
                    </div>
                  </CardContent>
                  <CardActions className='mb-5 ml-2.5 '>
                    <Button buttonStyle="btn--primary--outline" onClick={handleClose}  buttonSize="btn--large">Cancel</Button>
                    <Button buttonSize="btn--large" buttonStyle="btn--grey--solid"  onClick={handleClose}>Add user</Button> 
                  </CardActions>
                </form>
              </div>
            </Card>
        </Backdrop>

      </TableContainer>   
    </AdminWrappper>
  )
}

export default Admin