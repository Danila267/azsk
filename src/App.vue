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



</style>
