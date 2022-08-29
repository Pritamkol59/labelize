import React, { useEffect,useState } from 'react'
import { Text, View,BackHandler, Alert,StyleSheet,Image ,Dimensions ,ImageBackground,TextInput, ScrollView, KeyboardAvoidingView,TouchableOpacity,ActivityIndicator} from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { measureConnectionSpeed } from 'react-native-network-bandwith-speed';

import { api } from './Constances';


import MyTabs from './Bottomnav';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



function Freecard (){


  const navigation = useNavigation(); 



    const styles = StyleSheet.create({

      body:{
        backgroundColor:"#313131",
        width:windowWidth,
        height:windowHeight,

      },

      upermenu:{

        marginTop:0,
        flexDirection: "row",

      },

      imgtop1:{


        width: (windowWidth/3),
    height: 50,
    borderWidth: 1,
    borderColor: "#000000"

        
      },

      imageStyle:{

        width: (windowWidth/3)-1,
    height: 50,

      },


      pluse:{

        width: 50,
        height: 50,
},


      plusto:{

        marginTop: windowHeight-180,
        marginLeft:'80%',
           position:'absolute',

      },
      textmenuupper:{

        color: "rgba(255,255,255,1)",
        marginTop: 12,
        marginLeft: 38,
        alignItems:'center',

      },




        footer:{

     
            // backgroundColor: "rgba(231,231,231,1)",
             alignItems:"center",
            
             marginTop: windowHeight-70,
             
   
            
   
            position:'absolute',
   
            
   
       },

    });

    return (

        <View style={styles.body}>

        <View style={styles.upermenu}>

          <TouchableOpacity>

        <ImageBackground
          style={styles.imgtop1}
          imageStyle={styles.imageStyle}
          source={require("../srcf/Gradient_XrvkRkC.png")}
        >
          <Text style={styles.textmenuupper}>Single Card</Text>
        </ImageBackground>

        </TouchableOpacity>

          <TouchableOpacity>

        <ImageBackground
          style={styles.imgtop1}
          imageStyle={styles.imageStyle}
          source={require("../srcf/Gradient_XrvkRkC.png")}
        >
          <Text style={styles.textmenuupper}>Group Card</Text>
        </ImageBackground>

        </TouchableOpacity>



          <TouchableOpacity>

        <ImageBackground
          style={styles.imgtop1}
          imageStyle={styles.imageStyle}
          source={require("../srcf/Gradient_XrvkRkC.png")}
        >
          <Text style={styles.textmenuupper}>Save Link</Text>
        </ImageBackground>

        </TouchableOpacity>

     

      


     
        

        </View>




        

        <ScrollView>
        <View>


        
       
        </View>

        </ScrollView>

        <View style={styles.plusto}>

<TouchableOpacity onPress={() =>navigation.push('Plus')}> 

<Image
    source={require('../srcf/plus.png')}
    resizeMode="contain"
    style={styles.pluse}
  ></Image>

</TouchableOpacity>


</View>

        <View style={styles.footer}>
      
      <MyTabs/>
     
      </View>

        </View>


      
      )

}

export default Freecard;
