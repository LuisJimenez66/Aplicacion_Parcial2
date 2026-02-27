import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function AboutMe({ navigation, route}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>About Me</Text>
            <Text style={styles.description}>Hola, soy Luis y a continuacion puedes pulsar para conocer mas sobre mi :)</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("MoviesFavScreen")} >
                <Text style={styles.txtboton}>Conoce mis peliculas favoritas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("FoodFavScreen")} >
                <Text style={styles.txtboton}>Conoce mis comidas favoritas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Home")} >
                <Text style={styles.txtboton}>Volver a Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#c87035",
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#320707',
    },
    description: {
        fontSize: 20,
        color: '#e3e3e3',
        margin: 20,
    },
    boton: {
        backgroundColor: '#320707',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    txtboton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});