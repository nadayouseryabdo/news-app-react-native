
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './components/splash';
import Home from './components/Home';
import About from './components/about';
import Details from './components/details';
import CountLikeContainer from './components/counLikContainer';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Splash} />
        <Stack.Screen name="News" component={Home} />
        <Stack.Screen name="AboutPage" component={About}  />
        <Stack.Screen name="Details" component={Details}  />
        <Stack.Screen name="conunter" component={CountLikeContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

