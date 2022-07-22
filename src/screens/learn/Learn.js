import React, {useContext, useEffect} from "react"
import { useHistory } from "react-router-dom";
import Header from "../../components/header/Header"
import VideoFrame from "../../components/videoFrame/VideoFrame"
import { deleteLearn, getLearn } from "../../context/learningContext/apiCalls";
import { LearnContext } from "../../context/learningContext/LearnContext";
import Backdrop from '@mui/material/Backdrop';
import ReactPlayer from 'react-player'
const Learn = () => {
    const [open, setOpen] = React.useState(false);
    
    const history = useHistory();
    const {learns, dispatch} = useContext(LearnContext)

    useEffect(() => { 
        getLearn(dispatch)
    },[dispatch])

    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: 'numeric',
        month: "long",
        day: "2-digit"
    });

    const handleDelete = (id) => {
        deleteLearn(id, dispatch)
        console.log(id)
     }

    const handleUpdate = (id) => {
        console.log(id)
        history.push(`/admineditLearn/${id}`)
    }

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    console.log(learns)

    return (
        <>
          <Header
            header = "E-Learning"
            title = "Add New Post"
            onClick = {() => history.push("/adminaddLearn")}
          />
          <div style = {{display: "flex", flexWrap: "wrap", alignItems: "center"}}>
            {
              learns && learns.length > 0 ?  learns.map((item, index) => (
                <div key = {index}>
                  <VideoFrame
                    image = {item.thumbnail}
                    url = {item.url}
                    title= {item.title}
                    date = {formatter.format(new Date(item.created_at))}
                    onEdit = {() => handleUpdate(item.id)}
                    onDelete = {()  => handleDelete(item.id)}
                  />
                </div>
              )) : (
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto"}}>
                  <h1> No e-learning post available</h1>
                </div>
              )
            }
          </div>
        </>
    )
}
export default Learn