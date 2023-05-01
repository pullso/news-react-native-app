import {Alert, FlatList, RefreshControl, TouchableOpacity, View} from 'react-native';
import Post from "../components/Post";
import axios from 'axios';
import {useEffect, useState} from "react";
import {getImageUrl} from "../utils/utils";
import {Loading} from "../components/Loading";


export default function HomeScreen({navigation}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = () => {
    setLoading(true)
    axios.get('https://content.guardianapis.com/search?api-key=test&section=world&show-fields=body')
      .then(({data}) => {
        setItems(data)
      })
      .catch(e => {
        Alert.alert('error', e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchPosts()

  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchPosts}/>}
        data={items?.response?.results}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=>navigation.navigate('FullPost', {url: item.apiUrl, imgUrl:getImageUrl(item?.fields?.body), title: item.webTitle })}>
            <Post
              title={item?.webTitle}
              createdAt={new Date(item?.webPublicationDate)}
              imgUrl={getImageUrl(item?.fields?.body)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

