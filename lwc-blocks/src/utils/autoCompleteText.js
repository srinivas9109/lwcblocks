const AUTO_COMPLETE_TEXT = {
    parent: {
        HTML: `<template>
    <div class="demo-container">
        <!-- Main Demo Section -->
        <div class="demo-content">
            <!-- AutoComplete Input -->
            <div class="input-container">
                <c-reusable-auto-complete-input
                    label="Select Country"
                    placeholder="Type to search countries..."
                    options={countries}
                    display-field="label"
                    value-field="value"
                    max-results="8"
                    min-search-length="1"
                    required="true"
                    onselect={handleCountrySelect}
                    onsearch={handleCountrySearch}
                    onclear={handleCountryClear}>
                </c-reusable-auto-complete-input>
            </div>
        </div>
    </div>
</template>`,
        JS: `import { LightningElement, track } from 'lwc';

export default class AutoCompleteDemo extends LightningElement {
    @track countries = [
        { label: 'United States', value: 'US', description: 'North America' },
        { label: 'Canada', value: 'CA', description: 'North America' },
        { label: 'United Kingdom', value: 'UK', description: 'Europe' },
        { label: 'Germany', value: 'DE', description: 'Europe' },
        { label: 'France', value: 'FR', description: 'Europe' },
        { label: 'Japan', value: 'JP', description: 'Asia' },
        { label: 'Australia', value: 'AU', description: 'Oceania' },
        { label: 'Brazil', value: 'BR', description: 'South America' },
        { label: 'India', value: 'IN', description: 'Asia' },
        { label: 'China', value: 'CN', description: 'Asia' },
        { label: 'Mexico', value: 'MX', description: 'North America' },
        { label: 'Italy', value: 'IT', description: 'Europe' },
        { label: 'Spain', value: 'ES', description: 'Europe' },
        { label: 'South Africa', value: 'ZA', description: 'Africa' },
        { label: 'Russia', value: 'RU', description: 'Europe/Asia' }
    ];

    @track selectedCountry = null;

    // Handle country selection
    handleCountrySelect(event) {
        this.selectedCountry = event.detail;
        console.log('Selected Country:', event.detail);
    }

    // Handle search events
    handleCountrySearch(event) {
        console.log('Searching countries for:', event.detail.searchTerm);
    }

    // Handle clear events
    handleCountryClear() {
        this.selectedCountry = null;
        console.log('Country selection cleared');
    }
}`,
        CSS: `

.demo-container {
    padding: 1rem;
    max-width: 600px;
    margin: 0 auto;
    font-family: 'Salesforce Sans', Arial, sans-serif;
}

.demo-content {
    margin-bottom: 1rem;
}

.input-container {
    background: white;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid #e0e5ee;
    transition: all 0.2s ease;
}

.input-container:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
}

/* Mobile responsive */
@media screen and (max-width: 768px) {
    .demo-container {
        padding: 0.5rem;
    }
    
    .input-container {
        padding: 0.75rem;
    }
}  
   `,
        META: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>60.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Auto Complete Label</masterLabel>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
        <target>lightningCommunity__Page</target>
        <target>lightningCommunity__Default</target>
    </targets>
</LightningComponentBundle>`,
    },
    child: {
        HTML: `
        <template>
    <div class="auto-complete-container">
        <div class="slds-form-element">
            <label if:true={label} class="slds-form-element__label" for="autocomplete-input">
                <abbr if:true={required} class="slds-required" title="required">*</abbr>
                {label}
            </label>
            <div class="slds-form-element__control">
                <div class={comboboxClass} aria-expanded={isDropdownOpen} aria-haspopup="listbox" role="combobox">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                        <input
                            id="autocomplete-input"
                            type="text"
                            class={inputClass}
                            aria-autocomplete="list"
                            aria-describedby="help-text"
                            placeholder={placeholder}
                            value={searchTerm}
                            disabled={disabled}
                            required={required}
                            oninput={handleInputChange}
                            onfocus={handleInputFocus}
                            onblur={handleInputBlur}
                            onkeydown={handleKeyDown}
                            autocomplete="off"
                        />
                        
                        <!-- Clear button when option is selected -->
                        <button if:true={selectedOption} 
                                class="slds-button slds-button_icon slds-input__icon slds-input__icon_right clear-button"
                                title="Clear Selection"
                                onclick={handleClearSelection}
                                type="button">
                            <lightning-icon icon-name="utility:clear" alternative-text="Clear" size="x-small"></lightning-icon>
                        </button>
                        
                        <!-- Search icon when no selection -->
                        <lightning-icon if:false={selectedOption} 
                                      icon-name="utility:search" 
                                      alternative-text="Search"
                                      size="x-small"
                                      class="slds-input__icon slds-input__icon_right search-icon">
                        </lightning-icon>
                    </div>
                    
                    <!-- Dropdown list -->
                    <div if:true={showDropdown} 
                         class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid dropdown-list"
                         role="listbox"
                         onmousedown={handleDropdownMouseDown}
                         onmouseup={handleDropdownMouseUp}>
                        <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                            <template for:each={filteredOptions} for:item="option" for:index="index">
                                <li key={option.value} 
                                    role="presentation">
                                    <div class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta option-item"
                                         role="option"
                                         data-value={option.value}
                                         onmousedown={handleOptionSelect}
                                         aria-selected="false">
                                        <span class="slds-media__body">
                                            <span class="slds-listbox__option-text slds-listbox__option-text_entity">
                                                {option.label}
                                            </span>
                                            <span if:true={option.description} 
                                                  class="slds-listbox__option-meta slds-listbox__option-meta_entity">
                                                {option.description}
                                            </span>
                                        </span>
                                    </div>
                                </li>
                            </template>
                        </ul>
                    </div>
                    
                    <!-- No results message -->
                    <div if:true={noResults} 
                         class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid dropdown-list">
                        <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                            <li role="presentation">
                                <div class="slds-listbox__option slds-listbox__option_plain no-results">
                                    <span class="slds-text-color_weak">No results found</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
`,
        JS: `import { LightningElement, api, track } from 'lwc';

export default class ReusableAutoCompleteInput extends LightningElement {
    @api label = 'Search';
    @api placeholder = 'Type to search...';
    @api options = [];
    @api displayField = 'label';
    @api valueField = 'value';
    @api variant = 'standard';
    @api disabled = false;
    @api required = false;
    @api maxResults = 10;
    @api minSearchLength = 2;
    
    @track searchTerm = '';
    @track isDropdownOpen = false;
    @track filteredOptions = [];
    @track selectedOption = null;
    @track highlightedIndex = -1;
    @track isLoading = false;
    
    // Add property to track if user is clicking on an option
    _isSelectingOption = false;

    connectedCallback() {
        console.log('AutoComplete component connected');
        console.log('Initial options:', this.options);
        console.log('Display field:', this.displayField);
        console.log('Value field:', this.valueField);
    }

    get inputClass() {
        let baseClass = 'slds-combobox__input slds-input';
        if (this.selectedOption) {
            baseClass += ' slds-combobox__input-value';
        }
        return baseClass;
    }

    get comboboxClass() {
        let baseClass = 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click';
        if (this.isDropdownOpen) {
            baseClass += ' slds-is-open';
        }
        return baseClass;
    }

    get showDropdown() {
        return this.isDropdownOpen && this.filteredOptions.length > 0;
    }

    get noResults() {
        return this.isDropdownOpen && this.filteredOptions.length === 0 && this.searchTerm.length >= this.minSearchLength;
    }

    handleInputChange(event) {
        this.searchTerm = event.target.value;
        this.selectedOption = null;
        
        if (this.searchTerm.length >= this.minSearchLength) {
            this.filterOptions();
            this.isDropdownOpen = true;
        } else {
            this.isDropdownOpen = false;
            this.filteredOptions = [];
        }
        
        this.highlightedIndex = -1;
        this.dispatchSearchEvent();
    }

    handleInputFocus() {
        if (this.searchTerm.length >= this.minSearchLength) {
            this.isDropdownOpen = true;
        }
    }

    handleInputBlur() {
        // Only close dropdown if user is not selecting an option
        if (!this._isSelectingOption) {
            setTimeout(() => {
                if (!this._isSelectingOption) {
                    this.isDropdownOpen = false;
                }
            }, 300);
        }
    }

    handleKeyDown(event) {
        const { key } = event;
        
        if (!this.isDropdownOpen) return;

        switch (key) {
            case 'ArrowDown':
                event.preventDefault();
                this.highlightNext();
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.highlightPrevious();
                break;
            case 'Enter':
                event.preventDefault();
                if (this.highlightedIndex >= 0) {
                    this.selectOption(this.filteredOptions[this.highlightedIndex]);
                }
                break;
            case 'Escape':
                this.isDropdownOpen = false;
                this.highlightedIndex = -1;
                break;
        }
    }

    highlightNext() {
        if (this.highlightedIndex < this.filteredOptions.length - 1) {
            this.highlightedIndex++;
        }
    }

    highlightPrevious() {
        if (this.highlightedIndex > 0) {
            this.highlightedIndex--;
        }
    }

    handleOptionSelect(event) {
        // Prevent default mousedown behavior and input blur
        event.preventDefault();
        event.stopPropagation();
        
        const selectedValue = event.currentTarget.dataset.value;
        const selectedOption = this.filteredOptions.find(option => 
            option[this.valueField] === selectedValue
        );
        
        if (selectedOption) {
            this.selectOption(selectedOption);
        }
    }

    handleOptionClick(event) {
        // Prevent the input blur from closing dropdown
        this._isSelectingOption = true;
        
        const selectedValue = event.currentTarget.dataset.value;
        const selectedOption = this.filteredOptions.find(option => 
            option[this.valueField] === selectedValue
        );
        
        if (selectedOption) {
            this.selectOption(selectedOption);
        }
        
        // Reset the flag after a short delay
        setTimeout(() => {
            this._isSelectingOption = false;
        }, 100);
    }

    handleDropdownMouseDown(event) {
        // Prevent input from losing focus when clicking on dropdown
        event.preventDefault();
        this._isSelectingOption = true;
    }

    handleDropdownMouseUp(event) {
        // Allow normal click behavior
        this._isSelectingOption = false;
    }

    handleOptionMouseDown(event) {
        // Prevent the default mousedown behavior that might interfere with click
        event.preventDefault();
        this._isSelectingOption = true;
    }

    selectOption(option) {
        this.selectedOption = option;
        this.searchTerm = option[this.displayField];
        this.isDropdownOpen = false;
        this.highlightedIndex = -1;
        this._isSelectingOption = false; // Reset flag
        
        // Return focus to input after selection
        setTimeout(() => {
            const input = this.template.querySelector('input');
            if (input) {
                input.focus();
            }
        }, 10);
        
        // Dispatch selection event
        this.dispatchEvent(new CustomEvent('select', {
            detail: {
                value: option[this.valueField],
                label: option[this.displayField],
                option: option
            }
        }));
    }

    handleClearSelection() {
        this.selectedOption = null;
        this.searchTerm = '';
        this.isDropdownOpen = false;
        this.filteredOptions = [];
        this.highlightedIndex = -1;
        
        // Focus back to input
        const input = this.template.querySelector('input');
        if (input) {
            input.focus();
        }
        
        // Dispatch clear event
        this.dispatchEvent(new CustomEvent('clear'));
    }

    filterOptions() {
        const searchTermLower = this.searchTerm.toLowerCase();
        this.filteredOptions = this.options
            .filter(option => 
                option[this.displayField].toLowerCase().includes(searchTermLower)
            )
            .slice(0, this.maxResults)
            .map((option, index) => ({
                ...option,
                isHighlighted: index === this.highlightedIndex
            }));
    }

    dispatchSearchEvent() {
        this.dispatchEvent(new CustomEvent('search', {
            detail: {
                searchTerm: this.searchTerm
            }
        }));
    }

    @api
    clearSelection() {
        this.handleClearSelection();
    }

    @api
    setOptions(newOptions) {
        this.options = newOptions;
        if (this.searchTerm.length >= this.minSearchLength) {
            this.filterOptions();
        }
    }

    @api
    getValue() {
        return this.selectedOption ? this.selectedOption[this.valueField] : null;
    }

    @api
    getSelectedOption() {
        return this.selectedOption;
    }

    // Debug getter to check if options are being passed
    get debugOptions() {
        console.log('Options received:', this.options);
        console.log('Options length:', this.options?.length);
        return this.options;
    }
}`,
        CSS: `
        /* Reusable AutoComplete Input Component Styles */

.auto-complete-container {
    position: relative;
    width: 100%;
}

/* Input styling */
.slds-combobox__input {
    transition: all 0.2s ease-in-out;
}

.slds-combobox__input:focus {
    border-color: #1589ee;
    box-shadow: 0 0 3px #1589ee;
}

/* Clear button styling */
.clear-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    margin-right: 0.25rem;
    border-radius: 0.25rem;
    transition: background-color 0.2s ease;
}

.clear-button:hover {
    background-color: #f3f2f2;
}

.clear-button:focus {
    outline: 2px solid #1589ee;
    outline-offset: 2px;
}

/* Search icon styling */
.search-icon {
    color: #706e6b;
    pointer-events: none;
}

/* Dropdown styling */
.dropdown-list {
    border: 1px solid #d8dde6;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-height: 300px;
    overflow-y: auto;
    z-index: 9999;
    background: white;
    margin-top: 1px;
}

/* Option item styling */
.option-item {
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    transition: background-color 0.15s ease;
    border-bottom: 1px solid #f3f2f2;
    user-select: none; /* Prevent text selection on mousedown */
}

.option-item:last-child {
    border-bottom: none;
}

.option-item:hover {
    background-color: #f3f2f2;
}

.option-item:focus {
    background-color: #e5f3ff;
    outline: none;
}

.option-item:active {
    background-color: #e5f3ff;
}

/* Highlighted option */
.slds-listbox__option_highlighted .option-item,
.option-item.slds-listbox__option_highlighted {
    background-color: #e5f3ff;
}

/* No results styling */
.no-results {
    padding: 1rem 0.75rem;
    text-align: center;
    font-style: italic;
}

/* Loading state */
.loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

/* Description text styling */
.slds-listbox__option-meta {
    font-size: 0.75rem;
    color: #706e6b;
    margin-top: 0.125rem;
}

/* Responsive Design */

/* Mobile devices (up to 768px) */
@media screen and (max-width: 768px) {
    .auto-complete-container {
        width: 100%;
    }
    
    .dropdown-list {
        max-height: 250px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    
    .option-item {
        padding: 0.75rem;
        font-size: 1rem;
    }
    
    .slds-listbox__option-meta {
        font-size: 0.875rem;
    }
    
    /* Increase touch target size */
    .clear-button {
        padding: 0.5rem;
        min-width: 44px;
        min-height: 44px;
    }
    
    .slds-combobox__input {
        font-size: 16px; /* Prevents zoom on iOS */
        padding: 0.75rem;
    }
}

/* Tablet devices (769px to 1024px) */
@media screen and (min-width: 769px) and (max-width: 1024px) {
    .dropdown-list {
        max-height: 280px;
    }
    
    .option-item {
        padding: 0.625rem 0.75rem;
    }
}

/* Desktop devices (1025px and up) */
@media screen and (min-width: 1025px) {
    .dropdown-list {
        max-height: 300px;
    }
    
    /* Enhanced hover effects for desktop */
    .option-item:hover {
        background-color: #f8f9fa;
        transform: translateY(-1px);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    .slds-combobox__input:focus {
        border-color: #000;
        box-shadow: 0 0 0 2px #000;
    }
    
    .option-item:hover,
    .option-item:focus {
        background-color: #000;
        color: #fff;
    }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    .slds-combobox__input,
    .clear-button,
    .option-item {
        transition: none;
    }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    .dropdown-list {
        background-color: #2a2a2a;
        border-color: #444;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .option-item {
        border-bottom-color: #444;
        color: #e0e0e0;
    }
    
    .option-item:hover {
        background-color: #3a3a3a;
    }
    
    .option-item:focus,
    .slds-listbox__option_highlighted .option-item {
        background-color: #1a4d72;
    }
    
    .slds-listbox__option-meta {
        color: #b0b0b0;
    }
    
    .no-results {
        color: #b0b0b0;
    }
}

/* Focus visible support for better accessibility */
.slds-combobox__input:focus-visible {
    outline: 2px solid #1589ee;
    outline-offset: 2px;
}

.option-item:focus-visible {
    outline: 2px solid #1589ee;
    outline-offset: -2px;
}

/* Container queries for more granular responsiveness */
@container (max-width: 300px) {
    .option-item {
        padding: 0.5rem;
        font-size: 0.875rem;
    }
    
    .slds-listbox__option-meta {
        font-size: 0.75rem;
    }
}
`,
        META: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>60.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
        <target>lightning__FlowScreen</target>
        <target>lightningCommunity__Page</target>
        <target>lightningCommunity__Default</target>
    </targets>
    <targetConfigs>
        <targetConfig targets="lightning__RecordPage">
            <property name="label" type="String" default="Search" description="Label for the autocomplete input"/>
            <property name="placeholder" type="String" default="Type to search..." description="Placeholder text for the input"/>
            <property name="variant" type="String" default="standard" description="Input variant (standard, label-hidden, etc.)"/>
            <property name="required" type="Boolean" default="false" description="Whether the field is required"/>
            <property name="disabled" type="Boolean" default="false" description="Whether the field is disabled"/>
            <property name="maxResults" type="Integer" default="10" description="Maximum number of results to show"/>
            <property name="minSearchLength" type="Integer" default="2" description="Minimum characters required to trigger search"/>
        </targetConfig>
    </targetConfigs>
</LightningComponentBundle>`,
    },
 
}

export { AUTO_COMPLETE_TEXT };
