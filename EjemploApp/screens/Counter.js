import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function Counter({ navigation, route}){
    const [count, setCount] = useState(777);
    const handleIncrement = () => {
        setCount(count+1)
    }
    const handleDecremento = () => {
        setCount(count-1)
    }
    const handle0 = () => {
        setCount(0)
    }
    const {nombre} = route.params;
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Contador</Text>
            <Text style={styles.value}>{count}</Text>
            <TouchableOpacity style={styles.boton} onPress={handleIncrement}>
                <Text style={styles.txtboton}>Sumar</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.boton} onPress={handleDecremento}>
                <Text style={styles.txtboton}>Restar</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.boton} onPress={handle0}>
                <Text style={styles.txtboton}>0</Text>

            </TouchableOpacity>
            <Text style={styles.hint}>Aqui veremos estado (useState).</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("ExampleEvent", {total: count, nombre: nombre})}>
                <Text style={styles.txtboton}>Enviar contador a eventos</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Home")} >
                <Text style={styles.txtboton}>Volver a Home</Text>
            </TouchableOpacity>
        </View>
    );
    
}

const styles= StyleSheet.create({
    
    container: {flex: 1, justifyContent: 'center', padding:24, alignItems: 'center', backgroundColor: "#8b94cd"},
    title: { fontSize:40, fontWeight: '700', marginBottom: 12},
    value:{ fontSize: 48, fontWeight: '800', marginBottom: 8},
    hint: { fontSize: 14, opacity: 0.6},
    boton: { backgroundColor: '#22226a', paddingVertical: 12,borderRadius:10,margin:10, width: 150, marginBottom:10},
    txtboton: {color: 'white', textAlign: 'center', fontStyle: 'italic', fontSize: 16},
    
});