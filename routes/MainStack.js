import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import DashboardScreen from '../screens/DashboardScreen';
import EventsScreen from '../screens/EventsScreen';
import JobsScreen from '../screens/JobsScreen';
import LogoutButton from '../components/LogoutButton';
import ChatScreen from '../screens/ChatScreen';
import CreateListing from '../screens/CreateListing';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import CreateJob from '../screens/CreateJob';
import CreateEvent from '../screens/CreateEvent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Dashboard">
    <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    <Drawer.Screen name="Events" component={EventsScreen} />
  </Drawer.Navigator>
);

const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainHome" component={DrawerNavigator} />
    <Stack.Screen name="Chat" component={ChatScreen} />
    <Stack.Screen name="CreateListing" component={CreateListing} />
    <Stack.Screen name="CreateJob" component={CreateJob} />
    <Stack.Screen name="CreateEvent" component={CreateEvent} />
  </Stack.Navigator>
);

const TabNavigator = () => {
  const navigation = useNavigation();  // Here is the change

  return (
    <Tab.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Icon name="comment" size={30} color="#fff" style={{ marginRight: 10 }} />
        </TouchableOpacity>
      ),
    }}>
      <Tab.Screen name="Home" component={MainStack} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Jobs" component={JobsScreen} options={{
        tabBarLabel: 'Jobs',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="work" size={size}  color={color}/>
        ),
      }}/>
      <Tab.Screen name="Logout" component={LogoutButton} options={{
        tabBarLabel: 'Logout',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="logout" size={size}  color={color}/>
        ),
      }}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;
