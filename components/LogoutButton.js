import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase/index'; // Import the auth object from your firebase.js

const LogoutButton = () => {
  const navigation = useNavigation(); // Hook for navigation

  const handleLogout = async () => {
    try {
      await auth.signOut();

      navigation.navigate('Login');

    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  return <Button title="Logout" onPress={handleLogout} />;
};

export default LogoutButton;
