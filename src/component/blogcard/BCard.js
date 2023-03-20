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
                        </div>
                        <div className="news__card__body">
                            <p className="news__card__title">{props.title}</p>
                            <p className="news__card__time">{props.date}</p>
                            <p className="news__card__desc">{props.content}</p>
                        </div>
                    </div>
                </div>
            </BlogContainer>
        </>
    )
}
export default BCard