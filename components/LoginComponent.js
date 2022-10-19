import React from 'react'
import { StyleSheet,View,Button,SafeAreaView,TextInput,TouchableOpacity,Text} from 'react-native'


const LoginComponent = (props)=>{

    return<SafeAreaView style={styles.background}>
     <View style={styles.centreView}>
     <TextInput  style={styles.textInput}
        placeholder="Type here to translate!"
        defaultValue='Enter UserName'></TextInput>

     <TextInput  style={styles.textInput}
        placeholder="Type here to translate!"
        defaultValue='Enter Password'></TextInput>

        <TouchableOpacity style={styles.button}
         title='SUBMIT'  
         onPress={()=>{props.navigation.navigate('DashBoardScreen')}}  
        >
           <Text>SUBMIT</Text>
        </TouchableOpacity>
     </View>
    </SafeAreaView>
}

const styles= StyleSheet.create({
  background:{
    backgroundColor: 'gray',
    width:'100%',
    height:'100%',
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },
  centreView:{
    width:'94%',
    height: 300,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'pink',
    marginLeft:10,
    marginRight:10,
    
  },textInput:{
    height: 50,
    width:'90%',
    borderColor:'blue',
    borderWidth:2,
    marginTop:20
  },button:{
    width:'90%',
    height:30,
    backgroundColor:'blue',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 20,
    alignItems:'center',
    justifyContent:'center'
  }
})

export default LoginComponent;