import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import {FooterContainer,FooterContent,TopContent,FooterNav,
FooterLogo,Image,FooterNavList,FooterNavLink,FooterSocialLink,BottomContent,FooterCopyRight} from './FooterStyled'

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <TopContent>
                    <FooterNav>
                        <FooterLogo>
                            <Image src={process.env.PUBLIC_URL + `/Image/footer/fixtime_white.svg`} />
                        </FooterLogo>
                        <FooterNavList>
                            <FooterNavLink to="/">Home</FooterNavLink>
                            <FooterNavLink to="/service">Our services</FooterNavLink>
                            <FooterNavLink to="/products">Shop</FooterNavLink>
                            <FooterNavLink to="/elearn">e-learning</FooterNavLink>
                            <FooterNavLink to="/blog">Blog</FooterNavLink>
                            <FooterNavLink to="/about">About</FooterNavLink>
                            <FooterNavLink to="/contact">Contact</FooterNavLink>
                        </FooterNavList>
                    </FooterNav>
                    <FooterSocialLink>
                        <FaFacebook width="16px" height="16px" />
                        <FaInstagram width="16px" height="16px" style={{margin: '0 38px'}}/>
                        <FaTwitter width="16px" height="16px" />
                    </FooterSocialLink>
                </TopContent>
                <BottomContent>
                    <FooterCopyRight>
                        Copyright © 2021 FixontimeTechnologies .
                    </FooterCopyRight>
                </BottomContent>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer
