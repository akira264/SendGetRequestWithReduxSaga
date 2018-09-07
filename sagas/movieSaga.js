/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Create some sagas for FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED
*/

import { FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED} from '../actions/actionTypes';

//Saga effects
import { put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

function* fetchMovies(){
    console.log(" fetchMovies saga ")
    try {
        const receivedMovies = yield Api.getMoviesFromApi();
        yield put({type : FETCH_SUCCEEDED, receivedMovies : receivedMovies});
    } catch (error) {
        console.log(" error fetchMovies  " + error );
        yield put({type : FETCH_FAILED, error});
    }
}
   
 function* sayHello(){
    console.log('Hello world saga!');
}


// export function* watchFetchMovies(){
//     console.log(" watchFetchMovies ")
//     yield takeLatest(FETCH_MOVIES, fetchMovies);
// }

export function* watchFetchMovies(){
    console.log(" watchFetchMovies ")
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}