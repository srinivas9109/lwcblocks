import React  from 'react';
import CodeRenderer from './codeRenderer';

const Usage = () => {
    const html = `<div c;ass='ocks-container">
  <lwc-blocks-toast-message type="success" message="This is a success message"></lwc-blocks-toast-message>
  <lwc-blocks-toast-message type="warning" message="This is a warning message"></lwc-blocks-toast-message>
  <lwc-blocks-toast-message type="error" message="This is an error message"></lwc-blocks-toast-message>
</div>`;

    return (
        <div className="intro-container">
            <h1 className="intro-title">LWC Blocks - Usage</h1>
            <p className="intro-desc">
                From the Components tab, select the type of component you want.
                Click on any component to see its preview, implementation details,
                and reusable Lightning Web Component code.
                <br /><br />
                <strong>Usage Instructions:</strong>
                <ol>
                    <li>Copy the required files (HTML, CSS, JS, meta.xml)</li>
                    <li>Create a new LWC component in your Salesforce org</li>
                    <li>Paste the respective code into each file</li>
                    <li>Reference the component in your parent component's HTML</li>
                </ol>

                <br />
                Whether you're a Salesforce developer looking to speed up your UI work or just exploring reusable web components, LWC Blocks is designed to save you time and help you build beautiful, functional interfaces faster.
                <br /><br />
                <strong>Why LWC Blocks?</strong>
                <ul style={{ textAlign: 'left', margin: '1rem auto', color: '#334155', lineHeight: '1.7' }}>
                    <li>🚀 <b>Accelerate Development:</b> Reduce repetitive work and focus on building features.</li>
                    <li>🔗 <b>Easy Integration:</b> Copy code or download ZIPs for instant use in your Salesforce org.</li>
                    <li>🛠️ <b>Customizable:</b> All components are built with clean CSS, HTML, and JS for easy customization.</li>
                    <li>📚 <b>Learning Resource:</b> See best practices and patterns for LWC development.</li>
                </ul>
                <br />
            </p>
        <CodeRenderer code={html} language="html" />'

        </div>
        //     <div className="lwc-blocks-container">
        //     </div>
    );
};

export default Usage;
