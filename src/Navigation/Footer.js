import React,{useEffect} from 'react'
import { Button } from 'antd'
import AOS from 'aos'
import "aos/dist/aos.css";
const Footer = () => {
    useEffect(()=>{

        AOS.init({
            duration:3000,
            offset:150
        });
        AOS.refresh();
        
    },[])
  return (
    <>
    <section style={{backgroundColor:"#141919",color:"white"}} className="my-5"
    >
    <div className='container mt-5'>
        <div className='row my-5' data-aos="fade-up">
            <div className='col-lg-4 col-12 mt-5'>
                <h4 className='text text-start text-white'>Shuffle</h4>
                <address>A108 Adam Street
                NY 535022, USA</address>
                
                <strong>Phone : </strong> <span>+91 xxxxx</span>
                <strong>Email: </strong> <span>abc@gmail.com</span>
            </div>

            <div className='col-lg-4 col-12 mt-5'>
                <h4 className='text text-white'>Shuffle</h4>
                <address>A108 Adam Street
                NY 535022, USA</address>
                
                <strong>Phone : </strong> <span>+91 xxxxx</span>
                <strong>Email: </strong> <span>abc@gmail.com</span>
            </div>


            <div className='col-lg-4 col-12 mt-5'>
                <h4 className='text text-white'>Shuffle</h4>
                <address>A108 Adam Street
                NY 535022, USA</address>
                
                <strong>Phone : </strong> <span>+91 xxxxx</span>
                <strong>Email: </strong> <span>abc@gmail.com</span>
            </div>
        </div>

        <div className='row'>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Your email id" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div class="input-group-append">
                <button type='submit' className='btn btn-success'>Email Us</button>
            </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Footer