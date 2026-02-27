import React from "react";
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ExampleEvent from '../screens/ExampleEvent';
import Counter from '../screens/Counter';
import AboutMe from '../screens/AboutMe';
import FoodFavScreen from '../screens/FoodFavScreen';
import MoviesFavScreen from '../screens/MoviesFavScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Inicio'}}
            />
            <Stack.Screen
                name="ExampleEvent"
                component={ExampleEvent}
                options={{ title: 'Eventos'}}
            />
            <Stack.Screen
                name="Counter"
                component={Counter}
                options={{ title: 'Contador'}}
            />
            <Stack.Screen
                name="AboutMe"
                component={AboutMe}
                options={{ title: 'About Me'}}
            />
            <Stack.Screen
                name="FoodFavScreen"
                component={FoodFavScreen}
                options={{ title: 'Comidas Favoritas'}}
            />
            <Stack.Screen
                name="MoviesFavScreen"
                component={MoviesFavScreen}
                options={{ title: 'Peliculas Favoritas'}}
            />
        </Stack.Navigator>
    );
}




