import React from 'react';
import { Link } from 'react-router-dom';

const divStyle = {
    color: 'white'
};

function About() {
    return (
        <div style={divStyle}>
            <h2>About Page</h2>
            <main>
                <p>This section contains information about...<Link to="/">home</Link></p>
            </main>
        </div>
    )
}

export default About;