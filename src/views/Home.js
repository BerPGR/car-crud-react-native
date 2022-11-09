import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '../../firebaseConfig'
import colors from '../colors/colors'
import { Entypo } from '@expo/vector-icons'

const Home = ({navigation}) => {
  const [cars, setCars] = useState([])
  const carRef = firebase.firestore().collection('car')
  return (
    <View style={styles.container}>
      <ScrollView>
        
        <SafeAreaView >
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Car`s list</Text>
            <TouchableOpacity>
              <Entypo name='plus' size={24} color={colors.white}/>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <View style={styles.carsWrapper}>
          {cars.length == 0 
            ?
            <Text>There's no cars in database</Text> 
            :
            <Text>There are cars in database</Text>
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
  }
})