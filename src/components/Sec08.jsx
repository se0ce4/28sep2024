import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

const Sec08 = ({ value }) => {

  const { wedding, groom, bride } = value;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
  };

  return (
    <div className='section-container'>
      <div className='margin2'></div>
      <img src="./img/svg/heart.svg" className='icon'/>
      {/* <img src="./img/icon/icon-heart.png" alt="" width='40vw' /> */}
      <div className='margin3'></div>
      <span className='font4 color2 non-bold'>마음 전하실 곳</span>
      <div className='margin3'></div>

      <div className='account-container'>
        <div className='account-button'>
          <input type="checkbox" name="" id="checkbox1" />
          <label htmlFor="checkbox1" className='font3 account-title'>신랑측 계좌번호</label>
          <div className='account-content'>
            <div className='margin5'></div>
            <div className='copy-container'>
              <span className='font2'>{groom.dadAccount}</span>
              <button onClick={()=>handleCopy(groom.dadAccount)}>
                <span className='font2'>복사</span>
              </button>
            </div>
            <div className='margin6'></div>
            <div className='margin6'></div>
            <div className='copy-container'>
              <span className='font2'>{groom.dadName}</span>
            </div>
            <div className='margin5'></div>
            <div className='hr2' />
            <div className='margin5'></div>
            <div className='copy-container'>
              <span className='font2'>{groom.account}</span>
              <button onClick={()=>handleCopy(groom.account)}>
                <span className='font2'>복사</span>
              </button>
            </div>
            <div className='margin6'></div>
            <div className='margin6'></div>
            <div className='copy-container'>
              <span className='font2'>{groom.name}</span>
              {/* <button>
                <Link to='https://link.kakaopay.com/_/W72DIa1'>
                  <img src="./img/icon/icon-kakaopay.png" alt="" />
                </Link>
              </button> */}
            </div>
            <div className='margin5'></div>
          </div>
        </div>
        <div className="margin6"></div>
        <div className='account-button'>
          <input type="checkbox" name="" id="checkbox2" />
          <label htmlFor="checkbox2" className='font3 account-title'>신부측 계좌번호</label>
          <div className='account-content'>
            <div className='margin5'></div>
            <div className='copy-container'>
              <span className='font2'>{bride.dadAccount}</span>
              <button onClick={()=>handleCopy(bride.dadAccount)}>
                <span className='font2'>복사</span>
              </button>
            </div>
            <div className='margin6'></div>
            <div className='margin6'></div>
            <div className='copy-container'>
              <span className='font2'>{bride.dadName}</span>
            </div>
            <div className='margin5'></div>
            <div className='hr2' />
            <div className='margin5'></div>
            <div className='copy-container'>
              <span className='font2'>{bride.account}</span>
              <button onClick={()=>handleCopy(bride.account)}>
                <span className='font2'>복사</span>
              </button>
            </div>
            <div className='margin6'></div>
            <div className='margin6'></div>
            <div className='copy-container'>
              <span className='font2'>{bride.name}</span>
              <button>
                <Link to='https://link.kakaopay.com/_/W72DIa1'>
                  <img src="./img/icon/icon-kakaopay.png" alt="" />
                </Link>
              </button>
            </div>
            <div className='margin5'></div>
          </div>
        </div>
      </div>
      <div className="margin1"></div>
      <div className='ending-container'>
        <span className='font3 bold'>
          응원하고 격려해주신 모든 분들께 감사드리며
          <br />
          행복하게 잘 살겠습니다.
        </span>
      </div>
      <div className='margin3'></div>
      <span className='font2 color1'>copyright &copy; 2024 . seyoungyang . all right reserves</span>
      <div className='margin3'></div>
    </div>)
}

export default Sec08