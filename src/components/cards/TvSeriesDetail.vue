<script>

export default {
 props:{
 tvSeriesInfo:Object,
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
    </div>
  </div>
</template>

<style lang="scss" scoped></style>