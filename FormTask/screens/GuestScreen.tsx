import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {MARGINS_GLOBAL, RADIUS_MAIN} from '../constants/globals';

const GuestScreen: React.FC = () => {

  const onPressHandler = () => {
    console.log('Logged from guest');
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.InnerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.guestText}>Login without Sign-In?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Guest Login" color="purple" onPress={onPressHandler} />
        </View>
      </View>
    </View>
  );
};

export default GuestScreen;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: 'white',
    marginHorizontal: MARGINS_GLOBAL,
    marginBottom: MARGINS_GLOBAL,
    borderBottomLeftRadius: RADIUS_MAIN,
    borderBottomRightRadius: RADIUS_MAIN,
    padding: 16,
  },
  InnerContainer: {
    margin: 8,
    alignContent: 'center',
    justifyContent: 'center',
  },
  guestText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textContainer: {
    margin:8,
  },
  buttonContainer:{
    margin:8,
  },
});
