import { View, Text } from 'react-native'
import React from 'react'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useSelector, useDispatch } from'react-redux'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-web'
import Currency from "react-currency-formatter";


const BasketIcon = () => {
 const items = useSelector(selectBasketItems)
 const navigation = useNavigation();
 const basketTotal = useSelector(selectBasketTotal);

 if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50" >
        <TouchableOpacity className="bg-[#00CCBB] mx-5 rounded-lg p-4 flex-row items-center space-x-1" onPress={() => navigation.navigate("Basket")}>
            <Text className="text-lg text-white font-extrabold bg-[#01A296] py-1 px-2">{items.length}</Text>
            <Text className="flex-1 text-lg text-white font-extrabold text-center">View Basket</Text>
            <Text className="text-lg text-white font-extrabold">
            <Currency quantity={basketTotal} currency="BRL"/>  
          </Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon