import React from 'react'

function Alert(props) {
    let capitalize=(word)=>{
      if(word==='danger')
      {
        word='error'
      }
    let lower=word.toLowerCase();
    let first=lower.charAt(0).toUpperCase();
    return first+lower.slice(1);
    }
  return (
    
    <div style={{height:"60px"}}>
    {
    props.alert &&<div>
  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
  
  </div>
    </div>}
    </div>
    
  )
}

export default Alert
