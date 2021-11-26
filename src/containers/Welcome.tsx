/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';

import auth from '@react-native-firebase/auth';
import * as Icon from '../components/Icons';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Login} from './Login';
export const Welcome: FC<any> = ({navigation}) => {
  const [Email, setEmail] = React.useState<string>('');
  const [Password, setPassword] = React.useState<string>('');
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState<any>();

  // Handle user state changes
  function onAuthStateChanged(User: any) {
    setUser(User);
    if (initializing) {
      setInitializing(false);
    }
  }

  const LoginWithEmailPass = () => {
    auth()
      .signInWithEmailAndPassword(Email, Password)
      .then(() => navigation.navigate('Home'))
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  //   const logWithGoogle = () => {

  //   }
  //   const logWithFacebooc = () => {

  //   }
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });
  if (initializing) {
    return null;
  }
  if (user) {
    return <Login user={user} />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>TT</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword(text)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.whiteText} onPress={() => LoginWithEmailPass()}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('Signup')}>
            Signup
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ggBtn}
          onPress={() => LoginWithEmailPass()}>
          <Icon.gg tintColor="white" size={26} style={styles.ico} />
          <Text style={styles.whiteText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fbBtn}
          onPress={() => LoginWithEmailPass()}>
          <Icon.fb tintColor="white" size={26} />
          <Text style={styles.whiteText}>Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
export const Signup: FC<any> = ({navigation}) => {
  const [Email, setEmail] = React.useState<string>('');
  const [Password, setPassword] = React.useState<string>('');
  const [ConfirmPassword, setConfirmPassword] = React.useState<string>('');

  const SignupWithEmailPass = () => {
    if (Password === ConfirmPassword) {
      auth()
        .createUserWithEmailAndPassword(Email, Password)
        .then(() => {
          navigation.navigate('Welcome');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } else {
      navigation.navigate('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TT</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Confirm Password..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setConfirmPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.whiteText} onPress={() => SignupWithEmailPass()}>
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ico: {
    padding: 10,
    marginLeft: 15,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  whiteText: {
    color: '#fff',
    marginLeft: 20,
    marginRight: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#003f5c',
  },
  inputText: {
    height: 50,
    color: '#003f5c',
  },
  forgot: {
    color: '#003f5c',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  ggBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fb5b5a',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
    position: 'relative',
    marginBottom: 0,
  },
  fbBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
    position: 'relative',
    marginBottom: 0,
  },
  loginText: {
    color: '#003f5c',
  },
});
