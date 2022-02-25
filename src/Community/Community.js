function Community() {
    return (
        <div>
          <nav className="navbar navbar-light navbar-expand-md sticky-top" style={{padding: '8px', background: '#fefaf6'}}>
            <div className="container-fluid"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navcol-2">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link" style={{padding: '15ps'}}>Projects</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link" style={{padding: '15ps'}}>About</Link></li>
                    <li className="nav-item"><Link to="/art" className="nav-link" style={{padding: '15ps'}}>Artwork</Link></li>
                    <li className="nav-item"><Link to="/community" className="nav-link active" style={{padding: '15ps'}}>Community</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row" style={{height: '100%', margin: '0px 10px'}}>
              <div className="col-md-6 align-self-center">
                <h1 style={{fontFamily: 'Fraunces, serif', fontSize: '45px'}}>I want to share my passion for computer science with other girls.</h1>
              </div>
              <div className="col-md-6" style={{padding: '50px', paddingTop: '10px', height: '45vh'}}>
                <div style={{background: 'url("assets/img/me-passion.png") center / contain no-repeat, linear-gradient(#e3dfff, #ffcece)', height: '100%', borderRadius: '40px'}} />
              </div>
            </div>
          </div>
          <div style={{margin: '30px', padding: '30px', background: '#ffe7e7', borderRadius: '30px'}}>
            <h2>Youtube Channel</h2>
            <p>When I was 12, I moved from Fremont in Silicon Valley, where tech is the most popular career path for students my age, to London. I found that many of my classmates did not choose computer science or even STEM related subjects, and opted for arts and humanities instead. When asked, they said taking computer science was boring and meant they needed to sit in front of computers all day. This baffled me. I felt there was a gap in understanding of what career choices are available in technology companies. Software is eating the world, and in the next 10 years, I see the majority of jobs being tech jobs. Software is what will set us up to be valuable contributors to society. So I founded <a href="https://www.youtube.com/channel/UCu0JDwHERzummolFlZlTUvw" target="_blank" rel="noreferrer">Tech Beyond College</a>, a youtube channel whose goal is to demystify what working in tech looks like, and create awareness of the variety of jobs that are available in tech companies by interviewing amazing women that I know. Below are a few of my favourite interviews:<br /></p>
          </div>
          <div className="container">
            <div className="row d-xl-flex flex-fill justify-content-evenly">
              <div className="col-md-4 col-video-summary" style={{background: 'transparent', borderRadius: '15px', padding: '0px'}}>
                <div style={{margin: '20px', padding: '30px', background: '#ffcece', borderRadius: '15px'}}>
                  <h3>Janhavi Vartak</h3>
                  <p>In this video, Janhavi talked about how she got into tech and what she does as a product manager, and we debunk some myths about the tech industry. She gives advice on how to get started in tech, taking advantage of your opportunities, and building connections.&nbsp;</p>
                </div>
              </div>
              <div className="col-md-4 col-video-summary" style={{background: 'transparent', borderRadius: '15px', padding: '0px'}}>
                <div className="vid-summary-low" style={{margin: '20px', padding: '30px', background: '#ffcece', borderRadius: '15px', marginTop: '100px'}}>
                  <h3>Zineb Amrani</h3>
                  <p>Zineb is a Data Scientist, and she discusses what she does on a day to day basis and what it means to be a woman in tech. We also cover what data science is and how it's used in companies to build better products.&nbsp;</p>
                </div>
              </div>
              <div className="col-md-4 col-video-summary" style={{background: 'transparent', borderRadius: '15px', padding: '0px'}}>
                <div className="vid-summary-low" style={{margin: '20px', padding: '30px', background: '#ffcece', borderRadius: '15px', marginTop: '200px'}}>
                  <h3>Catriona Scott</h3>
                  <p>Catriona discusses her education path that led her into tech, what she does in her current software engineering job, and how the project-development cycle works. We also talk about opportunities for high school students and applying for computer science at university.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{margin: '30px', padding: '30px', background: '#e3dfff', borderRadius: '30px'}}>
            <h2>At my school</h2>
            <p>I decided to start a programming club at my school for all the years younger than me to create interest in the subject and share my love for it with others. A team of 2 students in my grade and I sit down for an hour with the younger students to tackle fun and difficult computer science problems. I remember struggling a lot with finding programming resources that were higher than beginner level but below an extremely advanced level, so I hope to be that resource for the girls in my school.</p>
          </div>
        </div>
      );
}

export {Community};