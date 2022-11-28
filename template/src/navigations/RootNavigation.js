import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigation';

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}

export default RootNavigation