import React from 'react';

export default function Work() {
    const handleClick = () => {
        // Handle button click event
        console.log('Button clicked');
    };

    return (
        <div>
            <h1>Work Page</h1>
            <p>This is the Work page content.</p>
            {/* <button onClick={handleClick}>Click me</button> */}
            <a href="https://www.linkedin.com/in/rawanghazouli/" target="_blank" rel="noopener noreferrer">
                Visit my LinkedIn profile
            </a>
        </div>
    );
}  