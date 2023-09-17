<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
     term: '',
    }
  },
  emits: ['start-search'],

  
};
</script>

<template>
  <header class="custom-header">
  <div class="container-fluid d">
    <a class="navbar-brand">
      <img src="../assets/img/logo.png" alt="">
    </a>
    <div class="container-form">
      <form class="d-flex" role="search" @submit.prevent="$emit('start-search',term)">
      <input
      v-model="term"
       class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
    
  </div>
  </header>
  
</template>

<style lang="scss" scoped>
.custom-header{
  background-color: black;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-form{
  display: flex;
  justify-content: end;
}
.form-control{
  width: 60%;
}
</style>