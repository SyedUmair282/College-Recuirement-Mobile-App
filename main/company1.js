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
  BackHandler,
  Button,
  Image
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Item, Input, Label} from 'native-base';

import database from '@react-native-firebase/database';




class Company1 extends React.Component{
  constructor(){
    super();
    this.state={
      c_name:"",
      c_require:"",
      c_city:"",
      c_phone:"",
      Qualification:""
    }
  }
   
  

  set_data=()=>{
    if(this.state.c_name&&this.state.c_phone&&this.state.c_require&&this.state.c_city&&this.state.qualification){
    let obj={
      c_name:this.state.c_name,
      c_require:this.state.c_require,
      c_city:this.state.c_city,
      c_phone:this.state.c_phone,
      qualification:this.state.qualification
    }
    database().ref('College data').child('companies').push(obj)
    console.log("Object data is:====>",obj)
    this.setState({
        c_name:"",
        c_require:"",
        c_city:"",
        c_phone:"",
        qualification:""
    })
    Alert.alert("Attention!","Thanks for your response",
    [{text:"Ok",onPress:()=>console.log("Alert closed")}])
    }
    else{
      this.values()
    }
  }
 
  values=()=>{
    Alert.alert("Attention!","Please fill all fields",
    [{text:"Ok",onPress:()=>console.log("Alert closed")}])
  }


  render(){
    return(
        <View style={styles.body}>
            <View style={styles.body2}>
            
            <Item floatingLabel style={{marginTop:20,width:260,alignSelf:"center"}}>
              <Label>Company name</Label>
              <Input value={this.state.c_name} onChangeText={(e)=>this.setState({c_name:e})} />
            </Item>
            <Item floatingLabel style={{marginTop:20,width:260,alignSelf:"center"}}>
              <Label>Required</Label>
              <Input value={this.state.c_require}  onChangeText={(e)=>this.setState({c_require:e})} />
            </Item>
            <Item floatingLabel style={{marginTop:20,width:260,alignSelf:"center"}}>
              <Label>City</Label>
              <Input value={this.state.c_city} onChangeText={(e)=>this.setState({c_city:e})} />
            </Item>
            <Item floatingLabel style={{marginTop:20,width:260,alignSelf:"center"}}>
              <Label>Phone no</Label>
              <Input value={this.state.c_phone} keyboardType="phone-pad" maxLength={11} onChangeText={(e)=>this.setState({c_phone:e})} />
            </Item>
            <Item floatingLabel style={{marginTop:20,width:260,alignSelf:"center"}}>
              <Label>Qualified in</Label>
              <Input value={this.state.qualification} onChangeText={(e)=>this.setState({qualification:e})} />
            </Item>
            
            
            </View>
            
            <TouchableOpacity onPress={()=>this.set_data()} style={styles.button3} activeOpacity={0.9}>
            <Text style={styles.start}>Submit</Text>
            </TouchableOpacity>
        </View>
      );
    }
}
const styles = StyleSheet.create({
  
    body: {
      flex:1,
      backgroundColor:"white",
    },
    start:{
      color:"white",
      fontFamily:'times new roman',
      fontSize:18
    },
    body2:{
      
      
      borderWidth:2,
      width:300,
      height:450,
      alignSelf:"center",
      marginTop:25,
      borderRadius:20,
      backgroundColor:"white",
      borderColor:"white"
      
      
      
    },
    button3:{
      backgroundColor:"skyblue",
      width:100,
      height:40,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10,
      alignSelf:"center",
      marginTop:-10 
    }
    
    
  });

export default Company1;