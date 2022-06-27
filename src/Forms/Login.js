import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
export const Form = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    // Form Validation

    const postData  = (e)=>{
        e.preventDefault()
        console.log(`username : ${name} , useremail : ${email} ,userpassword:${password}`)
    }

  return <>
    <div className='container'>
        <h1 className='text text-center text-success'>Login Page</h1>

        <div className="row">
            <div className='col-lg-6 offset-md-3'>
                <form onSubmit={postData}>
                    <div className='form-group'>
                        <input
                          type="text"
                          className='form-control'
                          value={name}
                          onChange={(event)=>{setName(event.target.value)}}
                        ></input>
                    </div>


                    <div className='form-group'>
                        <input
                          type="email"
                          className='form-control'
                          value={email}
                          onChange={(event)=>{setEmail(event.target.value)}}
                        ></input>
                    </div>


                    <div className='form-group'>
                        <input
                          type="password"
                          className='form-control'
                          value={password}
                          onChange={(event)=>{setPassword(event.target.value)}}
                        ></input>
                    </div>

                    <button className='form-control btn btn-md btn-info'>Login</button>
                </form>
            </div>
        </div>
    </div>
  </>
    
  ;
};
