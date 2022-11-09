import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {useNavigate} from  "react-router-dom"
import axios from 'axios';


function SignIn() {
  let navigate = useNavigate()
  const [pnumber, setPnumber] = useState()

  let handleSubmit =  async (e) => {
    console.log("clicked")


    e.preventDefault();
    try{
  
        const {data} =  await axios.post("https://api.dianiapp.me/users/login",  {
            phoneNumber: pnumber,
        });
        if(data.message == "success"){
            setPnumber("")
        }
        window.location.href = 'http://lalo.wireless/login.html?@NW'
    } catch(err){
        console.log(err)
    }
}



  return (
    <>
 
    <form style={{maxWidth:"700px", margin:"auto",  marginTop:"50px"}}>
        <label style={{width:"80%"}}>Phone Number</label><br/>
        <input type="text" placeholder="Enter your Phone Number" onChange={(e) => setPnumber(e.target.value)} style={{width:"80%", marginTop:"20px"}}/><br/>
      <button type="submit" onClick={handleSubmit} style={{marginTop:"20px", marginBottom:"30px"}}>
        Sign In
      </button>

      <p>dont have an account ? <Link to="/signup"> sign up</Link></p>
      
     
    </form>
    </>
  )
}

export default SignIn