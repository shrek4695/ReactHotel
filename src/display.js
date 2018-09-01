import React from 'react';

const fub={
    background:'red',
    cursor:'pointer'
};
const fur={
    visibility:'hidden'
};

const display =(props) =>{
    
    var handlechange = (i) => {
        props.content.types.map((item) => {
            
            if(item.id==i) {
                document.getElementsByClassName("dis")[item.id].style.visibility="visible";
                
            }
            else {
                document.getElementsByClassName("dis")[item.id].style.visibility="hidden";
              
            }
        })
    }
    var setvisibility = (i) => {
        props.content.types.map((item) => {
            
            if(item.id==i) {

                document.getElementsByClassName("abc")[item.id].style.visibility="visible";
            }
            else {
                document.getElementsByClassName("abc")[item.id].style.visibility="hidden";
                document.getElementsByClassName("dis")[item.id].style.visibility="hidden";
            }
        })
    }
    

    var looping=(item)=>{
    return item.map((i)=>{
        return (
            <div>
            <div  style={fub} onClick={()=>setvisibility(i.id)}>{i.itemname}</div>
            <div style={fur} className="abc" onClick={() => handlechange(i.id)}>{i.itemmodel}</div>
            <div style={fur} className="dis">{i.itemdescription}</div>
            </div>
        )
    })
   } 

    return (
        <div>
          <div>{props.content.name}</div>
          <div>{props.content.description}</div>
          <div>{looping(props.content.types)}</div>
        </div>
    )
}
export default display;