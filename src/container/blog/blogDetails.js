import React, { useState, useEffect, useRef } from 'react'
import HeadFoot from '../../components/HeadFoot'
import { ContactLand } from '../contact/StyledContact'
import { BlogDetailsContainer } from './StyledBlog'
import ScrollTextArea from '../../components/scrollTextarea/ScrollTextArea'
import Button from '../../components/button/Button'
import { useHistory } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import axios from 'axios'
import { CommentContainer } from './StyledComment'
const BlogDetails = (props) => {
  const [data, setData] = useState([])
  const userRef = useRef();
  const [comment, setComment] = useState("");


    const {
      params: { id },
    } = useRouteMatch("/blogDetails/:id");

    // console.log(params);

    useEffect(() => {      
      const getId = async() => {
        await axios.get("https://v1.api.seenergysolutions.org/api/posts/" + id,
      ).then((res) => {
        setData(res.data.data)
      })}
      getId();
    }, [id, comment]) 

    // useEffect(() => {      
    //   const getId = async() => {
    //     await axios.get("https://v1.api.seenergysolutions.org/api/posts/" + id,
    //   ).then((res) => {
    //     setData(res.data.data)
    //   })}
    //   getId();
    // }, [id]) 

    const handleComment = async(e) => {
      e.preventDefault();
      console.log(id, comment)
      await axios({
        method: "post",
        url: "https://v1.api.seenergysolutions.org/api/comments",
        data: {
            post_id: id,
            message: comment
          },
        // withCredentials: true,
        // headers: {
        //   'Content-Type' : "application/json",
        //   "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.token
        // }
      }).then((response) => {
        console.log(response);
        setComment("");

      })
    }
    
    console.log(data);
  return (
    <>
      <HeadFoot {...props}>
        <ContactLand>
          <h1>{data.title}</h1>
        </ContactLand>
        {/* Blog Details Container */}
        <BlogDetailsContainer>
          {/* blog image */}
          <div className='blog__image'>
            <img  src={data.image} alt = "" />
          </div>

          <div className='blog__text' style={{textAlign: "justify"}}>
            {/* blog full description */}
            <p>
              {data.content}
            </p>
          </div>

          <div className= "addComment" style={{marginTop: 30, marginBottom: 10}}>
            {/* title */}
            <h3 style={{marginBottom: "2rem"}}>Add Comment</h3>
            <form  onSubmit = {handleComment} >
              <div className='commentDiv'>
                <ScrollTextArea
                  value = {comment}
                  onChange = {(e) => setComment(e.target.value)}
                />
                {/* <CardButton> */}
                <div style={{display: "flex", justifyContent: "flex-end", marginTop: "1.5rem"}}>
                  <Button buttonSize="btn--small">
                      <span>
                          Cancel
                      </span>
                  </Button>
                  <span style={{marginRight: ".5rem"}}></span>
                  <Button buttonSize="btn--small" type = "sumbit">
                      Ok 
                  </Button>
                </div>
              {/* </CardButton> */}
              </div>
            </form>
            <div style={{marginTop: 40}}></div>

            {
              data && data.comments?data?.comments.map((comment, index) => (
                <Comment comment={comment} />
              )):""
            }
            
          </div>

        </BlogDetailsContainer>
      </HeadFoot>
    </>
  )
}

export default BlogDetails

const Comment = ({comment}) => {
  return (
    <CommentContainer>
      <div>
        <h2>anonymous</h2>
        <span>24/10/2021</span>
      </div>

      <p>
        {comment.message}
      </p>
    </CommentContainer>
  )
}