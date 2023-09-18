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
    getStarClass(n){
      return n <= this.cardInfo.vote ? 'fa-solid fa-star' : 'fa-regular fa-star';
    }
  },
};
</script>
<template>
  <div class="card">
    <div class="card-body">
      <ul>
      <li>  {{ cardInfo.name }}</li>
      <li>{{ cardInfo.original_title }}</li>
      <li> {{ cardInfo.vote }}</li>
      <li><img :src="'/src/assets/img/' + cardInfo.language + '.png'" :alt="cardInfo.language"></li>
      <li>
       <!-- anche se nel file main.js le abbiamo rinominate per aggiungerle nella libreria ,dobbiamo mettere il nome come sulla doc di FontAwesome,vue.js -->
       <font-awesome-icon :icon="getStarClass(n)" v-for="n in 5"/>
      </li>
      <li><img :src="generateImageUrl(cardInfo.posterPath)" :alt="cardInfo.language"></li>
     </ul>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>
