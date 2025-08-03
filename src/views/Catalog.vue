<template>
    <div class="catalog">
        <LogMain />
    </div>
</template>

<script>
import LogMain from '@/components/LogMain.vue';

export default {
    name: 'Catalog',
    components: { LogMain, }
}

</script>

<style lang="scss" scoped>
.catalog {
  width: 100%;
  height: auto;
  top: 11.5em;
  position: relative;
  display: flex;
  flex-direction: column;
//   background-color: blue;
  z-index: 300;
}
</style>