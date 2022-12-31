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


  import { api } from './Constances';

export default class Invoice extends Component {
    constructor(props){
        super(props)
    
        this.state={
    
          data:[],
          Page: 1,
          
        }
    
      }
    
      componentDidMount(){
    
        this.finds();
      }
    
      Plus=()=>{
    
        const navigation = useNavigation(); 
    
    
        const styles = StyleSheet.create({
    
    
          pluse:{
    
            width: 65,
            height: 65,
      },
      
      
          plusto:{
      
            marginTop: windowHeight-240,
            marginLeft:'80%',
               position:'absolute',
      
          },
    
    
        });
    
        return(
    
          <View style={styles.plusto}>
    
    
    
          <TouchableOpacity onPress={() =>navigation.push('InvoiceCreate')}> 
          
          <Image
              source={require('../srcf/plus.png')}
              resizeMode="contain"
              style={styles.pluse}
            ></Image>
          
          </TouchableOpacity>
          
          
          </View>
        )
    
      }
    
    
      Uppermenu=()=>{
    
        const navigation = useNavigation();
    
        return(
    
    
          <View style={styles.upermenu}>
    
          <TouchableOpacity onPress={() =>navigation.push('Primiumcard')}>
    
        <ImageBackground
          style={styles.imgtop1}
          imageStyle={styles.imageStyle}
          source={require("../srcf/Gradient_XrvkRkC.png")}
        >
          <Text style={styles.textmenuupper1}> <Icon name="arrowleft" size={30} color="#fff" /></Text>
        </ImageBackground>
    
        </TouchableOpacity>
    
          <TouchableOpacity onPress={() =>navigation.push('Invoice')}>
    
        <ImageBackground
          style={styles.imgtop1}
          imageStyle={styles.imageStyle}
          source={require("../srcf/Gradient_XrvkRkC.png")}
        >
          <Text style={styles.textmenuupper11}>    Invoice</Text>
        </ImageBackground>
    
        </TouchableOpacity>
    
    
    {/*
          <TouchableOpacity onPress={() =>navigation.push('Primiumsavelink')}>
    
        <ImageBackground
          style={styles.imgtop1}
          imageStyle={styles.imageStyle}
          source={require("../srcf/Gradient_XrvkRkC.png")}
        >
          <Text style={styles.textmenuupper}>Save Link</Text>
        </ImageBackground>
    
        </TouchableOpacity>
        */ }
    </View>
        )
      }
    
      
      
    
        Fetchs= async(item) =>{
    
    
          //console.log(item.cno);
    
          
          const numbed= await AsyncStorage.getItem('number');
        
          try{
        
            const tok = await AsyncStorage.getItem('token');
            
                    
                     
            const suparfresh= JSON.parse(tok); 
        
            const freshtoken= "Bearer "+suparfresh;
         const tou= await  fetch(api+"genpdf",{ 
            method:"POST",
               headers:new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': freshtoken
              }),
              body:JSON.stringify({
                "num":numbed,
                "id":item.id
    
                
                
                
        
              })
            
            });
               const Url= await tou.json();
    
               console.log(Url);
    
               
    
