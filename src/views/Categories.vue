<template>
    <div class="categories">
        <CatMain />
    </div>
</template>

<script>
import CatMain from '@/components/CatMain.vue';

export default {
    name: 'Categories',
    components: { CatMain }
}
</script>

<style lang="scss" scoped>
.categories {
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