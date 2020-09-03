import React from 'react'


const Info = (props) => {
    const {title,name,contant,quantity,prize,weight,unit , comment }=props.cat
    const text =props.text
    const selected = props.selected
    return (
      <>
        <div className="titles" >{!text && selected ? comment[3].textOff:title }</div>
        <div className="name">{name}</div>
        <div className="contant">{contant}</div>
        <div className="quantity">{quantity}</div>
        <div className="prize">{prize}</div>
        <div className="weight">
          <div className="weight1">{weight}</div>
          <div className="weight2">{unit}</div>
        </div>
      </>
    )
  } 

  export default Info
  