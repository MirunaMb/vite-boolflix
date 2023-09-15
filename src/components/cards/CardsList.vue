<script>
import CardDetail from './CardDetail.vue';

export default {
  data() {
    return {
      title: "Cards List"
    }
  },
  components: {CardDetail },

  
};
</script>

<template>
  <h2>{{ title }}</h2>
  <CardDetail />
</template>

<style lang="scss" scoped></style>