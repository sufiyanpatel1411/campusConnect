import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './routes/AuthStack';
import MainStack from './routes/MainStack';
import AuthContext from './firebase/AuthContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Retrieve the login state from async storage when the app starts
  React.useEffect(() => {
    const retrieveLoginState = async () => {
   //   const userToken = await AsyncStorage.getItem('userToken');
      setIsLoggedIn(false);
    };

    retrieveLoginState();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <NavigationContainer>
        {isLoggedIn ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
