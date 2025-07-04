<template>
    <nav class="header">
        <div class="header__upper-part">
            <div class="header__upper-part--first">
                <div class="header__upper-part__logo-block">
                    <div class="header__upper-part__logo-block--circle"></div>
                </div>
            </div>
            <div class="header__upper-part--second">

            </div>
            <div class="header__upper-part--third">

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
        height: 11.5em;
        background-color: red;
    }
    .header__upper-part {
        width: 100%;
        display: flex;
        position: relative;
        justify-content: flex-start;
        top: 0;
        background-color: blue;
        height: 48%;
    }
    .header__upper-part--first {
        // min-width: 448.5px;
        min-width: 22.5em;
        max-width: 22.5em;
        // width: 448.5px;
        background-color: black;
        position: relative;
        flex-shrink: 0;
        flex-grow: 0.1;
    }
    .header__upper-part--second {
        background-color: white;
        // flex-grow: 0.6;
        flex-shrink: 3;
    }
    .header__upper-part--third {
        background-color: magenta;
        // flex-grow: 0.2;
        flex-shrink: 6;
    }
    .header__upper-part__logo-block {
        width: 75%;
        flex-shrink: 0;
        position: absolute;
        flex-grow: 1;
        height: 162%;
        background-color: purple;
        position: relative;
        z-index: 500;
    }
    .header__upper-part__logo-block--circle {
        width: 57%;
        height: 100%;
        flex-shrink: 0;
        flex-grow: 1;
        background-color: aqua;
        position: absolute;
        right: -28.5%;
        border-radius: 100%;
        z-index: 300;
    }
</style>