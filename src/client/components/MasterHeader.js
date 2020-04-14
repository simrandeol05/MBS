import React from 'react';
import Background from './img/portfolio/fullsize/1.jpg';
import googleImage from "./img/portfolio/fullsize/ext.jpg";
import asblogo from "./img/portfolio/fullsize/asb.jpg";
// import LinearGradient from 'react-native-linear-gradient';
//import { LinearGradient } from 'expo'

const styles = {
  header: {
    paddingTop: '10rem',
    background: 'linear-gradient(to bottom, #{fade-out($brown, .2)} 0%,#{fade-out($brown, .2)} 100%)',
    // url(" + ${Background} + ")",
    backgroundImage: `url(${Background})`,
    height: '100vh',
    width: '100%',
    opacity: 1.0,
    // backgroundColor: '#5c4d42',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  text: {
    fontSize: 56,
    position: 'absolute',
    left: '15%',
    top: '40%',
    color: 'white',
    fontWeight: 'bold'
  },
  linearGradient: {
   flex: 1,
   paddingLeft: 15,
   paddingRight: 15,
   borderRadius: 5
 }
};

function MasterHeader() {
  return (
    <header style={styles.header} className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h1 class="text-uppercase text-white font-weight-bold">ASB Solutions Group Inc</h1>
            <div className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 font-weight-light mb-5">Statergy, Build, Deploy, and Support Cloud Applicaiton.</p>
            <p className="text-white-75 font-weight-light mb-5"> We are an AWS and Google partner. </p>
           
            <br/>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
            <div class="row"> 
            <div class="column">
            <img src={googleImage} width="120" height="100" />
            </div>
            <div class="column"></div>
            <div class="column">                                                            
            <img src={asblogo} width="120" height="100" />
            </div>
            </div>
          </div>
        </div>
       
      </div>
    </header>
  );
}

export default MasterHeader;
