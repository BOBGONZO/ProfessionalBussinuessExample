'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
      delay: 100,
    });
  }, []);

  return null;
};

export default AOSInit;
