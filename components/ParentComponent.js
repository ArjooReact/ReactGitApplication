
import React from 'react'
import {StyleSheet,FlatList,View} from 'react-native'
class ParentComponent extends Component{

    constructor(props){
        super(props)
        this.setState={

        }
    }

    componentDidMount(){
    
    }

    render(){
        return<View style={styles.backstyle}>

        </View>
    }
}
const styles= StyleSheet.create({
    backstyle:{
        width:100,
        height:20
    },
    frontstyle:{
        size:20
    }
})
