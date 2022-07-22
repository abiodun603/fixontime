import React, { useEffect, useState } from 'react'
import HeadFoot from '../../components/HeadFoot'
import { Answer, ContactLand, Faq, Question, Wrap } from '../contact/StyledContact'
import transformer from "../../assets/image/about/transformer.svg"
import safety from "../../assets/image/about/safety.svg"
import best from "../../assets/image/about/best.svg"
import innovation from "../../assets/image/about/innovation.svg"
import {frequentQuestion} from "../../data/question"
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io"

import { AboutLand, CoreContainer, CoreDesc, CoreDescCon, CoreWrapper, DescBanner, DescView, DescWrapper, ImageContainer, QuestionWrapper, TransContainer, TransImage, TransWrapper } from './StyledAbout'
import Brand from '../../components/brand/Brand'

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
                <AboutLand>
                    <h1>ABOUT US</h1>
                    <p >We are a leading Engineering, Procurement,<br/>and Construction company.</p>
                </AboutLand>

                {/* About Us */}
                <TransWrapper>
                    <TransContainer>
                        <h2>FixOnTime is a leading engineering, procurement, and construction company.</h2>
                        <p>
                          Approved by the Nigerian Electricity Supply Industry, we have a strong design experience, and
                          we are leaders in sourcing equipment that bring solutions to electrical challenges.
                        </p>
                        <p>
                          We are distribution network contractors and power automation professionals. We provide
                          electrical power solutions through equipment procurement, contracting, and maintenance.
                        </p>
                        <p>
                          We provide global standard electrical services for utilities, contractors, and Electrical SME
                          manufacturers.
                        </p>
                        <p>
                          We are Nigeria's first energy solutions company to be appointed distributor to notable
                          Equipment Manufacturers. Our Principal Engineer and Technical Partners are seasoned
                          professionals.
                        </p>
                        <p>
                          We have carried out power construction and EPC projects of up to 330KV locally and
                          internationally. Our qualified technicians adhere to the highest standard of practice and offer
                          services such as 11kV to 33kV medium voltage power substation, low voltage, and electrical
                          and instrumentation work for industries.
                        </p>
                        <p>
                          Our electricians are available for L.V substation power projects, H.T facilities maintenance, large
                          substation construction, and maintenance.
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
                                <span>Best Practices</span>
                                <p>Approved by NEMSA</p>
                            </CoreDesc>
                        </CoreDescCon>
                        <CoreDescCon>
                            <ImageContainer>
                                <img src= {safety} alt=""/>
                            </ImageContainer>
                            <CoreDesc>
                                <span>Safety</span>
                                <p> Our Engineers and technicians<br/> adhere to the highest<br/> safety standard</p>
                            </CoreDesc>
                        </CoreDescCon>
                        <CoreDescCon>
                            <ImageContainer>
                                <img src= {innovation} alt=""/>
                            </ImageContainer>
                            <CoreDesc>
                                <span>Innovation</span>
                                <p>We are committed to providing<br/>innovative power automation<br/> solutions and transforming the
                                  <br/>Nigerian grid into a<br/>smart one.
                                </p>
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
                          We are the leading power automation company in Nigeria, offering innovative solutions and
                          alternatives to conventional electrical power substation and distribution approaches.
                        </p>
                        <p>
                          Through our partnership with renowned OEM and our subject expert engineers, we provide
                          cost-effective, environmentally friendly, and reliable solutions to our clients and the Nigerian
                          Electricity Supply Industry.
                        </p>

                        <p>
                          We have carried out power construction and EPC projects of up to 330KV locally and
                          internationally. Our qualified Engineers adhere to the highest standards of practice and offer
                          services such as 11kV to 33kV medium voltage power substation, low voltage, and electrical
                          and instrumentation services for industries.
                        </p>

                        <p>
                          We are available for LV and MV substation tasks, H.T facilities construction, and maintenance.
                        </p>
                    </DescView>
                </DescWrapper>

                {/* Accordoin */}
                <QuestionWrapper>
                    <h3>Frequently Asked Questions</h3>
                    <p>
                      We have answered real questions from clients just like you here.
                    </p>
                    <p className='feel'>
                      Feel free to email us if you don't find your answer here
                    </p>
                    <a  href = "mailto: info@fixontime.com" target="_blank" rel="noopener noreferrer" style={{cursor: "pointer"}}>info@fixontime.com</a>
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
                <Brand/>
            </HeadFoot>
        </>
    )
}

export default About
