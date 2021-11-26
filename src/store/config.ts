import AsyncStorage from '@react-native-async-storage/async-storage';
// import {AnyAction} from 'redux';
// import {call, put} from 'redux-saga/effects';

// export const api = 'https://api.ittyni.com';
// export const api = 'https://test.ittyni.com';
// export const api = 'http://192.168.0.196:8080';
export const api = 'https://github.com/login/oauth/access_token';
const GIT_CLIENT_ID = '83c26c9cd1fdf9fd4267';
const GIT_CLIENT_SECRET = 'ef6b2619cd645c337015b98dd667d2ef485ddfef';

export async function callApi(
  method: string,
  url: string,
  path: string,
  data?: any,
) {
  const res = await fetch(`${url}/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Beer ${AsyncStorage.getItem('TTUID')}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export function* tryFetching(): any {
  //   action: AnyAction,
  //   actionWhenSuccesses: string,
  const res = yield fetch(api, {
    method: 'POST',
    body: JSON.stringify({
      client_id: GIT_CLIENT_ID,
      client_secret: GIT_CLIENT_SECRET,
    }),
  });

  console.log(res);
}
