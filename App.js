import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './components/redux/store';
import LoginBiometric from './components/screens/LoginBiometric';
import HomeTodo from './components/screens/HomeTodo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Complete from './components/screens/Complete';
import Delete from './components/screens/Delete';
import Settings from './components/screens/Settings';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <BottomTab.Navigator screenOptions={{
    tabBarStyle: {
      backgroundColor: '#fff', // Màu nền của Tab Bar
      borderTopWidth: 1, // Độ dày của đường viền trên cùng của Tab Bar
      borderTopColor: '#696969', // Màu của đường viền trên cùng của Tab Bar
    },
    tabBarActiveTintColor: '#87CEFA', // Màu của Tab khi được chọn
    tabBarInactiveTintColor: 'gray', 
  }}>
    <BottomTab.Screen name="Home" component={HomeTodo} options={{ headerShown: false }} />
    <BottomTab.Screen name="Complete" component={Complete} options={{ headerShown: false }} />
    <BottomTab.Screen name="Delete" component={Delete} options={{ headerShown: false }} />
    <BottomTab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
  </BottomTab.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginBiometric">
          <Stack.Screen name="LoginBiometric" component={LoginBiometric} options={{ headerShown: false }} />
          <Stack.Screen name="HomeTodo" component={TabNavigator} options={{ headerShown: false }}  />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

