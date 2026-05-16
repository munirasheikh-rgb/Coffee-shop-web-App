import { useNavigate } from "react-router-dom"

export default function(){
    const navigate= useNavigate()
    function handleClick(){
        alert("Message sent")
        navigate("/")

    }

    return(
        <div className="contacts">
        <h3 style={{fontWeight:"bold",color:"black",marginTop:"20px"}}>Contact us</h3>
        <p><em>We'd love to hear from you☕️</em></p>
        <div>
            <form className="card-frm">
            <input type="text" placeholder="Your name" className="frm-input" required/>
            <div>
            <input type="email" placeholder="Your email" className="frm-input" required/>
            <div>
            <textarea placeholder="Your message" className="frm-input" style={{height:"200px",width:"300px"}} required></textarea>
            </div>
            <button className="btn" onClick={handleClick}>Send</button>
        
        </div>
        </form>
        </div>
      <p className="mt-5">
        Visit Us: 
        </p>
        <p>
       📍 Nairobi ,kenya 
       </p>
       <p>
       📧 coffee.you@gmail.com
       </p>
       📞 +254 713 000 000 
        </div>
    )
}