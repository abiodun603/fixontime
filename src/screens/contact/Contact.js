import React, {useState, useEffect} from "react"
import Header from "../../components/header/Header"
import TableData from "../../components/mui-table/TableData"
import axios from "axios"

const columns = [
    { field: 'created_at', headerName: 'Date', flex: 1 },
    { field: 'firstName', headerName: 'Name',flex: 1 },
    { field: 'company', headerName: 'Company', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1,}
  ];
const Contact = () => {
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
            <Header
                header = "Contact"
            />
            <TableData
                rows = {data}
                columns = {columns}

            />
        </>
    )
}

export default Contact