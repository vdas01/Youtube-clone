import React from 'react'
import Youtube from "../img/logo.png"
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from "react-router-dom";



const Container = styled.div`
   flex: 1;
   background-color: ${({theme})=> theme.bgLighter};
   height: auto;
   color: ${({theme})=> theme.text};
   font-size: 14px;
   position: sticky;
   top: 0;
`
const Wrapper = styled.div`
     padding: 18px 26px;
`
const Logo = styled.div`
     display: flex;
     align-items: center;
     gap: 5px;
     font-weight: bold;
     margin-bottom: 25px;
`
const Img = styled.img`
    height: 25px;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0;

`
const Hr = styled.hr`
   margin:15px 0px;
   border: 0.5px solid ${({theme})=> theme.soft};
`
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
const Login = styled.div`
  
`

const Button = styled.button`
   padding: 5px 15px;
   background-color: transparent;
   border: 1px solid #3ea6ff;
   color: #3ea6ff;
   border-radius: 3px;
   font-weight: 500;
   display: flex;
   margin-top: 10px;
   align-items: center;
   gap: 5px;
`

const Menu = ({darkMode,setdarkMode}) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
           <Logo>
            <Img src={Youtube}/>
            Youtube
          </Logo>
        </Link>
        <Item>
           <HomeIcon/>
           Home
        </Item>
        <Item>
           <ExploreOutlinedIcon/>
           Explore
        </Item>
        <Item>
            <SubscriptionsOutlinedIcon/>
            Subscription
        </Item>
        <Hr/>
        <Item>
            <VideoLibraryOutlinedIcon/>
            Library
        </Item>
        <Item>
            <HistoryOutlinedIcon/>
            History
        </Item>
        <Hr/>
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Button><AccountCircleOutlinedIcon/>SIGN IN</Button>
        </Login>
        <Hr/>
        <Title>Best Of Youtube</Title>
        <Item>
           <LibraryMusicOutlinedIcon/>
           Music
        </Item>
        <Item>
           <SportsBasketballOutlinedIcon/>
           Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon/>
          Gaming
        </Item>
        <Item>
           <MovieOutlinedIcon/>
           Movie
        </Item>
        <Item>
           <ArticleOutlinedIcon/>
           Article
        </Item>
        <Item>
          <LiveTvOutlinedIcon/>
          Live 
        </Item>
        <Hr/>
        <Item>
           <SettingsOutlinedIcon/>
           Settings
        </Item>
        <Item>
             <FlagOutlinedIcon/>
             Report
        </Item>
        <Item>
           <HelpOutlinedIcon/>
           Help
        </Item>
        <Item onClick={()=> setdarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon/>

        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu