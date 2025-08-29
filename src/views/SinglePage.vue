<template>
    <div class="singlepage">
        <SingleMain />
        <SingleOptions />
    </div>
</template>

<script>
import SingleMain from '@/components/SingleMain.vue';
import SingleOptions from '@/components/SingleOptions.vue';

export default {
    name: 'SinglePage',
    components: { SingleMain, SingleOptions }
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