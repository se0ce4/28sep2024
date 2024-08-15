import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ver1.css'
import Sec01 from './components/Sec01';
import Sec02 from './components/Sec02';
import Sec03 from './components/Sec03';
import Sec04 from './components/Sec04';
import Sec05 from './components/Sec05';
import Sec06 from './components/Sec06';
import Sec07 from './components/Sec07';
import Sec08 from './components/Sec08';

// 너 지금 카카오맵 html에서 주석 해놨어 지도 안나오면 그거부터 봐라

const Main = () => {

    const [wedding, setWedding] = useState({
        year: 2024,
        month: 9,
        date: 28,
        day: { kor: '토', eng: 'SATURDAY' },
        hour: 12,
        min: 0,
        location: '스카이웨딩컨벤션 3층 그랜드엘렌홀',
        address: '전라남도 무안군 삼향읍 남악로 162번길 110 '
    });
    const [groom, setGroom] = useState({
        name: '황인준',
        dadName: '황선욱',
        momName: '백순진',
        phone: '010-8582-3931',
        account: '국민은행 933502-00-596067',
        dadAccount: '광주은행 605-121-428687',
        kakaoPay: 'https://qr.kakaopay.com/FaZ0r3IBS',
        dadKaKaoPay: 'https://link.kakaopay.com/_/W72DIa1'
    });
    const [bride, setBride] = useState({
        name: '양세영',
        dadName: '양승진',
        momName: '박정국',
        phone: '010-4415-5704',
        account: '농협 302-0151-9811-01',
        dadAccount: '농협 617-06-003412',
        kakaoPay: 'https://link.kakaopay.com/_/W72DIa1',
        dadKaKaoPay: 'https://link.kakaopay.com/_/W72DIa1'
    });

    useEffect(() => {
        const observer = new IntersectionObserver(e => {
            e.forEach((e) => {
                e.isIntersecting
                    ? (e.target.style.opacity = 1)
                    : (e.target.style.opacity = 0)
            })
        });

        const section = document.querySelectorAll('.section-container');
        section.forEach((sec) => {
            observer.observe(sec)
        })
    }, [])

    return (
        <div>
            <div className="wrap-container">
                <div className="main-container">
                    {/* 
                    01 - 사진A, 일정 안내
                    02 - 튤립 아이콘, 여는 말
                    03 - invitation, 초대문구
                    04 - 사진B, 혼주 성함, 연락처 연동
                    05 - 캘린더, 카운트다운
                    06 - 갤러리
                    07 - 오시는 길, 지도, 교통 안내
                    08 - 하트 아이콘, 마음 전하실 곳, 계좌 아코디언, 맺는 말
                    */}
                        <Sec01 value={{ wedding, groom, bride }} />
                        <Sec02 />
                        <Sec03 />
                        <Sec04 value={{ wedding, groom, bride }} />
                        <Sec05 value={{ wedding, groom, bride }} />
                        <Sec06 />
                        <Sec07 value={{ wedding, groom, bride }} />
                        <Sec08 value={{ wedding, groom, bride }} />
                </div>
            </div>
        </div>
    )
}

export default Main