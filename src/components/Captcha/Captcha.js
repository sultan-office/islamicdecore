import React, { useState, useEffect, useRef } from 'react';
import { FiRefreshCcw } from 'react-icons/fi'

const Captcha = () => {
  const [captchaText, setCaptchaText] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';

    // Generate random captcha text
    for (let i = 0; i < 6; i++) {
      captcha += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }

    // Draw the captcha text on the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const charWidth = canvas.width / captcha.length;
    captcha.split('').forEach((char, i) => {
      ctx.font = `${getRandomFontSize()}px ${getRandomFontStyle()} sans-serif`;
      ctx.fillStyle = getRandomColor();
      ctx.fillText(char, i * charWidth + 10, 40);
    });

    setCaptchaText(captcha);
  };

  const getRandomColor = () => {
    const colors = ['#333', 'red', '#555', 'green', '#777', 'blue', '#999'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomFontStyle = () => {
    const fontStyles = ['normal', 'italic', 'bold', 'bold italic'];
    return fontStyles[Math.floor(Math.random() * fontStyles.length)];
  };

  const getRandomFontSize = () => {
    const minFontSize = 20;
    const maxFontSize = 40;
    return Math.floor(Math.random() * (maxFontSize - minFontSize + 1) + minFontSize);
  };

  return (
    <div className="flex gap-x-4 items-center">
      <div className="h-14 w-[200px] border">
        <canvas ref={canvasRef} width="170" height="50" className='opacity-30'></canvas>
      </div>
      <button className="text-xl border center-child h-[50px] w-[50px]" type="button" onClick={generateCaptcha}>
        <FiRefreshCcw />
      </button>
    </div>
  );
};

export default Captcha;
