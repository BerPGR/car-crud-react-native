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
    .onSnapshot(querySnapchot => {
      const cars = []
      querySnapchot.forEach(doc => {
        const document = doc.data()
        cars.push({
          id: doc.id,
          document
        })
      })
      setCars(cars)
    })
  }, [])

  for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        
        <SafeAreaView>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Car`s list</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Addcar')}>
              <Entypo name='plus' size={24} color={colors.white}/>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <FlatList 
          data={cars}
          renderItem={({item}) => (
            <View style={styles.renderCarsWrapper}>
              <Text style={styles.renderCarsTitle}>{item.document.brand} {item.document.model}</Text>
              <View style={styles.renderCarsButtonsWrapper}>
                <TouchableOpacity>
                  <Entypo name='eye' size={24} color={colors.white} />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Entypo name='edit' size={24} color={colors.white}/>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Entypo name='trash' size={24} color={colors.white} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          style={styles.carsWrapper}
          horizontal={false}
        />
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
    height: 50,
    width: '100%',
    backgroundColor: colors.blue,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },

  renderCarsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white
  },

  renderCarsButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100
  }
})