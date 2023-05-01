import {createNativeStackNavigator} from "react-native-screens/native-stack";
import HomeScreen from "./Home";
import FullPostScreen from "./FullPost";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator()


export const Navigation = () => {
  return <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'News'}}/>
        <Stack.Screen name="FullPost" component={FullPostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  </>
}
