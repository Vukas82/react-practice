import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        margin: '16px',
        padding: '16px',
        border: '1px solid black',
        textAlign: 'center',
        boxShadow: '2px 2px 4px rgba(250, 250 ,250, .4)'

    }
    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default char;