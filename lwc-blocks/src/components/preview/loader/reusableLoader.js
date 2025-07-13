import React from 'react';
import './reusableLoader.css';

const ResuableLoader = ({ variant }) => {

    return (
        <div>
            {
                variant === 'basic' && (
                    <div class="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )
            }
            {
                variant === 'circle' && (
                    <div class="lds-circle">
                        <div></div>
                    </div>
                )
            }
            {
                variant === 'facebook' && (
                    <div class="lds-facebook">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )
            }
            {
                variant === 'clock' && (
                    <div class="lds-clock">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )
            }
            {
                variant === 'heart' && (
                    <div class="lds-heart"><div></div></div>
                )
            }

        </div>
    );
};

export default ResuableLoader;
