import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Openings from './Openings';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/index';

const JobsScreen = () => {
  const navigation = useNavigation();
  const [jobs, setJobs] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(-1);
  const handleInquire = (e) => {
    setOpen(e);
  };
  const handleExpand = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsCollection = collection(db, 'jobs');
        const jobsSnapshot = await getDocs(jobsCollection);

        const fetchedJobs = [];
        jobsSnapshot.forEach((doc) => {
          fetchedJobs.push(doc.data());
        });

        setJobs(fetchedJobs);
      } catch (error) {
        console.error('Error fetching Jobs:', error);
      }
    };

    fetchJobs();
  }, []); // The empty array makes sure the effect runs only once, similar to componentDidMount

  return (
    <View style={styles.middleContent}>
      {/* <View style={styles.middleOptions}>
      <Button title="Relevant" id="relevant" />
      <Button title="Top" id="top" />
      <Button title="Latest" id="latest" />
    </View>
    <View style={styles.middleUserInput}>
      <TouchableOpacity onPress={newListing} style={styles.addListingBtn}>
        <Text>Create your Listing...</Text>
      </TouchableOpacity>
      <View style={styles.navigationBtns}>
        <TouchableOpacity onPress={prevCurr} style={styles.navButton}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeCurr} style={styles.navButton}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View> */}


      <ScrollView style={styles.middleScrollableContent}>
        {jobs.map((e, index) => (
          <View key={index} style={styles.yourComponent}>
            <View style={styles.listImageContainer}>
              <Image style={styles.roundImage} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
              <View style={styles.listingInfo}>
                <Text style={styles.listTitle}>{e.type}</Text>
                <Text style={styles.listSubtitle}>By {e.company}</Text>
              </View>
            </View>
            <View>
              <Text style={`description ${expanded ? 'expanded' : ''} listingDesc`}>
                {e.description}
              </Text>
              <TouchableOpacity style={styles.inquireButton} onPress={() => handleInquire(index)}>
                <Text style={styles.inquireText}>Inquire</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.floatinBtn} onPress={() => navigation.navigate('CreateJob')}>
        <View style={styles.floatinBtnView}>
          <Entypo name="add-to-list" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  middleContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  middleScrollableContent: {
    
  },
  floatinBtnView:{
    backgroundColor: 'blue',
    width: 45,
    height: 45,
    borderRadius: 45,
    justifyContent:'center',
    alignItems:'center',
  },
  floatinBtn: {
    
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  yourComponent: {
    padding:6,
    marginTop: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  listImageContainer: {
    marginRight: 10,
    display: 'flex',
  },
  roundImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
  },
  listingInfo: {
    height: 50,
    margin: 4,
  },
  listTitle: {
    fontSize:20,
    fontWeight:'bold',
    //margin: 0,
  },
  listSubtitle: {
    marginVertical: 0,
    fontWeight:'700',
    fontSize:15,
  },
  description: {
    margin: 0,
    lineHeight: 1.2,
    maxHeight: 36,
    overflow: 'hidden',
    position: 'relative',
    left: 0,
  },
  expanded: {
    maxHeight: 'none',
  },
  inquireButton: {
    margin:5,
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width:'100%'
  },
  inquireText:{
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default JobsScreen;
