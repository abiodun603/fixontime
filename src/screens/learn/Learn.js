import React, {useContext, useEffect} from "react"
import { useHistory } from "react-router-dom";
import Header from "../../components/header/Header"
import VideoFrame from "../../components/videoFrame/VideoFrame"
import { deleteLearn, getLearn } from "../../context/learningContext/apiCalls";
import { LearnContext } from "../../context/learningContext/LearnContext";

const Learn = () => {
    const history = useHistory();
    const {learns, dispatch} = useContext(LearnContext)

    useEffect(() => { 
        getLearn(dispatch)
        // setGetBlogPost(blogs);
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
        history.push(`/editLearn/${id}`)
    }

    return (
        <>
           <Header
                header = "E-Learning"
                title = "Add New Post"
                onClick = {() => history.push("/addLearn")}
            />
            <div style = {{display: "flex", flexWrap: "wrap", alignItems: "center"}}>
                {
                    learns.map((item, index) => (
                        <div key = {index}>
                            <VideoFrame
                                title= {item.title}
                                date = {formatter.format(new Date(item.created_at))}
                                onEdit = {() => handleUpdate(item.id)}
                                onDelete = {()  => handleDelete(item.id)}

                            />
                        </div>
                    ))
                }
                {/* <VideoFrame/> */}
            </div>
        </>
    )
}
export default Learn