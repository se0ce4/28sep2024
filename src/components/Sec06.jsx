import React, { useEffect, useState } from 'react'

const Sec06 = () => {

  // 모달 상태
  const [open, setOpen] = useState(false);

  const imgList = Array.from({ length: 30 }, (_, index) => index + 1);

  const [showMore, setShowMore] = useState(false);

  // 상태 관리를 위한 useState 훅 사용
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShowMore = () => {
    setShowMore(true);
  };

  // 이미지를 클릭했을 때 모달을 열고 선택한 이미지를 설정하는 함수
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // 모달을 닫는 함수
  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow = 'auto';
    // setTimeout(() => {
    //   setSelectedImage(null);
    // }, 3000)
  };

  return (
    <div className='section-container'>
      <div className='margin2'></div>
      <span className='font2 color3 space2'>GALLERY</span>
      <div className='margin5'></div>
      <span className='font4 color2 non-bold'>갤러리</span>
      <div className='margin5'></div>
      <div className='gallery-container'>
        {imgList.slice(0, 15).map((item, index) => (
          <div key={index} className='gallery-item' onClick={() => openModal(index + 1)}>
            <img className='gallery-img' src={`./img/gallery/${index + 1}.jpg`} />
          </div>
        ))}
        {showMore && imgList.slice(15).map((item, index) => (
          <div key={index} className='gallery-item' onClick={() => openModal(index + 16)}>
            <img className='gallery-img' src={`./img/gallery/${index + 16}.jpg`} />
          </div>
        ))}
        {open && (
          <div className={open ? "modal-container open" : "modal-container close"}
            onClick={closeModal}>
            <div className='modal-content'>
              <img src={`./img/gallery/${selectedImage}.jpg`} width='360px' />
            </div>
          </div>
        )}
      </div>
      {!showMore && <button className='font3 gallery-button' onClick={handleShowMore}>사진 더 보기</button>}
      <div className='margin2'></div>
    </div>
  )
}

export default Sec06