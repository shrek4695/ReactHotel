import React from 'react';

const fub={
    background:'red'
};
const fur={
    visibility:'hidden'
};
const fud =()=>{
 
};
const display =(props) =>{
  var fun=(item)=>{
    return item.map((i)=>{
        return (
            <div>
            <div onClick={fud} style={fub}>{i.itemname}</div>
            <div style={fur}>{i.itemdescription}</div>
            </div>
        )
    })
   } 

    return (
        <div>
          <div>{props.content.name}</div>
          <div>{props.content.description}</div>
          <div>{fun(props.content.types)}</div>
        </div>
    )
}
export default display;