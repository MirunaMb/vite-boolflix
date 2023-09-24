<script>
import TvSeriesList from './cards/TvSeriesList.vue';
import CardsList from './cards/CardsList.vue';
export default {

  components: { CardsList, TvSeriesList },
};
</script>

<template>
  <div class="wrapper mt-5">
    <CardsList />
    <TvSeriesList />

  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  position: relative;
}
</style>