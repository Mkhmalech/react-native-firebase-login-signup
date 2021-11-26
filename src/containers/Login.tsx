import React, {FC} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
const {width} = Dimensions.get('window');

export const Login: FC<any> = ({navigation, user}) => {
  const SignOut = () => {
    auth()
      .signOut()
      .then(() => navigation.navigate('Welcome'));
  };

  return (
    <View style={style.container}>
      <View style={style.welcomeText}>
        <Text>Welcome </Text>
        <Text style={style.logoutText}>{user.email} </Text>
      </View>

      <View style={style.ImageContainer}>
        <Image source={require('../assets/images/lab.gif')} />
      </View>

      <View style={style.logoutContainer}>
        <TouchableHighlight
          onPress={() => SignOut()}
          style={[style.buttonContainer]}>
          <Text style={[style.logoutText]}>Sign Out</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    flex: 1,
    width: '80%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    flex: 4,
    width: '100%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 28,
    fontWeight: '700',
    color: 'red',
  },
  buttonContainer: {
    height: 40,
    width: width / 3,
    alignContent: 'center',
  },
});
