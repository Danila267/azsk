<template>
    <div class="loglist">
        <LogItem />
        <LogItem />
        <LogItem />
        <LogItem />
        <LogItem />
        <LogItem />
        <LogItem />
        <LogItem />
        <LogItem />
        <LogItem />
    </div>
</template>

<script>
import LogItem from './LogItem.vue';

export default {
    name: 'LogList',
    components: { LogItem, }
}
</script>

<style lang="scss" scoped>
.loglist {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
    // background-color: red;
    margin-top: 2em;
    gap: 30px;
}
</style>