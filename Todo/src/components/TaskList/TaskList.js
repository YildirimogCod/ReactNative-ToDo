import React from "react";
import { Text , View ,TouchableOpacity } from "react-native";
function TaskList({item , index , handleDelete}){
    return (
        <View>
        <Text>{item}</Text>
        <TouchableOpacity onPress={()=>handleDelete(index)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    )
}

export default TaskList;