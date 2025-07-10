<template>
  <div class="home">
    <HomePrice />
    <HomeMarket />
    <HomeBlog />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePrice from '@/components/HomePrice.vue'
import HomeMarket from '@/components/HomeMarket.vue'
import HomeBlog from '@/components/HomeBlog.vue';

export default {
  name: 'Home',
  components: {
    HomePrice,
    HomeMarket,
    HomeBlog
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
