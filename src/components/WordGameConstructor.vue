<template>
  <div class="t-wtapper">
    <h1 class="settings-title">Создание игры</h1>
    <a class="back-btn" href="/lk/gameword/"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="20" y1="12" x2="4" y2="12"></line>
        <polyline points="10 18 4 12 10 6"></polyline>
      </svg>
      Главное меню
    </a>
  </div>
  <GameTitle />
  <WordsList />
  <GameDescription />
  <gameTestCount />
  <AddBackground />
  <ColorSelection
    :colorsType="'borderColor'"
    :title="'6. Цвета полей'"
    :descr="'Выберите цвет полей'"
  />

  <ColorSelection
    :colorsType="'textColor'"
    :title="'7. Цвет текста кнопок'"
    :descr="'Выберите цвет для текста в кнопках'"
  />
  <SettingsBlock />
  <GameResultMessage />

  <div class="settings-footer">
    <button class="complite-btn" :class="{ sending }" @click="validAndGo">
      <div class="spinvhik"></div>
      <span class="complite-btn__text">Я готов! Собрать и смотреть</span>
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";

import WordsList from "./WordsList.vue";
import GameTitle from "./GameTitle.vue";
import GameDescription from "./GameDescription.vue";
import gameTestCount from "./gameTestCount.vue";
import AddBackground from "./AddBackground.vue";
import ColorSelection from "./ColorSelection.vue";
import SettingsBlock from "./SettingsBlock.vue";
import GameResultMessage from "./GameResultMessage.vue";

import { useGameSettings } from "@/stores/GameSettings";
const store = useGameSettings();
const sending = ref(false);

const validAndGo = (e) => {
  if (sending.value) return;
  sending.value = true;
  store
    .getWordsValid()
    .then((results) => {
      console.log("Все слова валидны");
      setTimeout(() => {
        if (scrollToErrors()) {
          store.setAppData();
        } else {
          sending.value = false;
        }
      }, 800);
    })
    .catch((error) => {
      console.error(error);
      setTimeout(() => {
        sending.value = false;
        scrollToErrors();
      }, 500);
    });
};

const scrollToErrors = () => {
  const parentContainer = document.querySelector(".words-creator");
  const errors = parentContainer.querySelectorAll(
    ".has-error,.empty-word,.invalid-word"
  );
  console.log(errors);
  if (errors.length > 0) {
    errors[0].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
    return false;
  }
  return true;
};
</script>
<style lang="scss"></style>
