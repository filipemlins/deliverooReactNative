import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import {UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
    StarIcon,
} from "react-native-heroicons/solid"
import {MapPinIcon } from  "react-native-heroicons/outline"


import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const {
        params : {
            id,
            imgURL,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
        }
    
    } = useRoute();

    // console.log(genre)

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

    return (
        <ScrollView>
            <View className="relative">
                <Image
                    source={{
                        uri: urlFor(imgURL).url(),
                     }}
                    className="w-full h-56 bg-gray-300 p-4"
                
                />
            </View>

            <TouchableOpacity onPress={navigation.goBack} className="absolute top-10 p-2 bg-gray-100 rounded-full">
                <ArrowLeftIcon size={20} color={"#00CCBB"}/>
            </TouchableOpacity>

            <View className='bg-white'>
                <View className='px-4 pt-4'>
                    <Text className='text-3xl font-bold'>{title}</Text>
                    <View className='flex-row space-x-2 my-1'>
                        <View className='flex-row items-center space-x-1'>
                            <StarIcon size={22} color={"#00CCBB"} opacity={0.5}/>
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">{rating}</Text> • {genre.title}
                            </Text>
                        </View>

                        <View className='flex-row space-x-2 my-1'>
                        <View className='flex-row items-center space-x-1'>
                            <MapPinIcon size={22} color="gray" opacity={0.4}/>
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">Nearby</Text> • {address}
                            </Text>
                        </View>
                        </View>

                    </View>
                </View>
            </View>        
            

        </ScrollView>
    )
};

export default RestaurantScreen;
