<template>
    <div class="filter">
        <div class="filter__modal">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Filter'
}
</script>

<style lang="scss" scoped>
.filter {
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: row;
    background-color: rgba($color: #000000, $alpha: 0.5);
    backdrop-filter: blur(1px);
    justify-content: flex-end;
    z-index: 2000;
}
.filter__modal {
    width: 480px;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: blue;
}
</style>