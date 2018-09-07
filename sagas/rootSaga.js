/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
rootSaga => to manage other sagas
*/
import { call, all} from 'redux-saga/effects';
import { watchFetchMovies } from './movieSaga';

export default function* rootSaga(){
    try{
        console.log("rootSaga ")
        yield call(watchFetchMovies);
    }catch(err){
        console.log(err)
    }
}
