import React from 'react'
import {FiX} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import {NavContainer,Nav,NavTopHeader,CompanyInfo,ComNo,FontPhone,
    PhoneText,ComEmail,FontEmail,EmailText,ComTime,FontClock,ClockText,
    SocialInfo,SocialIcon,FacebookImg,InstagramImg,TwitterImg,NavBottomHeader,
    NavSection,NavHamBar,LogoBar,LogoImage,NavList,NavLinks,NavReq,ReqText,FontArrow} from './NavbarStyled';
import {AiFillLinkedin} from "react-icons/ai"
import {BsYoutube} from "react-icons/bs"
function Navbar(props) {

    return (
        <> 
        <NavContainer>
            {
                props.sidebar &&
                 <div className='sidebar'>
                     <FiX className='sideCancel' onClick={() => props.setSidebar(false)}/>
                     <div className='sidebar_link'>
                            <Link to='/' className="sidebar_text">
                                Home
                            </Link>
                            <Link to='/products' className="sidebar_text">
                                Shop
                            </Link>
                            <Link to='/elearn' className="sidebar_text">
                                E-learning
                            </Link>
                            <Link to='/blog' className="sidebar_text">
                                Blog
                            </Link>
                            <Link to='/about' className="sidebar_text">
                                About
                            </Link>
                            <Link to='/service' className="sidebar_text">
                                Our services
                            </Link>
                            <Link to='/contact' className="sidebar_text">
                                Contact
                            </Link>
                     </div>
                </div>
            }
            
            <Nav>
                <NavTopHeader>
                    <CompanyInfo>
                        <ComNo>
                            <FontPhone />
                            <PhoneText>
                                Phone: +2348035328274
                            </PhoneText>
                        </ComNo>
                        <ComEmail>
                            <FontEmail />
                            <EmailText>
                              Email: <a  href = "mailto: info@fixontime.com" target="_blank" rel="noopener noreferrer" style={{cursor: "pointer"}}>info@fixontime.com</a>
                            </EmailText>
                        </ComEmail>
                        <ComTime>
                            <FontClock />
                            <ClockText>
                                Hours: Mon-Sat 08:00 – 06:00
                            </ClockText>
                        </ComTime>
                    </CompanyInfo>
                    <SocialInfo>
                        <SocialIcon>
                            {/* <a href='https://www.facebook.com/fixontime/' className = "insta" target="_blank">
                              <BsYoutube />
                            </a> */}
                            <a href='https://www.facebook.com/fixontime/' target="_blank">
                              <FacebookImg src={process.env.PUBLIC_URL + `/Image/icon/facebook.png`} />
                            </a>
                            <a href="https://instagram.com/fixontime_ng " target="_blank">
                                <InstagramImg src={process.env.PUBLIC_URL + `/Image/icon/instagram.png`} />
                            </a>
                            <a  href={`https://twitter.com/fixontime_ng`} target="_blank">
                              <TwitterImg src={process.env.PUBLIC_URL + `/Image/icon/twitter.png`} />
                            </a>
                            <a  href={`https://www.linkedin.com/company/fixontime-electric-limted/`} className = "insta" target="_blank">
                              <AiFillLinkedin  />
                            </a>
                        </SocialIcon>
                    </SocialInfo>
                </NavTopHeader>
                <NavBottomHeader>
                    <NavSection>
                        <NavHamBar onClick={() => props.setSidebar(true)}/>
                        <LogoBar>
                            <LogoImage src={process.env.PUBLIC_URL + `/Image/description/logo.svg`} />
                        </LogoBar>
                        <NavList>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                            <NavLinks to='/service'>
                                Our services
                            </NavLinks>
                            <NavLinks to='/products'>
                                Shop
                            </NavLinks>
                            <NavLinks to='/elearn'>
                                E-learning
                            </NavLinks>
                            <NavLinks to='/blog'>
                                Blog
                            </NavLinks>
                            <NavLinks to='/about'>
                                About
                            </NavLinks>
                            <NavLinks to='/contact'>
                                Contact
                            </NavLinks>
                        </NavList>
                    </NavSection>
                    
                    
                    <NavReq to="/contact">
                      <div className='flex'>
                        <ReqText>Request a Service</ReqText>
                        <FontArrow src={process.env.PUBLIC_URL + `/Image/icon/forward.png`}/>
                      </div>
                    </NavReq>
                </NavBottomHeader> 
            </Nav>
            {
                // props.sidebar && <DarkBg className="side_darkbg"></DarkBg>
            }  
        </NavContainer>
        </>
    )
}


export default Navbar