import React from 'react';

import {useState, useEffect} from 'react';

import {StyleSheet, View, Text, Pressable, ScrollView} from 'react-native';
import {MARGINS_GLOBAL, RADIUS_MAIN} from '../constants/globals';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

interface propsType {
  navigation: any;
}

const WrapperScreen: React.FC<propsType> = ({navigation}) => {
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin(myLogin => !myLogin);
  }

  useEffect(() => {
    if (isLogin) {
      navigation.setOptions({title: 'Login'});
    } else {
      navigation.setOptions({title: 'Register'});
    }
  }, [isLogin, setIsLogin, navigation]);

  return (
    <View style={styles.outerContainer}>
      <ScrollView>
        {isLogin && <LoginScreen isLogin />}
        {!isLogin && <SignupScreen />}
      </ScrollView>
      <View style={styles.modeSwitch}>
        <Text>{isLogin ? 'No Account yet?' : 'Have an Account?'}</Text>
        <Pressable onPress={switchAuthModeHandler}>
          <Text style={styles.modeSwitchTextClickable}>
            {isLogin ? ' Register now!' : ' Login here'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WrapperScreen;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: 'white',
    marginHorizontal: MARGINS_GLOBAL,
    marginBottom: MARGINS_GLOBAL,
    borderBottomLeftRadius: RADIUS_MAIN,
    borderBottomRightRadius: RADIUS_MAIN,
    padding: 16,
  },
  modeSwitch: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  modeSwitchTextClickable: {
    color: '#ff87bb',
    fontWeight: 'bold',
  },
});
