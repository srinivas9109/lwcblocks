const USAGE_TEXT = {
    parent: {
        HTML: `<template>
    <div class="header">
        <h2>LWC Loaders</h2>
    </div>
    
    <div class="flex-container">
        <template for:each={spinners} for:item="spinner">
            <div key={spinner.label} class="flex-item">
            <c-resuable-loader variant={spinner.variant}></c-resuable-loader>
            <p>{spinner.label}</p>
        </div>
        </template>"
    </div>
</template>`,
        JS: `import { LightningElement } from 'lwc';

export default class Loaders extends LightningElement {
    spinners = [
        { variant: 'basic', label: 'Basic Loader' },
        { variant: 'circle', label: 'Circle Loader' },
        { variant: 'facebook', label: 'Facebook Loader' },
        { variant: 'clock', label: 'Clock Loader' },
        { variant: 'heart', label: 'Heart Loader' }
    ]
}`,
        CSS: `/* Header Styles */
.header {
    text-align: center;
    margin-bottom: 2rem;
    padding: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.header h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
}

/* Flex Container - Fixed width items with auto wrap */
.flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    width: 100vw;
    overflow: hidden; 
}

/* Flex Items - Fixed width, will wrap when screen is too small */
.flex-item {
    width: 200px; 
    
    /* Styling */
    background: #ffffff;
    border: 1px solid #e1e5e9;
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    
    /* Flexbox for internal content */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* Hover Effects */
.flex-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #667eea;
}

/* Text styling for labels */
.flex-item p {
    margin-top: 1rem;
    margin-bottom: 0;
    font-size: 0.9rem;
    font-weight: 500;
    color: #4a5568;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}`,
        META: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>64.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Loaders</masterLabel>
    <description>Loaders LWC Component</description>
    <targets>
        <target>lightningCommunity__Page</target>
    </targets>
</LightningComponentBundle>`,
    },
    child: {
        HTML: `<template>
    <template lwc:if={basic}>
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </template>

    <template lwc:if={circle}>
        <div class="lds-circle">
            <div></div>
        </div>
    </template>

    <template lwc:if={facebook}>
        <div class="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </template>

    <template lwc:if={clock}>

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
    </template>

    <template lwc:if={heart}><div class="lds-heart"><div></div></div></template>

</template>`,
        JS: `import { LightningElement, api } from 'lwc';

export default class ResuableLoader extends LightningElement {
    @api variant = 'basic';
    get basic() {      
          return this.variant === 'basic';
    }
    get circle(){
        return this.variant === 'circle';
    }
    get facebook() {
        return this.variant === "facebook";
    }
    get clock() {
        return this.variant === "clock";
    }
    get heart() {
        return this.variant === "heart";
    }
}`,
        CSS: `.lds-ring {
  /* change color here */
  color: #1c4c5b
}
.lds-ring,
.lds-ring div {
  box-sizing: border-box;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid currentColor;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* circle */
.lds-circle {
  /* change color here */
  color: #1c4c5b
}
.lds-circle,
.lds-circle div {
  box-sizing: border-box;
}
.lds-circle {
  display: inline-block;
  transform: translateZ(1px);
}
.lds-circle > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  background: currentColor;
  border-radius: 50%;
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes lds-circle {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}

/* facebook */
.lds-facebook {
  /* change color here */
  color: #1c4c5b
}

.lds-facebook,
.lds-facebook div {
  box-sizing: border-box;
}
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: currentColor;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0s;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

/* clock */

.lds-clock,
.lds-clock div,
.lds-clock div:after {
  box-sizing: border-box;
}
.lds-clock {
  color: currentColor;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-clock div {
  transform-origin: 40px 40px;
  animation: lds-clock 1.2s linear infinite;
}
.lds-clock div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3.2px;
  left: 36.8px;
  width: 6.4px;
  height: 17.6px;
  border-radius: 20%;
  background: currentColor;
}
.lds-clock div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-clock div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-clock div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-clock div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-clock div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-clock div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-clock div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-clock div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-clock div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-clock div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-clock div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-clock div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-clock {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* heart */
.lds-heart {
  /* change color here */
  color: #1c4c5b
}
.lds-heart,
.lds-heart div,
.lds-heart div:after,
.lds-heart div:before {
  box-sizing: border-box;
}
.lds-heart {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
}
.lds-heart div {
  top: 28px;
  left: 28px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: currentColor;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: currentColor;
}
.lds-heart div:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}`,
        META: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>64.0</apiVersion>
    <isExposed>true</isExposed>
</LightningComponentBundle>`,
    },
}

export { USAGE_TEXT };
