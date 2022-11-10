import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import colors from '../colors/colors'
import { firebase } from '../../firebaseConfig'
import { Entypo } from '@expo/vector-icons'

const Addcar = ({navigation}) => {

	const carRef = firebase.firestore().collection('car')
	const [brand, setBrand] = useState('')
	const [model, setModel] = useState('')
	const [numberOfDoors, setNumberOfDoors] = useState(0)
	const [price, setPrice] = useState(0)

	const addCar = () => {
		if(brand.length > 0 && model.length > 0 && numberOfDoors && price > 1000){
			const timestamp = firebase.firestore.FieldValue.serverTimestamp()
			const data = {
				brand: brand,
				model: model,
				numberOfDoors: numberOfDoors,
				carPrice: price,
				createdAt: timestamp
			}
			carRef
			.add(data)
			.then(() => {
				setBrand('')
				setModel('')
				setNumberOfDoors(0)
				setPrice(0)
				navigation.navigate('Home')
			})
			.catch(error => alert(error))
		}
	}

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
			<ScrollView>
		
    		<SafeAreaView style={styles.headerWrapper}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Entypo name='chevron-left' size={30} color={colors.white}/>
					</TouchableOpacity>
    		  <Text style={styles.addTitle}>Add Car</Text>
    		</SafeAreaView>

				<View style={styles.inputsWrapper}>
					<Text style={styles.inputTitles}>Brand</Text>
					<TextInput 
						style={styles.input}
						value={brand}
						onChangeText={(brand) => setBrand(brand)}
						placeholder='Brand'
						placeholderTextColor={colors.lightGray}
					/>

					<Text style={styles.inputTitles}>Model</Text>
					<TextInput 
						style={styles.input}
						value={model}
						onChangeText={(model) => setModel(model)}
						placeholder='Model'
						placeholderTextColor={colors.lightGray}
					/>

					<Text style={styles.inputTitles}>Num. of doors</Text>
					<TextInput 
						style={styles.input}
						value={numberOfDoors}
						onChangeText={(numberOfDoors) => {
							setNumberOfDoors(numberOfDoors)
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
						value={price}
						onChangeText={(price) => setPrice(price)}
						placeholder='Price'
						placeholderTextColor={colors.lightGray}
						keyboardType='numeric'
					/>
				</View>

				<TouchableOpacity style={styles.addCarButton} onPress={addCar}>
					<Text style={styles.addCarButtonText}>Add</Text>
				</TouchableOpacity>
			</ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Addcar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkGray,
        paddingHorizontal: 20
    },

		headerWrapper: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between'
		},

    addTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.white,
				alignContent: 'center'
    },

		inputsWrapper: {
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

		addCarButton: {
			backgroundColor: colors.green,
			alignItems: 'center',
			borderWidth: 2,
			borderColor: colors.black,
			paddingVertical: 10,
			borderRadius: 10
		},

		addCarButtonText: {
			color: colors.black,
			fontSize: 20,
			fontWeight: 'bold'
		}
})