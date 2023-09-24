<script>
import { store } from '../../data/store.js';
import TvSeriesDetail from './TvSeriesDetail.vue';

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    TvSeriesDetail,
  },
};
</script>

<template>
  <div class="wrapper-carousel">
    <div class="card-carousel">
      <TvSeriesDetail v-for="tvSeries in store.tvSeries" :key="tvSeries.id" :tvSeriesInfo="tvSeries" class="card-item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-carousel {
  width: 1000px;
  overflow: scroll;
  position: absolute;
  left: 700px;
  top: 700px;
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