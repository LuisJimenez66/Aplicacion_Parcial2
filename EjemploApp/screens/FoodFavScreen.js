import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function FoodFavScreen({ navigation, route}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Comidas Favoritas</Text>
            <Text style={styles.description}>Estas son mis comidas favoritas:</Text>
            <Image source={require('../assets/GOD_PIZZA.jpg')} style={styles.images} />
            <Text style={styles.description}>Pizza</Text>
            <Image source={require('../assets/GOD_BURGER.jpg')} style={styles.images} />
            <Text style={styles.description}>Hamburguesa</Text>
            <Image source={require('../assets/GOD_TACOS.jpg')} style={styles.images} />
            <Text style={styles.description}>Tacos</Text>
            <Image source={require('../assets/LASAGNA_GOD.jpg')} style={styles.images} />
            <Text style={styles.description}>Lasaña</Text>
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