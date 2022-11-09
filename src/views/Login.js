import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { firebase } from '../../firebaseConfig'
import React, { useState } from 'react'
import colors from '../colors/colors'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const Login = ({navigation}) => {

  function handleRegister() {
    /*firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      const user = userCredentials.user
      alert('User Registered!')
    })
    .catch(error => alert(error.message))
    */
    navigation.navigate('Home')
  }

  function handleSignIn() {
    /*firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      const user = userCredentials.user
      alert('You are logged!')
      navigation.navigate('Home')
    })
    .catch(error => alert(error.message))
    */
    navigation.navigate('Home')
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>

      <Animatable.View style={styles.loginWrapper} delay={1500} animation='flipInX'>
        <Text style={styles.loginTitle}>Car CRUD App</Text>
        
        <View>
          <TextInput
            style={styles.inputEmail}
            placeholder='E-mail'
            placeholderTextColor={colors.white}
            value={email}
            onChangeText={(email) => setEmail(email)}
            
          />

          <TextInput
            style={styles.inputPassword}
            placeholder='Password'
            placeholderTextColor={colors.white}
            secureTextEntry
            value={password}
            onChangeText={(password) => setPassword(password)}
            on
            />
        </View>
      
        <TouchableOpacity onPress={handleSignIn} style={styles.buttonLogin}>
          <Text style={styles.buttonLoginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister} style={styles.buttonRegister}>
          <Text style={styles.buttonRegisterText}>Register</Text>
        </TouchableOpacity>
      </Animatable.View>

    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
    justifyContent: 'center',
    alignItems: 'center'
  },

  loginWrapper: {
    backgroundColor: colors.white,
    width: width * 0.8,
    height: height * 0.35,
    borderRadius: 45,
    alignItems: 'center',
    paddingHorizontal: 20
  },

  loginTitle: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: 'bold'
  },

  inputEmail: {
    marginTop: 20,
    paddingHorizontal: 0,
    paddingVertical: 10,
    backgroundColor: colors.darkGray,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 220,
    color: colors.white
  },

  inputPassword: {
    marginTop: 10,
    paddingHorizontal: 0,
    paddingVertical: 10,
    backgroundColor: colors.darkGray,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 220,
    color: colors.white
  },

  buttonLogin: {
    backgroundColor: colors.blue,
    paddingVertical: 15,
    paddingHorizontal: 91,
    borderRadius: 5,
    marginTop: 15
  },

  buttonRegister: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.blue,
    paddingVertical: 15,
    paddingHorizontal: 79,
    borderRadius: 5,
    marginTop: 10
  },

  buttonLoginText: {
    color: colors.white,
    fontWeight: 'bold'
  },

  buttonRegisterText: {
    color: colors.blue,
    fontWeight: 'bold'
  },
})