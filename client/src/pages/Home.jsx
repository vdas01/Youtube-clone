import Card from '../components/Card'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
`

const Home = () => {
  return (
   <Container>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
   </Container>
  )
}

export default Home