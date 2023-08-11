import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth,db, firestore,createUserWithEmailAndPassword } from '../firebase/index';
import { setDoc, doc } from 'firebase/firestore';


export default function Signup(){
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [college, setCollege] = useState('');
    const [yearOfStudy, setYearOfStudy] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (password.length && confirmPassword.length && password !== confirmPassword) 
            setErrorMessage("The password and the confirm password do not match");
        else 
            setErrorMessage('');
    }, [password, confirmPassword]);

    const signUp = async () => {
      if (password === confirmPassword) {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const authUser = userCredential.user;
          console.log(userCredential.user);  // This should log the user object to the console
          const uid = authUser.uid;

          // Add user to Firestore
          await setDoc(doc(db, 'users', uid), {
            userid: uid
          });
          
          // Add user profile to Firestore
          await setDoc(doc(db, 'users', uid, 'profile', 'userInfo'), {
            name, email, yearOfStudy, college
          });
      
          // Sign in the user
          //await auth.signInWithEmailAndPassword(email, password);
      
          // Navigate to profile page
          //navigate('../profile/');
        } catch (error) {
          console.error(error);  // If an error occurs, this should log the error
        }
        
      } else {
          Alert.alert("The password and confirm password do not match");
      }
  };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Join Campus Connect</Text>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="College"
                value={college}
                onChangeText={setCollege}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Year of Study"
                value={yearOfStudy}
                onChangeText={setYearOfStudy}
                autoCapitalize="none"
            />
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
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <Text style={styles.error}>{errorMessage}</Text>
            <Button title="Continue to Campus Connect" onPress={signUp} />
            <Button title="Already have an account? Sign In" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

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
    error: {
        color: 'red',
        marginBottom: 20,
    },
});
