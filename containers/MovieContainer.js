/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
MovieContainer connect Redux with MovieComponent
*/

import { connect } from 'react-redux'

import MovieComponent from '../components/MovieComponent';
import { addMovieAction, fetchMoviesAction, fetchSuccessAction, fetchFailedAction} from '../actions/index'  

const mapStateToProps = (state) => {
    return {
        movies: state.movieReducers
    }
}

 const mapDispatchToProps = (dispatch) => {
    return {
         onFetchMovie : () =>{
             dispatch(fetchMoviesAction());
         },
         onAddMovie : (newMovie) => {
             dispatch(addMovieAction(newMovie));
         }
    }
}

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default MovieContainer;