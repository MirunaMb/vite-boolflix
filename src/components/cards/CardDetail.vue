<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
  props: {
    cardInfo: Object,
  },
  methods: {
    generateImageUrl(posterPath) {
      if (!posterPath) {
        return 'https://via.placeholder.com/300x450';
      }
      const baseUrl = 'https://image.tmdb.org/t/p/';
      const imageSize = 'w342';
      const fullImageUrl = `${baseUrl}${imageSize}${posterPath}`;
      return fullImageUrl;
    },
    getStarClass(n) {
      return n <= this.cardInfo.vote ? 'fa-solid fa-star' : 'fa-regular fa-star';
    },
    showDetails() {
      this.isHovered = true;
    },
    hideDetails() {
      this.isHovered = false;
    },
  },
};
</script>

<template>
  <div class="card" @mouseover="showDetails" @mouseout="hideDetails">
    <div class="card-body" :class="{ 'hovered': isHovered }">
      <!-- Contenuto da mostrare al mouseout -->
      <div v-if="!isHovered">
        <div class="poster-container">
          <img :src="generateImageUrl(cardInfo.posterPath)" :alt="cardInfo.language">
        </div>

      </div>

      <!-- Contenuto da mostrare al mouseover -->
      <div v-else>
        <div class="info-container">
          <ul>
            <li>Nome: {{ cardInfo.name }}</li>
            <li>Titolo originale: {{ cardInfo.original_title }}</li>
            <li>Voto: {{ cardInfo.vote }}</li>
            <li><img :src="'/src/assets/img/' + cardInfo.language + '.png'" :alt="cardInfo.language"></li>
            <li>
              <div class="stars">
                <font-awesome-icon v-for="n in 5" :key="n" :icon="getStarClass(n)" />
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 450px;
  border-color: rgb(102, 30, 30);
}

.card-body {
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 150px;
}

.poster-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.poster-container img,
.info-container div {
  width: 100%;
  height: 100%;
}

.info-container {
  display: flex;

}

.stars {
  display: flex;
  flex-direction: row-reverse;
  color: #f7ce08
}


.hovered {
  transform: rotateY(360deg);
  transform-style: preserve-3d;
  background-color: black;
}

.hovered div {
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}

.hovered ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.hovered li {
  margin: 5px;
  padding: 5px;
  list-style: none;
  display: flex;
  color: aliceblue;
}
</style>
