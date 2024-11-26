function About() {
    return (
      <div className="container-full section second-section" id="about">
        <div className="container about">
          <div className="row d-flex justify-content-between align-items-center">
            {/* Image Column - Visible only on Desktop */}
            <div className="col-12 col-lg-6 d-none d-lg-block">
              <img src="/img/placeholder-square.jpg" alt="" className="about-image" />
            </div>
  
            {/* Text Content Column */}
            <div className="col-12 col-lg-6">
              <h2 className="section-header">
                <span>WE'RE ALL ABOUT</span> BRINGING YOUR BRAND <span>TO LIFE IN THE DIGITAL SPACE WITH A </span>FRESH APPROACH
              </h2>
              <p className="pt-3">
                We're a community of dreamers dedicated to transforming your brand online. 
                With our expertise and creativity, we craft captivating campaigns that leave 
                a lasting impact. From concept to execution, we're obsessed with every detail, 
                ensuring your brand's story resonates authentically with your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  