const form = document.querySelector("form")
const input = document.querySelector("input")
form.onsubmit = (e) => {
    e.preventDefault()
    const moviename = input.value
    if (moviename.length === 0)
        alert("write something")
    else {
        // result.innerHTML = " "        
        fetch('https://api.themoviedb.org/3/search/movie?api_key=d99062135fb11777abdedc129ba2b6c7&language=en-US&query=' + moviename +'&page=1&include_adult=false')

            .then((Response) => { return Response.json() })
            .then((result) => { showresult(result) })

            
    }
    movies.innerHTML = ""
}

var  movies = document.querySelector("#results")
// console.log(movies)

function showresult(result) {
    result.results.forEach(index => {
    

        let new_div = document.createElement("div")
        new_div.classList = "new-div"
        let new_img = document.createElement("img")
        let new_h2 = document.createElement("h2")
        let trailer_ankor = document.createElement("a")
        trailer_ankor.innerHTML ="trailer"
        trailer_ankor.href = "https:/youtube.com/embed"
        // console.log(trailer_ankor)
        new_img.src = "https://image.tmdb.org/t/p/original" + index.poster_path
        new_h2.innerHTML = index.original_title
        new_div.append(new_img)
        new_div.append(new_h2)
        new_div.append(trailer_ankor)
        movies.append(new_div)
        console.log(index)
    });
}