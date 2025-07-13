import React from 'react';
import './loader.css'; 
import ResuableLoader from './reusableLoader';
const Loader = () => {
    const spinners = [
        { variant: 'basic', label: 'Basic Loader' },
        { variant: 'circle', label: 'Circle Loader' },
        { variant: 'facebook', label: 'Facebook Loader' },
        { variant: 'clock', label: 'Clock Loader' },
        { variant: 'heart', label: 'Heart Loader' }
    ]
    return (
        <>
            <div class="header">
                <h2>LWC Loaders</h2>
            </div>

            <div class="flex-container">
                {
                    spinners.map((spinner) => (
                        <div key={spinner.label} className="flex-item">
                            <ResuableLoader variant={spinner.variant}></ResuableLoader>
                            <p>{spinner.label}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Loader;