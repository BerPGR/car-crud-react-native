import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../../firebaseConfig'
import colors from '../colors/colors'
import { Entypo } from '@expo/vector-icons'

const Home = ({navigation}) => {

  const [cars, setCars] = useState([])
  const carsRef = firebase.firestore().collection('car')

  useEffect(() => {
    carsRef
    .orderBy('brand', 'desc')
    .onSnapshot(querySnapchot => {
      const cars = []
      querySnapchot.forEach(doc => {
        const car = doc.data()
        cars.push(car)
      })
    })
    setCars(cars)
  }, [])

  const renderCars = ({item}) => {
    <View style={styles.renderCarsWrapper}></View>
  }
  
  return (
    <View style={styles.container}>
      <ScrollView>
        
        <SafeAreaView >
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Car`s list</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Addcar')}>
              <Entypo name='plus' size={24} color={colors.white}/>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <View style={styles.carsWrapper}>
          {
            cars.length == 0 
            ?
            <Text style={styles.noCarsText}>There are no cars in database</Text> 
            :
            <FlatList 
              data={cars}
              renderItem={renderCars}
            />
          }
        </View>
      
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray
  },

  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 32
  },

  carsWrapper: {
    marginTop: 20,
    paddingHorizontal: 20
  },

  noCarsText: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    color: colors.white
  },

  renderCarsWrapper: {

  }
})