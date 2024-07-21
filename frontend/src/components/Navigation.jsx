/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import avatar from '../img/avatar.png'
import { menuItems } from '../utils/menuItems'

const NavStyled = styled.div`
      
`

const Navigation = () => {
  return (
    <NavStyled>
        <div className='user-con'>
            <img src={avatar} alt="" />
            <div className="text">
                <h2>Mike</h2>
                <p>Your Money</p>
            </div>
        </div>
        <ul className="menu-items">
          {menuItems.map((item) => {
            return <li
                   key={item.id}
                   
            > 
            {item.icon}
            <span>{item.title}</span>

            </li>
          })}
        </ul>

    </NavStyled>
  )
}

export default Navigation