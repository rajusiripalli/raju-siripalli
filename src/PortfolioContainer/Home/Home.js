import React from 'react';
import './Home.css'
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';


export default function Home() {
  return (
      <div className='home-container'>
          <Profile />
          <Footer />
      </div>
  )
}
