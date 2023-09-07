import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setAllergen } from './loginSlice'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global_style';
import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const navigation = useNavigation()
  const user = useSelector(state => state.login.user)
  const allergen = useSelector(state => state.login.allergen)
  const dispatch = useDispatch()

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
        if (data.email) {
          dispatch(setUser(data.email))
          dispatch(setAllergen(data.allergen))
          console.log(user)
          console.log(allergen)
          setWelcomMsg(true)
          console.log('Login successful')
        }
        if (!data.token) {
          setErrorSection(true)
          setErrorMsg(data.val)
        }

      });
  }

  return (
    <>
      {!user ? <div>
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

        </TouchableOpacity></div> :
        <div>
          Welcome {user}<br/>
          <h3>Your allergen is/are:</h3>
          {
          allergen.map((v)=>(<h2 key = {v}>{v}</h2>))
          }
        </div>

      }

    </>
  )
}