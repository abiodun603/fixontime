import React, {useState, useEffect } from 'react'
import HeadFoot from '../../components/HeadFoot';
import {useRouteMatch, useHistory} from "react-router-dom"
import {DesContainer,Container,DescPic,Image,DesContent,DesHeader,SubHeader,SubText,
    NojaImage,DescDownload,FontDownload,DownloadText,DescBody,Ptag,DesContactBtn,ContactText,FontArrow} from './DesStyle';
import {Nojaproducts,Lucyproducts,Replproducts} from '../../components/data/data'
import { SelectField, TextField } from '../formComponent/FormComponent';
import {Card, CardContent, CardActions, Backdrop,CardHeader } from "@mui/material"
import {useForm} from "react-hook-form"
import Button from '../../components/button/Button';
import { COLORS } from '../../assets/theme';
import swal from "sweetalert";
import axios from "axios"

const BasicCard = (props) => {
  const { handleSubmit, errors, formState, register } = useForm({
      mode: "onChange"
    });
    const [open, setOpen] =  useState(false);

    const onSubmit = async(data, e) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone_number", data.phone);
      formData.append("email", data.email);
      formData.append("company", data.company);
      formData.append("brand", data.brand);
      formData.append("product", data.product);
      formData.append("message", data.message);
  
      await axios.post("https://v1.api.seenergysolutions.org/api/requests" , formData
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
          title = "Make enquires"
          sx={{textAlign: "center", fontSize: 14, color: COLORS.blue,background: "rgba(3, 7 , 98, 0.1)", fontWeight: "700", zIndex: "1000"}}
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
                        Brand
                      </label>
                      <select  {...register("brand")} 
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
                          <option value = {props.brand}>{props.brand}</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm  mb-2" for="username">
                        Product
                      </label>
                      <select  {...register("product")} 
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
                          <option value = {props.product}>{props.product}</option>
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
                    {/* </div> */}
                </div>
              </CardContent>
              <CardActions className='mb-5 ml-2.5 '>
                <Button buttonStyle="btn--primary--outline" onClick={props.onClick}  buttonSize="btn--large">Cancel</Button>
                <Button buttonSize="btn--large" buttonStyle="btn--grey--solid" onClick={props.onClick}>Send</Button> 
              </CardActions>
            </form>
          </div>
      </Card>
  );
}

function Description(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    props.setSidebar(false);
  },[]);
  const history = useHistory();
  const {params: { query, id },} = useRouteMatch("/productsDetails/:query/:id");
  
  const table = query;
  console.log(table + id);

  if(query === "Nojaproducts"){
    var t = Nojaproducts.filter(function (obj) { 
      return obj.id==id; 
    })[0];
  }else if(query === "Replproducts"){
    var t = Replproducts.filter(function (obj) { 
      return obj.id==id; 
    })[0];
  }else if(query === "Lucyproducts") {
    var t = Lucyproducts.filter(function (obj) { 
      return obj.id==id; 
    })[0];
  }
    // console.log(t)


  return (  
      <>
        <HeadFoot {...props}>
          <DesContainer>
            <Container>
              <DescPic>
                <Image  src={process.env.PUBLIC_URL + `/Image/${t.image}`} />
              </DescPic>
              <DesContent>
                <DesHeader>{t.name}</DesHeader>
                <SubHeader><SubText>Manufacturer:</SubText> <p>{t.manufacturer}</p></SubHeader>
                <DescDownload href={`${t.link}`} >
                  <FontDownload src={process.env.PUBLIC_URL + `/Image/icon/download.png`} />
                  <DownloadText>Download brochure</DownloadText>
                </DescDownload>
                <DescBody>
                  <Ptag>{t.desc}</Ptag>
                    {
                      t.add && t.add.length > 0 ?
                      t.add.map(item => 
                        <Ptag>» {item}</Ptag>
                      ) : ""
                    }
                  <Ptag>
                        
                  </Ptag>
                </DescBody>
                <DesContactBtn onClick={handleToggle}>
                  <ContactText >Make enquires</ContactText>
                  <FontArrow />
                </DesContactBtn>
              </DesContent>
            </Container>
          </DesContainer>
         
        </HeadFoot>
         {/* BACKDROP ON CLICK */}
         <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              // onClick={handleClose}
            >
              <BasicCard product={t.name} brand = {t.manufacturer} onClick={handleClose}/>
            </Backdrop>
      </>
  )
}

export default Description
