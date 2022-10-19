import React from 'react'
import {StyleSheet,Button,SafeAreaView,View,FlatList,Text, Alert} from 'react-native'

const ChildComponent = (props)=> {
  // console.log('child component')
  const data = [{
    name: 'Deepak',
    id:11
  },
  {
    name: 'Rajveer_masters',
    id:12
  },
  {
    name: 'Sid_develops',
    id:13
  },
  {
    name: 'Rashmi_masters',
    id:14
  },
  {
    name: 'Rajveer_masters',
    id:12
  },
  {
    name: 'Sid_develops',
    id:13
  },
  {
    name: 'Rashmi_masters',
    id:14
  },{
    name:'Jambo',
    id:14
  }
  ,{
    name:'rambo',
    id:45
  },

  
  
 
]


  // const renderItem = (data)=>{
  //   return<View style= {{width :'100%', height:30, backgroundColor:'green'}}>
  //  <Text style= {{size:20,color:'red'}}>{data.name}</Text>
   
  //   </View>
  // }

  const renderItem = ({ item }) => (
    <View style= {{width :'96%', height:100, backgroundColor:'pink',padding: 10,alignSelf:'center',alignItems:'center', marginVertical: 8,marginHorizontal:6,justifyContent:'center'}}>
   <Text style= {{fontSize:20,color:'red'}}>{item.name}</Text>
   
    </View>
  );
    return <SafeAreaView style = {styles.background}> 
    <View style= {{width:'100%',flex:3,backgroundColor:'green'}}>
    <FlatList
    data = {data}
    renderItem = {renderItem}
    keyExtractor = {(data)=>{data.id}}
    ></FlatList>
    </View>
    <View style= {{width:'100%',flex:1,backgroundColor:'yellow'}}>
      <Button title='PRESS ME' style={{backgroundColor:'blue',width:'100%',height:20}} onPress={()=> props.navigation.navigate('LoginScreen')}>

      </Button>
      <Text>HELLO</Text>
      </View>
   
    
   
    </SafeAreaView>
    

   
}
const styles = StyleSheet.create({
  background:{
    backgroundColor:'green',
      width: '100%',
      height: '100%',
      flex:1,
      flexDirection:'column'
  },
  textColor:{
    color:'green'
  }

})


export default ChildComponent;