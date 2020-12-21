// Esercizio:
// Traccia e consigli nella cartella "Slide Pdf" su Drive, file: Boolfix-milestone1.rtf
// Poster:
// L'API ci restituirà url relativo dell'immagine, come prefisso aggiungiamo:
// https://image.tmdb.org/t/p/w220_and_h330_face/ (formato: 220px X 330px)

var root = new Vue(
  {
    el: '#root',
    data: {
      films: [],
      search: '',
      imgPrefix: 'https://image.tmdb.org/t/p/w220_and_h330_face',
    },
    methods: {

      searchMovie: function() {
        var self = this;
        var input = self.search;
        console.log(input);

      axios
        .get('https://api.themoviedb.org/3/search/movie',
        {
          params: {
            query: self.search,
            api_key: '8f719a955600e8912d95a9391e81e28a',
            language: 'it-IT',
          }
        })

        .then(function (result) {
          console.log(result.data.results);
          self.search = '';
          self.films = result.data.results;
        },

        self.films.forEach((element) => {
          let vote = (element.vote_average / 2);
          element.star = Math.ceil(vote);
        }),
      )
    },
  }
);
