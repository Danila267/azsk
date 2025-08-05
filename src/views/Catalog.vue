<template>
    <div class="catalog">
        <LogMain />
        <Filter />
    </div>
</template>

<script>
import LogMain from '@/components/LogMain.vue';
import Filter from '@/components/modals/Filter.vue';

export default {
    name: 'Catalog',
    components: { LogMain, Filter }
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