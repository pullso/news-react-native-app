import {ActivityIndicator, Text, View} from "react-native";

export function Loading() {
  return <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    <ActivityIndicator size="large"></ActivityIndicator>
    <Text style={{marginTop: 15}}>Loading...</Text>
  </View>;
}
