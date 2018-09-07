/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Send GET / POST api requests to server
*/

const urlGetMovies = 'http://10.10.48.82:3000/movies';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    
    const movies = yield response.status === 200 ? response.json(): []  
    return movies;
}
export const Api = {
    getMoviesFromApi
}; 