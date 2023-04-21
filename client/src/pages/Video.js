import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../components/Comments';
import Card from "../components/Card"

const Container = styled.div`
    display: flex;
    gap: 24px;
`
const Content = styled.div`
   flex: 5;
`
const Recommendation = styled.div`
   flex: 2;
`
const VideoWrapper = styled.div`
   
`
const Title = styled.h1`
   font-size:18px;
   font-weight:400;
   margin-top:20px;
   margin-bottom: 10px;
   color: ${({theme})=> theme.text}
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`

const Info = styled.span`
  color: ${({theme})=>theme.textSoft};

`

const Button = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   cursor: pointer;
`
const Hr = styled.hr`
   border: 0.5px solid ${({theme})=> theme.soft};
   margin: 15px 0;
`
const Buttons = styled.div`
 display: flex;
 gap: 20px;
 color: ${({theme})=> theme.text}    
`
const Channel = styled.div`
 display: flex;
 justify-content: space-between;
`
const ChannelInfo = styled.div`
 display: flex;
 gap: 20px;
`
const Subscribe = styled.button`
   background-color: #cc1a00;
   font-weight: 500;
   color: white;
   border-radius: 3px;
   height: max-content;
   padding: 10px 20px;
   cursor: pointer;
`
const Image = styled.img`
 height: 50px;
 width: 50px;
 border-radius: 50%;
`
const ChannelDetail = styled.div`
   display: flex;
   flex-direction: column;
   color: ${({theme})=>theme.text};
`
const ChannelName = styled.div`
 font-weight: 500;
`
const ChannelCounter = styled.span`
   margin-top: 5px;
   margin-bottom: 20px;
   color: ${({theme})=>theme.textSoft};
   font-size: 12px;
`
const Description = styled.p`
font-size:14px;
`


const Video = () => {
  return (
    <Container>
        <Content>
           <VideoWrapper>
             <iframe
              width="100%"
              height="720"
              src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
              title="Youtube Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
             ></iframe>
           </VideoWrapper>
           <Title>Test Video</Title>
           <Details>
              <Info>7,948,154 views . Jun 22,2022</Info>
              <Buttons>
                  <Button><ThumbUpOutlinedIcon/>123</Button>
                  <Button><ThumbDownOutlinedIcon/>Dislike</Button>
                  <Button><ReplyOutlinedIcon/>Share</Button>
                  <Button><AddTaskOutlinedIcon/>Save</Button>
              </Buttons>
           </Details>
           <Hr/>
           <Channel>
             <ChannelInfo>
                <Image src=''/>
                <ChannelDetail>
                  <ChannelName>Vishal Das</ChannelName>
                  <ChannelCounter>200k subscribers</ChannelCounter>
                  <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aut eum nulla veritatis laborum ipsa placeat
                   dolores fuga molestias ullam. Modi voluptatum sit dicta quibusdam praesentium commodi qui assumenda sapiente.</Description>
                </ChannelDetail> 
             </ChannelInfo>
             <Subscribe>SUBSCRIBE</Subscribe>
           </Channel>
           <Hr/>
           <Comments/>
        </Content>

        <Recommendation>
           <Card type="sm"/>
           <Card type="sm"/>
           <Card type="sm"/>
           <Card type="sm"/>
           <Card type="sm"/>
           <Card type="sm"/>
        </Recommendation>
    </Container>
  )
}

export default Video