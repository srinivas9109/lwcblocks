import React , { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const CodeRenderer = ({ code ='',language = 'html '}) => {
  const [copied, setCopied] = useState(false);

 const handleCopied = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className='code_renderer'>
        <button onClick={handleCopied} >
          {copied ? `📋Copied` : `📋Copy`}
        </button>

        <SyntaxHighlighter
        language={language}
        style={oneDark}
        wrapLongLines={
            {
                borderRadius: '8px',
                padding: '1rem',
                fontSize:'14px',
            }
        }>
            {code}
        </SyntaxHighlighter>
      

    </div>
  )
}
export default CodeRenderer;