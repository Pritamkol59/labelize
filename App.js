/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import GifImage from '@lowkey/react-native-gif';

import NetInfo from "@react-native-community/netinfo";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Login from './screen/Login';
import Splash from './screen/Splash';
import Otp from './screen/Otp';
import Homepage from './screen/Homepage';
import Changerotp from './screen/Changerotp';









const Stack = createNativeStackNavigator();

const Navigation =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' >
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
       
        <Stack.Screen name="Changerotp" component={Changerotp} options={{headerShown:false }} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false }} />
        <Stack.Screen name="Otp" component={Otp} options={{headerShown:false}} />
        <Stack.Screen name="Homepage" component={Homepage} options={{headerShown:false}} />
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



 class App extends Component {

  

constructor(){

  super();
  this.state={

    conn_status:"",
  }

  this.Chack_Internet();
}

Chack_Internet=()=>{

  NetInfo.fetch().then(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);

    if(state.isConnected==true){

      this.setState({
        conn_status:"online"
      })

    }
    else{

      this.setState({
        conn_status:"offline"
      })


    }



  });
}







  render() {

    
    




    const styles = StyleSheet.create({
      container:{
     
       flex:1,
       backgroundColor:"white",
       
       
      },

      containe:{
     
        flex:1,
        backgroundColor:"white",
        justifyContent: 'center',
     alignItems: 'center',
        
       },
      logo:{
       
        
    height:250,
    width:250

      },
      lgtext:{

        fontFamily: "roboto-700",
        color: "red",
        fontSize: 25,
        textAlign: "center",
        marginTop: 1,

      }
     });


     if(this.state.conn_status=="online"){

      return (
        <>
          <StatusBar hidden={true} />
    
          <View style={styles.container}>
            <Navigation/>
          </View>
    
    
        </>
      );

     }

     else{


      return (
        <>
          <StatusBar hidden={false} />
    
          <View style={styles.containe}>

          <Image
        source={require('./srcf/nointernet.gif')}
        
        style={styles.logo}
        
        resizeMode={'cover'}
        ></Image>
            <Text style={styles.lgtext}>Internet Lost Colse App and Re-Open</Text>
          </View>
    
    
        </>
      );


     }

    


  }
}


/*const App = Node = () => {
  
  

 
};*/



export default App;
