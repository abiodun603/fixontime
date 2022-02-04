import React from "react"
import { useHistory } from "react-router-dom";
import Header from "../../components/header/Header"
import VideoFrame from "../../components/videoFrame/VideoFrame"

const Learn = () => {
    const history = useHistory();

    return (
        <>
           <Header
                header = "E-Learning"
                title = "Add New Post"
                onClick = {() => history.push("/addLearn")}
            />
            <VideoFrame/>
        </>
    )
}
export default Learn