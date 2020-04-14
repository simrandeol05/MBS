import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone, faEnvelope, faCloud, faLaptopCode, faGlobe, faHeart
} from '@fortawesome/free-solid-svg-icons';
import image1 from './img/portfolio/thumbnails/1.jpg';
import image2 from './img/portfolio/thumbnails/2.jpg';
import image3 from './img/portfolio/thumbnails/3.jpg';
import image4 from './img/portfolio/thumbnails/4.jpg';
import image5 from './img/portfolio/thumbnails/5.jpg';
import image6 from './img/portfolio/thumbnails/6.jpg';
import imageFull1 from './img/portfolio/fullsize/1.jpg';



function MainContent() {
  return (

    <div>
      <section className="page-section bg-primary" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">We&#39;ve got what you need!</h2>
              <div className="divider light my-4"> </div>
              <p className="text-white-50 mb-4">We got best consultants and experience to make your organization cloud enabled.</p>
              <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="services">
        <div className="container">
          <h2 className="text-center mt-0">Service provided</h2>
          <div className="divider my-4" />
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <FontAwesomeIcon icon={faCloud} size="4x" />
                <h3 className="h4 mb-2">Cloud Migration</h3>
                <p className="text-muted mb-0">Migrate your applications to AWS,Google or Azure cloud</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <FontAwesomeIcon icon={faLaptopCode} size="4x" />
                <h3 className="h4 mb-2">Rebuild application in cloud</h3>
                <p className="text-muted mb-0">Cloud native development. </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <FontAwesomeIcon icon={faGlobe} size="4x" />
                {/*  <i className ="fas fa-4x fa-globe text-primary mb-4"></i> */}
                <h3 className="h4 mb-2">Cloud Support</h3>
                <p className="text-muted mb-0">Support for all cloud platforms</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <FontAwesomeIcon icon={faHeart} size="4x" />
                {/*    <i className ="fas fa-4x fa-heart text-primary mb-4"></i> */}
                <h3 className="h4 mb-2">Cloud statergy</h3>
                <p className="text-muted mb-0">Build a statergy to migrate to cloud</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href={imageFull1}>
                <img className="img-fluid" src={image1} alt="" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                  Category
                  </div>
                  <div className="project-name">
                  Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg">
                <img className="img-fluid" src={image2} alt="" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                  Category
                  </div>
                  <div className="project-name">
                  Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg">
                <img className="img-fluid" src={image3} alt="" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                  Category
                  </div>
                  <div className="project-name">
                  Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="img/portfolio/fullsize/4.jpg">
                <img className="img-fluid" src={image4} alt="" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                  Category
                  </div>
                  <div className="project-name">
                  Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg">
                <img className="img-fluid" src={image5} alt="" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                  Category
                  </div>
                  <div className="project-name">
                  Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg">
                <img className="img-fluid" src={image6} alt="" />
                <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">
                  Category
                  </div>
                  <div className="project-name">
                  Project Name
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Let&#39;s Get In Touch!</h2>
              <div className="divider my-4" />
              <p className="text-muted mb-5">
Ready to start your next project with us? Give us a call or send us an email
                     and we will get back to you as soon as possible!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center">
              <FontAwesomeIcon icon={faPhone} size="3x" />

              <div>+1 (312)-292-7155</div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <FontAwesomeIcon icon={faEnvelope} size="3x" />

              <a className="d-block" href="mailto:hr@asbsolutions.awsapps.com">hr@asbsolutions.awsapps.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="open position">
        <div className="container" />
      </section>


    </div>
  );
}

export default MainContent;
