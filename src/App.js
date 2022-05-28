import React from 'react';

import { Blog, Features, Footer, Header, Posibility, Whatgpt } from './containers';
import { Article,Brand,CTA,Navbar } from './components';
import './App.css';






const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Whatgpt />
        <Features />
        <Posibility/>
        <CTA/>
        <Blog/>
        <Footer/>

    </div>
  )
}

export default App