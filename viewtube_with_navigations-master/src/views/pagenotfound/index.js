// This component should be loaded whenever a navigation to invalid route URL 
// is attempted

import React from 'react';

export default function PageNotFound(props) {
    return (
        <div style={{ textAlign: 'center', color: 'red' }}>
            <h1 >Requested Page Is Not Found !!!</h1>
            <h2>
                Invalid URL Provided !!!
            </h2>
        </div>
    )
}