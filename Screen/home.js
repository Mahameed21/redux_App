import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getCities} from '../redux/actions'
import styles from './style/stylesheet';


const HomeScreen = ({navigation}) => {

    const {cities} = useSelector(state=>state.userReducer);

    useEffect(()=>{
        useDispatch(getCities());
    }, [])

   const  myItemSeparrator = ()=>{
return (
    <View style={styles.separator}/>
)
    }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.head}>Countires And Cities</Text>
      <FlatList
      data={cities}
      renderItem={({item})=>{
        <View>
             <TouchableOpacity
                      style={styles.CountryCities}
                      activeOpacity={0.5}
                      onPress={() => navigation.navigate('Detail', item)}>
            <Text style={styles.Country}>{item.Country}</Text>
            <Text style={styles.City}>{item.City}</Text>
            </TouchableOpacity>
        </View>
      }}
      keyExtractor={(item, index)=>index.toString()}
      ItemSeparatorComponent={myItemSeparrator}
      />

    </View>
  )
}

export default HomeScreen