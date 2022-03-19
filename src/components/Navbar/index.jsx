import React from 'react'
import { FaFacebook, FaInstagram, FaInstagramSquare, FaTimes, FaTwitter } from 'react-icons/fa';
import {} from 'react-icons/md';
import {FiX} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import {NavContainer,Nav,NavTopHeader,CompanyInfo,ComNo,FontPhone,
    PhoneText,ComEmail,FontEmail,EmailText,ComTime,FontClock,ClockText,
    SocialInfo,SocialIcon,FacebookImg,InstagramImg,TwitterImg,NavBottomHeader,
    NavSection,NavHamBar,LogoBar,LogoImage,NavList,NavLinks,NavReq,ReqText,FontArrow} from './NavbarStyled';
import { DarkBg } from '../../container/e-learning/elearning';
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
                                e-learning
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
                                Email: info@fixontime.com
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
                            <FacebookImg src={process.env.PUBLIC_URL + `/Image/Icon/facebook.png`} />
                            <InstagramImg src={process.env.PUBLIC_URL + `/Image/Icon/instagram.png`} style={{margin: '0 31px'}}/>
                            <TwitterImg src={process.env.PUBLIC_URL + `/Image/Icon/twitter.png`} />
                        </SocialIcon>
                    </SocialInfo>
                </NavTopHeader>
                <NavBottomHeader>
                    <NavSection>
                        <NavHamBar onClick={() => props.setSidebar(true)}/>
                        <LogoBar>
                            <LogoImage src={process.env.PUBLIC_URL + `/Image/description/fixLogo.svg`} />
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
                                e-learning
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
                    
                    <NavReq>
                        <ReqText>Request a Service</ReqText>
                        <FontArrow src={process.env.PUBLIC_URL + `/Image/Icon/forward.png`}/>
                    </NavReq>
                </NavBottomHeader> 
            </Nav>
            {
                props.sidebar && <DarkBg className="side_darkbg"></DarkBg>
            }  
        </NavContainer>
        </>
    )
}


export default Navbar