import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count,setCount] = useState(0);

  return(
    <View style={styles.container}>
        <Text>Clique para contar</Text>
        <Button
        title="Clique"
        onPress={()=> setCount(count+1)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"purple",
        alignItems:"center",
        justifyContent:'center'
    }
})
