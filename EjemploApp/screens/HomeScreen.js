import React from "react";
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

export default function HomeScreen( {navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Jimenez Delgado Luis Hector</Text>
            <Text style={styles.description}>5 B BIS</Text>
            <TouchableOpacity style={styles.botones} onPress={() => navigation.navigate('ExampleEvent', {nombre: 'Luis'})}>
                <Text style={styles.description}>Ir a eventos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botones} onPress={() => navigation.navigate('Counter', {nombre: 'Luis'})}>
                <Text style={styles.description}>Ir a contador</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botones} onPress={() => navigation.navigate('AboutMe')}>
                <Text style={styles.description}>Ir a AboutMe</Text>
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
        fontSize: 40,
        fontWeight: 'bold',
        color: 'goldenrod',
        textAlign: 'center',
    },
    description: {    
        fontSize: 20,
        color: 'white',
        
    },
    botones:{
        backgroundColor: 'goldenrod',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
});