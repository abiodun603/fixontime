import React, {useEffect} from 'react'
import HeadFoot from '../../components/HeadFoot'
import {ContactLand, BlogBanner, BlogForm, BlogWrapper,FormWrapper, FromBx, Input,Button, Textarea, Contact, ContactDesc, WorkContainer, WorkTitle, WorkHourContainer, WorkHour, WorkWrapper} from "./StyledContact"
import address from "../../assets/image/contact/address.svg"
import phone from "../../assets/image/contact/phone.svg"
import mail from "../../assets/image/contact/mail.svg"
import customer from "../../assets/image/contact/customer.svg"
import contact from "../../assets/image/contact/contact-hr.svg";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import { useForm } from '../../hooks/useForm';
import axios from "axios"
import swal from "sweetalert";

const ContactPage = (props) => {
    useEffect(() => {
        props.setSidebar(false);
    },[]);

    const [values, handleChange] = useForm({
        firstName: "",
        lastName: "",
        email : "",
        company: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
         // const history = useHistory()
        const url =  "https://fixontime.herokuapp.com/contacts";
        const data = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            company: values.company,
            subject: values.subject,
            message: values.message,
        }
         axios.post(
             url ,
             data,
         ).then(response => {
 
             console.log(response.data)
            //  alert("update successfully")
             swal({
                 title: "Message Recieved",
                 text: "We will get in touch with you as soon as possible",
                 icon: "success",
                 confirmButtonColor: '#030762',
                 buttons: true,
                 dangerMode: true,
               }).then((willDelete) => {
                 if (willDelete) {
                 } else {
                 }
             });
             })
             .catch(err => {
                 console.log(err)
             })

             swal({
                title: "Message Recieved",
                text: "We will get in touch with you as soon as possible",
                icon: "success",
                confirmButtonColor: '#030762',
                buttons: true,
                dangerMode: true,
              })
    }

    return (
        <>
            <HeadFoot {...props}>
                <ContactLand>
                    <h1>Contact Us</h1>
                    <p>Need help with something? Reach out to us!</p>
                </ContactLand>

                <BlogWrapper>
                    <BlogBanner>
                        <p>Let's work together, we'd love<br/> to hear from you</p>
                        <Contact>
                            <ContactDesc>
                                <span>
                                    <img src={address} alt=""/>
                                </span>
                                <p>Address</p>
                            </ContactDesc> 
                            <p>
                                6, Charity Road (1st Floor), New<br/>Oko-Oba, Lagos
                            </p>
                        </Contact>
                        <Contact>
                            <ContactDesc>
                                <span>
                                    <img src={phone} alt="" />
                                </span>
                                <p>Telephone</p>
                            </ContactDesc>  
                            <p>07012223256</p>
                        </Contact>
                        <Contact>
                            <ContactDesc>
                                <span>
                                    <img src={mail} alt="" />
                                </span>
                                <p>Email</p>
                            </ContactDesc>  
                            <p>info@fixontime.com</p>
                        </Contact>
                        <Contact>
                            <ContactDesc>
                                <span>
                                    <img src={customer} alt="" />
                                </span>
                                <p>Customer Support</p>
                            </ContactDesc>  
                            <a 
                                href="https://wa.me/08035328274"
                                target = "_blank"
                                rel = "nooperner noreferrer"
                            >
                                <Button style={{background: "white", color: "#030762", width: 170, borderRadius: 10}}>
                                    Open live chat
                                </Button>
                            </a>
                        </Contact>
                    </BlogBanner>
                    <FormWrapper onSubmit={handleSubmit}>
                        <BlogForm>
                            <h2>Request a service</h2>

                            <FromBx>
                                <span>First Name</span>
                                <Input 
                                    type = "text" 
                                    placeholder = ""
                                    name = "firstName"
                                    value = {values.firstName}
                                    onChange = {handleChange}
                                 />
                            </FromBx>

                            <FromBx>
                                <span>Last Name</span>
                                <Input 
                                    type = "text" 
                                    placeholder = ""
                                    name = "lastName"
                                    value = {values.lastName}
                                    onChange = {handleChange}
                                    required
                                 />
                            </FromBx>

                            <FromBx>
                                <span>Email Address</span>
                                <Input type = "text" 
                                    placeholder = ""
                                    name = "email"
                                    value = {values.email}
                                    onChange = {handleChange}
                                    required
                                 />
                                
                            </FromBx>

                            <FromBx>
                                <span>Company</span>
                                <Input type = "text" 
                                    placeholder = "" 
                                    name = "company"
                                    value = {values.company}
                                    onChange = {handleChange}
                                    required
                                />
                            </FromBx>

                            <FromBx>
                                <span>Subject</span>
                                <Input type = "text" 
                                    placeholder = "" 
                                    name = "subject"
                                    value = {values.subject}
                                    onChange = {handleChange}
                                    required
                                />
                            </FromBx>

                            <FromBx>
                                <span>Message</span>
                                <Textarea row="30" col="20" 
                                    placeholder = "" 
                                    name = "message"
                                    value = {values.message}
                                    onChange = {handleChange}
                                    required
                                />
                            </FromBx>

                            <FromBx>
                                <Button type = "submi">Submit Request
                                    <HiOutlineArrowNarrowRight/>
                                </Button>
                            </FromBx>
                        </BlogForm>
                    </FormWrapper>
                </BlogWrapper>

                <Work/>
            </HeadFoot>
        </>
    )
}

export default ContactPage;

const Work = () => {
    return (
        <>
            <WorkWrapper>
                <WorkContainer>
                    <img src={contact} alt=""/>
                    
                    <WorkTitle>
                        <h2>Work Hours</h2>
                        {/* <p>lorem pisum dolar sit amet, connecttur adipising <br/>elit, Preltium non amet lcoreet volupat nih <br/> rutrum pretium</p> */}
                    </WorkTitle>

                    <WorkHourContainer>
                        <WorkHour>
                            <span>Monday-Saturday</span>
                            <p>08.00am - 06:00pm</p>
                        </WorkHour>

                        <WorkHour>
                            <span>Sunday</span>
                            <p>07.00am - 07:00pm</p>
                        </WorkHour>

                        <WorkHour>
                            <span>Emergency on call basis</span>
                            <p>24hr/7days</p>
                        </WorkHour>
                    </WorkHourContainer>
                </WorkContainer>
            </WorkWrapper>
            
        </>
    )
}
