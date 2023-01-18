import React from 'react'
import { Button, Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import COLORS from '../constants/colors'
import ROUTES from '../constants/routes'
import SearchBar from '../components/SearchBar'
import Localisation from '../components/Localisation'
import GENERALS from '../constants/generals'
import TopCategory from '../components/TopCategory'
import PopularItem from '../components/PopularItem'


function Home({navigation}) {
  return (
    <ScrollView>
      <View style={{flex: 1, height: GENERALS.height, backgroundColor: COLORS.appBg, padding: 20}}>
        <View style={styles.topContainer}>
            <Localisation />
            <SearchBar />
        </View>
        <TopCategory />
        <PopularItem />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  topContainer: {display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
})

export default Home