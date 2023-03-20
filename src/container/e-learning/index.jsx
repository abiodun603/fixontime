import React, { useEffect } from 'react'
import { FaEye } from 'react-icons/fa'
import { ElearnVideo } from '../../component/data/data'
import HeadFoot from '../../component/HeadFoot'
import {ElearnContainer,ElearnContent,ElandingPage,LeftSection,LandingTitle,
    LandingSubTitle,RightSection,ElearnPic,ElearningCat,ElearningStore,ElearningItems,ElearningCard,ElearningImage,PlayImg,EImg,ElearningName,ElearningView,ElearnDate,VideoArea,Cancel,ElearnVid,DarkBg} from './elearning'
function Elearning(props) {
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
                                Learn and understand how to use some of our products, Short videos,
                                explicit lessons, visible results.
                            </LandingSubTitle>
                        </LeftSection>
                        <RightSection>
                            <ElearnPic src={process.env.PUBLIC_URL + `/Image/elearn/elearn.png`}/>
                        </RightSection>
                    </ElandingPage>
                    <ElearningCat>
                        <ElearningStore>
                            {ElearnVideo.map((item,index) => {
                                return (
                                        <ElearningItems>
                                            <ElearningCard>
                                                <ElearningImage>
                                                    <PlayImg src={process.env.PUBLIC_URL + `Image/icon/playicon.svg`} />
                                                    <EImg src={process.env.PUBLIC_URL + `Image/${item.image}`} />
                                                </ElearningImage>
                                                <ElearningName>{item.name}</ElearningName>
                                                <ElearningView><FaEye /> {item.views}</ElearningView>
                                                <ElearnDate>
                                                    {item.date}
                                                </ElearnDate>
                                            </ElearningCard>
                                            {/* <VideoArea>
                                                <Cancel>&times;</Cancel>
                                                <ElearnVid src={process.env.PUBLIC_URL + `/${item.video}`} controls></ElearnVid>
                                            </VideoArea> */}
                                        </ElearningItems>
                                    )
                            })}
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
