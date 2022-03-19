import React from 'react';
import {ElearningItems,ElearningCard,ElearningImage,PlayImg,EImg,ElearningName,ElearnDate} from './StyledVideoFrame'
import playIcon from "../../assets/image/playicon.svg"
import { ButtonAction, DeleteButton, EditButton } from '../blog-card/StyledBC';
import {MdEdit, MdDeleteForever} from "react-icons/md"
import Backdrop from '@mui/material/Backdrop';
import ReactPlayer from 'react-player'

const VideoFrame = (props) => {
	const [open, setOpen] = React.useState(false);
	const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

  	return (
      <>
	  	
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
				<ElearnDate>
					{props.date}
				</ElearnDate>
			</ElearningCard>
		</ElearningItems>
		<Backdrop
			sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={open}
				onClick={handleClose}
			>
			<ReactPlayer
				url = {props.url}
			/>
		</Backdrop>
      </>
  );
};

export default VideoFrame;
