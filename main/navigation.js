import * as React from 'react';
import {Button,Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import Login from './logins';
import Admin from './admin';
import Admin0 from './admin0';
import Student from './student';
import Company from './company';
import Student0 from './student0';
import Company0 from './company0';
import Student1 from './student1';
import Company1 from './company1';
import Student2 from './student2';
import Company2 from './company2';
import Account from './create';
const Stack = createStackNavigator();

function Navigate(props) {
  const logout=()=>{
    auth().signOut()
    .then(() => console.log('User signed out!'));
    {props.data.navigation.navigate('Student'),Alert.alert("Attention!","Log out successfully",
    [{text:"Ok",onPress:()=>console.log("Alert closed")}])}
    
  }
  const logout1=()=>{
    auth().signOut()
    .then(() => console.log('User signed out!'));
    {props.data.navigation.navigate('Company'),Alert.alert("Attention!","Log out successfully",
    [{text:"Ok",onPress:()=>console.log("Alert closed")}])}
    
  }
  const logout2=()=>{
    auth().signOut()
    .then(() => console.log('User signed out!'));
    {props.data.navigation.navigate('Admin'),Alert.alert("Attention!","Log out successfully",
    [{text:"Ok",onPress:()=>console.log("Alert closed")}])}
    
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
     
        <Stack.Screen name="Login" component={Login} options={{ title: 'Select login panel',headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25,
            fontFamily:"times new roman",
            alignSelf:"center"
          },
          headerStyle: {
            backgroundColor: 'skyblue',
          } }} />


          <Stack.Screen name="Admin" component={Admin} options={{ title: 'Admin panel',headerTitleStyle: {
            
            fontSize:20,
            fontFamily:"times new roman",
            fontWeight: 'bold'
            
          },
          headerStyle: {
            backgroundColor: 'skyblue',
          }}} />

        <Stack.Screen name="Student" component={Student} options={{ title: 'Student panel',headerTitleStyle: {
            fontSize:20,
            fontFamily:"times new roman",
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: 'skyblue',
          }}} />

        <Stack.Screen name="Company" component={Company} options={{ title: 'Company panel',headerTitleStyle: {
            fontSize:20,
            fontFamily:"times new roman",
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: 'skyblue',
          }}} />
          <Stack.Screen name="Student0" component={Student0} options={{ title: 'Student Portal',headerTitleStyle: {
            fontSize:20,
            fontFamily:"times new roman",
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: 'skyblue',
          },headerRight: () => (
            <Button
              onPress={logout}
              title="Logout"
              color="skyblue"
            />
          ),headerLeft:null}} />
          <Stack.Screen name="Account" component={Account} options={{ title: 'Create Account',headerTitleStyle: {
            fontSize:20,
            fontFamily:"times new roman",
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: 'skyblue',
          }}} />
          <Stack.Screen name="Student1" component={Student1} options={{ title: 'Student Form',headerTitleStyle: {
            fontSize:20,
            fontFamily:"times new roman",
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: 'skyblue',
          }}} />
          <Stack.Screen name="Company0" component={Company0} options={{ title: 'Company Portal',headerTitleStyle: {
            fontSize:20,
            fontFamily:"times new roman",
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerLeft:null,
          headerRight: () => (
            <Button
              onPress={logout1}
              title="Logout"
              color="skyblue"
            />
          )}} />
          <Stack.Screen name="Company1" component={Company1} options={{ title: 'Company Form',headerTitleStyle: {
            fontSize:20,
            fontFamily:"times new roman",
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: 'skyblue',
          }}} />
          <Stack.Screen name="Company2" component={Company2} options={{ title: 'Students report',headerTitleStyle: {
            fontSize:20,
            fontFamily:"times new roman",
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: 'skyblue',
          }}} />
           <Stack.Screen name="Student2" component={Student2} options={{ title: 'Companies report',headerTitleStyle: {
            fontSize:20,
            fontFamily:"times new roman",
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: 'skyblue',
          }}} />
           <Stack.Screen name="Admin0" component={Admin0} options={{ title: 'Admin portal',headerTitleStyle: {
            fontSize:20,
            fontFamily:"times new roman",
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerLeft:null,
          headerRight: () => (
            <Button
              onPress={logout2}
              title="Logout"
              color="skyblue"
            />
          )}} />

          {/*<Stack.Screen name="Menu" component={Menu} options={{ title: 'Main menu',headerTitleStyle: {
            
            fontSize:25,
            fontFamily:"times new roman",
            fontWeight: 'bold'
            
          },
          headerStyle: {
            backgroundColor: 'red',
          },
          headerLeft:null,
          headerRight: () => (
            <Button
              onPress={logout}
              title="Logout"
              color="#ed0909"
            />
          ) }} />

          <Stack.Screen name="Blooddonor" component={Blooddonor} options={{ title: 'Registration Form',headerTitleStyle: {
            
            fontSize:25,
            fontFamily:"times new roman",
            fontWeight: 'bold',
            alignSelf:"center",
            color:"red"
            
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft:null }} />

          <Stack.Screen name="Bloodrequest" component={Bloodrequest} options={{ title: 'Available blood donations',headerTitleStyle: {
            
            fontSize:20,
            fontFamily:"times new roman",
            fontWeight: 'bold',
            color:"red"
            
          },
          headerStyle: {
            backgroundColor: 'white',
          }}} />

          <Stack.Screen name="Details" component={Details} options={{ title: 'Details of donor',headerTitleStyle: {
            
            fontSize:25,
            fontFamily:"times new roman",
            fontWeight: 'bold',
            color:"red"
            
          },
          headerStyle: {
            backgroundColor: 'white',
          }}} /> */}
          

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const mapstateToProps=(state)=>({
    data:state.data
})
export default connect(mapstateToProps,null)(Navigate);