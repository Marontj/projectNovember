"use strict";


let numberOfFilms;
// while (numberOfFilms.length < 1 || numberOfFilms.length > 50) {
//     numberOfFilms = prompt('How many films you have already seen last week?');
// }

function start() {
    numberOfFilms = +prompt('How many films you have already seen last week?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films you have already seen last week?', '');
        }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let recentlyMovie = prompt('A movie among the recently viwed?', '');
        let movieRating = prompt('How would you rate it?', '');
            if (recentlyMovie != null && movieRating != null && recentlyMovie != '' && movieRating != '') {
                personalMovieDB.movies[recentlyMovie] = movieRating;
            }
            else {
                i--; 
            }
        }
}
    
rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 3) {
        console.log('u dont like to watch movies');
    }
    else if (numberOfFilms >= 3 && numberOfFilms <= 5) {
        console.log('you are typical viewer');
    }
    else {
        console.log('you + cinema = love');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

 
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Your favorite genre by ${i} number`);
        if (genre != null || genre != '') {
            personalMovieDB.genres[i - 1] = genre;
        }
        else {
            i--;
        }
    }
}

writeYourGenres(personalMovieDB.privat);


showMyDB();

console.log(personalMovieDB);


