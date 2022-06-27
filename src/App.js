import React from 'react'

import Navbar from './Menu/Navbar';
import {Carousel} from 'antd';
import 'antd/dist/antd.css';
import CardActionArea from "./Cards/Mycards";
import About from './Navigation/About';
import { BackTop } from 'antd';
import Footer from './Navigation/Footer';
import Stepper from "./Cards/Stepper";
import RecipeReviewCard from "./Cards/MaterialCard";
import ControlledAccordions from './Cards/BasicRating';
import BasicRating from './Cards/BasicRating';

const contentStyle = {
    positon:"relative",
    height: '700px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  
  };

const takeMeUp = {

  backgroundColor:"black",
  color:"orange",
  borderRadius:"50%",
  

};
function App() {
 
  return (
    <>
      <Navbar/>
      
      
      <BackTop style={takeMeUp}/>
    

    {/* about us info */}

    <About />

    <section style={{backgroundColor:"#e6eded"}} className="my-5">
      <div className='container my-3 py-5'>
        <div className='row
        d-flex 
        flex-md-row
        flex-sm-column
        flex-lg-row
        justify-content-md-between
        
        justify-content-sm-center
        align-items-sm-center
        justify-content-lg-between
        justify-content-center
        py-sm-3
        '>
          <CardActionArea imageSrc={"images/pic1.jpg"} />
          <CardActionArea imageSrc={"images/pic2.jpg"} className="py-3 mt-3"/>
          <CardActionArea imageSrc={"images/pic3.jpg"} className="py-sm-3 my-sm-3"/>
        </div>
      </div>
    </section>


    <div className='container'>
      <div className="row d-flex justify-content-center">
        <Stepper/>
      </div>
    </div>

    <section style={{backgroundColor:"#e3e7ea",padding:"50px 0px"}}>
    <div className='container mt-5'>
      <div className="row d-flex 
        row d-flex 
        flex-md-row
        flex-sm-column
        flex-lg-row
        justify-content-md-between
        
        justify-content-sm-center
        align-items-sm-center
        justify-content-lg-between
        justify-content-center
        ">
        <RecipeReviewCard/>
        <RecipeReviewCard/>

        
        
        <RecipeReviewCard/>
        
      </div>
    </div>


    </section>

    {/* accordian section */}

      <section>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <BasicRating/>
          </div>
        </div>
      </section>

    {/* footer */}
    <br/>
    <br/>
    <Footer/>
    </>
  )
}

export default App