import coffeeImg from "../assets/coffee.jpg"
export default function Home(){

    return(
        <section className="hero-section">
        <div className="home">
            <img src={coffeeImg} className="hero-img"
            alt = "coffee"
            style={{maxWidth:"450px"}}/>
        <h1 style={{color:"black"}}>Brew & Go ☕️</h1>
        <p style={{fontStyle:"italic"}}>Luxury in every sip,a better way to start your day! </p>
        <button className="btn btn-sm  m-4" >Try it Now</button>
      </div>
      </section>
    )
}