import React from "react"
import { BlogContainer, ButtonAction, DeleteButton, EditButton } from "./StyledBC"
import {MdEdit, MdDeleteForever} from "react-icons/md"

const BCard = (props) => {
    return (
        <>
            <BlogContainer>
                <div className="tabContent" id="category">
                    <div className="news__card">
                        <div id = "image__container">
                            <img src={props.src} alt="" className="news__img "/>
                            <div className="hidden-child">
                                <ButtonAction>
                                    <DeleteButton
                                        onClick = {props.onDelete}
                                    >
                                        <MdDeleteForever style={{fontSize: 20, color:"#505050"}}/>
                                        <span>Delete</span>
                                    </DeleteButton>
                                    <EditButton
                                        onClick = {props.onEdit}
                                    >
                                        <MdEdit style={{fontSize: 20, color: "#FFFFFF"}}/>
                                        <span>Edit</span>
                                    </EditButton>
                                </ButtonAction>
                            </div>
                        </div>
                        <div className="news__card__body">
                            <p className="news__card__title">{props.title}</p>
                            {/* <p className="news__card__time">{props.date}</p> */}
                        </div>
                    </div>
                </div>
            </BlogContainer>
        </>
    )
}
export default BCard