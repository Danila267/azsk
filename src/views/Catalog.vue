<template>
    <div class="catalog">
        <LogMain @filter="toggleFilter"/>
    </div>
    
    <div v-if="showModal">
        <Filter @close="toggleFilter"/>
    </div>
    
</template>

<script>
import LogMain from '@/components/LogMain.vue';
import Filter from '@/components/modals/Filter.vue';

export default {
    name: 'Catalog',
    components: { LogMain, Filter },
    data() {
      return {
        showModal: true,
      }
    },
    methods: {
      toggleFilter() {
        this.showModal = !this.showModal;
      }
    }
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