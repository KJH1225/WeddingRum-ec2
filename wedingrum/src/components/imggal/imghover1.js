import React from 'react';
import './imghover1.scss';

const ImageGallery = () => {
  return (
    <div className="image-container1">
      <a href='/' className='image-item  item2'>
        <div className='item-txt2'>
          <p className='small'>감동을 향해 동행하는 든든한 첫걸음</p>
          <p className='big'>Reservation Team</p>
          <p className='low'>
            생애 최고의 날을 기다리는 설렘마저<br/>
            영원한 감동으로 기억 될 수 있도록 따뜻한 진심과<br/>
            빛나는 센스로 함께 하겠습니다.
          </p>
        </div>
      </a>
      <a href='/' className='image-item  item3'>
        <div className='item-txt2'>
        <p className='small'>집중 케어로 완성되는 완벽한 웨딩 데이</p>
          <p className='big'>Wedding Team</p>
          <p className='low'>
            예식 당일의 기쁨을 충분히 즐길 수 있도록<br/>
            신랑신부님은 물론 귀빈들의 동선에 맞춘<br/>
            집중 케어 서비스를 진행합니다.
          </p>
        </div>
      </a>
      <a href='/' className='image-item  item4'>
        <div className='item-txt2'>
        <p className='small'>예식의 완성도를 높여줄 미식의 향연</p>
          <p className='big'>Chefs</p>
          <p className='low'>
            국내 웨딩 & 연회 뷔페의 기준을 높인<br/>
            유명 파인 다이닝 출신의 스타 셰프들이 함께합니다.
          </p>
        </div>
      </a>
      <a href='/' className='image-item  item5'>
        <div className='item-txt2'>
        <p className='small'>감각적인 터치로 만개할 플라워 서비스</p>
          <p className='big'>Flower Team</p>
          <p className='low'>
            예식의 계절의 정취와 생기를 더해줄 세심한 손길.<br/>
            트렌디하고 감각적인 웨딩 전문 플로리스트들이<br/>
            아펠가모만을 위해 모였습니다.
          </p>
        </div>
      </a>
    </div>
  );
};

export default ImageGallery;