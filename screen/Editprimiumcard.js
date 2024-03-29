import React, { useEffect,useState } from 'react'
import { Text, View,BackHandler, Alert,StyleSheet,Image ,Dimensions ,ImageBackground, ScrollView, KeyboardAvoidingView,TouchableOpacity,ActivityIndicator} from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import MyTabs from './Bottomnav';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from './Constances';

export default function Editprimiumcard({route}) {
    const navigation = useNavigation(); 

  const [isSelect, setIsSelect] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [SelectCard, setIsSelectCard] = useState('');
  const [cardsource, setIscardsource] = useState('https://lableiz.com/public/storage/primum/temp1.png');
  const [cname, setcname] = useState('');
    
    const [phn, setphn] = useState('');

    const [cadd1, setcadd1] = useState('');
    const [cadd2, setcadd2] = useState('');
    const [dist, setdist] = useState('');
    const [st, setst] = useState('');
    const [pin, setpin] = useState('');
    const [ps, setps] = useState('');
    const [po, setpo] = useState('');
    const [landmark, setlandmark] = useState('');

   

    

    const [tandc, settandc] = useState('');
    const [protype, setprotype] = useState('');
    const [paymenttype, setpaymenttype] = useState('');

    const [product1, setproduct1] = useState('');
    


    const [productvalue1, setproductvalue1] = useState('');
    
    const [quality1, setquality1] = useState('');

    const [product2, setproduct2] = useState('');
    const [productvalue2, setproductvalue2] = useState('');
    const [quality2, setquality2] = useState('');
    const [productnetweight2, setproductnetweight2] = useState('');
   
    const [product3, setproduct3] = useState('');
    const [productvalue3, setproductvalue3] = useState('');
    const [quality3, setquality3] = useState('');
    const [productnetweight3, setproductnetweight3] = useState('');
   
    const [product4, setproduct4] = useState('');
    const [productvalue4, setproductvalue4] = useState('');
    const [quality4, setquality4] = useState('');
    const [productnetweight4, setproductnetweight4] = useState('');
    const [total, settotal] = useState('');
    

    const [productnetweight1, setproductnetweight1] = useState('');

    const cn= route.params.paramKey ;

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
           const postUserData= await  fetch(api+"pcardshowedit",{ 
              method:"POST",
                 headers:new Headers({
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': freshtoken
                }),
                body:JSON.stringify({
                  "num":numbed,
                  "phn":cn
                })
              
              });
                 const myData= await postUserData.json();
                
                
                //console.log(myData);
      
                
                 
                if(myData.success===true){
                  setIsLoad(false);
      
                  console.log(myData);
                  //console.log(cn);

                 
                  setcname(myData.data.cname);
                  setphn(myData.data.phn);
                  setIsSelectCard(myData.data.cardname);
                  setcadd1(myData.data.cadd1);
                  setcadd2(myData.data.cadd2);
                  setdist(myData.data.dist);
                  setst(myData.data.st);
                  setpin(myData.data.pin);
                  setps(myData.data.ps);
                  setpo(myData.data.po);

                  settandc(myData.data.tandc);
                  setprotype(myData.data.protype);
                  
                  setproduct1(myData.data.product1);
                setproductvalue1(myData.data.productvalue1);
                  setquality1(myData.data.quality1);
                  setproductnetweight1(myData.data.productnetweight1);


                  setproduct2(myData.data.product2);
                setproductvalue2(myData.data.productvalue2);
                  setquality2(myData.data.quality2);
                  setproductnetweight2(myData.data.productnetweight2);


                  setproduct3(myData.data.product3);
                setproductvalue3(myData.data.productvalue3);
                  setquality3(myData.data.quality3);
                  setproductnetweight3(myData.data.productnetweight3);


                  setproduct4(myData.data.product4);
                setproductvalue4(myData.data.productvalue4);
                  setquality4(myData.data.quality4);
                  setproductnetweight4(myData.data.productnetweight4);


                  settotal(myData.data.total);


                  setpaymenttype(myData.data.paymenttype);

                  setlandmark(myData.data.landmark);
                  setIscardsource(myData.data.cardsource);
  
                  setIsLoad(false);
                  
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




          const saves = async() =>{


            if(cname!=='' && total==!'' && phn!=='' && cadd1!==''&& ps!==''&& po!==''&& dist!==''&& st!==''&& pin!=='' && tandc!==''&& product1!==''&& quality1!==''&& productnetweight1!==''&& paymenttype!=='' ){
        
              
              setIsLoad(true);
        
              const numo= await AsyncStorage.getItem('number');
        
        
        
              console.log(cname);
              console.log(phn);
              console.log(cadd1);
              console.log(numo);
              console.log(SelectCard);
            
              setIsLoad(true);
            
                  try{
                    const tok = await AsyncStorage.getItem('token');
            
                    
                    
                    const suparfresh= JSON.parse(tok);
            
                    const freshtoken= "Bearer "+suparfresh;
                 const postUserData= await  fetch(api+"pcardeditupdate",{ 
                    method:"POST",
                       headers:new Headers({
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': freshtoken
                      }),
                      body:JSON.stringify({
                       'inttro':numo,
                        'cname' : cname,
                        'cphn':cn,
                        'phn':phn,
                        'cardname':SelectCard,
                        'cardsource':cardsource,
                        'tandc':tandc,
                        'protype':protype,
                        'paymenttype':paymenttype,
                        'product1':product1,
                        'productvalue1':productvalue1,
                        'quality1':quality1,
                        'productnetweight1':productnetweight1,
                        'cadd1':cadd1,
                        'cadd2':cadd2,
                        'ps':ps,
                        'po':po,
                        'dist':dist,
                        'st':st,
                        'pin':pin,
                        'landmark':landmark,

                        'product2':product2,
                        'productvalue2':productvalue2,
                        'quality2':quality2,
                        'productnetweight2':productnetweight2,
        
        
                        'product3':product3,
                        'productvalue3':productvalue3,
                        'quality3':quality3,
                        'productnetweight3':productnetweight3,
        
        
                        'product4':product4,
                        'productvalue4':productvalue4,
                        'quality4':quality4,
                        'productnetweight4':productnetweight4,

                        'total':total,
                        
        
                      })
                    
                    });
                       const myData= await postUserData.json();
                      
                      
                      console.log(myData);
            
                      
                       
                      if(myData.success===true){
                        
        
                        //alert("Data save SuccessFully");
        
                      const ff= JSON.stringify(myData.data);
        
                      setIsLoad(false);
        
                        alert(ff);
        
                      
                        
                       // navigation.push('Freecard');
                        
            
            
                       
            
                    
                     }
                       else{
            
                        
                    
                     }
                     }
                    
                    catch(e){
                      console.log(e);
                    }
        
        
            }
        
            
            else{
        
              alert("all  * fields are required");
            }
        
        
          }



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
  
          
  
          <Text style={styles.textmenuupper}> Update Primium card</Text>
  
         
  
          
  
  
  
  
  
  
        </ImageBackground>



        {isLoad?<View style={styles.aps}>
        <Image
        source={require('../srcf/ap.gif')}
        
        style={styles.ap}
        
        resizeMode={'cover'}
        ></Image></View>:
  
        <ScrollView>
  
        
       
        <ImageBackground
          style={styles.imgtopc}
          imageStyle={styles.imageStyle1}
          source={require("../srcf/Gradient_XrvkRkC.png")}
  
        >
<Text style={styles.textmenuupper1}> Change Card</Text>
          
<ImageBackground
        style={styles.imgtop2}
        imageStyle={styles.imageStyle}
        source={{uri:cardsource}}
      >

        </ImageBackground>


<TouchableOpacity onPress={()=>navigation.push('Changeprimiumcards',{paramKey: phn,})}>

<ImageBackground
      style={styles.imgtopp}
      imageStyle={styles.imageStyle}
      source={require("../srcf/Gradient_XrvkRkC.png")}
    >
      <Text style={styles.textmenuuppero}>Update Card</Text>
    </ImageBackground>


</TouchableOpacity>


          </ImageBackground>


          



  
        <ImageBackground
          style={styles.imgtopc}
          imageStyle={styles.imageStyle1}
          source={require("../srcf/wbk.png")}
  
        >
           
             
           <TextInput
     label="Customer Full Name *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setcname}
     maxLength={40}

 value={cname}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


  


  <TextInput
     label="Customer Phone *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}

     keyboardType="numeric"
     maxLength={10}
    
     onChangeText={setphn}

 value={phn}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>





<TextInput
     label="Product Type *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setprotype}

     maxLength={40}

 value={protype}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Product Name  *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setproduct1}

     maxLength={40}

 value={product1}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Product Quality *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setquality1}

     maxLength={40}

     keyboardType="numeric"

 value={quality1}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Product Net Weight  *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setproductnetweight1}

     maxLength={10}

 value={productnetweight1}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Product value  *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setproductvalue1}

     maxLength={40}

     keyboardType="numeric"

 value={productvalue1}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>

