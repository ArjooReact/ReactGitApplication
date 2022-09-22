import React from 'react'
import {StyleSheet,Button,SafeAreaView,View,FlatList,Text} from 'react-native'

const ChildComponent = ()=> {
  // console.log('child component')
  const data = [{
    name: 'Arzoo_master',
    id:11
  },
  {
    name: 'Rajveer_master',
    id:12
  },
  {
    name: 'Sid_master',
    id:13
  },
  {
    name: 'Rashmi_master',
    id:14
  },
  
  
 
]


  // const renderItem = (data)=>{
  //   return<View style= {{width :'100%', height:30, backgroundColor:'green'}}>
  //  <Text style= {{size:20,color:'red'}}>{data.name}</Text>
   
  //   </View>
  // }

  const renderItem = ({ item }) => (
    <View style= {{width :'96%', height:100, backgroundColor:'pink',padding: 10,alignSelf:'center',alignItems:'center', marginVertical: 8,marginHorizontal:6,justifyContent:'center'}}>
   <Text style= {{fontSize:20,color:'white'}}>{item.name}</Text>
   
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