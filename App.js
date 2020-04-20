import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import contants from 'expo-constants'
import Home from './screen/Home'
import CreateEmployee from './screen/CreateEmployee'
import Profile from './screen/Profile';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const stack = createStackNavigator();

const myOption={
  title:"My Sweet Home",
  headerTintColor:"white",  
  headerStyle:{
    backgroundColor:"#006aff",
      
  },
    
  }
function App() {
  return (
    <View style={styles.container}>
        <stack.Navigator>
          <stack.Screen 
          name="Home" 
          options={myOption}
          component={Home}/>
          <stack.Screen 
          name="Create" 
          options={{...myOption,title:"Create New Employee"}}
          component={CreateEmployee}/>
          <stack.Screen 
          name="Profile" 
          options={{...myOption,title:"Profile"}}
          component={Profile}/>
        </stack.Navigator>
    </View>
  );
}

export default ()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
       
  },
  
});
