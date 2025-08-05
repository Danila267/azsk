<template>
    <div class="filter">
        <div class="filter__modal">
            <div class="filter__modal__title-block">
                <p class="filter__modal__title-block__title">Фильтры</p>
                <img src="../../assets/catalog/close2.png" alt="" class="filter__modal__title-block__close-img">
            </div>
            <div class="filter__modal__price-block">
                <div class="filter__modal__price-block__upper-list">
                    <p class="filter__modal__price-block__upper-list__title">Цена, ₸</p>
                    <img src="../../assets/catalog/arrowgray.png" alt="" class="filter__modal__price-block__upper-list__close-img">
                </div>
                <div class="filter__modal__price-block__range-list">

                </div>
            </div>
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
    top: 0;
    display: flex;
    flex-direction: row;
    background-color: rgba($color: #000000, $alpha: 0.5);
    backdrop-filter: blur(1px);
    justify-content: flex-end;
    z-index: 3000;
}
.filter__modal {
    width: 480px;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 59px;
    background-color: blue;
}
.filter__modal__title-block {
    width: 100%;
    height: 150px;
    position: relative;
    display: flex;
    flex-direction: row;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: red;
    // justify-content: center;
    align-items: center;
    justify-content: space-between;
}
.filter__modal__title-block__title {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 2.8em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    padding-left: 28px;
    // padding-bottom: 0.1em;
    box-sizing: border-box;
}
.filter__modal__title-block__close-img {
    width: 46px;
    height: auto;
    position: relative;
    display: flex;
    object-fit: contain;
    margin-right: 34px;
    margin-top: 10px;
    box-sizing: border-box;
}
.filter__modal__price-block {
    width: 100%;
    height: 180px;
    position: relative;
    display: flex;
    border-radius: 30px;
    background-color: purple;
    align-items: flex-start;
}
.filter__modal__price-block__upper-list {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.filter__modal__price-block__upper-list__title {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 2em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    margin-left: 28px;
    margin-top: 24px;
    // padding-bottom: 0.1em;
    box-sizing: border-box;
}
.filter__modal__price-block__upper-list__close-img {
    width: 35px;
    height: auto;
    position: relative;
    display: flex;
    object-fit: contain;
    margin-right: 34px;
    margin-top: 10px;
    box-sizing: border-box;
}
.filter__modal__price-block__range-list {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
}
</style>