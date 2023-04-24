import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {StarIcon} from  "react-native-heroicons/solid"
import {MapPinIcon } from  "react-native-heroicons/outline"
import { urlFor } from '../sanity'

const RestaurantCard = ({
    id,
    imgURL,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,

}) => {

    // console.log(urlFor(imgURL).url())
  
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
        <Image
            source={{
               uri: urlFor(imgURL).url(), 
            }}        
            className="h-36 w-64 rounded-sm"
        />
   
        <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row space-x-1 items-center">
                <StarIcon color="green" opacity={0.5} size={22}/>
                <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text> • {genre}

                </Text>
            </View>
        </View>

        <View className="flex-row space-x-1 items-center">
            <MapPinIcon color="gray" opacity={0.4} size={22}/>
            <Text className="text-xs text-gray-500">Nearby • {address}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard