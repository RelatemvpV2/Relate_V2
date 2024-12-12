import React,{ useState , useEffect } from 'react';
import './sidegreybg.css'; // Importing the CSS'
import { slide as BurgerMenu } from 'react-burger-menu';

import SideBar from '../sideBar/SideBar';


const SideGreyBg = () => {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
   
    <>
      {isMobile ? (<BurgerMenu>
        <SideBar />
      </BurgerMenu>)
      :(
        <SideBar />
      )}
    </>
  );
};


export default SideGreyBg;
