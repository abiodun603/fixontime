import React, {useState, useEffect } from 'react'
import HeadFoot from '../../components/HeadFoot';
import {IoIosArrowForward} from 'react-icons/io'
import {ServiceContainer,ServiceContent, ServiceLandingPage} from './Service';
import procurement from "../../assets/image/servicepage/engineering-procurement-min.png"
import installation from "../../assets/image/servicepage/electrical-installation-min.png"
import maintainance from "../../assets/image/servicepage/maintainance-ht-mgt-min.png"
import training from "../../assets/image/servicepage/training-min.png"
import source from "../../assets/image/servicepage/source-skilled-personnel-min.png"
import {useForm} from "react-hook-form"
import {Card, CardContent, CardActions, Backdrop,CardHeader } from "@mui/material"
import {COLORS} from "../../assets/theme"
import Button from '../../components/button/Button';
import swal from "sweetalert";
import axios from "axios"

const BasicCard = (props) => {
  const { handleSubmit, errors, formState, register } = useForm({
    mode: "onChange"
  });

  const onSubmit = async(data, e) =>  {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone_number", data.phone);
    formData.append("email", data.email);
    formData.append("company", data.company);
    formData.append("service", data.service);
    formData.append("message", data.message);

    await axios.post("https://v1.api.seenergysolutions.org/api/enquiries" , formData
    ).then(res => {
      console.log(res);
        swal({
          title: "Sent",
          text: "Your request has been sent, FOT team will reach out to you as soon as possible",
          icon: "success",
          confirmButtonColor: '#030762',
          dangerMode: true,
        }).then((res) => {
          if (res) {
            
          } else {
            swal("Your imaginary file is safe!");
          }
      }); 
    })
  }
  return (
      <Card>
        <CardHeader
          title = "Request a service"
          sx={{textAlign: "center", color: COLORS.blue,background: "rgba(3, 7 , 98, 0.1)", fontWeight: "700"}}
        />
          <div className='my__doc sideBar'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent>
                <div className="form_container" style={{flexDirection: "column"}}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm  mb-2" for="username">
                      Name
                    </label>
                    <input {...register("name")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm  mb-2" for="username">
                      Company
                    </label>
                    <input {...register("company")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
                  </div>
                  <div class="mb-4">
                    <label className="block text-gray-700 text-sm  mb-2" for="username">
                      Email
                    </label>
                    <input {...register("email")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm  mb-2" for="username">
                      Phone number
                    </label>
                    <input {...register("phone")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm  mb-2" for="username">
                      Select service
                    </label>
                    <select  {...register("service")} 
                      className=" form-select appearance-none
                      block
                      w-full
                      px-4
                      py-2
                      mt-2
                      text-body4
                      font-normal
                      text-gray-400
                      bg-white bg-clip-padding bg-no-repeat
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        <option>Select a service</option>
                        <option value ="Engineering procurement">Engineering procurement</option>
                        <option value="Electrical Installations">Electrical Installations </option>
                        <option value="Maintenance & H.T Asset Management">Maintenance & H.T Asset Management</option>
                        <option value="Training">Training</option>
                        <option value="Source Skilled Personnel">Source Skilled Personnel</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm  mb-2" for="username">
                      Message
                    </label>
                    <textarea
                      {...register("message")} 
                      class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                </div>
              </CardContent>
              <CardActions className='mb-5 ml-2.5 '>
                <Button buttonStyle="btn--primary--outline" onClick={props.close}  buttonSize="btn--large">Cancel</Button>
                <Button buttonSize="btn--large" buttonStyle="btn--grey--solid" onClick={props.close}>Send</Button> 
              </CardActions>
            </form>
          </div>
      </Card>
  );
}


function Service(props) {
  const [open, setOpen] = useState(false);
    useEffect(() => {
        props.setSidebar(false);
    },[]);

    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

    return (
      <>
        <HeadFoot {...props}>
          <ServiceContainer>
            <ServiceContent>
              <ServiceLandingPage>
                <div className='right'>
                  <h4>Solutions just for you</h4>
                  <p>
                    You can select from a variety of our Medium<br/>Voltage solutions.
                  </p>
                </div>
              </ServiceLandingPage>
              <div className='service_bottom_section'>
                <div className='card_section'>
                  <div className='left_section'>
                    <img src={procurement} alt =" "/>
                    <h3>Engineering Procurement</h3>
                    <div>
                      Are you ready to buy state-of-the-art products from original equipment 
                      manufacturers? As an exclusive distributor, we help you purchase electrical power 
                      and distribution equipment  up to 330KV to automate your distribution network.  
                    </div>
                    <div>
                      Save up to 40 percent of the cost when you buy through us. 
                    </div>
                    <button onClick={handleToggle}>
                      Request service <IoIosArrowForward />
                    </button>
                  </div>
                  <div className='right_section'>
                    <img src={installation} alt =""/>
                    <h3>Electrical Installations </h3>
                    <div>
                      You cannot afford to have installations done wrong. 
                      Do not put your personnel, equipment and entire 
                      distribution network in the hands of amateurs. Work with
                      our experts to carry out low voltage to 330KV Substation 
                      installations. 
                    </div>
                    <div>
                      We have comprehensive training on how to install
                      state-of-the-art electrical equipment. 
                    </div>
                    <button onClick={handleToggle}>
                      Request service <IoIosArrowForward />
                    </button>
                  </div>
                </div>
                <div className='full_section'>
                  <div className='info'>
                    <h3>Maintenance &#38; H.T Asset Management</h3>
                    <div>Increase the lifespan of your electrical equipment by putting them in 
                      great hands. Our professionals handle your power distribution assets 
                      and provide full after-sales support, training, and maintenance.
                    </div>
                    <div>
                      Our vendors are ready to deploy items required for corrective maintenance within record time.
                    </div>
                    <div>
                      FixOnTime is the choice electrical maintenance company for high-profile 
                      estates across the country. We provide after-sale support 
                      and training on all the equipment we supply or install.
                    </div>
                    <button onClick={handleToggle}>
                      Request service <IoIosArrowForward />
                    </button>
                  </div>
                  <div className='image'>
                    <img src={maintainance}  alt= ""/>
                  </div>
                </div>
                <div className='card_section'>
                  <div className='left_section'>
                    <img src={training} alt="" />
                    <h3>Training and Skills Development</h3>
                    <div>
                      We offer offshore and onshore training to our customers on the effective use of their
                      equipment.
                    </div>
                    <div>
                      We also offer training in specialised skill areas that are rare in the power transmission and
                      distribution industry. These include Cable Jointers, Switchgears Installers, Linesmen, Protection
                      Engineers, and Smart Grid Enthusiasts training.
                    </div>
                    <div>
                      We are not done yet!
                    </div>
                    <button onClick={handleToggle}>
                      Request service <IoIosArrowForward />
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
                      Do you want us to become your technical partner and excellently execute your electrical
                      projects?
                    </div>
                    <div>
                      We arrange factory acceptance test visits with OEMs for Engineering, Procurement, and
                      Construction (EPC) Contracts and special projects.
                    </div>
                    <button onClick={handleToggle}>
                      Request service <IoIosArrowForward />
                    </button>
                  </div>
                </div>
              </div>

              {/* BACKDROP ON CLICK */}
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                // onClick={handleClose}
              >
                <BasicCard open={open} close={handleClose}/>
              </Backdrop>
            </ServiceContent>
          </ServiceContainer>
        </HeadFoot>
      </>
    )
}

export default Service
