 /*************
        SAMPLE URLS
        
        1. To get the config data like image base urls
        https://api.themoviedb.org/3/configuration?api_key=<APIKEY>
        
        2. To fetch a list of movies based on a keyword
        https://api.themoviedb.org/3/search/movie?api_key=<APIKEY>&query=<keyword>
        
        3. To fetch more details about a movie
        https://api.themoviedb.org/3/movie/<movie-id>?api_key=<APIKEY>
        *************/
const APIKEY = '61e588d14c9ac42a437e560cc3d65659';
let baseURL = 'https://api.themoviedb.org/3/';
let configData = null;
let baseImageURL = null;
       
let getConfig = function () {
  let url = "".concat(baseURL, 'configuration?api_key=', APIKEY); 
  fetch(url)
    .then((result)=>{
      return result.json();
    })
    .then((data)=>{
      baseImageURL = data.images.secure_base_url;
      configData = data.images;
      console.log('config:', data);
      console.log('config fetched');
      runSearch('scarface')
    })
    .catch(function(err){
      alert(err);
    });
}
       
let runSearch = function (keyword) {
  let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
  fetch(url)
    .then(result=>result.json())
    .then((data)=>{
      //process the returned data
      for (var i = 0;i<data.results.length;i++){
      document.getElementById('movie-data').innerHTML += 
      "<hr><div class='movie' style='display: block'><img class='image' src='http://image.tmdb.org/t/p/w300" + (data.results[i].poster_path) + "'><h2 class='title'>"+ (data.results[i].title) + "</h2><article class='description'>"+ (data.results[i].overview)+"</article></div>"
      //work with results array...
      }
    })
}


       
document.addEventListener('DOMContentLoaded', getConfig);
/*******************************
 SAMPLE SEARCH RESULTS DATA
{ "vote_count": 2762, 
    "id": 578, 
    "video": false, 
    "vote_average": 7.5, 
    "title": "Jaws", 
    "popularity": 16.273358, 
    "poster_path": "/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg", 
    "original_language": "en", 
    "original_title": "Jaws", 
    "genre_ids": [ 27, 53, 12 ], 
    "backdrop_path": "/slkPgAt1IQgxZXNrazEcOzhAK8f.jpg", 
    "adult": false, 
    "overview": "An insatiable great white shark terrorizes the townspeople of Amity Island, The police chief, an oceanographer and a grizzled shark hunter seek to destroy the bloodthirsty beast.", 
    "release_date": "1975-06-18" 
}
*******************************/