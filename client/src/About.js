import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <div>
            This app uses an overly complicated Fibonacci calculator to demo a multi-container Docker application.
            <Link to="/">Back to home</Link>
        </div>
    )
}