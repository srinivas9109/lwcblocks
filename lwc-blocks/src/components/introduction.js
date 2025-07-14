import React from 'react';

function Introduction() {
  return (
    <div className="intro-container">
      <h1 className="intro-title">Welcome to LWC Blocks</h1>
      <div className="intro-desc">
        LWC Blocks is your hub for reusable Lightning Web Components (LWC) built with CSS, HTML, and JavaScript.
        <br /><br />
        <strong>What you'll find here:</strong>
        <ul className='ul_block'>
          <li>✨ <b>UI Previews</b> for every component, so you know exactly what you'll get.</li>
          <li>📋 <b>Reusable LWC Code</b> and <b>Parent LWC Code</b> ready to copy-paste into your Salesforce projects.</li>
          <li>📦 <b>Download as ZIP</b> for quick integration into your org.</li>
          <li>🧩 <b>Organized Categories</b> for easy navigation: Fields, Layouts, Buttons, Inputs, and more.</li>
          <li>💡 <b>Best Practices</b> in styling and structure for maintainable, scalable LWCs.</li>
        </ul>
        <br />
        Whether you're a Salesforce developer looking to speed up your UI work or just exploring reusable web components, LWC Blocks is designed to save you time and help you build beautiful, functional interfaces faster.
        <br /><br />
        <strong>Why LWC Blocks?</strong>
        <ul className='ul_block'>
          <li>🚀 <b>Accelerate Development:</b> Reduce repetitive work and focus on building features.</li>
          <li>🔗 <b>Easy Integration:</b> Copy code or download ZIPs for instant use in your Salesforce org.</li>
          <li>🛠️ <b>Customizable:</b> All components are built with clean CSS, HTML, and JS for easy customization.</li>
          <li>📚 <b>Learning Resource:</b> See best practices and patterns for LWC development.</li>
        </ul>
        <br />
      </div>
      <div className="intro-meta">
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
}

export default Introduction;
