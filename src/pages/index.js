import React from 'react';
import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Experience from '../components/Experience';

export default function Home({ language }) {
  return (
    <div>
      <Head>
        <title>Martín Gómez Palacio | Portfolio</title>
      </Head>
      <Main language={language} />
      <About language={language} />
      <Experience language={language} />
      <Projects language={language}/>
      <Contact language={language} />
    </div>
  )
}
