import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global_style';
import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorSection, setErrorSection] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [welcomeMsg, setWelcomMsg] = useState('')

  const submitLogin = function () {
    var data = { "email": email, "password": password }
    console.log(data)

    fetch("http://localhost:1082/user/authenticate", {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)

    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          setWelcomMsg(data.token)
          console.log('Login successful')
        }
        if (!data.token){
          setErrorSection(true)
          setErrorMsg(data.val)
        }
        
      });
  }

  return (
    <>
    {!welcomeMsg ? <div>
      <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Login</Text>
      <Text
        onPress={() => navigation.navigate('History')}
      >Sign Up</Text>
      
   

    </View>
    {errorSection && <div className="error"> {errorMsg} </div>}
    <View style={globalStyles.inputView}>
      <TextInput
        style={globalStyles.TextInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>
    

    <View style={globalStyles.inputView}>
      <TextInput
        style={globalStyles.TextInput}
        placeholder="Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>
    <TouchableOpacity style={globalStyles.loginBtn}>
      <Text style={globalStyles.TextInput}
        onPress={() => submitLogin()}
      >LOGIN</Text>

    </TouchableOpacity></div> : <div>Welcome{welcomeMsg}</div>
    
    }   

    </>
  )
}