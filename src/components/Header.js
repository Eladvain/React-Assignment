import React from 'react'
import headerCss from '../CSS/header.css'

const Header = ({header}) => {
  return (
    <div className='headers'>
      <h1 className='header'>{header}</h1>
    </div>
  )
}

export default Header
