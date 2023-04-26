import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {UserIcon,
        ChevronDownIcon,
        MagnifyingGlassIcon,
        AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline"
import { TextInput } from 'react-native'
import { ScrollView } from 'react-native'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import mysanityClient from '../sanity'

import { setupURLPolyfill } from 'react-native-url-polyfill';
import { Platform } from 'react-native';
console.log(Platform.OS)
if(Platform.OS === 'android' || Platform.OS === 'ios') {
setupURLPolyfill();
}
const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    useEffect(() => {
        mysanityClient.fetch(`
        *[_type == "featured"] {
            ...,
            restaurants[]->{
            ...,
            dishes[]-> 
            }
        }`).then(data => {
            setFeaturedCategories(data)
        });
    }, []);

    // console.log(featuredCategories)

    return (
    <SafeAreaView className="bg-white pt-5">

        {/* Header */}
        <View className="flex-row pb-3 items-center mx-2 space-x-2 px-2">
            <Image
                source = {{
                    uri: "https://links.papareact.com/wru",
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            /> 
        <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>
        </View>   

        <UserIcon size={35} color="#00CCBB"/>
        </View>



      <View >
        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-2">
                <MagnifyingGlassIcon color='gray' size={30}/>
                <TextInput className="flex-row flex-1 space-x-2 bg-gray-200 p-2"
                    placeholder="Restaurants and cuisines"
                    keyboardType="default"
                />
            </View>
            <AdjustmentsVerticalIcon color="#00CCBB" />                
        </View>

        {/* Body */}
        <ScrollView className="bg-gray-100"
        contentContainerStyle={{
            paddingBottom: 300, 
        }}
        >
            {/* Categories */}
            <Categories />

            {/* Feature Rows */}
            {featuredCategories?.map(category =>(
                <FeaturedRow
                key={category._id}
                id={category._id}
                title={category.name}
                description={category.short_description
                }
            />
            ))}


        </ScrollView>
    </View>

    </SafeAreaView>
  )
}

export default HomeScreen