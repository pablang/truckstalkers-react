import React, { useState } from 'react'
import './Card.css';
// to access hook import the lib { useState }

export default function Card({ data, onSave }) {

  // const [counter, setCounter] = useState(0)
  // useState give you [state, setState] passing in the current state
  const [dishEditing, setDishEditing]  = useState(false)
  const [priceEditing, setPriceEditing]  = useState(false)
  const [descEditing, setDescEditing]  = useState(false)
  const [dish, setDish]  = useState(data.dish)
  const [price, setPrice]  = useState(data.price)
  const [desc, setDesc]  = useState(data.description)

  const save = () => {
    setDishEditing(false)
    setPriceEditing(false)
    setDescEditing(false)
    onSave({dish, price, desc})
  }


  return (
    <article className="menu-items">
      {dishEditing ?
        <input value={dish} onChange={e => setDish(e.target.value)} onBlur={save} type="text" /> :
        <div onClick={() => setDishEditing(true)}>{data.dish}</div>
      }
      <section className="desc-price">
      {descEditing ?
        <input value={desc} onChange={e => setDesc(e.target.value)} onBlur={save} type="text" /> :
        <div onClick={() => setDescEditing(true)}>Description: {data.description}</div>
      }
      {priceEditing ?
        <input value={price} onChange={e => setPrice(e.target.value)} onBlur={save} type="text" /> :
        <div onClick={() => setPriceEditing(true)}>price {data.price}</div>
      }
      </section>
    </article>
  )
}