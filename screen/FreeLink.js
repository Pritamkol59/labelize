import React, { useEffect,useState } from 'react'
import { Text, View,BackHandler, Alert,StyleSheet,Image ,Dimensions ,ImageBackground,TextInput, ScrollView, KeyboardAvoidingView,TouchableOpacity,ActivityIndicator} from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MyTabs from './Bottomnav';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function FreeLink (){

    
  const navigation = useNavigation(); 
  const styles = StyleSheet.create({

      body:{

          backgroundColor:"#313131",
      width:windowWidth,
      height:windowHeight,

      },


      imgtop1:{

          marginTop:20,
              
          height: 200,
          
          width:windowWidth,
         
          
              
            },

      imgtop10:{

          marginTop:0,
              
          height: 100,
          
          width:windowWidth,
         
          
              
            },
          
            imgs:{
          
             
             
              height:200,
              width:windowWidth,
            },
          
             imgtop2:{
          
          marginTop:20,
          height: 200,
          
          width:windowWidth,
          
              
            },

      footer:{

    alignItems:"center",
           marginTop: windowHeight-70,
           position:'absolute',
 
          },

        

            textmenuupper:{

              color: "rgba(255,255,255,1)",
              marginTop: 20,
              marginLeft: 50,
              alignItems:'center',
              fontSize:20
      
            },

            imagex:{
              height:20,
              width:30,
              marginTop:'3%',
              marginLeft:30
            },


  });


  return (

      <View style={styles.body}> 
      
      <ImageBackground
        style={styles.imgtop10}
        imageStyle={styles.imageStyle1}
        source={require("../srcf/Gradient_XrvkRkC.png")}

      >
         
         <TouchableOpacity  onPress={() =>navigation.push('Plus')}>

<Image
source={require('../srcf/back.png')}
resizeMode="cover"
style={styles.imagex}
></Image>

</TouchableOpacity>


        <Text style={styles.textmenuupper}> Please Select A Card</Text>
      </ImageBackground>

     

    <ScrollView>

    <TouchableOpacity>

      <ImageBackground
        style={styles.imgtop1}
        imageStyle={styles.imageStyle}
        source={require("../srcf/temp1.png")}
      >
       
      </ImageBackground>

      </TouchableOpacity>
    <TouchableOpacity>

      <ImageBackground
        style={styles.imgtop2}
        imageStyle={styles.imageStyle}
        source={require("../srcf/temp2.png")}
      >
       
      </ImageBackground>

      </TouchableOpacity>
    <TouchableOpacity>

      <ImageBackground
        style={styles.imgtop2}
        imageStyle={styles.imageStyle}
        source={require("../srcf/temp3.png")}
      >
       
      </ImageBackground>

      </TouchableOpacity>
    <TouchableOpacity>

      <ImageBackground
        style={styles.imgtop2}
        imageStyle={styles.imageStyle}
        source={require("../srcf/temp4.png")}
      >
       
      </ImageBackground>

      </TouchableOpacity>
    <TouchableOpacity>

      <ImageBackground
        style={styles.imgtop2}
        imageStyle={styles.imageStyle}
        source={require("../srcf/temp5.png")}
      >
       
      </ImageBackground>

      </TouchableOpacity>

    <View style={styles.imgtop2}>


    </View>



    </ScrollView>
      
    <View style={styles.footer}>
    
    <MyTabs/>
   
    </View>
      
      </View>

  )

}

export default FreeLink;