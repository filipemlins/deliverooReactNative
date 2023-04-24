
import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import CategoriesCard from './CategoriesCard'
const Categories = () => {
  // const [categories, setCategories] = useState([]);

//   useEffect(() => {
//   mysanityClient.fetch(`
//   *[_type == "featured" && _id == $id] {
//       ...,
//       restaurants[]->{
//       ...,
//       dishes[]->,
//         type->{
//           name
//         } 
//       },
//   }[0]`, {id}).then(data => {
//       setRestaurants(data?.restaurants);
//   });
// }, []);

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