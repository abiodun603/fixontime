import React, { useState } from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar'


function HeadFoot(props) {
    
    return (
        <>
            <Navbar  {...props} />
            {props.children}   
            <Footer />
        </>
    )
}

export default HeadFoot
