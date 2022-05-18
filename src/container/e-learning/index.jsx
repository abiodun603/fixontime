import { CircularProgress } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import HeadFoot from '../../components/HeadFoot'
import Learn from '../../components/user-learn/Learn'
import { getLearn } from '../../context/learningContext/apiCalls'
import { LearnContext } from '../../context/learningContext/LearnContext'
import {ElearnContainer,ElearnContent,ElandingPage,LeftSection,LandingTitle,
    LandingSubTitle,RightSection,ElearnPic,ElearningCat,ElearningStore,ElearningItems,ElearningCard,ElearningImage,PlayImg,EImg,ElearningName,ElearningView,ElearnDate,VideoArea,Cancel,ElearnVid,DarkBg} from './elearning'
function Elearning(props) {
    const [open, setOpen] = React.useState(false);
	const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    // learn    
    const {learns, dispatch} = useContext(LearnContext)
    useEffect(() => { 
        getLearn(dispatch)
    },[dispatch])

    // date formatter
    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: 'numeric',
        month: "long",
        day: "2-digit"
    });

    useEffect(() => {
        props.setSidebar(false);
    },[]);
    return (
        <>
        <HeadFoot {...props}>
            <ElearnContainer>
                <ElearnContent>
                    <ElandingPage>
                        <LeftSection>
                            <LandingTitle>
                                Learn and Understand how to use some of our products
                            </LandingTitle>
                            <LandingSubTitle>
                                Learn and understand how to use some of our products, short videos,
                                explicit lessons, visible results.
                            </LandingSubTitle>
                        </LeftSection>
                        <RightSection>
                            <ElearnPic src={process.env.PUBLIC_URL + `../../Image/elearn/elearn.png`}/>
                        </RightSection>
                    </ElandingPage>
                    <ElearningCat>
                        <ElearningStore>
                            {
                              learns && learns.length > 0 ?
                              learns.map((item,index) => {
                                return (
                                    <Learn
                                        image = {item.thumbnail}
                                        title= {item.title}
                                        date = {formatter.format(new Date(item.created_at))}
                                        url = {item.url}
                                    /> 
                              )
                            }):  <CircularProgress color="inherit"  sx={{ display: 'flex' , textAlign: "center", justifyContent: "center", width: "100%"}}/>}
                        </ElearningStore>  
                    </ElearningCat>
                </ElearnContent>
                {/* <DarkBg></DarkBg> */}
            </ElearnContainer>
        </HeadFoot>
    
    </>
    )
}

export default Elearning
