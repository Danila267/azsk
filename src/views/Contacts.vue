<template>
    <div class="contacts">
        <div class="contacts__block">
            <div class="contacts__block__title">Контакты</div>
            <div class="contacts__block__list">
                <div class="contacts__block__list__item">
                    <Transition name="item-left-appear" appear>
                    <!-- <template> -->
                    <img src="../assets/contacts/phone2.png" class="contacts__block__list__item__picture">
                    </Transition>
                    <Transition name="item-left-appear" appear>
                    <div class="contacts__block__list__item__container">
                        <p class="contacts__block__list__item__container__title">Телефон</p>
                        <a href="tel:+77052330968" class="contacts__block__list__item__container__text">+7 705 233 09 68</a>
                    </div>
                    </Transition>
                    <!-- </template> -->
                </div>
                <div class="contacts__block__list__item">
                    <Transition name="item-right-appear" appear>
                    <img src="../assets/contacts/email2.png" class="contacts__block__list__item__picture">
                    </Transition>
                    <Transition name="item-right-appear" appear>
                    <div class="contacts__block__list__item__container">
                        <p class="contacts__block__list__item__container__title">Эл. Почта</p>
                        <a href="mailto:gasmarket24@mail.ru" class="contacts__block__list__item__container__text">gasmarket24@mail.ru</a>
                    </div>
                    </Transition>
                </div>
                <div class="contacts__block__list__item">
                    <Transition name="item-left-appear" appear>
                    <img src="../assets/contacts/whatwhite3.png" class="contacts__block__list__item__picture">
                    </Transition>
                    <Transition name="item-left-appear" appear>
                    <div class="contacts__block__list__item__container">
                        <p class="contacts__block__list__item__container__title">Whatsapp</p>
                        <a href="https://wa.me/77052330968?text=" class="contacts__block__list__item__container__text">Перейти в чат</a>
                    </div>
                    </Transition>
                </div>
                <div class="contacts__block__list__item">
                    <Transition name="item-right-appear" appear>
                    <img src="../assets/contacts/location3.png" class="contacts__block__list__item__picture">
                    </Transition>
                    <Transition name="item-right-appear" appear>
                    <div class="contacts__block__list__item__container">
                        <p class="contacts__block__list__item__container__title">Наш адрес</p>
                        <p class="contacts__block__list__item__container__text" id="address">Ул. Д Курманбекова 3, г. Шымкент</p>
                    </div>
                    </Transition>
                </div>
                <div class="contacts__block__list__item">
                    <Transition name="item-down-appear" appear>
                    <!-- <template> -->
                    <img src="../assets/contacts/additional5.png" class="contacts__block__list__item__picture">
                    </Transition>
                    <Transition name="item-down-appear" appear>
                    <div class="contacts__block__list__item__container">
                        <p class="contacts__block__list__item__container__title">Доп. Связь</p>
                        <div class="contacts__block__list__item__container--row">
                            <a href="tel:+77772453676" class="contacts__block__list__item__container__text">+7 777 245 36 76</a>
                            <a href="tel:+77056879330" class="contacts__block__list__item__container__text">+7 705 687 93 30</a>
                        </div>
                    </div>
                    </Transition>
                    <!-- </template> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contacts',
    mounted() {
        this.scrollToTop();
        console.log("Scrolled")
    },
    methods: {
        scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'auto' });
        }
  },
}
</script>

<style lang="scss" scoped>
    .item-left-appear-enter-active {
        animation: left-appear-in 1.25s ease;
    }
    .item-right-appear-enter-active {
        animation: right-appear-in 1.25s ease;
    }
    .item-down-appear-enter-active {
        animation: down-appear-in 1.25s ease;
    }


