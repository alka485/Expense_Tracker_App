/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import avatar from '../img/avatar.png'


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

    </NavStyled>
  )
}

export default Navigation