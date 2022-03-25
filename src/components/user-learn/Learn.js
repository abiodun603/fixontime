import React from 'react'
import {ElearningItems,ElearningCard,ElearningImage,PlayImg,EImg,ElearningName,ElearningView,ElearnDate} from '../../container/e-learning/elearning'
import Backdrop from '@mui/material/Backdrop';
import ReactPlayer from 'react-player'
import { FaEye } from 'react-icons/fa'

const Learn = (props) => {
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
                    <PlayImg src={process.env.PUBLIC_URL + `Image/icon/playicon.svg`} onClick = {handleToggle}/>
                    <EImg src={props.image}/>
                </ElearningImage>
                <ElearningName>{props.title}</ElearningName>
                <ElearningView><FaEye /> </ElearningView>
                <ElearnDate>
                    {/* {formatter.format(new Date(item.created_at))} */}
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
  )
}

export default Learn