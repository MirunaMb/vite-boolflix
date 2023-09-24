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
  <div class="wrapper-carousel">
    <div class="card-carousel">
      <CardDetail v-for="movie in store.movies" :key="movie.id" :cardInfo="movie" class="card-item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-carousel {
  width: 1000px;
  overflow: scroll;
  position: absolute;
  left: 700px;
  top: 300px;
}

.card-carousel {
  display: flex;
  width: 5155px;
  background: black;
}

.card-carousel::-webkit-scrollbar {
  display: none;
}

.card-item {
  width: 250px;
  margin-right: 10px;
}
</style>