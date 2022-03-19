import React, { useEffect } from 'react'
import HeadFoot from '../../components/HeadFoot';
import {DesContainer,Container,DescPic,Image,DesContent,DesHeader,SubHeader,SubText,
    NojaImage,DescDownload,FontDownload,DownloadText,DescBody,Ptag,DesContactBtn,ContactText,FontArrow} from './DesStyle';
function Description(props) {
    useEffect(() => {
        props.setSidebar(false);
    },[]);
    return (
        <>
            <HeadFoot {...props}>
                <DesContainer>
                    <Container>
                        <DescPic>
                            <Image  src={process.env.PUBLIC_URL + `/Image/description/osm_recloser.svg`} />
                        </DescPic>
                        <DesContent>
                            <DesHeader>OSM Recloser</DesHeader>
                            <SubHeader><SubText>Manufacturer:</SubText> <NojaImage src={process.env.PUBLIC_URL + `/Image/description/NojaPower.svg`}/></SubHeader>
                            <DescDownload>
                                <FontDownload src={process.env.PUBLIC_URL + `/Image/Icon/download.png`} />
                                <DownloadText>Download brochure</DownloadText>
                            </DescDownload>
                            <DescBody>
                                <Ptag>The World’s Only Arc Fault Vented Solid Dielectric Recloser</Ptag>
                                <Ptag>» Designed for a maintenance free life</Ptag>
                                <Ptag>» Supported by an international network of Technical Staff</Ptag>
                                <Ptag>» Ganged ultra-fast magnetic actuators to provide additional operator safety</Ptag>
                                <Ptag>» Hot Line Tag functionality and Mechanical trip interlock directly connected to the OSM tank’s oper-ating mechanism</Ptag>
                                <Ptag>» Unique and seamless NOJA Power Android and iOS App enhances linesmen comfort and safety </Ptag>
                                <Ptag>» Internal double pole position indicator micro switches for added reliability</Ptag>
                                <Ptag>» Triple shielded, water blocked and metal conduit protected control cable with military grade IP65
                                rated connectors</Ptag>
                                <Ptag>» Grey powder coated tank to prevent drivers from being blinded by the sunlight reflecting on
                                the tank</Ptag>
                                <Ptag>» Only 3 electronic modules in total that can be replaced within 5 minutes with a simple screwdriver » Remote and quick firmware 
                                upgrades to keep up with the industry changes over time</Ptag>
                            </DescBody>
                            <DesContactBtn>
                                <ContactText>Contact Us</ContactText>
                                <FontArrow />
                            </DesContactBtn>
                        </DesContent>
                    </Container>
                </DesContainer>
            </HeadFoot>
            
        </>
    )
}

export default Description
