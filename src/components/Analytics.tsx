import { useEffect } from 'react';

const GA_ID = import.meta.env.VITE_GA_ID;

function Analytics() {
  useEffect(() => {
    if (!GA_ID || import.meta.env.DEV) return;

    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script1.async = true;

    const script2 = document.createElement('script');
    script2.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
      script1.remove();
      script2.remove();
    };
  }, []);

  return null;
}

export default Analytics;
