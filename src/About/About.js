import { Link } from "react-router-dom";

function About () {
    return (
        <div>
          <nav className="navbar navbar-light navbar-expand-md sticky-top" style={{padding: '8px', background: '#fefaf6'}}>
            <div className="container-fluid"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navcol-2">
                <ul className="navbar-nav">
                <li className="nav-item"><Link to="/" className="nav-link" style={{padding: '15ps'}}>Projects</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link active" style={{padding: '15ps'}}>About</Link></li>
              <li className="nav-item"><Link to="/art" className="nav-link" style={{padding: '15ps'}}>Artwork</Link></li>
              <li className="nav-item"><Link to="/community" className="nav-link" style={{padding: '15ps'}}>Community</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container" style={{marginBottom: '30px'}}>
            <div className="row" style={{height: '100%', margin: '0px 10px'}}>
              <div className="col-md-6" id="col-mal-image" style={{padding: '70px', paddingRight: '0px', width: '60vh'}}><img alt="portrait" className="mal-image" src="assets/img/me%20n%20yayoi.jpeg" style={{borderRadius: '30px', width: '100%'}} /></div>
              <div className="col-md-6 align-self-center about-col" style={{marginLeft: '30px', marginRight: '30px'}}>
                <h1 style={{fontFamily: 'Fraunces, serif', fontSize: '50px'}}>About me</h1>
                <p id="about-me-text">I’ve been learning programming for the last 7-8 years, and I am now a proficient web developer with Javascript and its frameworks, and I can write all sorts of computational algorithms in Python. In the future, I want to learn about human-computer interaction and virtual realities and work on projects that use those skills to make more interactive and engaging online experiences.<br /><br />I love working on hard problems, especially in teams. I led our team in the National Cipher Challenge 2021, and we won second place by cracking cipher texts under time pressure using programming. I’m also on the robotics team, and we’ve won many regional competitions in the past and competed at nationals.<br /><br />The mathematical aspect of computer science is fascinating to me as well. Currently, I am taking Stanford’s pre-collegiate online course on number theory. In the past, I have achieved distinction in the Mathematical Olympiad for Girls and gold in the UKMT maths challenge.<br /><br />When I’m not coding or doing math, you can find me painting, crocheting, or exploring London.<br /></p>
              </div>
            </div>
          </div>
        </div>
      );
}

export {About}