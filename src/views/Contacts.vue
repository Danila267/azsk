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
                        <p class="contacts__block__list__item__container__text">+7-123-456-78-90</p>
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
                        <p class="contacts__block__list__item__container__text">+7-123-456-78-90</p>
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
                        <p class="contacts__block__list__item__container__text">+7-123-456-78-90</p>
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
                        <p class="contacts__block__list__item__container__text">+7-123-456-78-90</p>
                    </div>
                    </Transition>
                </div>
                <div class="contacts__block__list__item">
                    <Transition name="item-left-appear" appear>
                    <!-- <template> -->
                    <img src="../assets/contacts/additional5.png" class="contacts__block__list__item__picture">
                    </Transition>
                    <Transition name="item-left-appear" appear>
                    <div class="contacts__block__list__item__container">
                        <p class="contacts__block__list__item__container__title">Доп. Связь</p>
                        <div class="contacts__block__list__item__container--row">
                            <p class="contacts__block__list__item__container__text">+7-123-456-78-90</p>
                            <p class="contacts__block__list__item__container__text">+7-123-456-78-90</p>
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
}
</script>

<style lang="scss" scoped>
    .item-left-appear-enter-active {
        animation: left-appear-in 1.25s ease;
    }
    .item-right-appear-enter-active {
        animation: right-appear-in 1.25s ease;
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
    overflow: visible;
}
.contacts__block__list__item__container {
    width: 100%;
    height: 100%;
    // background-color: green;
    background-color: #010027;
    position: relative;
    display: flex;
    flex-direction: column;
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
    padding-left: 1em;
    padding-top: 0.35em;
    box-sizing: border-box;
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
</style>