import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Settings = ({ navigation }) => {

    const handleLogout = () => {
        console.log('đã chuyển màn')
        navigation.navigate('LoginBiometric');
      };
  return (
    <View style={styles.container} >
        <TouchableOpacity style={styles.btnLogout} onPress={handleLogout}>
            <Text style={{textAlign: 'center', fontSize: 16, fontWeight:'600'}}>Log out</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Settings;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8FF',
    },
    btnLogout:{
        backgroundColor: '#DCDCDC',
        padding: 10,
        width: '80%',
        borderRadius: 30,
        borderWidth: 1
    }
})