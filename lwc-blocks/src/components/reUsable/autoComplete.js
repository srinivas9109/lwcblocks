import React from 'react';
import { AUTO_COMPLETE_TEXT } from '../../utils/autoCompleteText';
import Tabs from '../tabs';

// import Loader from './preview/loader/loader';

const AutoComplete = () => {


    return (
        <div className="intro-container ">
            <h1 className="intro-title">Auto Complete</h1>
            <div className="intro-desc">
                An autocomplete input is a user interface component that provides suggestions to users as they type into an input field. This feature enhances user experience by helping users quickly find and select options without having to type the entire input. Autocomplete inputs are commonly used in search bars, forms, and any scenario where users need to input data that can be predicted based on previous entries or a predefined list.
                <br /><br />
                <strong>🔍 Core AutoComplete Features</strong>
                <ol>
                    <li>Smart Search & Filtering</li>
                    <li>Real-time search as you type</li>
                    <li>Case-insensitive matching</li>
                    <li>Filters options based on partial text input</li>
                    <li>Instant results with no delays</li>
                    <li>Reusable Component: Drop into any LWC project</li>
                </ol>

                <br />
This AutoComplete component provides a complete, enterprise-grade solution that's both user-friendly and developer-friendly! 🚀

                <br />
            </div>

            {/* <h4 >Preview</h4>
         <div className="preview-container">
         <Loader />

            </div>

          */}
          
         <h5>Parent LWC Component</h5>
         <Tabs content={AUTO_COMPLETE_TEXT.parent} />

          <h5>Resuable LWC Component</h5>
         <Tabs content={AUTO_COMPLETE_TEXT.child} />
         

        </div>

    );
};

export default AutoComplete;
