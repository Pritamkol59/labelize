import React, { useEffect,useState } from 'react'
import { Text, View,BackHandler, Alert,StyleSheet,Image ,TextInput, ScrollView, KeyboardAvoidingView,TouchableOpacity,ActivityIndicator} from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { measureConnectionSpeed } from 'react-native-network-bandwith-speed';

import { api } from './Constances';


import MyTabs from './Bottomnav';


function Freecard (){

    const styles = StyleSheet.create({

        footer:{

     
            // backgroundColor: "rgba(231,231,231,1)",
             alignItems:"center",
            
             marginTop:'165%',
             
   
            
   
            position:'absolute',
   
            
   
       },

    });

    return (

        <>
        <ScrollView>
        <View>
          <Text> Add New Coustomer Detils </Text>
        </View>

        </ScrollView>

        <View style={styles.footer}>
      
      <MyTabs/>
     
      </View>

        </>
      )

}

export default Freecard;
