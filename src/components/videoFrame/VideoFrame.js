import React from 'react';
import {ElearnContainer,ElearnContent,ElandingPage,LeftSection,LandingTitle,
    LandingSubTitle,RightSection,ElearnPic,ElearningCat,ElearningStore,ElearningItems,ElearningCard,ElearningImage,PlayImg,EImg,ElearningName,ElearningView,ElearnDate,VideoArea,Cancel,ElearnVid,DarkBg
} from './StyledVideoFrame'
import playIcon from "../../assets/image/playicon.svg"
import { FaEye } from 'react-icons/fa'
import { ButtonAction, DeleteButton, EditButton } from '../blog-card/StyledBC';
import {MdEdit, MdDeleteForever} from "react-icons/md"

const VideoFrame = (props) => {
  return (
      <>
        <ElearningCat>
			<ElearningStore>
				{/* {ElearnVideo.map((item,index) => {
					return ( */}
						<ElearningItems>
							<ElearningCard>
								<ElearningImage>
									<PlayImg src={playIcon} />
									
									<EImg src="https://media.istockphoto.com/photos/some-moments-require-some-seriousness-picture-id1174056245?k=20&m=1174056245&s=612x612&w=0&h=P2JZJQVCJ_6FwD0F_vgEU4vF2lZaSGElx41e09UqciA="/>

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
								</ElearningImage>
								<ElearningName>{props.title}</ElearningName>
								{/* <ElearningView><FaEye /> {item.views}</ElearningView>  */}
								<ElearnDate>
									{props.date}
								</ElearnDate>
							</ElearningCard>
						</ElearningItems>
					{/* ) */}
				{/* })} */}
			</ElearningStore>  
		</ElearningCat>
      </>
  );
};

export default VideoFrame;
