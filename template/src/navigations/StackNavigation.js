import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from '../screens/DemoScreen'
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="MainHome" component={TabNavigation}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default RootNavigation