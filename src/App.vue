<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data(){
    return{
      movies: [],
    }
  },

  components: {AppHeader, AppMain },

  methods:{
    fetchMovies(term){
      axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      query: term,
      api_key:'2fabe095899fa13a525a342e2dfbb209',
    },
   })
   .then((response) => {
    console.log(response.data.results);

    this.movies = response.data.results;
   });
    },
  },

  created() {
   this.fetchMovies();
  }
};
</script>

<template>
 <AppHeader @start-search="fetchMovies" />
<ul>
  <li v-for="movie in movies" :key="movie.id">
    {{ movie.title}}
    {{ movie.origina_title}}
    {{ movie.original_language}}
    {{ movie.vote_average }}
  </li>
</ul>

 <AppMain />

 <h1></h1>
</template>

<style lang="scss" >
@use './styles/general.scss';
</style>