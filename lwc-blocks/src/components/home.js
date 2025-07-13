import React from 'react';
import { useNavigate } from 'react-router-dom';
import { STATIC_TEXT } from '../utils/staticText';
import brand from '../assets/brandLogo.png';

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">
            <div className="home-content">
                <img src={brand} alt="Logo" />
                <h1>{STATIC_TEXT.homeHeading}</h1>
                <h3>{STATIC_TEXT.slogan}</h3>
                <button className="btn" onClick={() => navigate('/components')}>Discover Reusable LWC's</button>
            </div>
            <div className="home-content">
                <h5>{STATIC_TEXT.para1}</h5>
                <h5>{STATIC_TEXT.para2}</h5>
                <h5>{STATIC_TEXT.para3}</h5>
                <div className='home-utilities'>
                    <h6>📋 {STATIC_TEXT.home_u1}</h6>
                    <h6>🎨 {STATIC_TEXT.home_u2}</h6>
                    <h6>⏰ {STATIC_TEXT.home_u3}</h6>
                </div>
                <h5>{STATIC_TEXT.para5}</h5>
            </div>
        </div>
    );
}

export default Home;
