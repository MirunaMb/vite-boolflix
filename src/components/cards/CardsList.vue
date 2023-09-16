<script>
import { store } from '../../data/store.js';

import CardDetail from './CardDetail.vue';


export default {
  data() {
    return {
      store,
    }
  },
  components: { CardDetail },

  
};
</script>

<template>
  <CardDetail v-for="movie in store.movies" :key="movie.id" :cardInfo="movie" />
</template>

<style lang="scss" scoped></style>