               if(Url.success===true){
    
               /* Linking.canOpenURL(Url.data).then(supported => {
                  if (supported) {
                    Linking.openURL(Url.data);
                  } else {
                    console.log("Don't know how to open URI: " + Url.data);
                  }
                });*/
    
                OpenAnything.Pdf(Url.data);
    
            }
    
    
    
          }
    
    
               catch(e){
        
                console.log(e);
                }
    
                
              
              }
    
    
        destroy= async(item) =>{
    
    
          //console.log(item.cno);
    
          
          
          const numbed= await AsyncStorage.getItem('number');
        
          try{
        
            const tok = await AsyncStorage.getItem('token');
            
                    
                     
            const suparfresh= JSON.parse(tok); 
        
            const freshtoken= "Bearer "+suparfresh;
         const tou= await  fetch(api+"invoicedelet",{ 
            method:"POST",
               headers:new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': freshtoken
              }),
              body:JSON.stringify({
                "num":numbed,
                "id":item.id
    
                
                
                
        
              })
            
            });
               const Url= await tou.json();
    
               console.log(Url);
    
               if(Url.success===true){
    
                this.setState({data:[],Page:1}, this.componentDidMount)
    
               }
    
    
    
          }
    
    
               catch(e){
        
                console.log(e);
                }
    
                
              
              }
    
    
         finds = async() =>{
    
          const numbed= await AsyncStorage.getItem('number');
        
          try{
        
            const tok = await AsyncStorage.getItem('token');
            
                    
                    
            const suparfresh= JSON.parse(tok);
        
            const freshtoken= "Bearer "+suparfresh;
         const postUserData= await  fetch(api+"showinvoice?page="+this.state.Page,{ 
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
               const myData= await postUserData.json();
        
               //console.log(myData);
        
               
               
        
               if(myData.success===true){
        
                
                console.log(myData.data.data);
               // setSS(myData.data.data);
    
               this.setState({
                 data:this.state.data.concat(myData.data.data) 
               });
        
                
        
        
        
               }
        
        
        
        
          }
          catch(e){
        
          console.log(e);
          }
        
        }
    
        HandelLoadMore=()=>{
    
          this.setState({Page:this.state.Page+1}, this.finds)
    
    
        }
    
    
        rendFooter=()=>{
    
          return(
    
            <View style={styles.loader}> 
    
            <ActivityIndicator size={"large"}/>
    
    
            </View>
          )
    
    
        }
    
    
        main=()=>{
          const navigation = useNavigation();
          
         // const[tempData, settempData]= useState([]);
          
          const OnSelect=ind=>{
    
            const temp=[];
    
            this.state.data.map((item,index)=>{
    
              if(index==ind){
                
               temp.push(true);
               console.log('this is true Select:',item);
    
              }
              else{
                
    
                temp.push(false);
                console.log('this is false Select:',item);
              }
            });
    
            settempData(temp);
    
            console.log(tempData);
          }
    
         
    
        const  renerItem=({item , index})=>{
    
       
    
       
            return(
            
              <View>
                        <TouchableOpacity>
    
                        <ImageBackground
                      style={styles.card1}
                      imageStyle={styles.card2}
                      source={item==true?require("../srcf/pbg.jpg"):require("../srcf/pbg.jpg")}
                    >
                      <View style={styles.imgwithcard}>
            
            
                       
                      <Image
            source={require("../srcf/invoice.png")}
            resizeMode="cover"
            style={styles.imagex}
            ></Image>
                        
                        
                        <Text style={styles.textcard}>Invoice No:- {item.invoiceno}</Text>
            
                        </View>
                        <Text style={styles.textcard1}>Phone No:- {item.phn}  </Text>
                        
                       
                         
                         
                         
                         </ImageBackground>
                         </TouchableOpacity>
            
                         <View style={styles.imgbutton}>
            
                         <TouchableOpacity onPress={() =>navigation.push('InvoiceUpdate',{paramKey: item.invoiceno,})}>
            
                    <ImageBackground
                      style={styles.cardbutton}
                      imageStyle={styles.cardbuttonStyle}
                      source={require("../srcf/gradient.png")}
                    >
                      <Text style={styles.buttoncardtext}>Edit</Text>
                    </ImageBackground>
            
                    </TouchableOpacity>
        
                         <TouchableOpacity  onPress={()=> this.destroy(item) } >
            
                    <ImageBackground
                      style={styles.cardbutton}
                      imageStyle={styles.cardbuttonStyle}
                      source={require("../srcf/Gradient_XrvkRkC.png")}
                    >
                      <Text style={styles.buttoncardtext}>Delete</Text>
                    </ImageBackground>
            
                    </TouchableOpacity>
            {/*
                    <TouchableOpacity onPress={()=> this.Fetchs(item) }>
                    <ImageBackground
                      style={styles.cardbutton}
                      imageStyle={styles.cardbuttonStyle}
                      source={require("../srcf/redg.png")}
                    >
                      <Text style={styles.buttoncardtext}>Print</Text>
                    </ImageBackground>
            
                    </TouchableOpacity>

            */}
                    <TouchableOpacity >
                    <ImageBackground
                      style={styles.cardbutton}
                      imageStyle={styles.cardbuttonStyle}
                      source={require("../srcf/redg.png")}
                    >
                      <Text style={styles.buttoncardtext}>Print</Text>
                    </ImageBackground>
            
                    </TouchableOpacity>
            
            
                         
            
                         </View>
        
                        
                       
                      </View>
            )
            
            }
    
    
    
    
    
    
    
    
          return(
    
            <View style={styles.body}>
        
           
            
        
            <FlatList
        
            style={styles.fatlist}
        
            data={this.state.data}
        
            renderItem={renerItem}
        
            keyExtractor={(item,index)=> index.toString()}
        
            onEndReached= {this.HandelLoadMore}
        
            
        
            
        
        
        
        
            />
        
        <View style={styles.invisblecard}>
        
        
        
        </View>
         
        
       
        
        </View>
        
          )
    
        }
    
    
      
    
    render(){
      
      return(
    
    
    <>
    
    <this.Uppermenu/>
    
    <this.main/>
    
    
    <this.Plus/>
        
        
        <View style={styles.footer}>
        
        <MyTabs/>
       
        </View>
    
        </>
    
    
      )
       
    
    
    }
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
  
  
      width: (windowWidth/2),
  height: 50,
  borderWidth: 1,
  borderColor: "#000000"
  
      
    },
  
    cardbutton:{
  
      
     
      
      width: (windowWidth/3),
  height: 50,
  borderWidth: 1,
  borderColor: "#000000",
  borderRadius: 10,
  overflow: "hidden"
  
      
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
  
      width: (windowWidth/2)-1,
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
    textmenuupper11:{
  
      color: "rgba(255,255,255,1)",
      marginTop: 12,
      marginLeft: '30%',
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
      marginLeft:'5%',
      fontWeight: "bold",
      
    },
  
    textcard1:{
  
      color:'white',
      fontSize:15,
      marginTop:'15%',
  
      marginLeft:'35%',
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
  
    buttoncardtext:{
  
      marginTop:'5%',
      marginLeft:'30%',
      marginRight:'30%',
      fontSize:16,
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
