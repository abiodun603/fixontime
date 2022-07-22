import React from 'react';
import { ImLinkedin } from 'react-icons/im';
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
                    <FooterNavLink to="/elearn">E-learning</FooterNavLink>
                    <FooterNavLink to="/blog">Blog</FooterNavLink>
                    <FooterNavLink to="/about">About</FooterNavLink>
                    <FooterNavLink to="/contact">Contact</FooterNavLink>
                  </FooterNavList>
              </FooterNav>   
          </TopContent>

          <div className='line'></div>

          <BottomContent>
            <FooterCopyRight>
              Copyright © 2021 Fixontime Electric .
            </FooterCopyRight>

            <FooterSocialLink>
                <a href='https://www.facebook.com/fixontime/' target="_blank">
                  <FaFacebook width="16px" height="16px" />
                </a>
                <a href="https://instagram.com/fixontime_ng " target="_blank">
                  <FaInstagram width="16px" height="16px" style={{margin: '0 38px'}}/>
                </a>
                <a   href="https://twitter.com/fixontime_ng" target="_blank">
                  <FaTwitter width="16px" height="16px" />
                </a>
                <a  href={`https://www.linkedin.com/company/fixontime-electric-limted/`} className = "insta" target="_blank">
                  <ImLinkedin  />
                </a>
              </FooterSocialLink>
          </BottomContent>
        </FooterContent>
      </FooterContainer>
    )
}

export default Footer