import React, {useEffect, useState, useReducer, useContext} from "react"
import axios from "axios"
import { Card} from "../blog/StyledBlog"
import { AuthContext } from "../../context/authContext/AuthContext" 
import {BiWorld} from "react-icons/bi"
import {RiContactsBook2Fill} from "react-icons/ri"
import {IoBookSharp} from "react-icons/io5"
import { DataGrid } from '@mui/x-data-grid';
import { ButtonDelete, ButtonDownload ,ButtonAction} from '../../components/mui-table/StyledTable';
import {AiOutlineDownload} from "react-icons/ai"
import swal from "sweetalert"
import {styled} from "@mui/material/styles"

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DashboardCard, DashboardWrapper, TableContainer } from "./styled.dashboard"
import { MdOutlineDeleteForever } from "react-icons/md"

const columns = [
    { field: 'id', headerName: 'Id', flex: 1 },
    { field: 'created_at', headerName: 'Date', flex: 1 },
    { field: 'firstName', headerName: 'Name',flex: 1 },
    { field: 'company', headerName: 'Company', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1,}
];

const columns2 = [
  { field: 'created_at', headerName: 'Date', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'company', headerName: 'Company name',flex: 1 },
  { field: 'phone_number', headerName: 'Phone number', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1,},
  { field: 'service', headerName: 'Service', flex: 1,}
];

const columns3 = [
  { field: 'created_at', headerName: 'Date', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'company', headerName: 'Company name',flex: 1 },
  { field: 'phone_number', headerName: 'Phone number', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1,},
  { field: 'brand', headerName: 'Brand', flex: 1,},
  { field: 'product', headerName: 'Product', flex: 1,},
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box  sx={{ height: 400 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Dashboard = (props) => {
  const {user} = useContext(AuthContext)
  const [data, setData] = useState([])
  const [contact, setContact] = useState("")
  const [selectionModel, setSelectionModel] = useState([]);
  const [request, setRequest] = useState([]);
  const [enquires, setEnquires] = useState([])
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const accesstokem = JSON.parse(localStorage.getItem("user")).data.token;
    axios.get("https://v1.api.seenergysolutions.org/api/analytics",
      {
        headers: {
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
        }
      }
    ).then((res) => {
      setData(res.data.data)
    }) 

  }, [])

  useEffect(() => {
    getContacts();
  }, [])


  const getContacts = () => {
    axios.get("https://v1.api.seenergysolutions.org/api/analytics",
    {
      headers: {
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
      }
    }
    ).then((res) => {
      setContact(res.data.data.new_contact);
      setEnquires(res.data.data.new_product_request);
      setRequest(res.data.data.new_Enquiry);
    }) 
  }

  console.log(request)


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
      getContacts()
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
  
  const handleRequestDownload = async(e) => {
    e.preventDefault()
    await axios({
      url: 'https://v1.api.seenergysolutions.org/api/requests/csv/download ',
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
      },
      responseType: 'blob', // important
    }).then((response) => {
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', 'request.csv'); //or any other extension
       document.body.appendChild(link);
       link.click();
    });
  }

  // service
  const handleEnquiresDownload = async(e) => {
    e.preventDefault()
    await axios({
      url: 'https://v1.api.seenergysolutions.org/api/enquiries/csv/download ',
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
      },
      responseType: 'blob', // important
    }).then((response) => {
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', 'enquire.csv'); //or any other extension
       document.body.appendChild(link);
       link.click();
    });
  }


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

  function CustomNoRowsOverlay(name) {
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
        <Box sx={{ mt: 1 }}>No Contact Today</Box>
      </StyledGridOverlay>
    );
  }

  function CustomNoRowsOverlayRequest() {
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
        <Box sx={{ mt: 1 }}>No Request Today</Box>
      </StyledGridOverlay>
    );
  }

  function CustomNoRowsOverlayEnquiry() {
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
        <Box sx={{ mt: 1 }}>No Enquiry Today</Box>
      </StyledGridOverlay>
    );
  }

  const handleEnquiryDelete = async(ids,e) =>  {
    e.preventDefault();

    await axios.delete("https://v1.api.seenergysolutions.org/api/requests/" + [ids],
      {
        headers: {
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
        }
      }
    ).then(res => {
      console.log(res);
        swal({
          title: "Service Request Deleted Successfully",
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

  const handleRequestDelete = async(ids,e) =>  {
    e.preventDefault();

    await axios.delete("https://v1.api.seenergysolutions.org/api/enquiries/" + [ids],
      {
        headers: {
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
        }
      }
    ).then(res => {
      console.log(res);
        swal({
          title: "Service Request Deleted Successfully",
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

  return (
    <DashboardWrapper>
      <DashboardCard>
          {/* Welcome Admin */}
          <div className="card__container blue">
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
          </div>
          {/* New Contact */}
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
          </div>
          {/* Total Blog */}
          <div className="card__container orange">
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
                    positive: "relative",
                    marginRight: "5px"
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
          </div>
          {/* E-Learngin */}
          <div className="card__container red">
            <div>
              <div style = {{
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
                      marginRight: "5px"
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
          </div>
      </DashboardCard>

      <TableContainer>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label={
                <div className="label__container">
                  <Typography sx={{marginRight: 30, textTransform: "capitalize", fontWeight: 700}} >Contact</Typography>
                  <div className="badge">
                    {data.newContact_count}
                  </div>
                </div>
                }   {...a11yProps(0)} 
                />
              <Tab label={
                <div className="label__container">
                  <Typography sx={{marginRight: 30, textTransform: "capitalize", fontWeight: 600}} >Request Service</Typography>
                  <div className="badge">
                    {data.newEnquiry_count}
                  </div>
                </div>
                } {...a11yProps(1)} />
              <Tab label={
                <div className="label__container">
                  <Typography sx={{marginRight: 30, textTransform: "capitalize", fontWeight: 600}} >Enquires</Typography>
                  <div className="badge">
                   {data.newProductRequest_count}
                  </div>
                </div>
                } {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <DataGrid
              rows={contact}
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
            <ButtonAction>
              {/* <ButtonDelete onClick = {(e) => handleDelete(selectionModel, e)}>
                <MdOutlineDeleteForever/>
                <span>Delete</span>
              </ButtonDelete> */}
              <ButtonDownload onClick={handleDownload}>
                <AiOutlineDownload/>
                <span>Download</span>
              </ButtonDownload>
            </ButtonAction>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <DataGrid
              rows={request}
              columns={columns2}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              onSelectionModelChange={(item) => {setSelectionModel(item);}}
              selectionModel={selectionModel}
              components={{
                NoRowsOverlay: CustomNoRowsOverlayRequest,
              }}
            />
            <ButtonAction>
              <ButtonDelete onClick = {(e) => handleRequestDelete(selectionModel, e)}>
                <MdOutlineDeleteForever/>
                <span>Delete</span>
              </ButtonDelete>
              <ButtonDownload onClick={handleRequestDownload}>
                <AiOutlineDownload/>
                <span>Download</span>
              </ButtonDownload>
            </ButtonAction>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <DataGrid
              rows={enquires}
              columns={columns3}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              onSelectionModelChange={(item) => {setSelectionModel(item);}}
              selectionModel={selectionModel}
              components={{
                NoRowsOverlay: CustomNoRowsOverlayEnquiry,
              }}
            />
            <ButtonAction>
              <ButtonDelete onClick = {(e) => handleEnquiryDelete(selectionModel, e)}>
                <MdOutlineDeleteForever/>
                <span>Delete</span>
              </ButtonDelete>
              <ButtonDownload onClick={handleEnquiresDownload}>
                <AiOutlineDownload/>
                <span>Download</span>
              </ButtonDownload>
            </ButtonAction>
          </TabPanel>
        </Box>
      </TableContainer>   
    </DashboardWrapper>
  )
}

export default Dashboard


