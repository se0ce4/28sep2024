import React, { useEffect, useState } from 'react'

const Sec05 = ({value}) => {

  const {wedding, groom, bride} = value;

  // 카운트다운 변수
  const [countdown, setCountdown] = useState({
    day: 0,
    hour: 0,
    min: 0,
    sec: 0
  });

  const targetDate = new Date(wedding.year, wedding.month-1, wedding.date, 
    wedding.hour, wedding.min, 0, 0);

  useEffect(() => {

    const interval = setInterval(() => {
      const todayDate = new Date();
      const diff = targetDate - todayDate;

      setCountdown({
        day: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hour: Math.floor((diff / (1000 * 60 * 60)) % 24),
        min: Math.floor((diff / (1000 * 60)) % 60),
        sec: Math.floor(diff / 1000 % 60)
      });
    }, 1000);

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(interval);
  }, []);


  // Helper function to get number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Helper function to get the day of the week of the first day of a month
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(wedding.year, wedding.month - 1);
  const firstDay = getFirstDayOfMonth(wedding.year, wedding.month - 1);

  const calendarRows = [];
  let days = [];

  // Fill in the blanks for the first week
  for (let i = 0; i < firstDay; i++) {
    days.push(<td key={`empty-${i}`} className='font3 non-bold'></td>);
  }

  // Fill in the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <td key={day} className={`font3 non-bold ${day === wedding.date ? 'date' : ''}`}>
        <div className='ratio-item'>
          <span>{String(day)}</span>
        </div>
      </td>
    );

    if ((day + firstDay) % 7 === 0 || day === daysInMonth) {
      calendarRows.push(<tr key={day}>{days}</tr>);
      days = [];
    }
  }

  
  return (
    <div className='section-container'>
      <div className="calendar-background">
        <div className='calendar-container'>
          <div className='margin2'></div>
          <span className='font3 bold space1'>{wedding.year}.{wedding.month}.{wedding.date}.</span>
          <div className='margin5'></div>
          <span className='font3 non-bold space2'>{wedding.day.kor}요일 {wedding.hour>=12 ? '오후' : '오전'}{" "}
        {wedding.hour>12 ? wedding.hour-12 : wedding.hour}시 {wedding.min!=0 && wedding.min+'분'}</span>
          <div className='margin3'></div>
          <div className='hr' />
          <div className='margin3'></div>
          <table>
            <thead>
              <tr>
                <td className='font3 non-bold'>일</td>
                <td className='font3 non-bold'>월</td>
                <td className='font3 non-bold'>화</td>
                <td className='font3 non-bold'>수</td>
                <td className='font3 non-bold'>목</td>
                <td className='font3 non-bold'>금</td>
                <td className='font3 non-bold'>토</td>
              </tr>
            </thead>
            <tbody>{calendarRows}</tbody>
          </table>
          <div className='margin3'></div>
          <div className='hr' />
          <div className='margin3'></div>
          <div className='count-container'>
            <div className='count-item'>
              <span className='font3'>{countdown.day}</span>
              <span>DAY</span>
            </div>
            <span className='font4 bold'>&nbsp;:&nbsp;</span>
            <div className='count-item'>
              <span>{countdown.hour}</span>
              <span>HOUR</span>
            </div>
            <span className='font4 bold'>&nbsp;:&nbsp;</span>
            <div className='count-item'>
              <span>{countdown.min}</span>
              <span>MIN</span>
            </div>
            <span className='font4 bold'>&nbsp;:&nbsp;</span>
            <div className='count-item'>
              <span>{countdown.sec}</span>
              <span>SEC</span>
            </div>
          </div>
          <div className='margin5'></div>
          <div className='font3'>
            {groom.name.slice(1)} <span className='color4'>♥</span> {bride.name.slice(1)} 결혼식이 <span className='color4 bold'>{countdown.day}일</span> 남았습니다.
          </div>
          <div className='margin2'></div>
        </div>
      </div>
    </div>
  )
}

export default Sec05