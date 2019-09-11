import React from 'react'

export default function PriceEdit({menuItem, handleChange, handleSubmit, setPrice}) {
  const item = menuItem
  return (
    <div className="PriceEdit">
      {item.edit ? (
        <form action="" id={item.id} onSubmit={event => handleSubmit(item, event)}>
          <input class="price-input" type="text" value={item.price} onChange={event => setPrice(item, event)}/>
        </form>
      ) : (
        <p onClick={() => handleChange(item.id)}>{item.price}</p>
      )}
    </div>
  );
}
