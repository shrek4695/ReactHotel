import React from 'react';

const navitem = {
    background:'blue',
    color:'white',
    cursor:'pointer'
}
const side = (props) =>{

    return (
                <div>
                    <div style={navitem} onClick={() => props.updateState(props.content.Button.name)}>{props.content.Button.name} </div>
                    <div style={navitem} onClick={() => props.updateState(props.content.Datepicker.name)}>{props.content.Datepicker.name}</div>
                    <div style={navitem} onClick={() => props.updateState(props.content.Searchbox.name)}>{props.content.Searchbox.name}</div>
                    <div style={navitem} onClick={() => props.updateState(props.content.Logo.name)}>{props.content.Logo.name}</div>
                </div>
        )
}
export default side;