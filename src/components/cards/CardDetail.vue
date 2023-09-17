<script>
export default {
  props: {
    cardInfo: Object,
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
      {{ cardInfo.name }}
      {{ cardInfo.original_title }}
      {{ cardInfo.vote }}
      <img :src="'/src/assets/img/' + cardInfo.language + '.png'" :alt="cardInfo.language">
      <img :src="generateImageUrl(cardInfo.posterPath)" :alt="cardInfo.language">
    </div>
  </div>
</template>



<style lang="scss" scoped></style>
