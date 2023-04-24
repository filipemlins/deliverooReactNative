
import React from 'react'
import { ScrollView } from 'react-native'
import CategoriesCard from './CategoriesCard'
const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
     horizontal
     showsHorizontalScrollIndicator={false}
     >
      {/* Categories Card */}
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Test1"/>
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Test2"/>
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Test3"/>
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Test4"/>
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Test5"/>
    </ScrollView>
  )
}

export default Categories