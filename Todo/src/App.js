import React, { useState } from "react";
import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import Input from "./components/Input/Input";
import TaskList from "./components/TaskList/TaskList";

function App(){

  const [text , setText] = useState("");
  const [todos , setTodos] = useState([]);
  const [count , setCount] = useState(0);

  const handleClick = () => {
    setTodos([...todos , text])
    setText("")
    setCount(count + 1)
  }
  const handleDelete = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index,1);
    setTodos(newTodos)
  }


  const renderItemList = ({item,index}) => {
    return (
      <TaskList item={item} index={index} handleDelete={handleDelete}/>

    )
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <Text>Yapılacaklar</Text>
        <Text>{count}</Text>
      </View>
       <Input text={text} setText={setText} handleClick={handleClick} count={count} setCount={setCount}/>
 
        <FlatList
         data={todos}
         renderItem={renderItemList}
        keyExtractor={(item) => item + Date.now() + Math.random()}/>
    
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'lightblue'
  },
  upperContainer : {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:4,
    alignContent:'center'
  }
})

export default App

