import React, { useEffect,useState } from 'react'
import { Text, View,BackHandler, Alert,StyleSheet,Image ,Dimensions ,ImageBackground, ScrollView, KeyboardAvoidingView,TouchableOpacity,FlatList} from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import MyTabs from './Bottomnav';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from './Constances';
//import { SelectCountry } from 'react-native-element-dropdown';

export default function Changefreecards ({route}) {

    const navigation = useNavigation(); 
    const [isLoad, setIsLoad] = useState(false);
    const [LoadData, setLoadData] = useState();
    const cphn= route.params.paramKey ;


    useEffect(()=>{
  
        setIsLoad(true);
        fetchUserData();
        
  
          },[]);


          const fetchUserData = async () => {

            try{
                const tok = await AsyncStorage.getItem('token');
        
                const numbed= await AsyncStorage.getItem('number')
                
                const suparfresh= JSON.parse(tok);
        
                const freshtoken= "Bearer "+suparfresh;
             const postUserData= await  fetch(api+"singelcardsvarity",{ 
                method:"POST",
                   headers:new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': freshtoken
                  }),
                  body:JSON.stringify({
                    "num":numbed,
                    "cphn":cphn
                  })
                
                });
                   const myData= await postUserData.json();
                  
                  
                  //console.log(myData);
        
                  
                   
                  if(myData.success===true){
                  
        
                   
                    
                    
                   
                    setLoadData(myData.data);
                   
                   
    
                    setIsLoad(false);

                    console.log(myData.data);
                    
                    }
                   else{
        
                    
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
                 }
                
                catch(e){
                  console.log(e);
                }
        
            }


              const changer= async(item) =>{

                /*console.log(item.name);
                console.log(item.url);*/
                setIsLoad(true);

                try{
                  const tok = await AsyncStorage.getItem('token');
          
                  const numbed= await AsyncStorage.getItem('number')
                  
                  const suparfresh= JSON.parse(tok);
          
                  const freshtoken= "Bearer "+suparfresh;
               const postUserData= await  fetch(api+"singelcardchange",{ 
                  method:"POST",
                     headers:new Headers({
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                      'Authorization': freshtoken
                    }),
                    body:JSON.stringify({
                      "num":numbed,
                      "cphn":cphn,
                      "cname":item.name,
                      "cimgurl":item.url
                    })
                  
                  });
                     const myData= await postUserData.json();
                    
                    
                    //console.log(myData);
          
                    
                     
                    if(myData.success===true){
                    
                      setIsLoad(false);

                      navigation.push('EditFreeCard', {paramKey: cphn});
  
                     
                      
                      }
                     else{
          
                      
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
                   }
                  
                  catch(e){
                    console.log(e);
                  }


              }

  
    return (


      <View style={styles.body}>


<ImageBackground
          style={styles.imgtop10}
          imageStyle={styles.imageStyle1}
          source={require("../srcf/Gradient_XrvkRkC.png")}
  
        >
           
           <TouchableOpacity  onPress={() =>navigation.push('EditFreeCard', {paramKey: cphn})}>
  
  <Image
  source={require('../srcf/back.png')}
  resizeMode="cover"
  style={styles.imagex}
  ></Image>
  
  </TouchableOpacity>

  <Text style={styles.textmenuupper}> Select Any Cards For UpDate</Text>

  </ImageBackground>



  {isLoad?<View style={styles.aps}>
        <Image
        source={require('../srcf/ap.gif')}
        
        style={styles.ap}
        
        resizeMode={'cover'}
        ></Image></View>:



<FlatList


style={styles.fatlist}
    
    data={LoadData}

    renderItem={({item})=>{

return(

<View>

<TouchableOpacity onPress={()=>changer(item)}>

<ImageBackground
  style={styles.imgtop2}
  imageStyle={styles.imageStyle}
  source={{uri:item.url}}
>
 
</ImageBackground>

</TouchableOpacity>


</View>



);





    }





    }

    keyExtractor={(item,index)=> index.toString()}

    />
            
            
            }

<View style={styles.imgtop5}></View>

<View style={styles.footer}>
      
      <MyTabs/>
     
      </View>











      </View>



    )
  
}

const styles = StyleSheet.create({

    body:{

        backgroundColor:"#313131",
    width:windowWidth,
    height:'100%',

    },

    
    
    
    
    ap:{
      justifyContent: 'center',
      alignItems: 'center',

      height:100,
      width:100,




    },
    aps:{
      marginTop:'55%',
      justifyContent: 'center',
      alignItems: 'center',

      




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
        
        marginTop:10,
        height: 200,
       
        
        width:windowWidth,
        
            
          },
           imgtop5:{
        
        marginTop:10,
        height: 80,
       
        
        width:windowWidth,
        
            
          },

    footer:{

  alignItems:"center",
         marginTop: windowHeight-70,
         position:'absolute',

        },

        textmenuuppero:{

          color: "rgba(255,255,255,1)",
          marginTop: 12,
          marginLeft: '38%',
          marginRight:'35%',
          alignItems:'center',
          fontSize:16,
          fontWeight: "bold",
      
        },

          textmenuupper:{

            color: "rgba(255,255,255,1)",
            marginTop: 20,
            marginLeft: 50,
            alignItems:'center',
            fontSize:20
    
          },
          textmenuupper1:{

            color: "rgba(255,255,255,1)",
            marginTop: 2,
            marginLeft: 5,
            alignItems:'center',
            fontSize:20
    
          },

          imagex:{
            height:20,
            width:30,
            marginTop:'3%',
            marginLeft:30
          },

          tick:{
            height:50,
            width:100,
            marginLeft:'39%',
            marginRight:'50%',
            marginTop:'6%',
            
          },

          fatlist:{


            marginTop:20,
        
          },

          imgtopc:{

            marginTop:10,
            
           
            
            width:windowWidth,
            borderWidth: 1,
  borderColor: "#000000",
  borderRadius: 10,
  overflow: "hidden"


          },


          space:{

            marginTop:50,

            height: windowHeight-700,

          },


          form:{
           
      
      alignItems:"center",



          },
          
          forms:{

            color: "rgba(255,255,255,1)",
            marginTop: 20,
            
            
            fontSize:20
    
          },

          placeholder: {
    
   
    
    
            marginTop: 20,
            marginLeft: 18,
            marginRight:18,
            //backgroundColor:'#6C63FF',
           // backgroundColor:'#fcfc',
           backgroundColor:'#fff',
            

          },

          imgtopp:{


            width: windowWidth,
        height: 50,
        borderWidth: 1,
        borderColor: "#000000"
        
            
          },

          textare:{

            marginTop: 20,
            marginLeft: 18,
            marginRight:18,
            //backgroundColor:'#6C63FF',
            backgroundColor:'#fcfc',

            height:windowHeight-510
          },


          loader:{

            minHeight:"100%",
            backgroundColor:'transparent',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
       
           }

         




});
