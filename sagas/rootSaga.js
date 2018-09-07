/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
rootSaga => to manage other sagas
*/
import { all, fork} from 'redux-saga/effects';
import { watchFetchMovies } from './movieSaga';
import {watchAddNewMovie } from './movieSaga';

export default function* rootSaga(){
    yield all([
       fork(watchFetchMovies),
       fork(watchAddNewMovie), 
    ]);
}
