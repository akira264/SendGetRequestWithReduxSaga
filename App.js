import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Redux
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers/index';
import MovieContainer from './containers/MovieContainer';
// Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MovieContainer/>
      </Provider>
    );
  }
}

sagaMiddleware.run(rootSaga);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
