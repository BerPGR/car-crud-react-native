import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { firebase } from '../../firebaseConfig'
import colors from '../colors/colors'
import { Entypo } from '@expo/vector-icons'

const Details = ({route, navigation}) => {

  const carsRef = firebase.firestore().collection('car')
  const car = route.params.item
  return (
    <View style={styles.container}>
      
      <SafeAreaView>
				<View style={styles.headerWrapper}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Entypo name='chevron-left' size={28} color={colors.white}/>
					</TouchableOpacity>
					<View>
						<Text style={styles.headerTitle}>Car Details</Text>
					</View>
				</View>
			</SafeAreaView>

			<View style={styles.detailsWrapper}>
				<View style={styles.description}>
					<Text style={styles.title}>Brand</Text>
					<View style={styles.textContainer}>
						<Text style={styles.info}>{car.document.brand}</Text>
					</View>
				</View>

				<View style={[styles.description, {marginTop: 20}]}>
					<Text style={styles.title}>Model</Text>
					<View style={styles.textContainer}>
						<Text style={styles.info}>{car.document.model}</Text>
					</View>
				</View>

				<View style={[styles.description, {marginTop: 20}]}>
					<Text style={styles.title}>N. of doors</Text>
					<View style={styles.textContainer}>
						<Text style={styles.info}>{car.document.numberOfDoors}</Text>
					</View>
				</View>

				<View style={[styles.description, {marginTop: 20}]}>
					<Text style={styles.title}>Price</Text>
					<View style={styles.textContainer}>
						<Text style={styles.info}>${car.document.carPrice}</Text>
					</View>
				</View>
			</View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
		paddingHorizontal: 20
  },

	headerWrapper: {
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 20,
		flexDirection: 'row'
	},

	headerTitle: {
		fontSize: 32,
		fontWeight: 'bold',
		color: colors.white,
		marginLeft: 80,
	},

	detailsWrapper: {
		marginTop: 20
	},

	description: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	title: {
		fontWeight: 'bold',
		fontSize: 20,
		color: colors.white
	},

	info: {
		color: colors.black,
		fontSize: 20,
		fontWeight: 'bold',
		alignContent: 'flex-start'
	},

	textContainer: {
		backgroundColor: colors.white,
		marginLeft: 30,
		paddingLeft: 10,
		width: '60%',
		paddingVertical: 10,
		borderRadius: 10
	}
})