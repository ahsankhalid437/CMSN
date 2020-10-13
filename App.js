import React,{Component} from 'react';
import { View,  StyleSheet} from 'react-native';
import Home from './src/Home';
//import Login from './src/Login';
//import Register from './src/Register';
//import { Router } from 'react-native-router-flux';

export default class App extends Component 
{
 
  render(){
  return (
    <View style={styles.container} >
 
<Home/>
       </View>
    

    
    
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
);
