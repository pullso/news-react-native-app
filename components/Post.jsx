import React from 'react';
import styled from "styled-components/native";

const PostView = styled.View`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  display: flex;
  flex-direction: row;
`
const PostDetails = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`
const PostDate = styled.Text`
  font-size: 12px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.4);
`
const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  margin-right: 12px;
`

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`



const Post = ({title, imgUrl, createdAt}) => {
  return (
    <PostView>
      <PostImage
        source={{uri: imgUrl }}/>
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{new Date(createdAt).toLocaleTimeString()} {new Date(createdAt).toLocaleDateString()}</PostDate>
      </PostDetails>
    </PostView>
  );
};

export default Post;
