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
  Image,
  ActivityIndicator
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Item, Input, Label} from 'native-base';
import database from '@react-native-firebase/database';



class Company2 extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
      age:"",
      city:"",
      phone:"",
      name:"",
      qualification:"",
      activity:true
    }
  }

  componentDidMount(){

    database().ref('College data/students').on('child_added', datas => {
    // console.log('User data: ', datas.val());
    let obj={
      
      city:datas.val().city,
      phone:datas.val().phone,
      name:datas.val().name,
      age:datas.val().age,
      qualification:datas.val().qualification
      
    }
    this.setState({
      data:[...this.state.data,obj],
      activity:false
    })
    });

  }
   
  render(){
    return(
      <View style={styles.body}>
        <ScrollView style={{marginBottom:10}}>
        {this.state.activity?<ActivityIndicator style={{marginTop:10}} size="large" color="skyblue" />:null}
        {this.state.data.map((v,i)=>{
          return <View key={i} style={styles.body2}>
          <View style={{width:300,alignSelf:"center",marginTop:15,height:75,borderBottomWidth:2}}>
          <Text style={styles.start}>Student Name: {v.name}</Text>
          <Text style={styles.start}>City: {v.city}</Text>
          <Text style={styles.start}>Phone number: {v.phone}</Text>
          <Text style={styles.start}>Age: {v.age}</Text>
          <Text style={styles.start}>Last qualification: {v.qualification}</Text>
          </View>
        </View>
        })}
        



        </ScrollView>
        
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
      fontSize:18,
      alignSelf:"center"
    },
    body2:{
      borderWidth:5,
      width:340,
      height:148,
      alignSelf:"center",
      marginTop:10,
      borderRadius:20,
      backgroundColor:"skyblue",
      borderColor:"white"
    },
    body3:{
     
      width:160,
      height:50,
      alignSelf:"center",
      marginTop:10
    },
    button3:{
      backgroundColor:"white",
      width:100,
      height:40,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10,
      alignSelf:"center",
      marginTop:25,
    }
    
    
  });

export default Company2;