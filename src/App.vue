<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from "./components/Header"

export default {
  name: 'App',
  components: { Header}
}
</script>

<style lang="scss">
*, body {
  margin: 0;
  padding: 0;
  width: 100%;
  
}
body {
  background-color: #01002F;
}
section {
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
}



</style>
