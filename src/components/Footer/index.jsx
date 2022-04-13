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
                            <Image src={process.env.PUBLIC_URL + `/Image/description/FOT-White.svg`} />
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
                    <a href='https://www.facebook.com/fixontime' target="_blank">
                        <FaFacebook width="16px" height="16px" />
                    </a>
                        <FaInstagram width="16px" height="16px" style={{margin: '0 38px'}}/>
                    <a  href='https://twitter.com/fixontime' target="_blank">
                        <FaTwitter width="16px" height="16px" />
                    </a>
                    </FooterSocialLink>
                </TopContent>
                <BottomContent>
                    <FooterCopyRight>
                        Copyright © 2021 Fixontime Technologies .
                    </FooterCopyRight>
                </BottomContent>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer
