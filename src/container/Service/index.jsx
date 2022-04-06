import React, { useEffect } from 'react'
import HeadFoot from '../../components/HeadFoot';
import {IoIosArrowForward} from 'react-icons/io'
import {ServiceContainer,ServiceContent} from './Service';
import procurement from "../../assets/image/servicepage/engineering-procurement-min.png"
import installation from "../../assets/image/servicepage/electrical-installation-min.png"
import maintainance from "../../assets/image/servicepage/maintainance-ht-mgt-min.png"
import training from "../../assets/image/servicepage/training-min.png"
import source from "../../assets/image/servicepage/source-skilled-personnel-min.png"

function Service(props) {
    useEffect(() => {
        props.setSidebar(false);
    },[]);
    return (
        <>
        <HeadFoot {...props}>
            <ServiceContainer>
                <ServiceContent>
                    <div className='hero_section'>
                        <h4 className='hero_title'>Standard Engineering and Custom Built Solutions</h4>
                        <div className='hero_subtitle'>
                            you can select from a variety of our Medium Voltage solutions.
                        </div>
                    </div>
                    <div className='service_bottom_section'>
                        <div className='card_section'>
                            <div className='left_section'>
                                <img src={procurement} alt =" "/>
                                <h3>Engineering procurement</h3>
                                <div>
                                    Are you ready to buy state-of-the-art products from original equipment 
                                    manufacturers? As an exclusive distributor, we help you purchase electrical power 
                                    and distribution equipment  up to 330KV to automate your distribution network.  
                                </div>
                                <div>
                                    Save up to 40 percent of the cost when you buy through us. 
                                </div>
                                <button>
                                    Buy Now <IoIosArrowForward />
                                </button>
                            </div>
                            <div className='right_section'>
                                <img src={installation} alt =""/>
                                <h3>Electrical Installations </h3>
                                <div>
                                    You cannot afford to have installations done wrong. 
                                    Do not put your personnel, equipment, and entire 
                                    distribution network in the hands of amateurs. Work with
                                    our experts to carry out low voltage to 330KV Substation 
                                    installations. 
 
                                </div>
                                <div>
                                    We have comprehensive training on how to install
                                    state-of-the-art electrical equipment. 
                                </div>
                                <button>
                                Work With Us <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                        <div className='full_section'>
                            <div className='info'>
                                <h3>Maintenance &#38; H.T Asset Management</h3>
                                <div>Increase the lifespan of your electrical equipment by putting them in 
                                    great hands. Our professionals handle your power distribution assets 
                                    and provide full after-sales support,  training, and maintenance.
                                </div>
                                {/* <div>
                                    It is one thing to have the best energy equipment. It is another to maintain
                                    it so that it continues to provide value. Our maintenance 
                                    services help to improve the efficiency and reliability of electricity. 
                                </div> */}
                                <div>
                                    Our vendors are ready to deploy items required for corrective maintenance within record time.
                                </div>
                                <div>
                                    FixOnTime is the choice electrical maintenance company for high-profile 
                                    estates across the country. We provide after-sale support 
                                    and training on all the equipment we supply or install.
                                </div>
                                <button>
                                Get Intouch <IoIosArrowForward />
                                </button>
                            </div>
                            <div className='image'>
                                <img src={maintainance}  alt= ""/>
                            </div>
                        </div>

                        <div className='card_section'>
                            <div className='left_section'>
                                <img src={training} alt="" />
                                <h3>Training and Skills Devellopment</h3>
                                <div>
                                We offer offshore and local training to our customers on their equipment as well as specialised skill areas that are in dare in power transmission and distribution industries such as Cable Jointers, Switchgears Installers, Linesmen, Protection Engineers and Smart Grid Enthusiasts. 
                                This service comes with after-sales support from the manufacturer. 
                                </div>
                                <div>
                                We also arrange factory acceptance test 
                                visits with OEMs for Engineering, Procurement and Construction (EPC) &#38; special projects.
                                </div>
                                <button>
                                    Speak To Us <IoIosArrowForward />
                                </button>
                            </div>
                            <div className='right_section'>
                                <img src={source} />
                                <h3>Source Skilled Personnel </h3>
                                <div>
                                Enjoy zero power equipment and distribution-related problems. 
                                </div>
                                <div>
                                    We provide skilled technical and engineering services to corporate
                                    organizations so your business can continue running.  
                                </div>
                                <div>
                                    Do you Want us to become technical partner and excellently
                                    execute your electrical projects?  
                                </div>
                                <button>
                                    Speak To Us <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>
                </ServiceContent>
            </ServiceContainer>
        </HeadFoot>
    
    </>
    )
}

export default Service
