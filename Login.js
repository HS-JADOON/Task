import React, {Component} from 'react';

import { StyleSheet, Text,TextInput, View, Pressable, Button, TouchableOpacity, Alert } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import Loginscreen from './cc/Login';
//import Signupscreen from './cc/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DashScreen from './DashBoard'


/*
class Login extends Component {
  state = {
     email: '',
     password: ''
  }
  handleEmail = (text) => {
     this.setState({ email: text })
  }
  handlePassword = (text) => {
     this.setState({ password: text })
  }
  login = (email, pass) => {
     alert('email: ' + email + ' password: ' + pass)
  }
  render() {
     return (
        <View style = {styles.container}>
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
                 () => 
              }>
              <Text style = {styles.submitButtonText}> Submit </Text>
           </TouchableOpacity>
        </View>
     )
  }
}
export default Login
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





*/





//export default class Login extends React.Component {

const Stack = createNativeStackNavigator();

const Login = ({navigation}) => {

  
      return(

        <View style = {styles.container}>
           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Email"
              placeholderTextColor = "#9a73ef"
              autoCapitalize = "none"
              />
           
           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Password"
              placeholderTextColor = "#9a73ef"
              autoCapitalize = "none"
              />
           
           <TouchableOpacity
              style = {styles.submitButton}
              onPress = {() => navigation.navigate('DashBoard')} title='Loginn'
            >
              
              <Text style = {styles.submitButtonText}> Submit </Text>
           </TouchableOpacity>
        </View>


        /*



          <View style={{flex:1,backgroundColor: '#add8e6', justifyContent: 'center', alignContent:'center'}}>
  
              
                   
        <View style = {styles.container}>
        <Text>Welcome To Login PAGE</Text>

         </View>


             <TextInput
              placeholder='Enter EMAIL'
            

             
              style={{borderBottomWidth:1, borderBottomColor:'#ff0000', marginBottom:20}}
               />


               
              <TextInput
              placeholder='Enter CNIC'
              keyboardType='numeric'
             
              style={{borderBottomWidth:1, borderBottomColor:'#ff0000', marginBottom:20}}
               />


             <Button   onPress={ () => navigation.navigate('DashBoard')} title='Loginn'>
            
                

            
         


             </Button>




           
  
  
  
          </View>
  
         */

  
         );
  
      }
  



export default Login

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




/*
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