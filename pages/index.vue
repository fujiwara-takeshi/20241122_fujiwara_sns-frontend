<template>
  <div class="content">
    <h1>ホーム</h1>
    <Post></Post>
  </div>
</template>

<script>
export default {
  layout: 'side-nav',
}
</script>

<style scoped>
.content {
  width: 100%;
}

.content h1 {
  padding: 14px;
  color: #fff;
  border: 1px solid #fff;
}
</style>