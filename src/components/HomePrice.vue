<template>
    <div class="homeprice">
        <div class="homeprice__block">
            <!-- <img src="" alt="" class="homeprice__block--right"> -->
        </div>
    </div>
</template>

<script>

export default {
    name: "HomePrice"
}
</script>

<style lang="scss" scoped>
    .homeprice {
        width: 100%;
        height: 80vh;
        position: relative;
        display: flex;
        background-color: blue;
        justify-content: center;
        align-items: flex-start;
    }
    .homeprice__block {
        width: 1635px;
        height: 650px;
        background-color: cadetblue;
    }
</style>