import React from 'react';

const validation = (props) => {
    let vallidationMessage = 'Text is long enough!';
    if(props.inputLength <=5) {
        vallidationMessage = 'Text is to short!'
    }
    return(
        <div>
<p>{ vallidationMessage }</p>
        </div>
    )
}

export default validation;