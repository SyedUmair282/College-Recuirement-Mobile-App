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
import {connect} from 'react-redux';
import {sign_in} from '../store/action/index';
import auth from '@react-native-firebase/auth';


class Student extends React.Component{
  constructor(){
    super()
    this.state={
      email:null,
      password:null,
      data2:"student"
        
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
    values=()=>{
    Alert.alert("Attention!","Please fill all fields",
    [{text:"Ok",onPress:()=>console.log("Alert closed")}])
  }
 
    
  
  render(){
    
    return(
      
      <View style={styles.body}>

        <StatusBar backgroundColor="black"/>
        <View style={styles.body2}>
          <View>
            <Text style={{fontSize:30,textAlign:"center",fontFamily:"times new roman",marginTop:10}}>Student login</Text>
          <Item floatingLabel style={{marginTop:30,width:260,alignSelf:"center"}}>
              <Label>Email</Label>
              <Input value={this.state.email} onChangeText={(e)=>this.setState({email:e})} />
            </Item>
            <Item floatingLabel style={{marginTop:15,width:260,alignSelf:"center"}}>
              <Label>Password</Label>
              <Input secureTextEntry={true} value={this.state.password} onChangeText={(e)=>this.setState({password:e})}/>
            </Item>
            <TouchableOpacity style={styles.button2} onPress={this.state.email&&this.state.password?()=>this.props.sign_in(this.state.email,this.state.password,this.props,this.state.data2):()=>this.values()} activeOpacity={0.5}>
                <Text style={styles.start}>Sign in</Text>
            </TouchableOpacity>
            <Text style={{alignSelf:"center",marginTop:20}}>_________________or_________________</Text>
            
            
          </View> 
          
        </View>
        <View>
            <TouchableOpacity style={styles.button3} onPress={()=>this.props.navigation.navigate("Account")} activeOpacity={0.5}>
                <Text style={styles.start}>Create a new account</Text>
            </TouchableOpacity>
        </View>
        
        
      </View>
      
    )
  }
  
  
}

const styles = StyleSheet.create({
  create:{
    height:50,
    width:150,
    alignSelf:"center",
    marginTop:10
  },
  body: {
    flex:1,
    backgroundColor:"white",
  },
  body2:{
    
    
    
    width:300,
    height:350,
    marginLeft:30,
    marginTop:-140,
    borderColor:"white",
    borderRadius:30,
    backgroundColor:"white",
    position:"absolute",
    top:200,
    
    
  },
  start:{
    color:"black",
    fontFamily:'times new roman',
    fontSize:18,
    textAlign:"center"
  },
  
  button3:{
    backgroundColor:"skyblue",
    width:230,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    position:"absolute",
    top:400,
    alignSelf:"center"
    
    
      
  },
  button2:{
    backgroundColor:"skyblue",
    width:150,
    height:40,
    justifyContent:"center",
    alignSelf:"center",
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
const mapDispatchToProps=(dispatch)=>({
  sign_in:(email,pass,data,data2) => dispatch(sign_in(email,pass,data,data2))
})
export default connect(null,mapDispatchToProps) (Student);