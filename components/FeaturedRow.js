import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'

import {ArrowRightIcon} from  "react-native-heroicons/outline"
import RestaurantCard from './RestaurantCard'
import mysanityClient from '../sanity'


const FeaturedRow = ({id, title, description }) => {

   const [restaurants, setRestaurants] = useState([])


  useEffect(() => {
      mysanityClient.fetch(`
      *[_type == "featured" && _id == $id] {
          ...,
          restaurants[]->{
          ...,
          dishes[]->,
            type->{
              name
            } 
          },
      }[0]`, {id}).then(data => {
          setRestaurants(data?.restaurants);
      });
  }, []);

  // console.log(restaurants[0])

  return (
    <View>
    <View className="mt-4 flex-row items-center justify-between px-4" >
      <Text className="font-bold text-lg">{title}</Text>
      <ArrowRightIcon color="#00CCBB" />
    </View>

    <Text className="text-xs text-gray-500 px-4">{description}</Text>

    <ScrollView     
      contentContainerStyle={{
      paddingHorizontal: 15,
    }}
     horizontal
     showsHorizontalScrollIndicator={false}
     className="pt-4"
     >
      {/* RestaurantCards */}
      
      {restaurants?.map(restaurant =>(
        <RestaurantCard
        key={restaurant._id}
        id={restaurant._id}
        imgURL={restaurant.image}
        address={restaurant.address}
        title={restaurant.title}
        rating={restaurant.rating}
        genre={restaurant.genre}
        short_description={restaurant.short_description}
        dishes={restaurant.dishes}
        long={restaurant.long}
        lat={restaurant.lat}
    />
      ))}
      

     </ScrollView>
    </View>

  )
}

export default FeaturedRow