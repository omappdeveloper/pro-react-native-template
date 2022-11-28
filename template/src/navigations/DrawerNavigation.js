import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileScreen, SettingsScreen } from '../screens/DemoScreen';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Tabs" component={TabNavigation} 
      options={{ headerShown: false }}/>
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      
    </Drawer.Navigator>
  )
}

export default DrawerNavigation