import React, { useEffect, useRef } from 'react';
// import '../star.css'

const Sec01 = ({ value }) => {
  console.log(value);

  const {wedding, groom, bride} = value;
  const canvasRef = useRef(null);
  const petalArray = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const TOTAL = 20;

    const petalImg = new Image();
    petalImg.src = './img/icon/icon-petal.png';

    const init = async () => {
      await new Promise((resolve) => {
        petalImg.onload = resolve;
      });

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new Petal(canvas, ctx, petalImg));
      }

      render();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petalArray.forEach((petal) => {
        petal.animate();
      });

      window.requestAnimationFrame(render);
    };

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeHandler);

    init();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  class Petal {
    constructor(canvas, ctx, petalImg) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height * 2 - canvas.height;
      this.w = 30 + Math.random() * 15;
      this.h = 20 + Math.random() * 10;
      this.opacity = this.w / 45;
      this.xSpeed = 2 + Math.random();
      this.ySpeed = 0.5 + Math.random() * 0.5;
      this.flip = Math.random();
      this.flipSpeed = Math.random() * 0.03;

      this.canvas = canvas;
      this.ctx = ctx;
      this.petalImg = petalImg;
    }

    draw() {
      if (this.y > this.canvas.height || this.x > this.canvas.width) {
        this.x = -this.petalImg.width;
        this.y = Math.random() * this.canvas.height * 2 - this.canvas.height;
        this.xSpeed = 2 + Math.random();
        this.ySpeed = 0.5 + Math.random() * 0.5;
        this.flip = Math.random();
      }

      this.ctx.globalAlpha = 0.75; // 투명도 설정 (0.5로 변경)

      this.ctx.drawImage(
        this.petalImg,
        this.x,
        this.y,
        this.w * 0.5 * (0.66 + Math.abs(Math.cos(this.flip)) / 3), // 이미지 크기 조절
        this.h * 0.5 * (0.8 + Math.abs(Math.sin(this.flip)) / 2), // 이미지 크기 조절
      );
    }

    animate() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      this.draw();
      this.flip += this.flipSpeed;
    }
  }

  return (
    <div className='section-container'>
      <div className='margin1'></div>
      <div className='font5'>
        {String(wedding.year).slice(2)}&nbsp;
        <span className='non-bold color1'>|</span>
        &nbsp;{wedding.month}&nbsp;
        <span className='non-bold color1'>|</span>
        &nbsp;{wedding.date}
      </div>
      <div className='margin4'></div>
      <span className='font3'>{wedding.day.eng}</span>
      <div className='margin3'></div>
      <div className='canvas-container'>
        <canvas ref={canvasRef} />
      </div>
      <div className='margin3'></div>
      <div className='font4'>
        {groom.name}&nbsp;
        <span className='non-bold color1'>|</span>
        &nbsp;{bride.name}
      </div>
      <div className='margin4'></div>
      <span className='font3'>{wedding.year}년 {wedding.month}월 {wedding.date}일{" "}
      {wedding.day.kor}요일 {wedding.hour>=12 ? '오후' : '오전'}{" "}
      {wedding.hour>12 ? wedding.hour-12 : wedding.hour}시 {wedding.min!=0 && wedding.min+'분'}</span>
      <div className='margin5'></div>
      <span className='font3'>{wedding.location}</span>
      <div className='margin2'></div>
    </div>
  )
}

export default Sec01