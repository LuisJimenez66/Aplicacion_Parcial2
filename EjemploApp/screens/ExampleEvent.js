import React from "react";
import {View, Text, StyleSheet, Button,TouchableOpacity} from 'react-native';

export default function ExampleEvent({ navigation, route}){
    const handlePress = () => {
        alert("Boton accionado");
    }
    const {nombre} = route.params;
    const total = route.params?.total;
    const handleShowData = () => {
        alert(`Datos recibidos\nContador: ${total} \nNombre: ${nombre}`);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Ejemplo de eventos</Text>      
            <TouchableOpacity onPress={handlePress} style={{margin: 20, padding: 10, backgroundColor: '#22226a', borderRadius: 5}}>
                <Text style={{color: 'white', fontSize: 16}}>Presionar</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Hola, {nombre}</Text>
            {total !== undefined && (
                <TouchableOpacity style={{margin: 20, padding: 10, backgroundColor: '#22226a', borderRadius: 5}} onPress={handleShowData}>
                <Text style={{color: 'white', fontSize: 16}}>Mostrar datos en Alert</Text>
                </TouchableOpacity>
                )}
            
            <TouchableOpacity style={{margin: 20, padding: 10, backgroundColor: '#22226a', borderRadius: 5}} onPress={() => navigation.navigate("Home")}>
                <Text  style={{color: 'white', fontSize: 16}}>Volver a home</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#191c30",

    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    }
});