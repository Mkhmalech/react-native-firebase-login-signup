/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export const home = ({tintColor, focused}: any) => (
  <FAIcon
    name="home"
    size={30}
    style={{color: focused ? '#FF4300' : tintColor}}
  />
);

export const search = ({tintColor}: any) => (
  <FAIcon
    name="search"
    size={30}
    style={{color: tintColor, transform: [{rotate: '360deg'}]}}
  />
);
export const mail = ({tintColor}: any) => (
  <EntypoIcon name="mail" size={30} style={{color: tintColor}} />
);
export const user = ({tintColor}: any) => (
  <FAIcon name="user" size={30} style={{color: tintColor}} />
);
export const gg = ({tintColor}: any) => (
  <FAIcon name="google" size={30} style={{color: tintColor}} />
);
export const fb = ({tintColor}: any) => (
  <FAIcon name="facebook" size={30} style={{color: tintColor}} />
);
