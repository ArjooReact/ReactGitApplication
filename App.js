/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ChildComponent  from './components/ChildComponent';
import LoginComponent from './components/LoginComponent';
import DashBoardComponent from './components/DashboardComponent';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

 const Stack =createStackNavigator();



const App=() => {
  
  const fetchData = ()=>{
    fetch('URL',{
      type:'GET',
      timeout: 20000,
      params:{}
    }).then(response =>{
      console.log(response)
    }).catch((error)=>{
       console.log(error)
    })

    return JSON.stringify(response)
  }

  return (
    <NavigationContainer>
  
    <Stack.Navigator initialRouteName= "CHILD"  screenOptions={{
    
    headerStyle: {
     backgroundColor: '#231f20'
   },
   headerTintColor: '#ffffff',
   headerTitleStyle: {
     fontWeight: 'bold'
   }
   }}>

<Stack.Screen name="CHILD" component={ChildComponent}  options={{
         index:0,
        headerShown:false
     }} />

<Stack.Screen name="LoginScreen" component={LoginComponent} 
 options = {{
   headerShown:true
 }}/>
 <Stack.Screen name="DashBoardScreen" component={DashBoardComponent} 
 options = {{
   headerShown:true
 }}/>
      </Stack.Navigator>
    </NavigationContainer>
     

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
