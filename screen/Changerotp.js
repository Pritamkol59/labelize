import React, { useEffect,useState } from 'react'
import { Text, View ,ActivityIndicator,StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Homepage from './Homepage';
import Login from './Login';
 function Changerotp () {
 
  const navigation = useNavigation(); 

  //const [isloging,setLogin]= useState(false);

  const [keys, setKeys] = useState("");

  const [isLoad, setIsLoad] = useState(false);


 /* useEffect(()=>{
 const token = AsyncStorage.getItem('token');
 if(token){

  setLogin(true);
  console.log(token);

 }

 else{

  setLogin(false);

 }
  },[]);*/

 /* const getData = async () => {
    setIsLoad(true);
    // get Data from Storage
    try {
      const data = await AsyncStorage.getItem('token');
      if (data !== null) {
        setKeys(data);

        setIsLoad(false);

        return data;

      }
      else{

        setKeys(null);

        return data;

      }
    } catch (error) {
      console.log(error);
    }
  };*/

  

  useEffect(()=>{
    setIsLoad(true);
    AsyncStorage.getItem('token')
    .then(setKeys).then(setIsLoad(false))
    .catch(e => {})
   
   
  
    
    },[]);

    const styles = StyleSheet.create({

      loader:{

        minHeight:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
   
       }

    });


    if(isLoad){
      return(
  
        <View style={styles.loader}>
  
  
  <ActivityIndicator size="large" color="#6C63FF"/>
        </View>
  
  
      );
  
    }

  else{

    if(keys!== null && keys!=='' ){

      return (
        <View>
          <Homepage/>
        </View>
      )
    
    }
    
    else{
    
      if(keys== null && keys!=='' ){
    
        return (
          <View>
            <Login/>
          </View>
        )
      
      
        }

        else{

          return (
            <View>

<View style={styles.loader}>
  
  
  <ActivityIndicator size="large" color="#6C63FF"/>
        </View>
              
            </View>
          )

        }
    
    }

  }




    
  
}

export default Changerotp
