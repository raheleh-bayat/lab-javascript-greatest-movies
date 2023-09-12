// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const movies = moviesArray.map((moviesArray) => {
      return moviesArray.director;
    });
    return movies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
     const spielbergDramas = moviesArray.filter((moviesArray) => {
       return (
         moviesArray.director === "Steven Spielberg" &&
         moviesArray.genre.includes("Drama")
       );
     });

     return spielbergDramas.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   const validMovies = moviesArray.filter(
     (moviesArray) => typeof moviesArray.score === "number"
   );

  if (validMovies.length === 0) {
    return 0;
  }

  const totalScore = validMovies.reduce((a, moviesArray) => a + moviesArray.score, 0);

  const averageScore = totalScore / moviesArray.length;

  return parseFloat(averageScore.toFixed(2));

}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((moviesArray) => {
      return (
        moviesArray.genre.includes("Drama") &&
        typeof moviesArray.score === "number"
      );
    });

    if (dramaMovies.length === 0) {
    return 0;
    }
      const totalScore = dramaMovies.reduce(
        (acc, dramaMovies) => acc + dramaMovies.score,
        0
      );
      const averageScore = totalScore / dramaMovies.length;
      return parseFloat(averageScore.toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.slice();
    sortedMovies.sort((firstmovie, secondmovie) => {
        if(firstmovie.year !== secondmovie.year){
            return firstmovie.year - secondmovie.year;
        }
        return firstmovie.title.localeCompare(secondmovie.title);
    });
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
     const copiedMovies = moviesArray.slice();
    copiedMovies.sort((firstmovie, secondmovie)=>{
         return firstmovie.title.localeCompare(secondmovie.title);
    });
    const titles = copiedMovies.slice(0, 20).map((copiedMovies) => {
      return toString(copiedMovies.title);
    });
    return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesWithMinutes = moviesArray.map((moviesArray) => {
    const durationParts = moviesWithMinutes.split(" ");
    const hours = parseInt(durationParts[0]) || 0;
    const minutes = parseInt(durationParts[0]) || 0;
    const totalMinutes = hours * 60 + minutes;

   return {
     ...moviesArray,
     duration: totalMinutes,
   };
  });
  return moviesWithMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
