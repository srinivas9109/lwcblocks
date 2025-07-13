import React,{useEffect}  from 'react';
import Tabs from './tabs';
import {USAGE_TEXT} from '../utils/usageText';
import Loader from './preview/loader/loader';

const Usage = () => {
    useEffect(() => {
       console.log('USAGE_TEXT', USAGE_TEXT);
       
    }, []);

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
               
                <br />
            </p>

         <h4 >Preview</h4>
         <div className="preview-container">
         <Loader />

            </div>

         <h5>Parent LWC Component</h5>
         <Tabs content={USAGE_TEXT.parent} />

          <h5>Resuable LWC Component</h5>
         <Tabs content={USAGE_TEXT.child} />

        </div>

    );
};

export default Usage;
