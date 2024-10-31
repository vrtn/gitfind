import React from 'react'

import './styles.css'

export default function ItemList({title,description, link}) {
  return (
    <div className='item-list'>
        <strong>{title}</strong>
        <p>{description??' -- sem descrição --'}</p>
        <a href={link} target="_blank">Link do Repositório</a>
        <br></br>
        <hr/>
    </div>
  )
}
