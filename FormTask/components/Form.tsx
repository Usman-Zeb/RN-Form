import {useState} from 'react';
import React from 'react';
import {StyleSheet, View, Button, Text, Pressable, Alert} from 'react-native';

import Input from './Input';

interface propsType {
  isLogin?: boolean;
}

const Form: React.FC<propsType> = ({isLogin}) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const [forgotPassword, setForgotPassword] = useState(false);

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function submitHandler() {
    let email = enteredEmail.trim();
    let password = enteredPassword.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === enteredConfirmEmail;
    const passwordsAreEqual = password === enteredConfirmEmail;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });

      if (isLogin) {
        console.log('Logged In');
      } else {
        console.log('Registered');
      }
      return;
    }
  }

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType: string, enteredValue: string) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function forgotPasswordHandler() {
    if (forgotPassword) {
      setForgotPassword(false);
    } else {
      setForgotPassword(true);
    }
  }

  return (
    <View style={styles.formOutterContainer}>
      <View>
        <Input
          label="Email Address"
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
        />
        {(!isLogin || forgotPassword) && (
          <Input
            label="Confirm Email Address"
            onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
            value={enteredConfirmEmail}
            keyboardType="email-address"
            isInvalid={emailsDontMatch}
          />
        )}
        {!forgotPassword && (
          <Input
            label="Password"
            onUpdateValue={updateInputValueHandler.bind(this, 'password')}
            secure
            value={enteredPassword}
            isInvalid={passwordIsInvalid}
          />
        )}
        {isLogin && !forgotPassword && (
          <View style={styles.forgotPasswordContainer}>
            <Text>Forgot your password?</Text>
            <Pressable onPress={forgotPasswordHandler}>
              <Text style={styles.forgotPasswordClickable}> Click here</Text>
            </Pressable>
          </View>
        )}
        {!isLogin && !forgotPassword && (
          <Input
            label="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword',
            )}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />
        )}
        <View style={styles.buttons}>
          <Button
            onPress={submitHandler}
            title={
              isLogin
                ? forgotPassword
                  ? 'Send Recovery code'
                  : 'Log In'
                : 'Sign Up'
            }
            color="purple"
          />
        </View>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
  formOutterContainer: {},
  forgotPasswordContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
  },
  forgotPasswordClickable: {
    color: '#ff87bb',
    fontWeight: 'bold',
  },
});
