import React, { useState } from 'react';
import Introduction from './introduction';
import Usage from './usage';
import Tabs from './tabs';

const TAB_DATA = [
    {
        key: 'start',
        label: 'Get Started',
        children: [
            { key: 'introduction', label: 'Introduction' },
            { key: 'usage', label: 'Usage' },
        ],
    },
    {
        key: 'inputs',
        label: 'INPUTS',
        children: [
            { key: 'button', label: 'Button' },
            { key: 'buttonGroup', label: 'Button Group' },
            { key: 'checkbox', label: 'Checkbox' },
            { key: 'radipGroup', label: 'Radio Group' },
            { key: 'rating', label: 'Rating' },
            { key: 'select', label: 'Select' },
            { key: 'multiSelect', label: 'Multi Select' },
			{ key: 'toogle', label: 'Toogle' },

        ],
    },
    {
        key: 'layout',
        label: 'Layout',
        children: [
            { key: 'grid', label: 'Grid' },
            { key: 'flex', label: 'Flex' },
        ],
    },
];

function Components() {
    const [expandedTab, setExpandedTab] = useState(TAB_DATA[0].key);
    const [selectedSubTab, setSelectedSubTab] = useState(
        TAB_DATA[0].children[0].key
    );

    const handleExpand = (key) => {
        setExpandedTab(key);
        const tab = TAB_DATA.find((t) => t.key === key);
        if (tab && tab.children && tab.children.length > 0) {
            setSelectedSubTab(tab.children[0].key);
        }
    };

    const renderContent = () => {
        switch (selectedSubTab) {
            case 'introduction':
                return <Introduction />;
            case 'usage':
                return <Usage />;
            case 'button':
                return <h1>Button content</h1>;
            case 'buttonGroup':
                return <div>Inputs content</div>;
            case 'grid':
                return <div>Grid content</div>;
            case 'flex':
                return <div>Flex content</div>;
            default:
                return <div>Select a component</div>;
        }
    };

    return (
        <div className='components-container'>
            {/* Left Section: Tabs */}
            <div className='components-sidebar'>
                {TAB_DATA.map((tab) => (
                    <div key={tab.key} className='main-tab'>
                        <div
                            className={`main-tab-label${expandedTab === tab.key ? ' expanded' : ''
                                }`}
                            onClick={() => handleExpand(tab.key)}
                        >
                            <span className='arrow-icon'>
                                {expandedTab === tab.key ? '▼' : '▶'}
                            </span>
                            {tab.label}
                        </div>
                        {expandedTab === tab.key && (
                            <div className='subtabs'>
                                {tab.children.map((subtab) => (
                                    <div
                                        key={subtab.key}
                                        className={`subtab-label${selectedSubTab === subtab.key ? ' active' : ''
                                            }`}
                                        onClick={() => setSelectedSubTab(subtab.key)}
                                    >
                                        {subtab.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {/* Right Section: Content */}

            <div className='components-content'>{renderContent()}</div>
        </div>
    );
}

export default Components;