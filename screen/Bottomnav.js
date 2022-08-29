import * as React from 'react';

import { Text, View,BackHandler, Alert,StyleSheet,Image ,TextInput, ScrollView, KeyboardAvoidingView,TouchableOpacity,ActivityIndicator, ImageBackground} from 'react-native';



import Userupdate from './Userupdate';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
    
import Icon from 'react-native-vector-icons/AntDesign';



 

const MyTabs = () => {
  
    const myIcon = <Icon name="rocket" size={30} color="#900" />;
  
    const navigation = useNavigation(); 
   
    const styles = StyleSheet.create({
       
      
        
        navbar:{

            flexDirection:'row',
            backgroundColor:'#7C50FE',
            width:'90%',
            justifyContent:'space-evenly',
            borderRadius:40,
            marginLeft:'5%',
            marginRight:'5%',
            

        },

        holder:{
            width:'90%',
            height:50,

        },

        text:{

            color:"white",
            fontWeight: "bold",

        },

        image:{
            marginTop:2,
            height:40,
            width:40
        },
        IconBehave:{

            padding:14

        }


      });

  return (

    

    
     
     
      
<>
       
            <View >

                <ImageBackground source={require("../srcf/bbb.png")}
        resizeMode="contain"
        style={styles.navbar}
        imageStyle={styles.image_imageStyle}>

<TouchableOpacity onPress={() =>navigation.push('Homepage')}>
<Image
          source={require('../srcf/home.png')}
          resizeMode="contain"
          style={styles.image}
        ></Image>
    
    <Text  style={styles.text}>Home</Text>
    </TouchableOpacity>
<TouchableOpacity>
    
    <Image
          source={require('../srcf/offer.png')}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        
        <Text  style={styles.text}>Offers</Text>
        
        </TouchableOpacity>

<TouchableOpacity>
    <Image
          source={require('../srcf/help.png')}
          resizeMode="contain"
          style={styles.image}
        ></Image>

        <Text  style={styles.text}>Helps</Text>
        
        </TouchableOpacity>
<TouchableOpacity>
    
    <Image
          source={require('../srcf/noti.png')}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        
        <Text  style={styles.text}>notifi.</Text>
        
        </TouchableOpacity>



<TouchableOpacity onPress={() =>navigation.push('Userupdate')}>
    
    <Image
          source={require('../srcf/userm.png')}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        
        <Text  style={styles.text}>Users</Text>
        
        </TouchableOpacity>




        </ImageBackground>
               

           


        </View>




      
        </>
   
  );


};

export default MyTabs;