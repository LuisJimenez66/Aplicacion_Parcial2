import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function MoviesFavScreen({ navigation, route}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Peliculas Favoritas</Text>

            <Text style={styles.description}>Estas son mis peliculas favoritas:</Text>
            <Image source={require('../assets/LOTR.jpg')} style={styles.images} />
            <Text style={styles.description}>El Señor de los Anillos</Text>
            <Image source={require('../assets/GOD_MOVIE.jpg')} style={styles.images} />
            <Text style={styles.description}>Phineas y Ferb</Text>
            <Image source={require('../assets/21JUMP.jpg')} style={styles.images} />
            <Text style={styles.description}>21 Jump Street</Text>
            <Image source={require('../assets/STAND.jpg')} style={styles.images} />
            <Text style={styles.description}>Stand by Me</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("AboutMe")} >
                <Text style={styles.txtboton}>Volver a AboutMe</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
        
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    description: {
        fontSize: 17,
        color: 'silver',
    },
    boton: {
        backgroundColor: 'royalblue',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    txtboton: {
        color: 'white',
        textAlign: 'center',
    },
    images: {
        width: 80,
        height: 100,
        marginBottom: 10,
        borderRadius: 10,
    },
});