<template>
    <div class="singlepage">
        <SingleMain />
    </div>
</template>

<script>
import SingleMain from '@/components/SingleMain.vue';

export default {
    name: 'SinglePage',
    components: { SingleMain, }
}
</script>

<style lang="scss" scoped>
.singlepage {
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