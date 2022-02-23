import { Link } from "react-router-dom";
import "./MainContent.css"

function MainContent() {

    return (

        <div>
          <h1 className="text-center" style={{fontFamily: '"Agrandir Grand"', color: '#2b73ff', fontSize: '50px', margin: '60px', marginBottom: '30px'}}>MALAIKA AIYAR</h1>
          <div>
            <div className="card-group d-lg-flex justify-content-lg-center" style={{padding: '30px', color: 'rgb(251,60,71)'}}>
              
              
              <div className="card" style={{margin: '30px', marginTop: 0, height: '250px', background: 'transparent'}}>
                <div className="card-body" style={{padding: '0px', borderWidth: '3px', borderStyle: 'solid', boxShadow: '0px 0px 0px 0px', background: '#FB3C47', color: '#FCFF76'}}>
                  <h4 className="card-title" style={{textAlign: 'left', backgroundColor: 'transparent', padding: '30px', fontFamily: 'Agrandir', fontSize: '2.5vmax'}}>Hello! I am a high school student from London interested in computer science and&nbsp; art. Thanks for stopping by!</h4>
                </div>
              </div>

              <Link to="/code" style={{width: '50%', textDecoration: "none"}}>
              <div className="card card-click" style={{margin: '30px', height: '250px', marginTop: 0, background: 'transparent'}}>
                <div className="card-body d-md-flex justify-content-center align-content-center justify-content-md-center align-items-md-center" style={{padding: '0px', borderWidth: '3px', borderStyle: 'solid', boxShadow: '10px 10px 0px 2px', background: '#FCFF76', color: '#2b73ff'}}>
                  <h4 className="d-md-flex justify-content-md-center card-title" style={{textAlign: 'center', backgroundColor: 'transparent', paddingBottom: '0px', fontFamily: 'Agrandir', fontSize: '2.5vmax'}}>Code</h4>
                </div>              
              </div>
              </Link>

            </div>

            <div className="card-group d-lg-flex justify-content-lg-center" style={{padding: '30px', paddingTop: 0}}>
              
            <Link to="/art" style={{width: '50%', textDecoration: "none"}}>
              <div className="card card-click" style={{margin: '30px', height: '250px', marginTop: 0, background: 'transparent'}}>
                <div className="card-body d-md-flex justify-content-center align-content-center justify-content-md-center align-items-md-center" style={{padding: '0px', borderWidth: '3px', borderStyle: 'solid', boxShadow: '10px 10px 0px 2px', color: '#2b73ff', background: '#febffa'}}>
                  <h4 className="d-md-flex justify-content-md-center card-title" style={{textAlign: 'center', backgroundColor: 'transparent', paddingBottom: '0px', fontFamily: 'Agrandir', fontSize: '2.5vmax'}}>Art</h4>
                </div>
              </div>
              </Link>
              
              <Link to="/youtube" style={{width: '50%', textDecoration: "none"}}>
              <div className="card card-click" style={{margin: '30px', height: '250px', marginTop: 0, background: 'transparent'}}>
                <div className="card-body d-md-flex justify-content-center align-content-center justify-content-md-center align-items-md-center" style={{padding: '0px', borderWidth: '3px', borderStyle: 'solid', boxShadow: '10px 10px 0px 2px', background: 'rgb(177,255,189)', color: '#2b73ff'}}>
                  <h4 className="d-md-flex justify-content-md-center card-title" style={{textAlign: 'center', backgroundColor: 'transparent', paddingBottom: '0px', fontFamily: 'Agrandir', fontSize: '2.5vmax'}}>Youtube</h4>
                </div>
              </div>
              </Link>

            </div>

            <div className="card-group d-lg-flex justify-content-lg-center" style={{padding: '30px', paddingTop: 0, color: '#2b73ff'}}>
              
            <Link to="/acad" style={{width: '50%', textDecoration: "none"}}>
              <div className="card card-click" style={{margin: '30px', height: '250px', marginTop: 0, background: 'transparent'}}>
                <div className="card-body d-md-flex justify-content-center align-content-center justify-content-md-center align-items-md-center" style={{padding: '0px', borderWidth: '3px', borderStyle: 'solid', boxShadow: '10px 10px 0px 2px', background: 'rgb(197,207,255)'}}>
                  <h4 className="d-md-flex justify-content-md-center card-title" style={{textAlign: 'center', backgroundColor: 'transparent', paddingBottom: '0px', fontFamily: 'Agrandir', fontSize: '2.5vmax'}}>Academic<br />Stuff</h4>
                </div>
              </div>
              </Link>
              <div className="card" style={{margin: '30px', height: '250px', marginTop: 0, background: 'transparent'}}>
                <div className="card-body d-md-flex justify-content-center align-content-center justify-content-md-center align-items-md-center" style={{padding: '0px', borderWidth: '3px', borderStyle: 'solid', background: '#FB3C47', color: '#FCFF76'}}>
                  <a className="card-link" href="https://github.com/malaikaaiyar" style={{fontSize: '2.5vmax',color: '#fcff76',fontFamily: 'Agrandir'}}>Github</a>
                  <a className="card-link" href="https://www.linkedin.com/in/malaika-aiyar-ab63751b5/" style={{fontSize: '2.5vmax',color: '#fcff76',fontFamily: 'Agrandir'}}>Linkedin</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

}

export {MainContent}