console.log(movies); // Check the Data

const parent = document.querySelector('#list-movies');  // Step 1

// Part 11
const removeMovies = () => {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild)
    }
}

const addMoviesToDom = (movies) => {
    removeMovies()
    
    const listConvert = movies.map(movie => {  // Step 2

        // Step 3
        const list = document.createElement('li');
        list.innerHTML = movie.title

        const link = document.createElement('a');
        const image = document.createElement('img');

        // Step 5
        parent.appendChild(list)
        list.appendChild(link)
        link.appendChild(image)

        // Part 12
        image.src = movie.poster
        link.href = 'https://www.imdb.com/title/' + movie.imdbID;
        link.target = '_blank' 
    })
    return listConvert
}
addMoviesToDom(movies) // Callback

// Part 2
  // Event Clicks 
const addEventListeners = document.getElementsByName('film-filter'); // Point 1
addEventListeners.forEach(radioButton => {  // Point 2
    radioButton.addEventListener('change', handleOnChangeEvent); // Point 3
    console.log('radioButton')  // Point 4
})

// Part 3 Click & Change event
function handleOnChangeEvent(event) {
    // Part 4
    console.log(event.target.value);
    // Part 5 & 6 and Part 9
    switch(event.target.value) {
        case 'princess':
            addMoviesToDom(filterMovies('Princess'))
            //console.log("hey i am {Princess} film")
            break;
        case 'x-men':
            addMoviesToDom(filterMovies('X-Men'))
            //console.log("hey i am {X-Men} film");
            break;
        case 'avenger':
            addMoviesToDom(filterMovies('Avenger'))
            //console.log("hey i am {Avenger} film");
            break;
        case 'batman':
            addMoviesToDom(filterMovies('Batman'))
            //console.log("hey i am {Batman} film");
            break;
        case 'latest-movies':
            addMoviesToDom(filterLatestMovies('latest-movies'))
            //console.log("hey i am {Latest Movies} film");
    }
}
// Part 7
const filterMovies = (wordInMovie) => {
    removeMovies()
    return movies.filter(movie => {
        // Part 8
        return movie.title.includes(wordInMovie);
    })
}
// Part 10
const filterLatestMovies = () => {
    removeMovies()
    return movies.filter(movie => {
        return movie.year >= 2014;
    })
}
// Bonus 
// Search bar
const searchBar = document.getElementById('searchBar');
//console.log(searchBar)
searchBar.addEventListener('keyup', (event) => {
    const searchString = event.target.value;
    const filteredCharacters = movies.filter(movie => {
        return movie.title.toLowerCase().includes(searchString)
    });
    addMoviesToDom(filteredCharacters)
})