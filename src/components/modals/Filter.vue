<template>
    <div @click.self="closeFilter" class="filter">

        <Transition name="filter-appear" appear>
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
                    <div class="filter__modal__price-block__range-list__range-block">
                        <p class="filter__modal__price-block__range-list__range-block__label">От</p>
                        <input type="text" class="filter__modal__price-block__range-list__range-block__input">
                    </div>
                    <div class="filter__modal__price-block__range-list__range-block">
                        <p class="filter__modal__price-block__range-list__range-block__label">До</p>
                        <input type="text" class="filter__modal__price-block__range-list__range-block__input">
                    </div>
                </div>
            </div>

            <div class="filter__modal__category-block">
                <div class="filter__modal__category-block__upper-list">
                    <p class="filter__modal__category-block__upper-list__title">Категория</p>
                    <img src="../../assets/catalog/arrowgray.png" class="filter__modal__category-block__upper-list__close-img"/>
                </div>
                <div class="filter__modal__category-block__check-list">
                    
                    <div class="filter__modal__category-block__check-list__check-item">
                        <input type="checkbox" name="" class="filter__modal__category-block__check-list__check-item__check">
                        <p class="filter__modal__category-block__check-list__check-item__label">Оборудование</p>
                    </div>

                    <div class="filter__modal__category-block__check-list__check-item">
                        <input type="checkbox" name="" class="filter__modal__category-block__check-list__check-item__check">
                        <p class="filter__modal__category-block__check-list__check-item__label">Запчасти</p>
                    </div>

                </div>
            </div>

            <div class="filter__modal__category-block">
                <div class="filter__modal__category-block__upper-list">
                    <p class="filter__modal__category-block__upper-list__title">Производитель</p>
                    <img src="../../assets/catalog/arrowgray.png" class="filter__modal__category-block__upper-list__close-img"/>
                </div>
                <div class="filter__modal__category-block__check-list">
                    
                    <div class="filter__modal__category-block__check-list__check-item">
                        <input type="checkbox" name="" class="filter__modal__category-block__check-list__check-item__check">
                        <p class="filter__modal__category-block__check-list__check-item__label">Шельф</p>
                    </div>

                    <div class="filter__modal__category-block__check-list__check-item">
                        <input type="checkbox" name="" class="filter__modal__category-block__check-list__check-item__check">
                        <p class="filter__modal__category-block__check-list__check-item__label">Топаз</p>
                    </div>


                    <div class="filter__modal__category-block__check-list__check-item">
                        <input type="checkbox" name="" class="filter__modal__category-block__check-list__check-item__check">
                        <p class="filter__modal__category-block__check-list__check-item__label">Технопроект</p>
                    </div>


                    <div class="filter__modal__category-block__check-list__check-item">
                        <input type="checkbox" name="" class="filter__modal__category-block__check-list__check-item__check">
                        <p class="filter__modal__category-block__check-list__check-item__label">Gilbarco</p>
                    </div>

                </div>
            </div>
            

        </div>
        </Transition>
    </div>
</template>

<script>
export default {
    name: 'Filter',
    methods: {
        closeFilter() {
            this.$emit('close')
        }
    }

}
</script>

<style lang="scss" scoped>

    .filter-appear-enter-active {
        animation: right-appear-in 0.5s ease;
    }

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
    // background-color: blue;
    background-color: #010027;
    overflow: auto;
}
.filter__modal__title-block {
    width: 100%;
    height: 150px;
    position: relative;
    display: flex;
    flex-direction: row;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    // background-color: red;
    background-color: #01002F;
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
    margin-top: 20px;
    margin-bottom: 20px;
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
    flex-direction: column;
    border-radius: 30px;
    // background-color: purple;
    background-color: #01002F;
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
.filter__modal__price-block__range-list__range-block {
    width: 50%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
}
.filter__modal__price-block__range-list__range-block__label {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 1.5em;
    font-weight: 600;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    margin-left: 54px;
    margin-top: 8px;
    // padding-bottom: 0.1em;
    box-sizing: border-box;
}
.filter__modal__price-block__range-list__range-block__input {
    width: 166px;
    height: 44px;
    background-color: #ffffff;
    margin-left: 40px;
    margin-bottom: 20px;
    border-radius: 30px;
    border: 0px solid #ffffff;
    outline: none;
    font-size: 1.25em;
    font-weight: 500;
    color: #000000;
    font-family: 'Outfit', sans-serif;
    padding-left: 22px;
    padding-right: 22px;
    box-sizing: border-box;
    transition: filter 0.3s ease;
}
.filter__modal__price-block__range-list__range-block__input:hover {
    cursor: text;
    filter: brightness(90%);
    transition: all 0.2s ease;
}
.filter__modal__price-block__range-list__range-block__input:focus {
    border: 3px solid #0306F0;
    box-sizing: border-box;
    transition: filter 0.3s ease;
}
.filter__modal__category-block {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    align-items: flex-start;
    // background-color: pink;
    background-color: #01002F;
}
.filter__modal__category-block__upper-list {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.filter__modal__category-block__upper-list__title {
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
.filter__modal__category-block__upper-list__close-img {
    width: 35px;
    height: auto;
    position: relative;
    display: flex;
    object-fit: contain;
    margin-right: 34px;
    margin-top: 10px;
    box-sizing: border-box;
}
.filter__modal__category-block__check-list {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 14px;
    margin-left: 40px;
    padding-top: 16px;
    padding-bottom: 16px;
    box-sizing: border-box;
}
.filter__modal__category-block__check-list__check-item {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: flex-start;
}
// .filter__modal__category-block__check-list__check-item__check {
//     width: 30px;
//     height: 30px;
//     background-color: #ffffff;
//     border-radius: 30px;
// }
.filter__modal__category-block__check-list__check-item__check {
    appearance: none; /* remove default OS checkbox style */
    -webkit-appearance: none; /* for Safari */
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    border-radius: 10px; /* perfect circle */
    border: 2px solid #ccc;
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: all 0.1s ease-out;
}
.filter__modal__category-block__check-list__check-item__check:hover {
    // background-color: #ddd;
    filter: brightness(90%);
    transition: all 0.1s ease-out;
}

/* Optional: when checked, show a custom mark */
.filter__modal__category-block__check-list__check-item__check:checked {
    background-color: #0306F0;
    border-color: #0306F0;
    transition: all 0.1s ease-out;
}

/* Optional: add a tick mark */
.filter__modal__category-block__check-list__check-item__check:checked::after {
    content: "";
    position: absolute;
    top: 5px;
    left: 9px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 4px 4px 0;
    transform: rotate(45deg) scale(1);
    transition: all 0.1s ease-out;
}
.filter__modal__category-block__check-list__check-item__label {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 1.5em;
    font-weight: 600;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    // margin-left: 54px;
    margin-top: 1px;
    // padding-bottom: 0.1em;
    box-sizing: border-box;
    user-select: none;
}


    @keyframes right-appear-in {
    0% {
        transform: translateX(500px);
    }
    100% {
        transform: translateX(0px);
    }
    }
</style>