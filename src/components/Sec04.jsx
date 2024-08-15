import React, { useState } from 'react'

const Sec04 = ({value}) => {
  const {wedding, groom, bride} = value;

  // 모달 상태
  const [isContectModalOpened, setIsContectModalOpened] = useState(false);

  return (
    <div className='section-container'>
      <div className='margin2'></div>
      <div className='middle-container'></div>
      {/* <img src="./img/middle.jpg" width='100%' /> */}
      <div className='margin3'></div>
      <p>
        <span className='font4'>{groom.dadName} · {groom.momName}&nbsp;&nbsp;</span>
        <span className='font3 color1'>의 아들</span>
        <span className='font4'>&nbsp;&nbsp;&nbsp;{groom.name}</span>
      </p>
      <div className='margin5'></div>
      <p>
        <span className='font4'>{bride.dadName} · {bride.momName}&nbsp;&nbsp;</span>
        <span className='font3 color1'>의 딸</span>
        <span className='font4'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{bride.name}</span>
      </p>
      <div className='margin4'></div>
      <div className='btn-container'>
        <button className='phone-btn' onClick={() => window.location.href = `tel:${groom.phone}`}>
          <img src="./img/svg/phone.svg" alt="" width='12.5%' />
          &nbsp;&nbsp;&nbsp;
          <span className='font3 color1'>신랑측</span>
        </button>
        <button className='phone-btn' onClick={() => window.location.href = `tel:${bride.phone}`}>
          <img src="./img/svg/phone.svg" alt="" width='12.5%' />
          &nbsp;&nbsp;&nbsp;
          <span className='font3 color1'>신부측</span>
        </button>
      </div>
      <div className='margin2'></div>
    </div>
  )
}

export default Sec04