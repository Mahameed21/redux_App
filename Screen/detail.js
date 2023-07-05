import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from '../style/stylesheet';

const DetailScreen = ({navigation, route}) => {

    const {item} = route.params
    const [myData, setMydata] = useState({
        country: item.Country,
        city: item.City
    });

  return (
    <View style={styles.mainContainer}>      
      <View style={styles.btnContainer}>
      <TouchableOpacity  style={styles.homeBtn} onPress={() => {navigation.navigate('Home')}} >Go to Home</TouchableOpacity>
      </View>
      <Text style={styles.head}>detail Screen</Text>
      <View style={styles.detailsCC}>
        <Text style={styles.Country}>{myData.country}</Text>
        <Text style={styles.City}>{myData.city}</Text>
      </View>
      
    </View>
  )
}

export default DetailScreen;