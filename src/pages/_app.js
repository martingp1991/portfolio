import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const lang = router.locale || 'en';
    setLanguage(lang);
  }, [router.locale]);

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <Component {...pageProps} language={language} setLanguage={setLanguage} />
    </>
  );
}

export default MyApp;
