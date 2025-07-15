import React, { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { oneDark,oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
const CodeRenderer = ({ code = '', language = 'html ', mode, copy }) => {
  const [copied, setCopied] = useState(false);
  const [styles, setStyles] = useState();

  const handleCopied = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  useEffect(() => {
    if (mode === 'dark') {
      setStyles(oneDark);
    } else {
      setStyles(oneLight);
    }
  }, [mode]);

  return (
    <div className='code_renderer'>
      {
        copy && <button onClick={handleCopied} >
          {copied ? `📋Copied` : `📋Copy`}
        </button>
      }


      <SyntaxHighlighter
        language={language}
        style={styles}
        wrapLongLines={
          {
            borderRadius: '8px',
            padding: '1rem',
            fontSize: '14px',
          }
        }>
        {code}
      </SyntaxHighlighter>


    </div>
  )
}
export default CodeRenderer;