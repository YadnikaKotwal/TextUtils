import React, {useState} from 'react';



export default function Alert(props){
    
    return (
    <div style={{height:'20px'}}>
   {props.alert && <div class="alert alert-info" role="alert">
   <strong>{props.alert.msg}</strong>:{props.alert.type}
   </div>}
   </div> 

    )
}