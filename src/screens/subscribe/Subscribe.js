import axios from "axios";
import React, {useState, useEffect} from "react"
import Header from "../../components/header/Header"
import TableData from "../../components/mui-table/TableData"

const columns = [
    { field: 'id', headerName: 'Id', flex: 1 },
    { field: 'email', headerName: 'Email',flex: 1 },
  ];
const Subscribe = () => {
    const [data, setData] = useState([])

    const deleteByIds = () => {
        let arrayids = []

        
    }

    useEffect(() => {
        axios.get("https://fixontime.herokuapp.com/subscriptions",
                {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        ).then((res) => {
            console.log(res.data)
            // values.title = res.data.title
            setData(res.data)
        }) 
    }, [])
    return (
        <>
            <Header
                header = "Subscribe"
            />
            <button>Delete</button>
            <TableData
                rows = {data}
                columns = {columns}
            />
        </>
    )
}

export default Subscribe