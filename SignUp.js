import React, {Component} from 'react';

import { StyleSheet, Text,TextInput, View, Pressable, Button, TouchableOpacity, Alert } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import Loginscreen from './Login';
//import Signupscreen from './cc/SignUp';



class SignUp extends Component {
   state = {
      cnic: '',
      email: '',
      password: ''
   }
   handlecnic = (text) => {
      this.setState({ cnic: text })
   }


   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (cnic, email, pass) => {
      alert('cnic: ' + cnic +'email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>

           <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "cnic"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlecnic}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.cnic,this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
 }
 export default SignUp


 const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
 })
 
 
 
 
 
 







//export default class SignUp extends React.Component {


   /*
   const SignUp = ({navigation}) => {




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
              
              maxLength={13}
            
              onChangeText={(text)=>{this.checkAdrs(e)}}

              keyboardType='numeric'
             
              style={{borderBottomWidth:1, borderBottomColor:'#ff0000', marginBottom:20}}
               />


              <Button
              title='SignUp'


              style={{borderBottomWidth:1, marginBottom:20}}
              
               onPress={showAlert}
              
              />
  
              



         
  
  
  
          </View>
  
         

  
         );
  
      }
   

export default SignUp



const showAlert = () =>{
   Alert.alert(
      'Account Created'
   )
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

*/