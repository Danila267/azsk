<!-- <template>
    <div class="admin">
        <div class="admin__block">
            <div class="admin__block__input-box">
                <p class="admin__block__input-box__label">Название</p>
                <input type="text" class="admin__block__input-box__input"/>
            </div>

            <div class="admin__block__input-box">
                <p class="admin__block__input-box__label">Фото</p>
                <input type="file" class="admin__block__input-box__input"/>
            </div>


            <div class="admin__block__input-box">
                <p class="admin__block__input-box__label">Цена</p>
                <input type="text" class="admin__block__input-box__input"/>
            </div>

            <div class="admin__block__input-box">
                <p class="admin__block__input-box__label">Описание</p>
                <textarea type="text" class="admin__block__input-box__text-area"/>
            </div>


            <div class="admin__block__input-box">
                <p class="admin__block__input-box__label">Количество</p>
                <input type="text" class="admin__block__input-box__input"/>
            </div>

            <div class="admin__block__input-box">
                <p class="admin__block__input-box__label">Тэги</p>
                <div class="admin__block__input-box__tag-box">
                    <input type="text" class="admin__block__input-box__input"/>
                    <button class="admin__block__input-box__button">Добавить</button>
                </div>
            </div>

            <div class="admin__block__input-box">
                <p class="admin__block__input-box__label">Производитель</p>
                <div class="admin__block__input-box__tag-box">
                    <input type="text" class="admin__block__input-box__input"/>
                    <button class="admin__block__input-box__button">Добавить</button>
                </div>
            </div>

            <div class="admin__block__input-box">
                <p class="admin__block__input-box__label">Комплектация</p>
                <div class="admin__block__input-box__tag-box">
                    <input type="text" class="admin__block__input-box__input"/>
                    <button class="admin__block__input-box__button">Добавить</button>
                </div>
            </div>

            <div class="admin__block__input-box">
                <p class="admin__block__input-box__label">Характеристики</p>
                <div class="admin__block__input-box__tag-box">
                    <input type="text" class="admin__block__input-box__input"/>
                    <input type="text" class="admin__block__input-box__input"/>
                    <button class="admin__block__input-box__button">Добавить</button>
                </div>
            </div>

            <button class="admin__block__submit">Загрузить</button>

        </div>
    </div>
</template> -->




<template>
  <div class="admin">
    <div class="admin__block">

      <!-- ID -->
      <div class="admin__block__input-box">
        <p class="admin__block__input-box__label">ID</p>
        <input v-model="id" type="text" class="admin__block__input-box__input" />
      </div>

      <!-- Название -->
      <div class="admin__block__input-box">
        <p class="admin__block__input-box__label">Название</p>
        <input v-model="name" type="text" class="admin__block__input-box__input" />
      </div>

      <!-- Фото -->
      <div class="admin__block__input-box">
        <p class="admin__block__input-box__label">Фото</p>
        <input type="file" @change="handleFileChange" class="admin__block__input-box__input" />
      </div>

      <!-- Цена -->
      <div class="admin__block__input-box">
        <p class="admin__block__input-box__label">Цена</p>
        <input v-model="price" type="text" class="admin__block__input-box__input" />
      </div>

      <!-- Описание -->
      <div class="admin__block__input-box">
        <p class="admin__block__input-box__label">Описание</p>
        <textarea v-model="description" class="admin__block__input-box__text-area"></textarea>
      </div>

      <!-- Количество -->
      <div class="admin__block__input-box">
        <p class="admin__block__input-box__label">Количество</p>
        <input v-model="numberof" type="text" class="admin__block__input-box__input" />
      </div>

      <!-- Тэги -->
      <div class="admin__block__input-box">
        <p class="admin__block__input-box__label">Тэги</p>
        <div class="admin__block__input-box__tag-box">
          <input v-model="newTag" type="text" class="admin__block__input-box__input" />
          <button @click.prevent="addTag" class="admin__block__input-box__button">Добавить</button>
        </div>
        <ul>
          <li v-for="(tag, i) in tags" :key="i" style="color:white">{{ tag }}</li>
        </ul>
      </div>

      <!-- Производитель -->
      <div class="admin__block__input-box">
        <p class="admin__block__input-box__label">Производитель</p>
        <div class="admin__block__input-box__tag-box">
          <input v-model="producer" type="text" class="admin__block__input-box__input" />
        </div>
      </div>

      <!-- Комплектация -->
      <div class="admin__block__input-box">
        <p class="admin__block__input-box__label">Комплектация</p>
        <div class="admin__block__input-box__tag-box">
          <input v-model="newComp" type="text" class="admin__block__input-box__input" />
          <button @click.prevent="addComp" class="admin__block__input-box__button">Добавить</button>
        </div>
        <ul>
          <li v-for="(comp, i) in comps" :key="i" style="color:white">{{ comp }}</li>
        </ul>
      </div>

      <!-- Характеристики -->
      <div class="admin__block__input-box">
        <p class="admin__block__input-box__label">Характеристики</p>
        <div class="admin__block__input-box__tag-box">
          <input v-model="newPropName" type="text" placeholder="Название" class="admin__block__input-box__input" />
          <input v-model="newPropValue" type="text" placeholder="Значение" class="admin__block__input-box__input" />
          <button @click.prevent="addProp" class="admin__block__input-box__button">Добавить</button>
        </div>
        <ul>
          <li v-for="(prop, i) in props" :key="i" style="color:white">
            {{ prop.name }}: {{ prop.value }}
          </li>
        </ul>
      </div>

      <!-- Запчасти -->
      <div class="admin__block__input-box">
        <p class="admin__block__input-box__label">Запчасти</p>
        <div class="admin__block__input-box__tag-box">
          <input v-model="newSpare" type="text" class="admin__block__input-box__input" />
          <button @click.prevent="addSpare" class="admin__block__input-box__button">Добавить</button>
        </div>
        <ul>
          <li v-for="(spare, i) in spares" :key="i" style="color:white">{{ spare }}</li>
        </ul>
      </div>

      <!-- Submit -->
      <button @click.prevent="handleSubmit" class="admin__block__submit">Загрузить</button>
    </div>
  </div>
