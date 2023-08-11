import React, { useState,useContext } from 'react';
import { StyleSheet, TextInput, Button, View, Text, Alert } from 'react-native';
import firebase from 'firebase/app';
import { auth, db , provider } from '../firebase/index';
import { getAdditionalUserInfo, signInWithPopup,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../firebase/AuthContext';
import { addDoc, collection } from 'firebase/firestore';
const CreateListing = () => {
    const [type, setType] = useState('');
    const [owner, setOwner] = useState('');
    const [description, setDescription] = useState('');
    const [linkURL, setLinkURL] = useState('');
    const navigation = useNavigation();
  
    const handleAddListing = async () => {
      try {
        // Create a new listing object
        const newListing = {
          type: type,
          owner: owner,
          description: description,
          linkURL: linkURL,
        };
  
        // Add the new listing to the Firestore collection
        const listingsCollection = collection(db, 'listings');
        await addDoc(listingsCollection, newListing);
  
        Alert.alert('Success', 'Listing added successfully');
        // You can navigate to another screen after successful addition
       navigation.navigate('Dashboard');
      } catch (error) {
        console.error('Error adding listing: ', error);
        Alert.alert('Error', 'An error occurred while adding the listing');
      }
    };
  
    return (
      <View style={styles.container}>
        {/* ... */}
        <Text style={styles.title}>Create New Listing</Text>
        <TextInput
          style={styles.input}
          placeholder="Type...."
          value={type}
          onChangeText={setType}
        />
        {/* Other input fields... */}
        <TextInput
          style={styles.input}
          placeholder="Owner...."
          value={owner}
          onChangeText={setOwner}
        />
        <TextInput
          style={styles.input}
          placeholder="Discription...."
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Link URL...."
          value={linkURL}
          onChangeText={setLinkURL}
        />
        <Button title="Add to Listings" onPress={handleAddListing} />
      </View>
    );
  };
  
export default CreateListing;

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
