import React from 'react';

import { StyleSheet, Text,TextInput, View, Pressable, Button, TouchableOpacity, Alert } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import Loginscreen from './cc/Login';
//import Signupscreen from './cc/SignUp';



export default class SignUp extends React.Component {


   
   render(){
      return(



          <View style={{flex:1,backgroundColor: '#add8e6', justifyContent: 'center', alignContent:'center'}}>
  
              
                   
        <View style = {styles.container}>
        <Text>Welcome To SIGNUP PAGE</Text>

         </View>


              <TextInput
              placeholder='Enter NUMBER'
              keyboardType='numeric'
             
              style={{borderBottomWidth:1, borderBottomColor:'#ff0000', marginBottom:20}}
               />


             <TextInput
              placeholder='Enter EMAIL'
             
              style={{borderBottomWidth:1, borderBottomColor:'#ff0000', marginBottom:20}}
               />


               
              <TextInput
              placeholder='Enter CNIC'

              keyboardType='numeric'
             
              style={{borderBottomWidth:1, borderBottomColor:'#ff0000', marginBottom:20}}
               />
  
              <Button
              title='SignUp'


              style={{borderBottomWidth:1, marginBottom:20}}
              
              />



         
  
  
  
          </View>
  
         

  
         );
  
      }
  

}




const styles = StyleSheet.create({
    container: {
       flex: 0,
       backgroundColor: '#add8e6',
       alignItems: 'center',
       justifyContent: 'center',
       fontWeight:'bold',
       
    }
});