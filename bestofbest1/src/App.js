import React, { useState } from 'react';


import './App.css';
import Info from './components/Info'

const fist = require('./img/one.png')
const second = require('./img/two.png')
const three = require('./img/three.png')
const pages = {fist,second,three}

const cats = [
  {id : 1 , title: 'Сказачное заморское яство', name: 'Нямушка' , contant: ' с фуа-гра',
  quantity: '10 порций', prize: 'мышь в подарок',  weight: '0,5', unit: 'кг', comment: [{textOne:'Чего Сидишь? Порадуй кота'},{textTwo: 'Печень утки разварная с артишоками.'},{textThree: 'Печалька с фу-агра закончилась'},{textOff: 'Порадуй Котэ?'}] },
  {id : 2 , title: 'Сказачное заморское яство', name: 'Нямушка' , contant: ' с рыбой',
  quantity: '40 порций', prize: '2 мыши в подарок',  weight: '2', unit: 'кг', comment: [{textOne:'Чего Сидишь? Порадуй кота'},{textTwo: 'Головы щучьи с чесноком да свежфйшая сёмгушка.'},{textThree: 'Печалька с рыбой закончилась'},{textOff: 'Порадуй Котэ?'}] },
  {id : 3 , title: 'Сказачное заморское яство', name: 'Нямушка' , contant: ' с курой',
  quantity: '100 порций', prize: '5 мышей в подарок заказчик доволен',  weight: '5', unit: 'кг', comment: [{textOne:'Чего Сидишь? Порадуй кота'},{textTwo: 'Филе из цыплят с трюфелями в бульоне.'},{textThree: 'Печалька с курой закончилась'},{textOff: 'Порадуй Котэ?'}] },
]


const App = () => {
   return ( 
    <div className="App"> 
      <h1 className="title">Ты сегодня кормил кота?</h1>
      <div className="carts" >
      {cats.map((cat)=><Cat cat={cat} key={cat.id} />)}
      </div>
    </div>
  )
}

export default App

const Cat = ({cat})=>{
  const [selected , setSelected]=useState(true)
  const [text,setText]=useState(true)
  const {comment}=cat;
 
  const handelSelected =() => {
      return (
      setSelected(!selected)
    )
  }
  const hoverOff = () => {
    
      return (
        setText(!text)
      )

  }
  const hoverOn = () => {
    return null
  }

 
  if (!text && selected) {
    return (
      <div className='cart'  >
      <img src={!text && selected ? pages.second : pages.fist} onMouseLeave={hoverOff} onMouseEnter={hoverOn} onClick={handelSelected} alt='cat' />
      <Info cat={cat} text={text} selected={selected}/>
      <h3 className="comment">{selected ? comment[0].textOne : comment[1].textTwo} {selected ?  <span className="buy" onClick={handelSelected}>купи</span> : null} </h3>
    </div>
    )
  }
  

  if (cats.id === 0) {
    return (
      <div className='cart' >
      <img src={pages.three} alt='cat' />
      <Info cat={cat} />
      <h3 className="comment"><span className="noBuy">{comment[2].textThree}</span></h3>
    </div>
    )
  }
  

  
 
  return(
    <>
    <div className='cart'  >
      <img src={selected  ? pages.fist : pages.second} onMouseLeave={hoverOff} onMouseEnter={hoverOn} onClick={handelSelected} alt='cat' />
      <Info cat={cat}  />
      <h3 className="comment">{selected ? comment[0].textOne : comment[1].textTwo} {selected ?  <span className="buy" onClick={handelSelected}>купи</span> : null} </h3>
    </div>
  
    </>
  )
}



