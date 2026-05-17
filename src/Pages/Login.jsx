import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const [formData, setformData]=useState({
        email:"",
        password:"",
    })
const [message,setMessage]=useState("")

const navigate = useNavigate()
//handling form input changes
function handleOnchage(event){
    setformData({...formData,
        [event.target.name]:event.target.value
    })
}
//checking and validating password if the user exists
function handleSubmit(event){ 
    event.preventDefault()
fetch(`http://localhost:3001/users?email=${formData.email}`)
.then((res)=>res.json())
.then((data)=>{
    if(data.length>0 && data[0].password === formData.password){
    setMessage("Login successful")
    navigate("/")
    }else if(data.length>0){setMessage("Wrong Password");   //user exists but the password is incorrect

    }else{setMessage("User not found")}

}).catch((error)=>setMessage(error.message))
}


    return(
        <div style={{maxWidth:"500px",alignItems:"center"}} className="card  p-5">
        <h2 className="mb-4 text-center" style={{fontStyle:"italic"}}>Admin Login</h2>
        <form onSubmit={handleSubmit} className="form-login">
            <label htmlFor="email">
                <input type="text"
                name = "email"
                 placeholder="Enter email"
                 value={formData.email}
                  onChange={handleOnchage}
                  className="input-login">
                </input>
            </label>
            

            <div className="mt-4">
            <label htmlFor="password">
                <input  type ="password"
                 name="password" 
                 placeholder="Enter Pssword"
                 value={formData.password}
                 onChange={handleOnchage}
                 className="input-login"></input>
            </label>
            </div>

            <button  className="btn mt-4"type="submit">Login</button>
            {message && <p className="text-white">{message}</p>}
        </form>
        </div>
    )
}