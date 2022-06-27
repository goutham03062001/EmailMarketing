import React,{useEffect} from 'react'
import Myprogress from '../Cards/Myprogress';
import AOS from 'aos';
import 'aos/dist/aos.css';
const imageStyle = {
    height:"70vh",
    width:"100%",
    borderRadius:"10px",
    float:"left"
};
const About = () => {
    useEffect(()=>{
        AOS.init({
            duration:2000,
            offset:100
        });
        AOS.refresh();
    },[])
  return (
        <>
        <h3 className='text text-center' data-aos="fade-left">ABOUT US</h3>

        <p className='text text-center' data-aos="zoom-out">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
        <p className='text text-center' data-aos="zoom-out"> Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

        {/* left side images */}

        <div className='container mt-5'>
            <div className='row mt-5
            d-flex 
            flex-md-row
            flex-sm-column
            flex-lg-row
            justify-content-md-between
            
            justify-content-sm-center
            align-items-sm-center
            justify-content-lg-between
            justify-content-center
            py-sm-3'>
                <div className='col-lg-6 col-11 col-md-8 col-sm-10
                w-100' data-aos="zoom-in">
                    <img src="https://github.com/goutham03062001/EmailMarketing/blob/main/public/Images/about.jpg" style={imageStyle}/>
                </div>

                <div className='col-lg-6 col-10 col-md-4 col-sm-10'
                data-aos="fade-up">
                    <h3 className='text mt-3'>
                    Voluptatem dignissimos provident quasi corporis voluptates
                    </h3>
                    <br/>

                    <p className='text text-secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <p className='text text-secondary'>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident.
                    </p>

                    <br/>
                    
                    <Myprogress/>
                </div>
            </div>
        </div>
    </>
    
  ) 
  
}

export default About