.contacts {
    width: 100%;
    height: 80vh;
    top: 11.5em;
    position: relative;
    display: flex;
    flex-direction: column;
    //   background-color: blue;
    justify-content: flex-start;
    align-items: center;
    background-color: #01002F;
    z-index: 300;
}
.contacts__block {
    max-width: 1600px;
    height: auto;
    // background-color: #afc985;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 300;
    // background-color: aquamarine;
    background-color: #01002F;
    align-items: center;
}
.contacts__block__title {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 5.4em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    padding-left: 0.35em;
    padding-top: 0.35em;
    box-sizing: border-box;
    right: 5%;
    //   position: absolute;
}
.contacts__block__list {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    // background-color: red;
    background-color: #ffffff;
    margin-top: 2em;
    gap: 5px;
}
.contacts__block__list__item {
  flex-basis: 574px;
  height: 154px;
//   background-color: #d2d3e6;
  background-color: #010027;
  display: flex;
  flex-direction: row;
  position: relative;
  transition: all 0.3s ease;
//   overflow: hidden;
  flex-grow: 1;
  transition: all 0.35s ease;
}
.contacts__block__list__item__picture {
    width: 154px;
    object-fit: contain;
    // overflow: visible;
    user-select: none;
    overflow: hidden;
}
.contacts__block__list__item__container {
    width: 100%;
    height: 100%;
    // background-color: green;
    background-color: #010027;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.contacts__block__list__item__container--row {
    width: 100%;
    height: 100%;
    // background-color: green;
    background-color: #010027;
    position: relative;
    display: flex;
    flex-direction: row;
}
.contacts__block__list__item__container__title {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 2.8em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    padding-left: 0.35em;
    padding-top: 0.35em;
    box-sizing: border-box;
    user-select: none;
}
.contacts__block__list__item__container__text {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 1.5em;
    font-weight: 600;
    font-family: 'Outfit', sans-serif;
    text-decoration: none;
    padding-left: 1em;
    padding-top: 0.35em;
    box-sizing: border-box;
    transition: all 0.3s ease;
}
.contacts__block__list__item__container__text:hover {
    color: #ddd;
    cursor: pointer;
    transition: all 0.3s ease;
}
#address:hover {
    color: #ddd;
    cursor: text;
    transition: all 0.3s ease;
}


@media (max-width: 880px) { // adjust breakpoint as needed
.contacts__block__list {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    // background-color: red;
    background-color: #ffffff;
    margin-top: 2em;
    gap: 5px;
    flex-wrap: wrap;
}

.contacts__block__list__item {
  flex-basis: 574px;
  height: 114px;
//   background-color: #d2d3e6;
  background-color: #010027;
  display: flex;
  flex-direction: row;
  position: relative;
  transition: all 0.3s ease;
//   overflow: hidden;
  flex-grow: 1;
  transition: all 0.35s ease;
}
.contacts__block__list__item__picture {
    width: 124px;
    object-fit: contain;
    // overflow: visible;
    user-select: none;
    overflow: hidden;
}
.contacts__block__title {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 5em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    padding-left: 0.35em;
    padding-top: 0.35em;
    box-sizing: border-box;
    right: 5%;
    //   position: absolute;
}

.contacts__block__list__item__container__title {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 2.1em;
    font-weight: bold;
    line-height: 1.18em;
    font-family: 'Outfit', sans-serif;
    padding-left: 0.35em;
    // padding-top: 0.35em;
    box-sizing: border-box;
    user-select: none;
}

.contacts__block__list__item__container__text {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 1.18em;
    font-weight: 600;
    font-family: 'Outfit', sans-serif;
    text-decoration: none;
    padding-left: 0.8em;
    padding-top: 0.55em;
    box-sizing: border-box;
    transition: all 0.3s ease;
}
}


    @keyframes left-appear-in {
    0% {
        transform: translateX(-700px);
    }
    100% {
        transform: translateX(0px);
    }
    }
    @keyframes right-appear-in {
    0% {
        transform: translateX(800px);
    }
    100% {
        transform: translateX(0px);
    }
    }
    @keyframes down-appear-in {
    0% {
        transform: translateY(700px);
    }
    100% {
        transform: translateX(0px);
    }
    }
</style>