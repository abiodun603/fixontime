import React from "react"
import { BlogContainer, ButtonAction, DeleteButton, EditButton } from "./StyledBC"
import {MdEdit, MdDeleteForever} from "react-icons/md"

const BCard = () => {
    return (
        <>
            <BlogContainer>
                    <div className="news__container">
                        <div className="news__wrapper">
                            <div className="tabContent" id="category">
                                <div className="news__card">
                                    <div className = "image__container">
                                        <img src="" alt="" className="news__img "/>

                                        <ButtonAction>
                                            <DeleteButton>
                                                <MdDeleteForever style={{fontSize: 20, color:"#505050"}}/>
                                                <span>Delete</span>
                                            </DeleteButton>
                                            <EditButton>
                                                <MdEdit style={{fontSize: 20, color: "#FFFFFF"}}/>
                                                <span>Edit</span>
                                            </EditButton>
                                        </ButtonAction>
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