'use client';
import React from 'react';

export default function Clock() {
    
      const d = new Date();
      const [currentTime, setCurrentTime] = React.useState('');
  
      React.useEffect(() => {
        const date = d.getHours() + ':' + d.getMinutes() + ':' + (d.getSeconds() < 10 ? '0'+d.getSeconds() : d.getSeconds());
        const timer = setInterval(() => {
          setCurrentTime(date);
        }, 1000);
  
        return () => clearInterval(timer);
      })
  
      return  <>{currentTime}</>

  
  }
  