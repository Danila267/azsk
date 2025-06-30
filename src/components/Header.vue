<template>
    <nav class="header">
        <div class="header__upper-part">
            <div class="header__upper-part__logo-block">
                <div class="header__upper-part__logo-block--circle"></div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'Header',
}
</script>

<style lang="scss" scoped>
    .header {
        position: absolute;
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        height: 138.73px;
        background-color: red;
    }
    .header__upper-part {
        width: 100%;
        display: flex;
        position: relative;
        top: 0;
        background-color: blue;
        height: 66.75px;
    }
    .header__upper-part__logo-block {
        width: 261.7px;
        height: 108px;
        background-color: purple;
        position: relative;
        z-index: 500;
    }
    .header__upper-part__logo-block--circle {
        width: 149.28px;
        height: 108px;
        background-color: aqua;
        position: absolute;
        right: -74.65px;
        border-radius: 100px;
        z-index: 300;
    }
</style>