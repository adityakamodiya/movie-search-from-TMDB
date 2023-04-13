const form = document.querySelector("form")
const input = document.querySelector("input")
form.onsubmit = (e) => {
    e.preventDefault()
    const moviename = input.value
    if (moviename.length === 0)
        alert("write something")
    else {
        // result.innerHTML = " "        
        fetch('https://api.themoviedb.org/3/search/movie?api_key=d99062135fb11777abdedc129ba2b6c7&language=en-US&query=' + moviename + '&page=1&include_adult=false')

            .then((Response) => { return Response.json() })
            .then((result) => {
                // console.log(result)
                showresult(result)
            })


    }
    movies.innerHTML = ""
}

var movies = document.querySelector("#results")
// console.log(movies)
let i = 0
function showresult(result) {
    result.results.forEach(index => {




        let new_div = document.createElement("div")
        new_div.classList = "new-div"
        let new_img = document.createElement("img")
        let new_h2 = document.createElement("h2")

        i++
        console.log(result.results)
        // console.log(trailer_ankor)
        new_img.src = "https://image.tmdb.org/t/p/original" + index.poster_path
        new_h2.innerHTML = index.original_title
        new_div.append(new_img)
        new_div.append(new_h2)
        movies.append(new_div)
        // console.log(index)
        fetch('https://api.themoviedb.org/3/movie/' + index.id + '/videos?api_key=d99062135fb11777abdedc129ba2b6c7&language=en-US')
            .then((Response) => { return Response.json() })
            .then((result) => {
                // console.log(result)
                // console.log(result)
                if (result.results.length > 0 && getkey(result.results)) {
                    let trailer_ankor = document.createElement("a")
                    trailer_ankor.innerHTML = "trailer"
                    trailer_ankor.href = "https:/youtube.com/embed/" + getkey(result.results)
                    new_div.append(trailer_ankor)
                }
                else{
                let     trailer_ankor = document.createElement("a")
                    trailer_ankor.innerHTML = "trailer"
                    trailer_ankor.href ="#"
                    new_div.append(trailer_ankor)
                    trailer_ankor.onclick = (e)=>
                    {
                        console.log("no")
                        e.preventDefault()
                        alert("no trailer available")
                    }

                }
                
            }
            )
        var keys
        function getkey(data) {
            // console.log(data)
            for (var i = 0; i < data.length - 1; i++) 
            keys = data[i].key
             
            return keys

        }
        var ankor_key
        // console.log(getkey())

    });
}