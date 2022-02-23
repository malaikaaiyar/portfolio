import { Link } from "react-router-dom";

function Art () {
    return (
        <div>
          <Link to="/" style={{width: '50%', textDecoration: "none"}}>
          <h1 className="text-center" style={{fontFamily: '"Agrandir Grand"', color: '#2b73ff', fontSize: '50px', margin: '60px', marginBottom: '30px'}}>MALAIKA AIYAR</h1>
          </Link>
          <div className="d-lg-flex align-items-lg-start" style={{padding: '0px 3vw'}}>
            <h1 className="fw-bold" style={{color: '#2b73ff', fontFamily: 'Agrandir', padding: '30px 5vw', background: '#febffa', boxShadow: '10px 10px 0px 2px', fontSize: '40px', width: '100%', textAlign: 'center', borderWidth: '3px', borderStyle: 'solid'}}>ARTWORK</h1>
          </div>
          <div style={{padding: '3vw'}}>
            <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="card" style={{borderRadius: '0px', background: 'transparent', borderStyle: 'none', boxShadow: '0px 0px'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/kitchen%20orange.jpeg" alt="" style={{borderRadius: '0px', objectFit: 'cover'}} /></picture>
                  <div className="card-body">
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Dishwasher (2021)<br /></h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Acrylic on paper<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="card" style={{borderRadius: '0px', background: 'transparent', border: 'none'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/uwe%20cups%20and%20stuff.jpeg" alt="" style={{borderRadius: '0px', objectFit: 'cover'}} /></picture>
                  <div className="card-body">
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Abstract study 1, 2021</h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Oil on paper<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="card" style={{borderRadius: '0px', background: 'transparent', border: 'none', boxShadow: 'none'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/uwe%20pink%202.png" alt="" style={{borderRadius: '0px', objectFit: 'cover'}} /></picture>
                  <div className="card-body">
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Abstract study 2, 2021<br /></h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Oil on paper<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="card" style={{borderRadius: '0px', background: 'transparent', border: '3px none #2b73ff'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/chair.png" alt="" style={{borderRadius: '0px', objectFit: 'cover'}} /></picture>
                  <div className="card-body">
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Chair life study, 2021<br /></h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Oil on paper<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="card" style={{borderRadius: '0px', background: 'transparent', /*border: '3px solid #2b73ff', */boxShadow: '0px 0px', border: 'none'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/ink%20forest.jpeg" alt="" style={{borderRadius: '0px', objectFit: 'cover'}} /></picture>
                  <div className="card-body">
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>The Forest is Alive, 2021<br /></h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Ink on paper<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="card" style={{borderRadius: '0px', background: 'transparent', border: 'none'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/sleeping%20lady.jpeg" alt="" style={{borderRadius: '0px', objectFit: 'cover'}} /></picture>
                  <div className="card-body">
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Untitled, 2021<br /></h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Acrylic, gesso, and modelling paste on canvas<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="card" style={{borderRadius: '0px', background: 'transparent', border: '3px none #2b73ff', boxShadow: '0px 0px'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/cups.jpeg" alt="" style={{borderRadius: '0px', objectFit: 'cover'}} /></picture>
                  <div className="card-body">
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Tea in the conservatory, 2021<br /></h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Oil on gesso<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="card" style={{borderRadius: '0px', background: 'transparent', border: '3px none #2b73ff', boxShadow: '0px 0px'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/abstract%20red%20and%20pink.jpeg" alt="" style={{borderRadius: '0px', objectFit: 'cover'}} /></picture>
                  <div className="card-body" style={{borderStyle: 'none'}}>
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Untitled Abstract (I), 2022<br /></h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Acrylic on paper<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="card" style={{borderRadius: '0px', background: 'transparent', border: '3px none #2b73ff'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/bathroom.png" alt="" style={{borderRadius: '0px', objectFit: 'cover'}} /></picture>
                  <div className="card-body">
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Untitled, 2021<br /></h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Acrylic on paper<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="card" style={{borderRadius: '0px', background: 'transparent', border: 'none'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/day%20gcse.jpeg" alt="" style={{borderRadius: '0px', objectFit: 'cover'}} /></picture>
                  <div className="card-body">
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Dining Table - Morning, 2020<br /></h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Oil on canvas<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="card" style={{borderRadius: '0px', background: 'transparent', border: 'none'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/night%20gcse.jpeg" alt="" style={{borderRadius: '0px', objectFit: 'cover'}} /></picture>
                  <div className="card-body">
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Dining Table - Dusk, 2020<br /></h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Oil on canvas<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="card" style={{borderRadius: '0px', background: 'transparent', border: 'none'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/red%20bottle.png" alt="" style={{borderRadius: '0px', objectFit: 'cover', border: 'none'}} /></picture>
                  <div className="card-body">
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Red Bottle, 2020<br /></h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Oil on paper<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="card" style={{borderRadius: '0px', background: 'transparent', border: 'none'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/sketchbook%20abstract%201.jpeg" alt="" style={{borderRadius: '0px', objectFit: 'cover'}} /></picture>
                  <div className="card-body">
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Abstract (I)<br /></h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Gouache on paper<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="card" style={{borderRadius: '0px', background: 'transparent', border: 'none'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/sketchbook%20abstract%202.jpeg" alt="" style={{borderRadius: '0px', objectFit: 'cover'}} /></picture>
                  <div className="card-body">
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Abstract (II)<br /></h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Gouache on paper<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4" style={{boxShadow: '0px 0px'}}>
                <div className="card" style={{borderRadius: '0px', background: 'transparent', border: '3px none #2b73ff', boxShadow: '0px 0px'}}>
                  <picture type srcSet><img className="card-img-top p-3" src="assets/img/figs.jpeg" alt="" style={{borderRadius: '0px', objectFit: 'cover'}} /></picture>
                  <div className="card-body">
                    <h5 className="card-title" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Fig slices, 2021<br /></h5>
                    <p className="card-text" style={{fontFamily: 'Agrandir', color: '#2b73ff'}}>Acrylic on paper<br /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export {Art};