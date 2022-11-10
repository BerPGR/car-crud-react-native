import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../colors/colors'
import { firebase } from '../../firebaseConfig'
import { Entypo } from '@expo/vector-icons'

const Edit = ({route, navigation}) => {

  const carRef = firebase.firestore().collection('car')
  const [newBrand, setNewBrand] = useState(route.params.item.document.brand)
  const [newModel, setNewModel] = useState(route.params.item.document.model)
  const [newNOfDoors, setNewNOfDoors] = useState(route.params.item.document.numberOfDoors)
  const [newPrice, setNewPrice] = useState(route.params.item.document.carPrice)

  const updateCar = () => {
    if(newBrand.length > 0 && newModel.length > 0 && newNOfDoors && newPrice > 1000) {
      carRef
      .doc(route.params.item.id)
      .update({
        brand: newBrand,
        model: newModel,
        numberOfDoors: newNOfDoors,
        carPrice: newPrice,
      })
      .then(() => {
        alert('Car updated!')
        navigation.navigate('Home')
      })
    }
    else {
      alert('Check fields after your changes.')
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name='chevron-left' size={28} color={colors.white}/>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit car</Text>
        </View>
      </SafeAreaView>

      <View style={styles.editWrapper}>
        <Text style={styles.inputTitles}>Brand</Text>
				<TextInput 
					style={styles.input}
					value={newBrand}
					onChangeText={(brand) => setNewBrand(brand)}
					placeholder='Brand'
					placeholderTextColor={colors.lightGray}
				/>
				<Text style={styles.inputTitles}>Model</Text>
				<TextInput 
					style={styles.input}
					value={newModel}
					onChangeText={(model) => setNewModel(model)}
					placeholder='Model'
					placeholderTextColor={colors.lightGray}
				/>
				<Text style={styles.inputTitles}>Num. of doors</Text>
				<TextInput 
					style={styles.input}
					value={newNOfDoors}
					onChangeText={(numberOfDoors) => {
						setNewNOfDoors(numberOfDoors)
						if(numberOfDoors != 4 && numberOfDoors !=2 && numberOfDoors != 0){
							alert("Car must have 2 or 4 doors.")
						}
					}}
					placeholder='Num. of doors'
					placeholderTextColor={colors.lightGray}
					keyboardType='numeric'
				/>
				<Text style={styles.inputTitles}>Price</Text>
				<TextInput 
					style={[styles.input, {marginBottom: 0}]}
					value={newPrice}
					onChangeText={(price) => setNewPrice(price)}
					placeholder='Price'
					placeholderTextColor={colors.lightGray}
					keyboardType='numeric'
				/>
      </View>

      <TouchableOpacity style={styles.editButtonWrapper} onPress={updateCar}>
          <Text style={styles.editButtonText}>Update</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default Edit

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
    paddingHorizontal: 20
  },

  headerWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerTitle: {
    fontSize: 32,
    color: colors.white,
    fontWeight: 'bold'
  },

  editWrapper: {
    marginVertical: 30
  },

  input: {
    backgroundColor: colors.black,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    color: colors.white,
    marginBottom: 30
  },

  inputTitles: {
    fontSize: 30,
    color: colors.white,
    fontWeight: 'bold'
  },

  editButtonWrapper: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 10
  },

  editButtonText: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold'
  }
})