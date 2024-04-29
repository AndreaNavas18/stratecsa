"use client";
import { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    const tawkScript = document.createElement('script');
    tawkScript.async = true;
    tawkScript.src = 'https://embed.tawk.to/662fb125a0c6737bd1323a86/1hsl4nv68';
    tawkScript.charset = 'UTF-8';
    tawkScript.setAttribute('crossorigin', '*');
    document.body.appendChild(tawkScript);

    return () => {
      document.body.removeChild(tawkScript);
    };
  }, []);

  return null;
};

export default TawkTo;
