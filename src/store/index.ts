/* eslint-disable prettier/prettier */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { LoginReducer } from './reducers';
import { rootSaga } from './sagas';


export const configureStore = () => {

	const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        combineReducers({
			auth : LoginReducer,
		}),
		{
			auth : 'mohammed',
		},
		applyMiddleware(sagaMiddleware)
    );

	sagaMiddleware.run(rootSaga);

    return store;
};
