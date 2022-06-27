import React from 'react'
import { Button } from 'antd';
const Helper = ({imagesrc}) => {
  return (
    <>

        <div className='col-lg-4 my-5'>
                <img src={imagesrc} style={{width:370}}/>
                  <div className='card-body ' style={{width:370,backgroundColor:"white"}}>
                        <h5 className='text text-center'>Autem sunt earum</h5>
                        <p className='text text-center'>
                        Et architecto provident deleniti facere repellat nobis iste. 
                        Id facere quia quae dolores dolorem tempore
                        </p>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                            <Button >Find More</Button>
                        </div>
                  </div>
        </div>
    
    </>
  )
}

export default Helper;