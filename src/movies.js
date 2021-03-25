// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = arr => {
    return arr.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = arr => {
    const filteredMoviesArray = arr.filter(movie => {
         return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
    })
    return filteredMoviesArray.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = arr => {
    if (arr.length === 0) return 0

    const rateSum = arr.reduce((acc, elem) => {
        if(!elem.rate) return acc + 0
        return acc + elem.rate
    }, 0)

    const avg = (rateSum / arr.length).toFixed(2)
    return parseFloat(avg) // return +avg
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = arr => {
    const drama = arr.filter(movies => movies.genre.includes('Drama'))
    const dramaRate = drama.reduce((acc, el) => acc + el.rate / drama.length, 0).toFixed(2)
    return parseFloat(dramaRate)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = arr => {
    const newArr = arr.map(movie => movie)
    const orderYear = newArr.sort((a, b) => a.year - b.year)
    return orderYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arr => {
    const titleArr = arr.map(e => e.title)
    const order = titleArr.sort()
    return order.splice(0, 20)
}
  
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
