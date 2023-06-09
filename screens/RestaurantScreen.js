import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
    StarIcon,
} from "react-native-heroicons/solid"
import { ChevronRightIcon, MapPinIcon } from "react-native-heroicons/outline"


import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { setRestaurant } from '../features/restaurantSlice';
import { useDispatch, useSelector } from'react-redux';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {
        params: {
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

    useEffect(() => {
        dispatch(setRestaurant({
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
        }))
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <>
        <BasketIcon />
        
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
                <ArrowLeftIcon size={20} color={"#00CCBB"} />
            </TouchableOpacity>

            <View className='bg-white'>
                <View className='px-4 pt-4'>
                    <Text className='text-3xl font-bold'>{title}</Text>
                    <View className='flex-row space-x-2 my-1'>
                        <View className='flex-row items-center space-x-1'>
                            <StarIcon size={22} color={"#00CCBB"} opacity={0.5} />
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">{rating}</Text> • {genre.title}
                            </Text>
                        </View>

                        <View className='flex-row space-x-2 my-1'>
                            <View className='flex-row items-center space-x-1'>
                                <MapPinIcon size={22} color="gray" opacity={0.4} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500">Nearby</Text> • {address}
                                </Text>
                            </View>
                        </View>

                    </View>
                    <Text className='mt-2 pb-4 text-gray-500'>{short_description}</Text>
                </View>

                <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                    <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
                    <Text className="pl-2 flex-1 text-md font-bold">
                        Have a food allergy?
                    </Text>
                    <ChevronRightIcon color={"#00CCBB"} />
                </TouchableOpacity>

            </View>

            <View className="pb-36">
                <Text className="font-bold px-4 pt-6 mb-3 text-xl">
                    Menu
                </Text>

            {/* Dishrows */}
            { dishes.map( dish => (
                <DishRow 
                    key={dish._id}
                    id={dish._id}
                    name={dish.name}
                    description={dish.short_description}
                    price={dish.price}
                    image={dish.image}
                />
            ))}
            </View>


        </ScrollView>
        
        
        </>
    )
};

export default RestaurantScreen;
