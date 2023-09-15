<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: "Hello world"
    }
  }

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style lang="scss" >
@use './styles/general.scss';
</style>