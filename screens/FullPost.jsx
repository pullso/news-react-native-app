import React, {useEffect, useState} from 'react';
import styled from "styled-components/native";
import {Alert, ScrollView, View} from "react-native";
import axios from "axios";
import {Loading} from "../components/Loading";
import HTML from 'react-native-render-html';

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`

const FullPostScreen = ({route, navigation}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const {url, imgUrl, title} = route.params;

  const fetchPost = (postUrl) => {
    setLoading(true)
    axios.get(`${postUrl}?api-key=test&show-fields=body`)
      .then(({data}) => {
        setData(data)
      })
      .catch(e => {
        Alert.alert('error', e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    navigation.setOptions({
      title: title
    })
    fetchPost(url)
  }, []);

  if (loading) {
    return <Loading/>
  }

  return (
    <ScrollView>
      <View style={{padding: 20}}>
        <PostImage source={{uri: imgUrl}}/>
        <HTML source={{html: data?.response?.content?.fields?.body}}/>
      </View>
    </ScrollView>
  );
};

export default FullPostScreen;
