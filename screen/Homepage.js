import React, { useEffect,useState } from 'react'
import { Text, View,BackHandler, Alert,StyleSheet,Image,ImageBackground ,TextInput, ScrollView, Dimensions,KeyboardAvoidingView,TouchableOpacity,ActivityIndicator} from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { measureConnectionSpeed } from 'react-native-network-bandwith-speed';
import { SliderBox } from "react-native-image-slider-box";
import { api } from './Constances';


import MyTabs from './Bottomnav';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import FieldSet from 'react-native-fieldset';
 function Homepage (){


 /* const [number, setKeys] = useState([]);
  const [netSpeed, setNetSpeed] = useState('');
  const [token, setServerTokens] = useState('');*/
  const [isLoad, setIsLoad] = useState(false);
  const [userData, setUserData] = useState('');
 // const [userAddres, setAddress] = useState('');
  const [userImg, setUserImg] = useState('https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png');
  const [mssg, setMssg] = useState('');

  const navigation = useNavigation(); 

  
 
  

   useEffect(() => {
      const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to Exit?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
  
      return () => backHandler.remove();
    }, []);



   /* const  getNetworkBandwidth = async () => {
      try {
        const networkSpeed = await measureConnectionSpeed();
        console.log(networkSpeed); // Network bandwidth speed
        setNetSpeed(networkSpeed.speed); 
      } catch (err) {
        console.log(err);  
      }

    }*/



    



    const postUserData= async()=>{

      try {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('number');
       console.log("Done");
       navigation.replace('Login');
  
    }
    catch(exception) {
      console.log(exception);
    }


    }


    


    
        const fetchUserData = async () => {


          setIsLoad(true);


          try{
            const tok = await AsyncStorage.getItem('token');

            const numbed= await AsyncStorage.getItem('number')
            
            const suparfresh= JSON.parse(tok);

            const freshtoken= "Bearer "+suparfresh;


        /* const postUserData= await  fetch(api+"users",{ 
            method:"POST",
               headers:new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': freshtoken
              }),
              body:JSON.stringify({
                "number":numbed
              })
            
            });*/

               //const myData= await postUserData.json();
              
              
              //console.log(myData);

              
              fetch(api+"users",{ 
                method:"POST",
                   headers:new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': freshtoken
                  }),
                  body:JSON.stringify({
                    "number":numbed
                  })
                
                })

                .then(res=>res.json())
     .then(myData=>{

      if(myData.success===true){
        setIsLoad(false);
       
        setUserData(myData.data.users.name);

      


        if(myData.data.users.img==null){

          

        }
        else{

          setUserImg(myData.data.users.img);
        }

    
     }

     else{

      setMssg(myData.message);

      postUserData();
  
   }



     })

              
               
              
               
             }
            
            catch(e){
              console.log(e);
            }

        }


   /*  useEffect(()=>{


      try {
        const networkSpeed = await measureConnectionSpeed();
        console.log(networkSpeed); // Network bandwidth speed
        setNetSpeed(networkSpeed.speed); 
      } catch (err) {
        console.log(err);  
      }

     },[]);

     <Button  style={styles.btn}  mode="contained" 

theme={{ roundness: 35,  colors:{primary:"red"}}}


onPress={handleCl}>


  
<Text style={styles.loginOrSignup}>Logout</Text> 
</Button>

    */  

     useEffect(()=>{
  
      fetchUserData();
      

        },[]);

 
  const styles = StyleSheet.create({
    
    
    
    
    btn: {
      strokeWidth:10,
      height:50, 
      
      marginTop:50,
      
      marginLeft: 18,
      marginRight:18,
    },

    loader:{

      minHeight:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
 
     },

     cont: {
      
      backgroundColor:"#313131",
      height:windowHeight,
     
    },

    holder:{

      width: '100%',
      height:190,
      marginTop:-10,

    },


    image_imageStyle:{},

     loremIpsum: {
      fontFamily: "roboto-700",

     color: "white",
    fontSize: 25,
    width: 146,
      marginTop: 15,
      marginLeft: 15
    },

    user: {
      fontFamily: "roboto-700",

     color: "white",
    fontSize: 16,
      marginTop: 10,
     
    },

    image: {
      width: 50,
      height: 50,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: "#000000"
      
    },

    toch:{
      marginTop: -23,
      marginLeft: '85%',
      position:'absolute',
    },

    imageRow:{
      height: 40,
      flexDirection: "row",
      marginRight:"5%",
      marginLeft:"5%"
      },

      imageRowx:{

        marginTop:15,
      
        flexDirection: "row",
        marginRight:"10%",
        marginLeft:"10%"

      },


    slider:{

      marginTop: 20,

    },

    afterslider:{

      marginTop: 10,
     
     
      
     
      alignItems: "center",
     
      marginLeft:'10%',
      marginRight:'10%',
   

    },

    aftersliderRow:{
      
      flexDirection: "row",

    },

    imagecard:{

      height:125,
      width:155
    },

    imagecard1:{

      marginLeft:35,
      height:125,
      width:155
    },

    footer:{

     
         // backgroundColor: "rgba(231,231,231,1)",
          alignItems:"center",
         
          marginTop: windowHeight-70,
          

         

         position:'absolute',

         

    },

    

    
    loginOrSignup: {
     
      fontSize: 20
      
    }

  });

  

  if(isLoad){
    return(

      <View style={styles.loader}>


<ActivityIndicator size="large" color="red"/>
      </View>


    );

  }

  else{

    return (

      <>
      <ScrollView>
      <View style={styles.cont}>

<View>


<ImageBackground
        source={require("../srcf/hm.png")}
        resizeMode="contain"
        style={styles.holder}
        imageStyle={styles.image_imageStyle}
      >

<Text style={styles.loremIpsum}>Welcome</Text>
        <View style={styles.imageRow}>
        
      <Text style={styles.user}>{userData}</Text>
      <TouchableOpacity style= {styles.toch}>
      <Image
         source={{
          uri: userImg ,
         }}
        resizeMode="cover"
        style={styles.image}
      ></Image>

      </TouchableOpacity>

</View>

</ImageBackground>


</View>

      



<View style={styles.slider}> 
<SliderBox
  
  images={ [
    require("../srcf/pa1.jpg"),
    require("../srcf/pa2.jpg"),
    require("../srcf/pa3.jpg"),
    require("../srcf/pa4.jpg"),
    require("../srcf/pa5.jpg"),
   // Network image
             // Local image

     
  ]}
  sliderBoxHeight={210}
  
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
  paginationBoxVerticalPadding={20}
  autoplay
  circleLoop
  resizeMethod={'resize'}
  resizeMode={'contain'}
  paginationBoxStyle={{
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10
  }}
  dotStyle={{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)"
  }}
  ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
  imageLoadingColor="#2196F3"
/>


</View>

<View style={styles.afterslider}>
<View style={styles.aftersliderRow}> 


  

  <TouchableOpacity  onPress={() =>navigation.push('Freecard')}>

<Image
         source={
          require('../srcf/fc.png') 
         }
         resizeMode="contain"
          style={styles.imagecard}
        
      ></Image>

</TouchableOpacity>

<TouchableOpacity >

<Image
         source={
          require('../srcf/pc.png') 
         }
         resizeMode="contain"
          style={styles.imagecard1}
        
      ></Image>


</TouchableOpacity>


</View>

</View>


<Text>Google Video Ads Loding..</Text>




        








<Text> </Text>




      </View>


     

      </ScrollView>


      <View style={styles.footer}>
      
      <MyTabs/>
     
      </View>

      </>
    




    );

  }


  

}

export default Homepage;