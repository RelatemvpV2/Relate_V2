import React, { useState, useRef } from 'react';
import { createPopper } from '@popperjs/core';
//imgs
import redCrossImg from '../../../src/assets/images/redcross.jpg'
import threeDotImg from '../../../src/assets/images/threedotsImg.jpg'
import greenTick from '../../../src/assets/images/greenTick.jpg'
//components
import Text from '../text/Text';
import Button from '../button/Button';
//css
import './popupcomponent.css'

const PopUpComponent = ({ dialogRef, text = '', toggleDialog, error = '' }) => {

  return (
    <div
      ref={dialogRef}
      className='popup'
    >
      {text ? <img src={greenTick} alt="success" className='popup-img' />
      :<img src={redCrossImg} alt="fail" className='popup-img' />
      }


      {text
        ? <><Text type='h3'>Well done</Text>
          <Text className='popup-text'>{text} </Text></>
        : <><Text type='h3'>Login Failed</Text>
          <Text className='popup-text'>{error} </Text></>
      }

      {/*  {error && <><Text type='h3'>Login Failed</Text>
        <Text className='popup-text'>{error} </Text></>} */}
      <Button className='popup-0k-btn' onClick={toggleDialog}>ok</Button>
    </div>


  );
};

export default PopUpComponent;
