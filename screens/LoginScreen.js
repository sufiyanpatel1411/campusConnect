import React, { useState,useContext } from 'react';
import { StyleSheet, TextInput, Button, View, Text, Alert } from 'react-native';
import firebase from 'firebase/app';
import { auth, db , provider } from '../firebase/index';
import { getAdditionalUserInfo, signInWithPopup,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../firebase/AuthContext';

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const authUser = await signInWithEmailAndPassword(auth,email,password)
      if(authUser) {
       // navigation.navigate('Options');
       console.log('login success');
       setIsLoggedIn(true);
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const authUser = await signInWithPopup(auth, provider)
      const info = getAdditionalUserInfo(authUser);

      if(info.isNewUser) {
        await db.collection('users').doc(authUser.user.uid).set({
          userid:authUser.user.uid
        });
        await db.collection('users').doc(authUser.user.uid).collection('profile').doc('userInfo').set({
          name:authUser.user.displayName,
          email:authUser.user.email,
          college:"abc",
          yearOfStudy:"3"
        });

        if(authUser) {
          navigation.navigate('Profile');
        }
      } else {
        navigation.navigate('Options');
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
      {/*<Button title="Login with Google" onPress={handleGoogleLogin} />*/}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F2F2F2',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: '#7E7E7E',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: '#F2F2F2',
  },
});
