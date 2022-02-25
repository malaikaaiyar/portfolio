import { Link } from "react-router-dom";
import "./MainContent.css"

function MainContent() {

    return (

      <div>
      <nav className="navbar navbar-light navbar-expand-md sticky-top" style={{padding: '8px', background: '#fefaf6'}}>
        <div className="container-fluid"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav">
              <li className="nav-item"><Link to="/" className="nav-link active" style={{padding: '15ps'}}>Projects</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link" style={{padding: '15ps'}}>About</Link></li>
              <li className="nav-item"><Link to="/art" className="nav-link" style={{padding: '15ps'}}>Artwork</Link></li>
              <li className="nav-item"><Link to="/community" className="nav-link" style={{padding: '15ps'}}>Community</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container" style={{marginBottom: '30px'}}>
        <div className="row" style={{height: '100%', margin: '0px 10px'}}>
          <div className="col-md-6 align-self-center">
            <h1 style={{fontFamily: 'Fraunces, serif', fontSize: '70px'}}>Hi. I'm Malaika.</h1>
            <p style={{fontSize: '3vh'}}>I build apps, solve hard maths and computing problems, and inspire girls to choose tech careers.</p>
          </div>
          <div className="col-md-6 div-gradient-col" style={{padding: '50px', paddingTop: '10px', height: '90vh'}}>
            <div style={{height: '100%', borderRadius: '40px', background: 'url("assets/img/me-home.png") center / contain no-repeat, linear-gradient(139deg, #fffb99 0%, #90eec7 85%)'}} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col" style={{lineHeight: '30px'}}>
            <div className="row" style={{padding: '30px', borderRadius: '30px', background: 'linear-gradient(-127deg, #feaaa6, #ffedd1 63%), #ffd1dc', margin: '30px'}}>
              <div className="col-md-6 img-project-col" style={{padding: '0px'}}><img alt="sparkle-gif" className="img-project" src="assets/img/ezgif.com-gif-maker%20(3).gif" style={{borderRadius: '20px', width: '100%', margin: '10px'}} /><img alt="sparkle-gif-2" className="img-project" src="assets/img/ezgif.com-gif-maker%20(4).gif" style={{borderRadius: '20px', width: '100%', margin: '10px'}} /></div>
              <div className="col-md-6 align-self-center col-project-text">
                <h1 className="text-end" style={{marginTop: '10px'}}>Sparkle</h1>
                <p className="project-text-p" style={{padding: '20px', paddingRight: '0px', paddingLeft: '50px', textAlign: 'justify'}}>I worked at a company called Sparkle, whose aim is to make social events more fun and easy to access. I mainly worked on frontend features, refinement of existing features, and QA testing. Our most major event was hosting a completely virtual Burning Man. Burning Man is all about being a part of a community and sharing creative content, and we had to think about how we wanted to present the event in a way that fosters connection and building community. We created a completely new Playa map that you could navigate around to emulate the feeling of being on a real desert. Users could visit venues like flying art galleries, music concerts, meditation zones, interactive exhibitions, and even watch the literal man burning. It was a huge success: we managed to implement an entirely new format in just months, and the platform managed to handle thousands of users moving around and on video call throughout the week.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row" style={{padding: '30px', borderRadius: '30px', background: 'linear-gradient(130deg, #F7E7BF 12%, #F9CCF5), #fffdc3', margin: '30px'}}>
              <div className="col-md-6" style={{padding: '0px'}}><img alt="art app gif" src="assets/img/ezgif.com-gif-maker.gif" style={{borderRadius: '20px', width: '100%', margin: '10px'}} /></div>
              <div className="col-md-6 align-self-center">
                <h1 className="text-end" style={{marginTop: '10px'}}>Art History Visualiser</h1>
                <p className="project-text-p" style={{padding: '20px', paddingRight: '0px', paddingLeft: '50px', textAlign: 'justify', lineHeight: '30px'}}>When visiting art galleries, it is often difficult to understand the context of when a piece was made, and the similarities and differences it has to pieces from the same time. Using data from the Tate, I created a web app with a timeline slider that displays art pieces by year, as well as the related art movements and other metadata.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      );

}

export {MainContent}