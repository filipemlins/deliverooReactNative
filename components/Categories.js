
import { ScrollView } from 'react-native'
import CategoriesCard from './CategoriesCard'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import mysanityClient from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
  mysanityClient.fetch(`
  *[_type == "category"] 
      `).then(data => {
      setCategories(data);
  });
}, []);
   console.log(categories)

  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
     horizontal
     showsHorizontalScrollIndicator={false}
     >
      {categories.map((category) => (
         <CategoriesCard
          key={category._id}
          imgUrl={category.image}
          title={category.title}/>
      ))}
      {/* Categories Card */}
     
    </ScrollView>
  )
}

export default Categories