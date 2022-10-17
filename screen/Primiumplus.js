import React, { useEffect,useState } from 'react'
import { Text, View,BackHandler, Alert,StyleSheet,Image ,Dimensions ,ImageBackground,TextInput, ScrollView, KeyboardAvoidingView,TouchableOpacity,ActivityIndicator} from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MyTabs from './Bottomnav';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Primiumplus() {
    const navigation = useNavigation(); 
    const styles = StyleSheet.create({


        body:{
            backgroundColor:"#313131",
            width:windowWidth,
            height:'100%',
    
          },

          footer:{

         alignItems:"center",
            marginTop: windowHeight-70,
             position:'absolute',
   },

   imgtop1:{

marginTop:50,
    width: '95%',
height: 50,

marginLeft:'2%',
marginRight:'2%'

    
  },

  imgs:{

    marginTop:'4%',
    height:20,
    width:20,
  },

   imgtop2:{

marginTop:20,
    width: '95%',
height: 50,

marginLeft:'2%',
marginRight:'2%'

    
  },

  imageStyle:{

    width: '100%',
height: 50,

  },

  textmenuupper:{

    color: "rgba(255,255,255,1)",
    marginTop: 12,

    marginLeft: '20%',
    marginRight: '20%',
    alignItems:'center',
    fontSize:15

  },

  imgtop10:{

    marginTop:0,
        
    height: 100,
    
    width:windowWidth,
   
    
        
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
         
         <TouchableOpacity  onPress={() =>navigation.push('Pcardviw')}>

<Image
source={require('../srcf/back.png')}
resizeMode="cover"
style={styles.imagex}
></Image>

</TouchableOpacity>


        <Text style={styles.textmenuupper}> Please Select A Option</Text>
      </ImageBackground>




<ScrollView>


    
<TouchableOpacity onPress={() =>navigation.push('Primiummanually')}>
    
<ImageBackground
style={styles.imgtop1}
imageStyle={styles.imageStyle}
source={require("../srcf/Gradient_XrvkRkC.png")}
>
<Text style={styles.textmenuupper}>Generate Primium Card Manually</Text>
</ImageBackground>


</TouchableOpacity>

<TouchableOpacity onPress={() =>navigation.push('Primiumlink')}>

<ImageBackground
style={styles.imgtop2}
imageStyle={styles.imageStyle}
source={require("../srcf/Gradient_XrvkRkC.png")}
>



<Text style={styles.textmenuupper}>Generate Primium Card by Link</Text>
</ImageBackground>

</TouchableOpacity>



</ScrollView>


<View style={styles.footer}>
      
      <MyTabs/>
     
      </View>

      

        </View>


    )
}
