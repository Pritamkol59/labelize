import React, { useEffect,useState } from 'react'
import { Text, View,BackHandler, Alert,StyleSheet,Image ,Dimensions ,ImageBackground,TextInput, ScrollView, KeyboardAvoidingView,TouchableOpacity,ActivityIndicator} from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MyTabs from './Bottomnav';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Plus (){

    const navigation = useNavigation(); 
    const styles = StyleSheet.create({


        body:{
            backgroundColor:"#313131",
            width:windowWidth,
            height:windowHeight,
    
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

    });


    return (

        <View style={styles.body}>





<ScrollView>


    
<TouchableOpacity onPress={() =>navigation.push('FreeManually')}>
    
<ImageBackground
style={styles.imgtop1}
imageStyle={styles.imageStyle}
source={require("../srcf/Gradient_XrvkRkC.png")}
>
<Text style={styles.textmenuupper}>Generate Free Card Manually</Text>
</ImageBackground>


</TouchableOpacity>

<TouchableOpacity onPress={() =>navigation.push('FreeLink')}>

<ImageBackground
style={styles.imgtop2}
imageStyle={styles.imageStyle}
source={require("../srcf/Gradient_XrvkRkC.png")}
>



<Text style={styles.textmenuupper}>Generate Free Card by Link</Text>
</ImageBackground>

</TouchableOpacity>



</ScrollView>


<View style={styles.footer}>
      
      <MyTabs/>
     
      </View>

      

        </View>


    )




}

export default Plus;
