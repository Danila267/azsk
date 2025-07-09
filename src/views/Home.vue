<template>
  <div class="home">
    <HomePrice />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePrice from '@/components/HomePrice.vue'

export default {
  name: 'Home',
  components: {
    HomePrice
  }
}
</script>

<style lang="scss" scoped>

.home {
  width: 100%;
  height: auto;
  top: 11.5em;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: blue;
}

</style>
