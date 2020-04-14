import React from 'react';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">ASB Solutions Group Inc.</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="http://materialkitreactmast-20190901145506-hostingbucket-prod.s3-website-us-east-1.amazonaws.com/">consultants log in</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="https://asbsolutionsgroup.zohorecruit.com/recruit/Portal.na?digest=tgFPABuSIxgUZU61YsCtg3GAUnkE7bVo.a85bxdBEmQ-">Open positions</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Nav;
