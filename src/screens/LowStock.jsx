import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllItems = ({data}) => {
  return (
    <View>
        <View style={styles.headingCont}>
            <Text style={styles.headingText}>Items</Text>
            <Text style={styles.headingText}>Quantity</Text>
        </View>
        <View style={styles.flatlistCont}>
            <FlatList 
                data={data.filter((item)=> item.quantity<10)} 
                keyExtractor={(item)=> item.id}
                renderItem={({item})=>(
                    <View style={styles.itemsCont}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemText}>{item.quantity} {item.unit}</Text> 
                    </View>
                    
                )}

                contentContainerStyle={{gap:10}}

            />
                
            
        </View>
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
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
        backgroundColor:"rosybrown",
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