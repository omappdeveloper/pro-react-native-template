import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Config from "react-native-config";

export const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Text>Profile Screen</Text>
            <Button
                title="Go to Home Screen"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Text>Settings Screen!</Text>
            <Button
                title="Go to Home Screen"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}


export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Text>Welcome to Professional React Native Template!</Text>
            <Text>{Config.ENV}</Text>
            <MaterialCommunityIcons name='home' size={24} />
            <View style={{ paddingTop: 20 }}>
                <Button
                    title="Go to Profile Screen"
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>

            <View style={{ paddingTop: 20 }}>
                <Button
                    title="Go to Settings Screen"
                    onPress={() => navigation.navigate('Settings')}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})