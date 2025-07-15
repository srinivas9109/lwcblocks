import React from 'react';

const About = () => {
  return (
    <div className="intro-container about-container">
      <h1 className="intro-title">About LWC Blocks</h1>
      <div className="intro-desc">
        LWC Blocks is a growing library of reusable, production-ready Lightning Web Components (LWC) designed to simplify and accelerate your Salesforce development journey. Whether you’re building apps for internal users, partners, or customers, our pre-designed components help you create beautiful, functional UIs faster and with less effort.
        <br /><br />
        <strong>🚀 Our Mission:</strong>
        <p className='left'>Our mission is to make Lightning Web Component development:</p>
        <ul className='ul_block'>
          <li>✨ <b>Faster</b></li>
          <li>✨ <b>Cleaner</b></li>
          <li>✨ <b>More accessible to everyone — from beginners to experts</b></li>

        </ul>
        <p className='left'>We aim to bridge the gap between design and development by offering ready-to-integrate blocks that follow Salesforce best practices, with code that’s simple to understand, easy to extend, and visually appealing.</p>
        <hr />
        <br />
        <strong>🔍 What You’ll Find on LWC Blocks:</strong>
        <p className='left'>LWC Blocks offers a wide range of components built using pure HTML, CSS and JS.Every block is built with real-world use cases in mind.</p>
        <p className='left'><strong>All blocks are:</strong></p>
        <ul className='ul_block'>
          <li> <b>🔧 Plug-and-play</b></li>
          <li><b>🧩 Customizable</b></li>
          <li><b>💻 Developer-friendly</b></li>
          <li><b>📱 Responsive by default</b></li>
        </ul>
        <hr />
        <br />
        <strong>👨‍💻 Who’s Behind This?</strong>
        <p className='left'>LWC Blocks is built and maintained by a Salesforce developer passionate about simplifying front-end development within the Salesforce ecosystem.</p>
        <p className='left'>This project started as a personal developer toolkit, but it’s now shared openly to help the Salesforce dev community grow.</p>
      </div>
      <div className="intro-meta" style={{ marginBottom: '2rem' }}>
        <div className="intro-author">
          <span className="intro-label">Site started:</span> <span>July 13 2025</span>
        </div>
        <div className="intro-author">
          <span className="intro-label">UI Developer:</span> <span>Srinivas</span>
        </div>
        <div className="intro-author">
          <span className="intro-label">LinkedIn:</span>
          <a
            className="intro-link"
            href="https://www.linkedin.com/in/tharugusrinivasulu"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here to connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