<TextInput
     label="Product Name 2 *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setproduct2}

     maxLength={40}

 value={product2}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Product Quality 2 *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setquality2}

     keyboardType="numeric"

     maxLength={40}

 value={quality2}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Product Net Weight 2 *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setproductnetweight2}

     maxLength={10}

 value={productnetweight2}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Product value 2 *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setproductvalue2}

     keyboardType="numeric"

     maxLength={40}

 value={productvalue2}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>




<TextInput
     label="Product Name 3 *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setproduct3}

     maxLength={40}

 value={product3}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Product Quality 3 *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setquality3}

     keyboardType="numeric"

     maxLength={40}

 value={quality3}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Product Net Weight 3 *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setproductnetweight3}

     maxLength={10}

 value={productnetweight3}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Product value 3 *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setproductvalue3}

     keyboardType="numeric"

     maxLength={40}

 value={productvalue3}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>




<TextInput
     label="Product Name 4 *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setproduct4}

     maxLength={40}

 value={product4}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Product Quality 4 *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setquality4}

     keyboardType="numeric"

     maxLength={40}

 value={quality4}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Product Net Weight 4 *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setproductnetweight4}

     maxLength={10}

 value={productnetweight4}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Product value 4 *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setproductvalue4}

     keyboardType="numeric"

     maxLength={40}

 value={productvalue4}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Total *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={settotal}

     keyboardType="numeric"

     maxLength={40}

 value={total}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>

