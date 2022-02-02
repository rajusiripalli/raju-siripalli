import React from 'react';
import Typical from 'react-typical';
import './Profile.css'


export default function Profile() {
    return (

        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='#'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a target="_blank" href='https://www.instagram.com/raju_ehcker/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a target="_blank" href='https://twitter.com/raju_ehcker'>
                                <i className='fa fa-twitter'></i>
                            </a>
                    </div>

                    </div>

                    <div className='profile-detials-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm  <span className='highlighted-text'>Raju S</span>

                        </span>

                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}

                                <Typical
                                    steps={[
                                            'Ethusiastic Dev 🔴', 1000,
                                            'Full Stack Developer 💻', 1000,
                                            'MERN Stack Dev 😎', 1000,
                                            'Cross Platform Dev 🌐', 1000,
                                            'React/React Native Dev 📱', 1000,
 
                                        ]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.

                            </span>

                        </span>
                    </div>

                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                             Hire Me{" "}           
                        </button>

                        <a href='acdef.pdf' download="abcd abcd.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>

                    </div>
                </div>

                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>

                </div>

            </div>

        </div>
    );
}
