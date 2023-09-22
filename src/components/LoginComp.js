import axios from "axios";
import { useState } from "react";
const LoginComp=()=>{
    const [token,setToken]=useState('');
    let arr=[];
    const userData={
        email:'',
        password:''
    }
    const handleChange=(e)=>{
        e.preventDefault(e);
  userData[e.target.name]=e.target.value;
    }
 
    const  submit= async (e)=>{ 
        e.preventDefault(e);
        arr.push(userData)
        console.log(userData); 
    await axios.post('https://login-app-10sa.onrender.com',userData)
    .then((res)=>setToken(res.data.token).catch((err)=>console.log(err))
    // alert(data.msg)
    )}
    
   
    if(token&&token){
        console.log("token:",token); 
        localStorage.setItem("shruthi",token);
        const dd=localStorage.getItem("shruthi");
        console.log("local storage token:shruthi ",dd);
    }
   
    return(
        <> 
        <div className="body">
        <header className='header'><h1>Login Page</h1></header>
        <div className="parent">
        <div className="reg"> 
        <div className='reg1'>
            <div className='register'>
            <h1 >Please Signup before login</h1>
            </div>
         
        </div>
        <div className='reg2'>
        <div>
        <input type="text" name="email" placeholder="enter email" onChange={handleChange}/>
        </div>
        <div>
        <input type="password" name="password" placeholder="enter password" onChange={handleChange}/>
        </div>
        <div>
        <button className="btn" onClick={submit}>login</button>
        </div>
        <p className='alreadylog'>Don't have an account ? Sign up</p>
        </div>
       
        </div>
        </div>
       
        </div>
        </>
    )
} 
export default LoginComp