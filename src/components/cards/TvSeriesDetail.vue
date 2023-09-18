<script>

export default {
 props:{
 tvSeriesInfo:Object,
 },
 methods: {
    generateImageUrl(posterPath) {
      if (!posterPath) {
        // in caso in cui non ci sia un percorso per la copertina 
        return 'https://via.placeholder.com/300x450'; 
      }

      // URL base delle immagini
      const baseUrl = 'https://image.tmdb.org/t/p/';

      // l'URL completo
      const imageSize = 'w342';
      const fullImageUrl = `${baseUrl}${imageSize}${posterPath}`;

      return fullImageUrl;
    },
    getStarClass(n){
      return n <= this.tvSeriesInfo.vote ? 'fa-solid fa-star' : 'fa-regular fa-star';
    }
  },
};
</script>

<template>
<div class="card">
    <div class="card-body">
      <li>{{ tvSeriesInfo.name  }}</li>
     <li> {{ tvSeriesInfo.original_name}}</li>
      <li><img :src="'/src/assets/img/' + tvSeriesInfo.language + '.png'" :alt="tvSeriesInfo.language"></li>
     <li>{{ tvSeriesInfo.vote }}</li>
     <font-awesome-icon :icon="getStarClass(n)" v-for="n in 5"/>
     <li> <img :src="generateImageUrl(tvSeriesInfo.posterPath)" :alt="tvSeriesInfo.language"></li>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>