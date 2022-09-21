import React from 'react'
import {StyleSheet,Button,SafeAreaView,View,FlatList,Text} from 'react-native'

const ChildComponent = ()=> {
  // console.log('child component')
  const data = [{
    name: 'kane',
    id:11
  },
  {
    name: 'jane',
    id:12
  },
  {
<<<<<<< HEAD
    name: 'yuv',
    id:3
=======
    name: 'vane',
    id:13
  },
  {
    name: 'rane',
    id:14
  },
  {
    name: 'tane',
    id:15
  },
  {
    name: 'yak',
    id:16
  },
  {
    name: 'vane',
    id:17
>>>>>>> develop
  },
  {
    name: 'ram',
    id:4
  },
  {
    name: 'shyam',
    id:5
  },
  {
    name: 'sita',
    id:6
  },
  {
    name: 'gita',
    id:7
  },
  
 
]


  // const renderItem = (data)=>{
  //   return<View style= {{width :'100%', height:30, backgroundColor:'green'}}>
  //  <Text style= {{size:20,color:'red'}}>{data.name}</Text>
   
  //   </View>
  // }

  const renderItem = ({ item }) => (
    <View style= {{width :'96%', height:100, backgroundColor:'pink',padding: 10,alignSelf:'center',alignItems:'center', marginVertical: 8,marginHorizontal:6,justifyContent:'center'}}>
   <Text style= {{fontSize:20,color:'yellow'}}>{item.name}</Text>
   
    </View>
  );
    return <SafeAreaView style = {styles.background}> 
    <FlatList
    data = {data}
    renderItem = {renderItem}
    keyExtractor = {(data)=>{data.id}}
    ></FlatList>
    
   
    </SafeAreaView>
    

   
}
const styles = StyleSheet.create({
  background:{
    backgroundColor:'#ffbb00',
      width: '100%',
      height: '100%'
  },
  textColor:{
    color:'#ffbb00'
  }

})

export default ChildComponent;