import React, { useEffect, useState } from 'react'
import HeadFoot from '../../components/HeadFoot'
import { Answer, ContactLand, Faq, Question, Wrap } from '../contact/StyledContact'
import transformer from "../../assets/image/about/transformer.svg"
import safety from "../../assets/image/about/safety.svg"
import best from "../../assets/image/about/best.svg"
import innovation from "../../assets/image/about/innovation.svg"
import One from "../../assets/image/about/icon/1.svg"
import Two from "../../assets/image/about/icon/2.svg"
import Three from "../../assets/image/about/icon/3.svg"
import Four from "../../assets/image/about/icon/4.svg"
import Five from "../../assets/image/about/icon/5.svg"
import Six from "../../assets/image/about/icon/6.svg"
import Seven from "../../assets/image/about/icon/7.svg"
import Eight from "../../assets/image/about/icon/8.svg"
import Nine from "../../assets/image/about/icon/9.svg"
import {frequentQuestion} from "../../data/question"
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io"

import { Brand, CoreContainer, CoreDesc, CoreDescCon, CoreWrapper, DescBanner, DescView, DescWrapper, ImageContainer, QuestionWrapper, TransContainer, TransImage, TransWrapper } from './StyledAbout'

const About = (props) => {
    const [clicked , setClicked] = useState(false);

    useEffect(() => {
        props.setSidebar(false);
    },[]);

    const toggleQuestion = (index) => {
        if(clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
        
    }

    return (
        <>
            <HeadFoot {...props}>
                {/* Landing */}
                <ContactLand>
                    <h1>ABOUT US</h1>
                    <p>Fix Nigeria, Fix Africa</p>
                </ContactLand>

                {/* About Us */}
                <TransWrapper>
                    <TransContainer>
                        <h2>We are a leading Engineering, Procurement, and Construction company. </h2>
                        <p>
                            FixOnTime is certified to carry out electrical engineering works 
                            and deploy its products within the Nigerian Electricity Supply Industry. 
                            We have strong design experience, and we are one of the leaders in sourcing equipment that brings solutions to electrical challenges. 
                        </p>
                        <p>
                            We are distribution network contracts and power automation professionals. 
                            We provide electrical power solutions through equipment procurement, contracting, 
                            and maintenance.  We offer global standard electrical services for utilities, contractors, and electrical SME manufacturers. 

                        </p>
                    </TransContainer>
                    <TransImage>
                        <img src = {transformer} alt =""/>
                    </TransImage>
                </TransWrapper>
                {/* Core Value */}
                <CoreWrapper>
                    <h2>OUR CORE VALUES</h2>
                    <CoreContainer>
                        <CoreDescCon>
                            <ImageContainer>
                                <img src= {best} alt=""/>
                            </ImageContainer>
                            <CoreDesc>
                                <span>Best Pratices</span>
                                <p>Approved by NEMSA</p>
                            </CoreDesc>
                        </CoreDescCon>
                        <CoreDescCon>
                            <ImageContainer>
                                <img src= {safety} alt=""/>
                            </ImageContainer>
                            <CoreDesc>
                                <span>Safety</span>
                                <p> Our Engineers and technicians adhere to the highest<br/> safety standard</p>
                            </CoreDesc>
                        </CoreDescCon>
                        <CoreDescCon>
                            <ImageContainer>
                                <img src= {innovation} alt=""/>
                            </ImageContainer>
                            <CoreDesc>
                                <span>Innovation</span>
                                <p>We are <u>committed</u> to being a leader in providing<br/>power automation solutions for the power sector <br/>and bring Nigeria grid to smart state</p>
                            </CoreDesc>
                        </CoreDescCon>
                    </CoreContainer>  
                      
                </CoreWrapper>
                {/* Image Description */}
                <DescWrapper>
                    <DescBanner>
                        {/* <img src={pole} /> */}
                    </DescBanner>
                    <DescView>
                        <h2>Always the First</h2>

                        <p>
                            We are the leading power Automation Company in Nigeria, offering innovative solutions and alternatives to a conventional electrical power substation and distribution approaches.  Through our partnership with renowned OEM as well as our subject expert engineers, we are always providing cost-saving, environmentally friendly and more reliable solutions to our customers and the Nigerian Electricity Supply Industry at large.                        </p>
                        <p>
                            We have carried out power construction and EPC 
                            projects of up to 330KV locally and internationally. 
                            Our qualified Engineers adhere to the highest standards 
                            of practice and offer services such as 11kV to 33kV medium 
                            voltage power substation works, low voltage, and electrical
                            and instrumentation work for industries. 
                        </p>

                        <p>
                            We are available for LV and MV substation works, 
                            H.T facilities,construction, and maintenance.
                        </p>
                    </DescView>
                </DescWrapper>

                {/* Accordoin */}
                <QuestionWrapper>
                    <h3>Answers to your questions</h3>
                    <p>We answered questions so you don't have to ask them.<br/>
                        Feel free to email us if you don't find your answer here
                    </p>
                    <span>info@fixontime.com</span>
                    <QuestionWrapper>
                        {frequentQuestion.map((item,index) => {
                            return (
                                <Faq>
                                    <Wrap onClick={()=> toggleQuestion(index)} key={index}>
                                        <Question>
                                            {item.question}
                                        </Question>
                                        {clicked === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </Wrap>
                                    {clicked === index ? <Answer>{item.answer}</Answer> : null}                                    
                                </Faq>
                            )
                        })}
                    </QuestionWrapper>
                </QuestionWrapper>
                {/* Sponsors */}
                <Brand>
                    <h3>These leading brands trust us</h3>
                    <div>
                        <img src={One} alt = ""/>
                        <img src={Two} alt = ""/>
                        <img src={Three} alt = ""/>
                        <img src={Four} alt = ""/>
                        <img src={Five} alt = ""/>
                        <img src={Six} alt = ""/>
                        <img src={Seven} alt = ""/>
                        <img src={Eight} alt = ""/>
                        <img src={Nine} alt = ""/>
                    </div>
                </Brand>
            </HeadFoot>
        </>
    )
}

export default About
