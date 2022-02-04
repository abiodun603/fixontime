import React from "react"
import { BlogContainer, ButtonAction, DeleteButton, EditButton } from "./StyledBC"
import {MdEdit, MdDeleteForever} from "react-icons/md"

const BCard = (props) => {
    return (
        <>
            <BlogContainer>
                    <div className="news__container">
                        <div className="news__wrapper">
                            <div className="tabContent" id="category">
                                <div className="news__card">
                                    <div id = "image__container">
                                        <img src="https://media.istockphoto.com/photos/some-moments-require-some-seriousness-picture-id1174056245?k=20&m=1174056245&s=612x612&w=0&h=P2JZJQVCJ_6FwD0F_vgEU4vF2lZaSGElx41e09UqciA=" alt="" className="news__img "/>
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
                                        <p className="news__card__title">How to do home repair</p>
                                        <p className="news__card__time">24th Oct, 2021</p>
                                    </div>
                                </div>
                            </div>           
                        </div>
                    </div>
                </BlogContainer>
        </>
    )
}
export default BCard