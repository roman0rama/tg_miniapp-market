import React from 'react';
import icon from '../../../assets/icons/share.png'
import { useLocation } from 'react-router-dom';

const ShareButton = () => {
  const location = useLocation()

  const shareContent = () => {
    // Замените ссылку и текст на свои значения
    const shareUrl = location.pathname
    const shareText = 'Посмотрите этот товар!';

    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: shareText,
        url: shareUrl,
      })
        .then(() => console.log('Успешная отправка ссылки'))
        .catch((error) => console.error('Ошибка отправки:', error));
    } else {
      console.log('Браузер не поддерживает эту функцию');
    }
  };

  return (
    <button onClick={shareContent} className='w-[25px] h-[25px]'><img src={icon} alt='' /></button>
  );
};

export default ShareButton;
