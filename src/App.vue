<script>
import { store } from './data/store.js';
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  // data(){
  //   return{
  //     store,
  //   }
  // },
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
    const moviesData = response.data.results.map((movie) => {
      const {id,title, original_title, original_language, vote_average,poster_path } = movie;
      return {
         id,
         name: title, 
         original_title,
         language: original_language, 
         vote: Math.ceil(vote_average / 2),
         posterPath: poster_path,
         };
    });
    store.movies = moviesData;
   });
   axios.get('https://api.themoviedb.org/3/search/tv', {
    params: {
      query: term,
      api_key: '2fabe095899fa13a525a342e2dfbb209',
    },
   })
   .then((response) => {
    const tvSeriesData =response.data.results.map((tvSeries) => {
      const {id,name,original_name,original_language,vote_average,poster_path }= tvSeries;
      return{
        id,
        name,
        original_name: original_name,
        language: original_language,
        vote: Math.ceil(vote_average / 2),
        posterPath: poster_path,
      };
    });
    store.tvSeries = tvSeriesData;
   })
    },
  },

  created() {
   this.fetchMovies();
  }
};
</script>

<template>
 <AppHeader @start-search="fetchMovies" />
 <AppMain />

 <h1></h1>
</template>

<style lang="scss" >
@use './styles/general.scss';
</style>