<TextInput
     label="Payment Type"
     placeholder='COD OR PRE-PAID'
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setpaymenttype}

     maxLength={40}

 value={paymenttype}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>





<TextInput
     label="Address 1 *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setcadd1}

     maxLength={43}

 value={cadd1}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>
<TextInput
     label="Address 2"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setcadd2}

     maxLength={40}

 value={cadd2}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Police Station *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setps}

     maxLength={40}

 value={ps}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>

<TextInput
     label="Post Office *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setpo}

     maxLength={40}

 value={po}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>

<TextInput
     label="District *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setdist}

     maxLength={40}

 value={dist}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>

<TextInput
     label="State *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setst}

     maxLength={40}

 value={st}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Pin *"
     placeholder=''
     
     mode='outlined'

     keyboardType="numeric"
     style={styles.placeholder}
    
     onChangeText={setpin}

     maxLength={25}

 value={pin}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>
  

  <TextInput
     label="LandMark "
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder}
    
     onChangeText={setlandmark}

     maxLength={40}

 value={landmark}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>


<TextInput
     label="Product Trams and  Condition *"
     placeholder=''
     
     mode='outlined'
     style={styles.placeholder1}
    
     onChangeText={settandc}

     maxLength={200}

     multiline= {true}

 value={tandc}
    
     theme={{ roundness: 35,  colors:{text:'black',primary:"black"}}} 
     

 ></TextInput>








<View style={styles.tv}>

</View>




      </ImageBackground>


      
      

      <TouchableOpacity  onPress={saves}>

<Image
source={require('../srcf/tick.png')}
resizeMode="cover"
style={styles.tick}
></Image>

</TouchableOpacity>

<View style={styles.space}>


  </View>
      </ScrollView>
  }

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

          tv:{
            marginTop:50,
          },
        
          imgs:{
        
           
           
            height:200,
            width:windowWidth,
          },
        
           imgtop2:{
        
        marginTop:5,
        height: 200,
       
        
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


          imgtopc:{

            marginTop:10,
            
           
            
            width:windowWidth,
            borderWidth: 1,
  borderColor: "#000000",
  borderRadius: 10,
  overflow: "hidden"


          },


          space:{

            marginTop:150,

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
          placeholder1: {
    
   
    
            height:100,
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

          placeholder1: {
  
 
  
            height:100,
            marginTop: 20,
            marginLeft: 18,
            marginRight:18,
            //backgroundColor:'#6C63FF',
            //backgroundColor:'#fcfc',
            backgroundColor:'#fff',
            
  
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
