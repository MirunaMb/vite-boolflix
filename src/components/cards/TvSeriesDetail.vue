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
  },
};
</script>

<template>
<div class="card">
    <div class="card-body">
      {{ tvSeriesInfo.name  }}
      {{ tvSeriesInfo.original_name}}
      <img :src="'/src/assets/img/' + tvSeriesInfo.language + '.png'" :alt="tvSeriesInfo.language">
      {{ tvSeriesInfo.vote }}
      <img :src="generateImageUrl(tvSeriesInfo.posterPath)" :alt="tvSeriesInfo.language">
    </div>
  </div>
</template>

<style lang="scss" scoped></style>