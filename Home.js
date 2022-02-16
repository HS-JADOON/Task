import React from 'react'
//import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Button, Text,TouchableOpacity} from 'react-native';
//import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';



const Home = ({navigation}) => {

         return(

          


           <View style={styles.container}>
            <Text style={styles.text}> If you have account then Login other whise signup</Text>

            

            
             
           <TouchableOpacity
              style = {styles.submitButton}
              onPress = {() => navigation.navigate('Login')} title='Login'
            >
              
              <Text style = {styles.submitButtonText}> Login </Text>
           </TouchableOpacity>

           <TouchableOpacity
              style = {styles.submitButton}
              onPress = {() => navigation.navigate('SignUp')} title='SignUp'
            >
              
              <Text style = {styles.submitButtonText}> SignUP </Text>
           </TouchableOpacity>



            </View>
       );
    

}



export default Home


const styles = StyleSheet.create({
  container: {
     paddingTop: 300
  },
  text: {
     margin: 15,
     height: 40,
     //borderWidth: 1
     
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