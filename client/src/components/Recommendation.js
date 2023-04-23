import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import Card from './Card';

const Container = styled.div`
   flex: 2;
`

const Recommendation = ({tags}) => {
     
    const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/tags?tags=${tags}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);


  return (
    <Container>
    {videos.map((video)=>(
        <Card key={video._id} video={video} type="sm"/>
    ))

    }
    </Container>
  )
}

export default Recommendation