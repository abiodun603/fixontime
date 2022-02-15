import React, {useState} from 'react';
import {ElearnContainer,ElearnContent,ElandingPage,LeftSection,LandingTitle,
    LandingSubTitle,RightSection,ElearnPic,ElearningCat,ElearningStore,ElearningItems,ElearningCard,ElearningImage,PlayImg,EImg,ElearningName,ElearningView,ElearnDate,VideoArea,Cancel,ElearnVid,DarkBg
} from './StyledVideoFrame'
import playIcon from "../../assets/image/playicon.svg"
import { FaEye } from 'react-icons/fa'
import { ButtonAction, DeleteButton, EditButton } from '../blog-card/StyledBC';
import {MdEdit, MdDeleteForever} from "react-icons/md"
import Backdrop from '@mui/material/Backdrop';
import ReactPlayer from 'react-player'

const VideoFrame = (props) => {
	const [open, setOpen] = React.useState(false);

	const [play, setPlay] = useState(false);

	const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

	const url = play ? props.url+`autoplay?1` : ""

  	return (
      <>
	  	
        {/* <ElearningCat>
			<ElearningStore> */}
				{/* {ElearnVideo.map((item,index) => {
					return ( */}
						<ElearningItems>
							<ElearningCard>
								<ElearningImage>
									<PlayImg onClick = {handleToggle} src={playIcon} />
									
									<EImg src={props.image}/>

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
{/* 
							<iframe width="560" height="315" 							src="https://www.youtube.com/embed/9exmH95COPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

							{/* </iframe> */}
						</ElearningItems>
						<Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open}
                                        onClick={handleClose}
                                    >
                                        {/* <CircularProgress color="inherit" /> */}
                                    <ReactPlayer
                                        url = {props.url}
                                    />
                                                                        </Backdrop>
					{/* ) */}
				{/* })} */}
			{/* </ElearningStore>  
		</ElearningCat> */}
      </>
  );
};

export default VideoFrame;
