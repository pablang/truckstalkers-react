import React from 'react'

export default function TitleEdit({menuItem, handleChange, handleSubmit, setValue}) {
  const item = menuItem
  return (
    <div className="EditForm">
      {item.edit ? (
        <form action="" id={item.id} onSubmit={event => handleSubmit(item, event)}>
          <input className="title-input" type="text" value={item.dish} onChange={event => setValue(item, event)}/>
        </form>
      ) : (
        <h1 onClick={() => handleChange(item.id)}>{item.dish}</h1>
      )}
    </div>
  );
}