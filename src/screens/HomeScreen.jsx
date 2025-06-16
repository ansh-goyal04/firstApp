import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems';
import LowStock from './LowStock';
import Create from './Create';
import data from '../data';

const HomeScreen = () => {
    const [view,setView]=useState(0);
    const [items,setItems]=useState(data);
  return (

    <View style={styles.container} >
      <Text style={styles.titletext}>Dashboard</Text>
      <View style={styles.buttonCont}>
        <Pressable style={[styles.buttons, view==0?{backgroundColor:'green'}:null]} onPress={()=>setView(0)}>
            <Text style={[styles.btnText, view==0 ? {color:'white'}:null]}>All items</Text>
        </Pressable>
        <Pressable style={[styles.buttons, view==1?{backgroundColor:'green'}:null]} onPress={()=>setView(1)}>
            <Text style={[styles.btnText, view==1 ? {color:'white'}:null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.buttons, view==2?{backgroundColor:'green'}:null]} onPress={()=>setView(2)}>
            <Text style={[styles.btnText, view==2 ? {color:'white'}:null]}>Create</Text>
        </Pressable>
      </View>

      {view==0 ? <AllItems data={items}/> :null}
      {view==1 ? <LowStock data={items}/> :null}
      {view==2 ? <Create data={items} setItems={setItems}/> :null}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:"100%",
        padding:"5%",
        backgroundColor:"#ffffff"
    },
    buttonCont:{
        flexDirection:"row"
    },
    btnText:{
        fontSize:17,
        color:"green"
    },
    buttons:{
        borderWidth:1,
        paddingVertical:'1%',
        paddingHorizontal:"3%",
        margin:"3%",
        borderRadius:50
    },
    titletext:{
        fontSize:30,
        padding:"2%",
        fontWeight:'bold'
    }
})
