import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Alert } from 'react-native';
const Create = ({data,setItems}) => {
  const [item,setItem]=useState('');
  const [qty,setQty]=useState(0);
  const [edit,setEdit]=useState(false);
  const [editId,setEditId]=useState(null);
  
  const deleteHandler = (id) => {
  Alert.alert(
    "Confirm Delete",
    "Are you sure you want to delete this item?",
    [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => {
          setItems(data.filter((item) => item.id !== id));
        }
      }
    ]
  );
};
  const editHandler=(item)=>{
    setEdit(true);
    setItem(item.name);
    setQty(item.quantity);
    setEditId(item.id);
    
  }
  const addItemHandler=()=>{
    const newItem={
      id:Date.now(),
      name:item,
      quantity:qty,
      unit:'kg'
    }
    setItems([...data,newItem]);
    setItem('');
    setQty(0);
  }

  const updateHandler = () => {
  setItems(data.map((obj) => (
    obj.id === editId
      ? { ...obj, name: item, quantity: qty }
      : obj
  )));
  setItem('');
  setQty(0);
  setEdit(false);
  setEditId(null);
};

  return (
    <View style={styles.container}>
      <TextInput
  placeholder='Enter item here'
  style={styles.input}
  value={item}
  onChangeText={setItem} 
/>

<TextInput
  placeholder='Qty.'
  style={styles.input}
  value={qty.toString()} // make sure it's a string
  keyboardType='numeric'
  onChangeText={(text) => setQty(Number(text))} 
/>

      
      <Pressable style={styles.btn} onPress={()=> edit? updateHandler():addItemHandler()}>
        <Text style={styles.text}>{edit?"Update":"Add"}</Text>
      </Pressable>

       <View style={styles.headingCont}>
            <Text style={styles.headingText}>Items</Text>
            <Text style={styles.headingText}>Quantity</Text>
        </View>
        <View style={styles.flatlistCont}>
            <FlatList 
                data={data} 
                keyExtractor={(item)=> item.id}
                renderItem={({item})=>(
                    <View style={[styles.itemsCont ,{backgroundColor: editId === item.id ? '#d0f0c0' : '#ffe4e1'}
]}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemText}>{item.quantity} {item.unit}</Text> 
                        <View style={styles.editCont}>
                          <Pressable onPress={()=> editHandler(item)}>
                            <Text style={styles.editbtns}>Edit</Text>
                          </Pressable>
                          <Pressable onPress={()=> deleteHandler(item.id)}>
                            <Text style={styles.editbtns}>Delete</Text>
                          </Pressable>
                        </View>
                    </View>

                    
                    
                )}

                contentContainerStyle={{gap:10}}

            />
                
            
        </View>
    </View>

    
  )
}

export default Create

const styles = StyleSheet.create({
  input:{
     borderColor:'black',
     borderWidth:1,
     borderRadius:10,
     padding:"3%",
     marginVertical:"2%"
  },
  editCont:{
    flexDirection:'row',
    gap:18,
    alignItems:"center"
  },
  editbtns:{
    fontSize:15,
    fontWeight:500,
    textAlign:'center'
  },
  container:{
    marginTop:"10%",
    marginHorizontal:"2.5%"
  },
  btn:{
    borderRadius:20,
    borderWidth:0.25,
    width:"30%",
    height:"8%",
    marginHorizontal:'auto',
    marginVertical:"2%",
    justifyContent:"center",
    backgroundColor:"forestgreen",
    cursor:"pointer"

  },
  text:{
    textAlign:"center",
    fontSize:20,
    color:"white",
    
  },
  headingCont:{
        flexDirection:'row',
        marginTop:15,
        justifyContent:'space-between',
        padding:4
    },
    headingText:{
        fontSize:25,
        fontWeight:600
    },
    itemsCont:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:4,
        backgroundColor:"#ffe4e1",
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:20
    },
    flatlistCont:{
        marginTop:10,
    },
    itemText:{
        fontSize:18,
        fontWeight:400
    }
})