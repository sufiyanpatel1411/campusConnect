import React, { useState, useContext } from 'react';
import { StyleSheet, TextInput, Button, View, Text, Alert,SafeAreaView } from 'react-native';
import firebase from 'firebase/app';
import { auth, db, provider } from '../firebase/index';
import { getAdditionalUserInfo, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../firebase/AuthContext';
import { addDoc, collection } from 'firebase/firestore';
import DateTimePicker,{DateTimePickerAndroid} from '@react-native-community/datetimepicker';

const CreateEvent = () => {

    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const navigation = useNavigation();

    const handleAddEvent = async () => {
        try {
            // Create a new listing object
            const newEvent = {
                name: name,
                date: date.toLocaleString(),
                description: description,
                location: location,
            };

            // Add the new listing to the Firestore collection
            const eventsCollection = collection(db, 'events');
            await addDoc(eventsCollection, newEvent);

            Alert.alert('Success', 'Event added successfully');
            // You can navigate to another screen after successful addition
            navigation.navigate('Events');
        } catch (error) {
            console.error('Error adding Event: ', error);
            Alert.alert('Error', 'An error occurred while adding the Event');
        }
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={styles.container}>
            {/* ... */}
            <Text style={styles.title}>Add New Event</Text>
            <TextInput
                style={styles.input}
                placeholder="Name...."
                value={name}
                onChangeText={setName}
            />
            {/* Other input fields... */}
            <SafeAreaView>
                <Button onPress={showDatepicker} title="Select Event Date" />
                <Button onPress={showTimepicker} title="Select Time Slot" />
                <Text>selected: {date.toLocaleString()}</Text>
            </SafeAreaView>
            <TextInput
                style={styles.desc}
                placeholder="Discription...."
                value={description}
                onChangeText={setDescription}
                multiline
            />
            <TextInput
                style={styles.input}
                placeholder="Location...."
                value={location}
                onChangeText={setLocation}
            />
            <Button title="Add to Events" onPress={handleAddEvent} />
        </View>
    );
};

export default CreateEvent;

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
    desc: {
        height: 140,
        borderColor: '#7E7E7E',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor: '#F2F2F2',
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
