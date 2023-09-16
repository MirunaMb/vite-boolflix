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
 <TvSeriesDetail v-for="tvSeries in store.tvSeries" :key="tvSeries.id" :tvSeriesInfo="tvSeries"/>
</template>

<style lang="scss" scoped></style>