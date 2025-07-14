import React, { useState } from 'react';
import CodeRenderer from './codeRenderer';

const Tabs = ({content}) => {
  const [activeTab, setActiveTab] = useState('html');

  const tabs = [
    { id: 'html', label: 'HTML' },
    { id: 'js', label: 'JS' },
    { id: 'css', label: 'CSS' },
    { id: 'meta', label: 'META.XML' },
  ];

  const renderContent = () => {
    console.log(content);
    
    switch (activeTab) {
      case 'html':
        return    <CodeRenderer code={content.HTML} language="html" />;
      case 'js':
        return <CodeRenderer code={content.JS} language="js" />;
      case 'css':
        return <CodeRenderer code={content.CSS} language="css" />;
      case 'meta':
        return <CodeRenderer code={content.META} language="meta" />;
      default:
        return null;
    }
  };

  return (
    <div>
        <div className="tab-header">
    
        <button className="btn small-btn">Download Zip</button>
        </div>
      <div style={styles.tabContainer}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              ...styles.tab,
              ...(activeTab === tab.id ? styles.activeTab : {}),
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={styles.contentContainer}>{renderContent()}</div>
    </div>
  );
};

const styles = {
  tabContainer: {
    display: 'flex',
    borderBottom: '1px solid #ccc',
  },
  tab: {
    background: 'none',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: '600',
    color: '#555',
    borderBottom: '3px solid transparent',
    outline: 'none',
  },
  activeTab: {
    borderBottomColor: '#0070d2',
    color: '#0070d2',
    fontWeight: '700',
  },
  contentContainer: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
};

export default Tabs;
