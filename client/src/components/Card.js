import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`
const Image = styled.img`
   width: 100%;
   height: 202px;
   background-color: #999;
`
const Details = styled.div`
 display: flex;
 margin-top: 16px;
 gap: 12px;
`
const ChannelImage = styled.div`
   width:36px;
   height: 36px;
   border-radius:50%;
   background-color: #999;
`
const Texts = styled.div``
const ChannelName = styled.div`
  font-size: 14px;
  color:${({theme})=> theme.textSoft};
  margin:9px 0px;
`
const Title = styled.div`
 font-size: 16px;
 font-weight:500;
 color: ${({theme})=>theme.text};
`
const Info = styled.div`
  font-size: 14px;
  color: ${({theme})=>theme.textSoft};

`

const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container>  
    <Image alt='img' src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"/>
    <Details>
        <ChannelImage/>
        <Texts>
          <Title>Test Video</Title>
          <ChannelName>Vishal Das</ChannelName>
          <Info>60,000 views * 1 day ago</Info>
        </Texts>
    </Details> 
    </Container>
    </Link>
  )
}

export default Card