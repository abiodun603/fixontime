import React, { useEffect } from 'react'
import HeadFoot from '../../components/HeadFoot';
import {IoIosArrowForward} from 'react-icons/io'
import {ServiceContainer,ServiceContent} from './Service';
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
                        <h4 className='hero_title'>Solutions just for you</h4>
                        <div className='hero_subtitle'>
                            you can select from a variety of our medium voltage solutions.
                        </div>
                    </div>
                    <div className='service_bottom_section'>
                        <div className='card_section'>
                            <div className='left_section'>
                                <img src={process.env.PUBLIC_URL + `/Image/services/engProcurement.svg`} />
                                <h3>Engineering procurement</h3>
                                <div>
                                    Are you ready to buy state-of-the-art products from original equipment 
                                    manufacturers? As accredited vendors, we help you purchase electrical power 
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
                                <img src={process.env.PUBLIC_URL + `/Image/services/enginstallation.svg`} />
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
                                <div>
                                    It is one thing to have the best energy equipment. It is another to maintain
                                    it so that it continues to provide value. Our maintenance 
                                    services help to improve the efficiency and reliability of electricity. 
                                </div>
                                <div>
                                    Our vendors are ready to deploy items required for corrective maintenance within record time.
                                </div>
                                <div>
                                    Fix onTime is the choice electrical maintenance company for high-profile 
                                    estates across the country. We provide complete sales support 
                                    and training on all the equipment we supply or install.
                                </div>
                                <button>
                                Get Intouch <IoIosArrowForward />
                                </button>
                            </div>
                            <div className='image'>
                                <img src={process.env.PUBLIC_URL + `/Image/services/maintenance.svg`} />
                            </div>
                        </div>

                        <div className='card_section'>
                            <div className='left_section'>
                                <img src={process.env.PUBLIC_URL + `/Image/services/training_equip.jpg`} />
                                <h3>Training on Equipment</h3>
                                <div>
                                We offer offshore and local training to our customers on their equipment. 
                                This service comes with direct support from the manufacturers. 
                                </div>
                                <div>
                                We also arrange factory acceptance test 
                                visits with OEMs for EPC (Meaning) &#38; special projects.
                                </div>
                                <button>
                                    Speak To Us <IoIosArrowForward />
                                </button>
                            </div>
                            <div className='right_section'>
                                <img src={process.env.PUBLIC_URL + `/Image/services/source_skilled.jpg`} />
                                <h3>Source Skilled Personnel </h3>
                                <div>
                                Enjoy zero power equipment and distribution-related problems. 
                                </div>
                                <div>
                                    We provide skilled technicians and engineering services to corporate
                                    organizations so your business can continue running.  
                                </div>
                                <div>
                                    Want us to become technical partners and 
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
