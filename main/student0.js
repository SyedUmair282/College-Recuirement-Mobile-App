import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Item, Input, Label, Button } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import {connect} from 'react-redux';
// import {sign_in} from '../store/action/index';
// import auth from '@react-native-firebase/auth';


class Student0 extends React.Component{
  constructor(){
    super()
    this.state={
      email:null,
      password:null
        
    }  
  }
  componentDidMount() {
    SplashScreen.hide();

    // auth().onAuthStateChanged((user) => {
    //   if (user) {
        
    //     console.log("user signed in")
    //     this.props.navigation.navigate("Menu")
        
    //   } else {
    //     console.log("user signed out")
    //     this.props.navigation.navigate("Login")
    //   }
    // });

  }
    // exit=()=>{
    // Alert.alert("Attention!","Do you want to exit?",
    // [{text:"Yes",onPress:()=>BackHandler.exitApp()},{text:"No"}])
    // }
//   values=()=>{
//     Alert.alert("Attention!","Please fill all fields",
//     [{text:"Ok",onPress:()=>console.log("Alert closed")}])
//   }
 
    
  
  render(){
    
    return(
      
      <View style={styles.body}>

        <StatusBar backgroundColor="black"/>
        <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Student1")} style={styles.button3} activeOpacity={0.5}>
            <Text style={styles.start}>Enter your data</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={()=>this.props.navigation.navigate("Student2")} activeOpacity={0.5}>
            <Text style={styles.start}>Company vacancies</Text>
          </TouchableOpacity>
          

        </View>
        
        
      </View>
      
    )
  }
  
  
}

const styles = StyleSheet.create({
  
  body: {
    flex:1,
    backgroundColor:"white",
  },
  start:{
    color:"black",
    fontFamily:'times new roman',
    fontSize:28
  },
  
  button3:{
    backgroundColor:"skyblue",
    width:300,
    height:150,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    marginTop:-50
    
      
  },
  button2:{
    backgroundColor:"skyblue",
    width:300,
    height:150,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    marginTop:30
    
  },
  button4:{
    backgroundColor:"skyblue",
    width:50,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    position: 'absolute',
    bottom:15,
    right:15  
  },
  button5:{
    backgroundColor:"skyblue",
    width:50,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    position: 'absolute',
    bottom:15,
    left:15
  }
  
});
// const mapstateToProps=(state)=>({
//   users:state.name
// })
// const mapDispatchToProps=(dispatch)=>({
//   sign_in:(email,pass,data) => dispatch(sign_in(email,pass,data))
// })
export default Student0;