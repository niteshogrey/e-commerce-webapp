import React from 'react'
import Layout from '../components/Layout/Layout'
import { FiMail } from "react-icons/fi";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
    <div className='row contactus'>
        <div className="col-md-6 ">
            <img src="/images/contactus.jpeg" alt="contact us" style={{width: "100%"}} />
        </div>
        <div className="col-md-4">
            <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
            <p className="text-justify mt-3">
                any query and info  about product feel free to call anytime we 24X7 available
            </p>
            <p className="mt-3">
                <FiMail/> : www.help@ecommerceapp.com
            </p>
            <p className="mt-3">
                <MdOutlineWifiCalling3/> : 012-3456-6789
            </p>
            <p className="mt-3">
                <TfiHeadphoneAlt/> : 1800-0000-0000 (Toll Free)
            </p>
        </div>
    </div>
    </Layout>
  )
}

export default Contact