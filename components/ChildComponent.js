import React from 'react'
import {StyleSheet,Button,SafeAreaView,View,FlatList} from 'react-native'

const ChildComponent = ()=> {
  // console.log('child component')
  const data = [{
    name: 'Arjoo',
    id:1
  },
  {
    name: 'Sid',
    id:2
  }
]


  const renderItem = (data)=>{
    return<View style= {{width :'100%', height:30, backgroundColor:'green'}}>
   <Text style= {{size:20}}></Text>
   
    </View>
  }
    return <SafeAreaView style = {styles.background}> 
    <FlatList
    data = {data}
    renderItem = {renderItem}
    keyExtractor = {data.id}
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