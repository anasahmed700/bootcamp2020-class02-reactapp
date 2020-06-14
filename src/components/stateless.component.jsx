import React from 'react';

function Stateless(props){
    return (
        <div>
            <h1>This is a functional component.</h1>
            <h2>Functional components also known as stateless components</h2>
            <p>With {props.newProp}</p>
        </div>
    )
}

export default Stateless