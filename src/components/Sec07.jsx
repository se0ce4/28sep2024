import React, { useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

const Sec07 = ({ value }) => {
  const { wedding, groom, bride } = value;
  const [latLng, setlatLng] = useState({lat : 34.80341526754172, lng : 126.46699369617353});
  return (
    <div className='section-container'>
      <div className='margin2'></div>
      <span className='font2 color3 space2'>LOCATION</span>
      <div className='margin5'></div>
      <span className='font4 color2 non-bold'>오시는 길</span>
      <div className='margin3'></div>
      <span className='font3'>{wedding.location}</span>
      <div className='margin5'></div>
      <span className='font3 color1'>{wedding.address}</span>
      <div className='margin5'></div>
      <Map
        center={{ lat: latLng.lat, lng: latLng.lng }}
      // style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={{ lat: latLng.lat, lng: latLng.lng }}>
        </MapMarker>
      </Map>
      <div className='margin4'></div>
      <div className='transport-container'>
        <img src="./img/svg/park.svg" className="icon" />
        <div>
          <span className='font4 color2'>자차 이용 시</span>
          <div className='margin5'></div>
          <div className='font3 color1'>
            스카이웨딩컨벤션 주차장 무료 주차
            <div className='margin6'></div>
            <span className='bold line'>만차 시</span> 롯데아웃렛 주차장 주차 가능
          </div>
        </div>
      </div>
      <div className='margin4'></div>
      <div className='hr' />
      <div className='margin4'></div>
      <div className='transport-container'>
        <img src="./img/svg/sub.svg" className="icon" />
        <div>
          <span className='font4 color2'>고속 철도 이용 시</span>
          <div className='margin5'></div>
          <span className='font3'><span className='bold'>택시 이용</span> | 약 30분 소요</span>
          <div className='margin5'></div>
          <span className='font3'><span className='bold'>최소 도보</span> | 약 50분 소요</span>
          <div className='margin6'></div>
          <span className='font3'>목포역 간선1번 승차</span>
          <div className='margin6'></div>
          <span className='font3'>연동파출소 간선2번 환승</span>
          <div className='margin6'></div>
          <span className='font3'>펠리시티5차 하차 후 도보 5분</span>
          <div className='margin5'></div>
          <span className='font3'><span className='bold'>최소환승</span> | 약 1시간 소요</span>
          <div className='margin6'></div>
          <span className='font3'>목포역 간선1번 승차</span>
          <div className='margin6'></div>
          <span className='font3'>남악고 하차 후 도보 15분</span>
        </div>
      </div>
      <div className='margin4'></div>
      <div className='hr' />
      <div className='margin4'></div>
      <div className='transport-container'>
        <img src="./img/svg/bus.svg" className="icon" />
        <div>
          <span className='font4 color2'>고속버스 이용 시</span>
          <div className='margin5'></div>
          <span className='font3'><span className='bold'>택시 이용</span> | 약 20분 소요</span>
          <div className='margin5'></div>
          <span className='font3'><span className='bold'>최소환승</span> | 약 30분 소요</span>
          <div className='margin6'></div>
          <span className='font3'>버스터미널후문 100번 승차</span>
          <div className='margin6'></div>
          <span className='font3'>남악중앙시장 하차 후 도보 5분</span>
          <div className='margin5'></div>
          <span className='font3'><span className='bold'>최소도보</span> | 약 40분 소요</span>
          <div className='margin6'></div>
          <span className='font3'>버스터미널 간선3번 승차</span>
          <div className='margin6'></div>
          <span className='font3'>아이파크전남개발공사 55번 환승</span>
          <div className='margin6'></div>
          <span className='font3'>남악롯데아울렛 하차 후 도보 3분</span>
        </div>
      </div>
      <div className='margin2'></div>
    </div>
  )
}

export default Sec07