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



class Student2 extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
      c_require:"",
      c_city:"",
      c_phone:"",
      c_name:"",
      qualification:"",
      activity:true
    }
  }

  componentDidMount(){

    database().ref('College data/companies').on('child_added', datas => {
    // console.log('User data: ', datas.val());
    let obj={
      
      c_city:datas.val().c_city,
      c_phone:datas.val().c_phone,
      c_name:datas.val().c_name,
      c_require:datas.val().c_require,
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
          <Text style={styles.start}>Company Name: {v.c_name}</Text>
          <Text style={styles.start}>City: {v.c_city}</Text>
          <Text style={styles.start}>Phone number: {v.c_phone}</Text>
          <Text style={styles.start}>Required: {v.c_require}</Text>
          <Text style={styles.start}>Qualified in: {v.qualification}</Text>
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

export default Student2;