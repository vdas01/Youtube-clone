import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Comment from './Comment';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Container = styled.div``
const NewComment = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;

`;
const Avatar = styled.img`
   width: 50px;
   height: 50px;
   border-radius: 50%;
 `
const Input = styled.input`
  border: none;
  border-bottom:${({theme})=>theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`
const Hr = styled.hr`
   border: 0.5px solid ${({theme})=> theme.soft};
   margin: 15px 0;
`

const Comments = ({videoId}) => {
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser.img}/>
        <Input placeholder='Add a comment...'/>
      </NewComment>
      <Hr/>{
        comments.map(comment=>(
               <Comment comment={comment} key={comment._id}/>
        ))
      }
      
    </Container>
  )
}

export default Comments