import React from "react";
import { View , TextInput , TouchableOpacity ,Text} from "react-native";

function Input({text , setText , handleClick , count ,setCount}) {
    return (
        <View>
            <View>
                <TextInput 
                    value={text} 
                    onChangeText={setText}
                    placeholder="Add a new task"/>
                    <TouchableOpacity 
                    onPress={handleClick}>
                    <Text>Add a task</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default Input