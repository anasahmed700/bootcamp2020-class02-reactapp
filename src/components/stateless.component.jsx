// Class 3 functional components & props

import React from 'react';

function Stateless(props){
    return (
        <div>
            <p>Class 2: React components & props</p>
            <h1>This is a functional component.</h1>
            <h2>Functional components also known as stateless components</h2>
            <p>With {props.newProp}</p>
        </div>
    )
}

export default Stateless