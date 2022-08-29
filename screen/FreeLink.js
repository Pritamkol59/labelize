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

            marginTop:60,
                
            height: 200,
            
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


            upermenu:{

                marginTop:0,
                flexDirection: "row",
        
              },


              imgupr:{


                width: (windowWidth),
            height: 60,
            
        
                
              },
              imgupr1:{


                width: (windowWidth),
            height: 60,
            
        
                
              },

              textmenuupper:{

                color: "rgba(255,255,255,1)",
               
                marginLeft: 50,
                alignItems:'center',
        
              },

    });


    return (

        <View style={styles.body}> 
        
        <View style={styles.upermenu}>

        <ImageBackground
          style={styles.imgupr}
          imageStyle={styles.imgupr1}
          source={require("../srcf/Gradient_XrvkRkC.png")}
        >
          <Text style={styles.textmenuupper}>Please Select A Card</Text>
        </ImageBackground>


        </View>
        
       

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





      </ScrollView>
        
      <View style={styles.footer}>
      
      <MyTabs/>
     
      </View>
        
        </View>

    )

}

export default FreeLink;