import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './home.css'
import Feature from './Feature';
import Footer from './findex';
import Upload from './Upload';
import Tryit from './Tryit';
import './feature.css'
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './index1';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Home'>
    <HeroContainer>
      
      
      <HeroContent>
        <HeroItems>
          <HeroH1>A.I.D.R.A.C</HeroH1>
          <HeroP>Automated Identity Document Recognition and Classification</HeroP>
          <Tryit/>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
    
    
    <Feature/>
    <Footer/>
    </div>
  );
};

export default Home;


/*
Sidebar isOpen={isOpen} toggle={toggle}
<!--Navbar toggle={toggle} />
*/