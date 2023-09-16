<script>
import TvSeriesList from './cards/TvSeriesList.vue';
import CardsList from './cards/CardsList.vue';
export default {
  
  components: {CardsList, TvSeriesList },
};
</script>

<template>
 <div class="container mt-5">
    <CardsList />
    <TvSeriesList />

 </div>
</template>

<style lang="scss" scoped></style>