import React from 'react'

export default function DescriptionEdit({menuItem, handleChange, handleSubmit, setDescription}) {
  const item = menuItem
  return (
    <div className="DescriptionEdit">
      {item.edit ? (
        <form action="" id={item.id} onSubmit={event => handleSubmit(item, event)}>
          <input class="description-input" type="text" value={item.description} onChange={event => setDescription(item, event)}/>
        </form>
      ) : (
        <p onClick={() => handleChange(item.id)}>{item.description}</p>
      )}
    </div>
  );
}