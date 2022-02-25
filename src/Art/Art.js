function Art () {
    return (
      <div>
      <nav className="navbar navbar-light navbar-expand-md fixed-top" style={{padding: '8px', background: 'transparent'}}>
        <div className="container-fluid"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="navcol-2">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="/" style={{padding: '15px'}}>Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="/about" style={{padding: '15px'}}>About</a></li>
              <li className="nav-item"><a className="nav-link active" href="/art" style={{padding: '15px'}}>Artwork</a></li>
              <li className="nav-item"><a className="nav-link" href="/community" style={{padding: '15px'}}>Community</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="text-center" style={{textAlign: 'center', padding: '20vh 5vh 15vh', background: 'linear-gradient(148deg, rgb(247,254,209) 0%, #c3fcc9 45%, #c9e2f9 90%)'}}>
        <h1 style={{fontSize: '60px'}}>Art Portfolio</h1>
        <p className="text-center" style={{width: '70%', textAlign: 'center', margin: 'auto'}}>Art is one of my favourite creative outlets. I took Art GCSE for two years, and I also paint and draw in my free time. Here are my favourite pieces from the past couple of years.</p>
      </div>
      <div style={{padding: '30px'}}>
        <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/red%20bottle.png" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/kitchen%20orange.jpeg" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/uwe%20cups%20and%20stuff.jpeg" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/ink%20forest.jpeg" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/night%20gcse.jpeg" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/day%20gcse.jpeg" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/chair.png" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/cups.jpeg" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/uwe%20pink%202.png" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/sketchbook%20abstract%202.jpeg" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/sketchbook%20abstract%201.jpeg" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/figs.jpeg" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/abstract%20red%20and%20pink.jpeg" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/van%20goghs%20bedroom.png" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4">
            <picture type srcSet><img className="card-img-top p-3" src="assets/img/bathroom.png" alt="" style={{borderRadius: '30px', objectFit: 'cover'}} /></picture>
          </div>
        </div>
      </div>
    </div>
      );
}

export {Art};