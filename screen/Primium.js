
import React, {Component, useEffect,useState,useCallback } from 'react'
import { Text, View,Linking,BackHandler, Alert,StyleSheet,Image ,Dimensions ,ImageBackground,TextInput, ScrollView, KeyboardAvoidingView,TouchableOpacity,ActivityIndicator, FlatList} from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MyTabs from './Bottomnav';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Pdf from 'react-native-pdf';

import * as OpenAnything from 'react-native-openanything';
import Icon from 'react-native-vector-icons/AntDesign';
import RazorpayCheckout from 'react-native-razorpay';



  import { api } from './Constances';
export default function Primium() {


  const navigation = useNavigation(); 
  
  const [isLoad, setIsLoad] = useState(false);
  const [isUpm, setUp] = useState(false);
  const [LoadData, setLoadData] = useState();
  const [Name, setName] = useState('');
  const [Bname, setBName] = useState('');
  const [Email, setEmail] = useState('');
  const [paid, setPayid] = useState('');
  const [amm, setAmmount] = useState('');
  const [sname, setSname] = useState('');
  

  


  useEffect(()=>{
  
    setIsLoad(true);
    fetchUserData();
    

      },[]);

const handlePayment= async(item)=>{

  const numbed= await AsyncStorage.getItem('number');

  setAmmount(item.price);
  setSname(item.name);

    const ammount= (item.price)*100;
     const options = {
      key: "rzp_test_IkVy8XDMnAek0t",
      amount: ammount,
      currency: "INR",
      name: Bname,
      description: "Test Transaction",
      image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
     
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: Name,
        email: Email,
        contact: numbed,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
      }


      RazorpayCheckout.open(options).then((data) => {
        
        alert(`Success: ${data.razorpay_payment_id}`);


       setPayid(data.razorpay_payment_id);
        
    
       handle();






      }).catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
       
        }



        const handle= async()=>{
          const numbed= await AsyncStorage.getItem('number');

          try{

            const tok = await AsyncStorage.getItem('token');

            const suparfresh= JSON.parse(tok);
      
          const freshtoken= "Bearer "+suparfresh;

            const postpayment= await  fetch(api+"paymentstore",{ 
              method:"POST",
                 headers:new Headers({
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': freshtoken
                }),
                body:JSON.stringify({
                  "pid":paid,
                  "name":Bname,
                  "phn":numbed,
                  "email":Email,
                  "ammount":amm,
                  "tran":sname,
                  
          
                })
  
  
                
              
              });
  
              const pay= await postpayment.json();
  
              if(pay.success===true){
    
    
               // alert("Done");

               navigation.push('Plus');
    
              }

              else{
        
                    
               /* try {
                       await AsyncStorage.removeItem('token');
                       await AsyncStorage.removeItem('number');
                      console.log("Done");
                      navigation.replace('Login');
                 
                   }
                   catch(exception) {
                     console.log(exception);
                   }
                }*/

                alert("Error");


              }



          }
          
          catch(exception) {
            console.log(exception);
          }
          



//console.log("ok");

        }




      const fetchUserData = async () => {
        const numbed= await AsyncStorage.getItem('number');
        
        try{
      
          const tok = await AsyncStorage.getItem('token');
          
                  
                  
          const suparfresh= JSON.parse(tok);
      
          const freshtoken= "Bearer "+suparfresh;


     
       const postUserData= await  fetch(api+"users",{ 
          method:"POST",
             headers:new Headers({
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': freshtoken
            }),
            body:JSON.stringify({
              "number":numbed,
              
              
      
            })
          
          });
             const myData= await postUserData.json();
      
             console.log(myData);
      
             
             
      
             if(myData.success===true){
      
              
              console.log(myData.data.data);

              setName(myData.data.users.name);
              setBName(myData.data.users.business);
              setEmail(myData.data.users.email);

            
              if(myData.data.users.pid=='0'){


                const postUserDa= await  fetch(api+"paylist",{ 
                  method:"POST",
                     headers:new Headers({
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                      'Authorization': freshtoken
                    }),
                    body:JSON.stringify({
                      "num":numbed,
                      
                      
              
                    })
                  
                  });

                  const myDat= await postUserDa.json();

                  console.log(myDat.data);
                  setLoadData(myDat.data);

                  setUp(true);

                  setIsLoad(false);

                  console.log("this is ff:",LoadData);

              }


              else{
                navigation.push('Primiumcard');

              }
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


{isUpm?<ImageBackground
          style={styles.imgtop10}
          imageStyle={styles.imageStyle1}
          source={require("../srcf/Gradient_XrvkRkC.png")}
  
        >
           
           <TouchableOpacity  onPress={() =>navigation.push('Homepage')}>
  
  <Image
  source={require('../srcf/back.png')}
  resizeMode="cover"
  style={styles.imagex1}
  ></Image>
  
  </TouchableOpacity>

  <Text style={styles.textmenuupper}> Select Any Subscription</Text>

  </ImageBackground>:null}



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

<TouchableOpacity >

                  <ImageBackground
                style={styles.card1}
                imageStyle={styles.card2}
                source={item==true?require("../srcf/Gradient_XrvkRkC.png"):require("../srcf/gradient.png")}
              >
                <View style={styles.imgwithcard}>
      
      
                 
               
                  
                  
                  <Text style={styles.textcard}>  {item.name}</Text>
      
                  </View>
                  <Text style={styles.textcard1}>Just Only:- {item.price}/- </Text>
                  
                  <TouchableOpacity onPress={()=>handlePayment(item)}>
  
  <ImageBackground
    style={styles.cardbutton}
    imageStyle={styles.cardbuttonStyle}
    source={require("../srcf/redg.png")}
  >
    <Text style={styles.buttoncardtext}>Pay Now</Text>
  </ImageBackground>

  </TouchableOpacity>
                   
                   
                   
                   </ImageBackground>
                   </TouchableOpacity>
      
                   <View style={styles.imgbutton}>
      
                   
  
                  
      
             
      
      
                   
      
                   </View>


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

  loader:{

    marginTop:10,
    alignItems:'center'

  },

  upermenu:{

    marginTop:-1,
    flexDirection: "row",

  },

  imgtop1:{


    width: (windowWidth/3),
height: 50,
borderWidth: 1,
borderColor: "#000000"

    
  },

  imgtop10:{

    marginTop:0,
        
    height: 100,
    
    width:windowWidth,
   
    
        
      },

  cardbutton:{

    
   
    
    width: (windowWidth/3),
height: 50,
borderWidth: 1,
borderColor: "#000000",
borderRadius: 10,
overflow: "hidden",
marginTop:"2%",
marginLeft:"60%"


    
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

  cardbuttonStyle:{

    width: (windowWidth/3),
height: 50,


  },

  invisblecard:{
    marginTop:10,
    height:100,
  },

  card1:{

    marginTop:15,
    width: windowWidth,
height: 150,
borderWidth: 1,
borderColor: "#000000",
borderRadius: 10,
overflow: "hidden"

    
  },

  imageStyle:{

    width: (windowWidth/3)-1,
height: 50,

  },

 

  card2:{

    width: windowWidth,
height: 150,

  },


 
  textmenuupper:{

    color: "rgba(255,255,255,1)",
    marginTop: 12,
    marginLeft: '20%',
    marginRight:'20%',
    alignItems:'center',

  },
  textmenuupper1:{

    color: "rgba(255,255,255,1)",
    marginTop: 10,
    marginLeft: '25%',
    marginRight:'25%',
    alignItems:'center',

  },

  cardstart:{

    marginTop:65,

  },
  cardend:{

    marginTop:20,
    height:80,

  },
  textcard:{

    color:'white',
    fontSize:20,
   
    fontWeight: "bold",
    
  },

  textcard1:{

    color:'white',
    fontSize:18,
    marginTop:'20%',

    marginLeft:'8%',
    position:'absolute',
    
  },
  

  imgwithcard:{

    flexDirection:'row',
    marginTop:'5%',
    marginLeft:'5%',
    marginRight:'5%'

  },
  imgbutton:{

    flexDirection:'row',
    marginTop:0,
    

  },

  imagex:{

    marginTop:'5%',
    width: 80,
  height: 80,

  /*borderRadius: 100,
  borderWidth: 1,
  borderColor: "#000000",*/

  },

  imagex1:{
    height:20,
    width:30,
    marginTop:'3%',
    marginLeft:30
  },

  buttoncardtext:{

    marginTop:'8%',
    marginLeft:'20%',
    marginRight:'10%',
    fontSize:18,
    color:'white',
  },

  fatlist:{


    marginTop:20,

  },


    footer:{

 
        // backgroundColor: "rgba(231,231,231,1)",
         alignItems:"center",
        
         marginTop: windowHeight-70,
         

        

        position:'absolute',

        

   },

});