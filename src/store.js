import { appReducer } from './reducer';
import { createStore } from 'redux';

// const createStore = (reducer) => {
// 	let state;
// 	let subscribers = [];

// 	return {
// 		dispatch: (action) => {
// 			state = reducer(state, action);
// 			console.log(state);
// 			subscribers.forEach((subscriber) => subscriber());
// 		},
// 		getState: () => state,
// 		subscribe: (subscriber) => {
// 			subscribers.push(subscriber);
// 		},
// 	};
// };

export const store = createStore(appReducer);
