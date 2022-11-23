import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, SettingsScreen } from '../screens/DemoScreen'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Icon name={'ios-home'} size={25} color={color} />
                    }
                }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Icon name={'ios-settings'} size={25} color={color} />
                    }
                }} />
        </Tab.Navigator>
    )
}

export default TabNavigation