</template>


<script>
import db from "@/firebase.js"
import { doc, setDoc } from "firebase/firestore"

export default {
  name: "Admin",
  data() {
    return {
      // form fields
      id: "", // card id
      name: "",
      img: null,
      price: "",
      description: "",
      numberof: "",
      tags: [],
      newTag: "",
      producer: "",
      comps: [],
      newComp: "",
      props: [],
      newPropName: "",
      newPropValue: "",
      spares: [],
      newSpare: "",

      // new hidden fields
      questions: [],   // always empty when creating
      active: false,   // default is false
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const productRef = doc(db, "Products", this.id);

        let imgURL = "";
        if (this.img) {
          imgURL = await this.uploadImage(this.img);
        }

        await setDoc(productRef, {
          id: this.id,
          name: this.name,
          img: imgURL,
          price: this.price,
          description: this.description,
          numberof: this.numberof,
          tags: this.tags,
          producer: this.producer,
          comps: this.comps,
          props: this.props,
          spares: this.spares,

          // new fields
          questions: this.questions,
          active: this.active,
        });

        alert("Product uploaded successfully!");
        this.resetForm();
      } catch (e) {
        console.error("Error uploading product: ", e);
      }
    },

    async uploadImage(file) {
      const { getStorage, ref, uploadBytes, getDownloadURL } = await import("firebase/storage");
      const storage = getStorage();
      const storageRef = ref(storage, `products/${this.id}_${file.name}`);
      await uploadBytes(storageRef, file);
      return await getDownloadURL(storageRef);
    },

    addTag() {
      if (this.newTag.trim()) {
        this.tags.push(this.newTag.trim());
        this.newTag = "";
      }
    },
    addComp() {
      if (this.newComp.trim()) {
        this.comps.push(this.newComp.trim());
        this.newComp = "";
      }
    },
    addProp() {
      if (this.newPropName.trim() && this.newPropValue.trim()) {
        this.props.push({ name: this.newPropName, value: this.newPropValue });
        this.newPropName = "";
        this.newPropValue = "";
      }
    },
    addSpare() {
      if (this.newSpare.trim()) {
        this.spares.push(this.newSpare.trim());
        this.newSpare = "";
      }
    },
    handleFileChange(e) {
      this.img = e.target.files[0];
    },
    resetForm() {
      this.id = "";
      this.name = "";
      this.img = null;
      this.price = "";
      this.description = "";
      this.numberof = "";
      this.tags = [];
      this.newTag = "";
      this.producer = "";
      this.comps = [];
      this.newComp = "";
      this.props = [];
      this.newPropName = "";
      this.newPropValue = "";
      this.spares = [];
      this.newSpare = "";

      // reset hidden fields
      this.questions = [];
      this.active = false;
    },
  },
};
</script>




<style lang="scss" scoped>
.admin {
  width: 100%;
  height: auto;
  top: 11.5em;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #01002F;
  z-index: 300;
}
.admin__block {
    max-width: 1690px;
    height: auto;
    // background-color: #afc985;
    background-color: #01002F;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    z-index: 300;
}
.admin__block__input-box {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    // background-color: aqua;
    background-color: #01002F;
    flex-direction: column;
    // justify-content: flex-start;
    // align-items: flex-start;
}
.admin__block__input-box__label {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #ffffff;
    font-size: 1.8em;
    font-weight: 600;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    // margin-left: 15px;
    align-self: flex-start;
    margin-left: 174px;
    // padding-bottom: 10px;
    // padding-left: 5px;
    user-select: none;
    box-sizing: border-box;
}
.admin__block__input-box__input {
    width: 500px;
    height: 50px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 20px;
    border: 4px solid #ffffff;
    font-size: 1.4em;
    font-weight: 500;
    font-family: 'Outfit', sans-serif;
    box-sizing: border-box;
}
.admin__block__input-box__text-area {
    width: 600px;
    height: 150px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 20px;
    border: 4px solid #ffffff;
    font-size: 1.4em;
    font-weight: 500;
    font-family: 'Outfit', sans-serif;
    box-sizing: border-box;
}
.admin__block__input-box__tag-box {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 8px;
}
.admin__block__input-box__button {
    width: 200px;
    height: 50px;
    border-radius: 20px;
    background-color: #030069;
    border: 4px solid #ffffff;
    font-size: 1.4em;
    font-weight: 500;
    font-family: 'Outfit', sans-serif;
    color: #ffffff;
    box-sizing: border-box;
    transition: 0.2s ease all;
}
.admin__block__input-box__button:hover {
    cursor: pointer;
    filter: brightness(80%);
    transition: 0.2s ease all;
}
.admin__block__submit {
    width: 300px;
    height: 50px;
    border-radius: 20px;
    background-color: #030069;
    border: 4px solid #ffffff;
    font-size: 1.4em;
    font-weight: 500;
    font-family: 'Outfit', sans-serif;
    color: #ffffff;
    box-sizing: border-box;
    transition: 0.2s ease all;
}
.admin__block__submit:hover {
    cursor: pointer;
    filter: brightness(80%);
    transition: 0.2s ease all;
}
</style>