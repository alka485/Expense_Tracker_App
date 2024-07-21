/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import  bg from './img/bg.png';
import {MainLayout} from './styles/Layout'

//import './App.css'

const AppStyled  = styled.div`
  height: 100vh;
  background-image: url(${bg});
  position:relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
  `

function App() {

  
  return (
    <AppStyled className = "App">

      <MainLayout>
      <h1>Hello</h1>
      </MainLayout>
      
    </AppStyled>
  )
}

export default App
