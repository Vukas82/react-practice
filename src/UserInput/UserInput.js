import React from 'react'

const userInput = (props) => {
    const style = {
        border: '1px solid blue',
        marginTop: '30px'
    }
    return < input type="text"
    style = {style}
    onChange={props.changed}
    value={props.currentName} />
}
export default userInput;
