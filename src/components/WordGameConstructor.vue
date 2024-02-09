<template>
  <WordsList />
  <GameDescription />
  <gameTestCount />
  <AddBackground />
  <ColorSelection
    :colorsType="'borderColor'"
    :title="'5. Цвета полей'"
    :descr="'Выберите цвет полей'"
  />

  <ColorSelection
    :colorsType="'textColor'"
    :title="'6. Цвет текста кнопок'"
    :descr="'Выберите цвет для текста в кнопках'"
  />
  <SettingsBlock />
  <GameResultMessage />

  <div class="settings-footer">
    <button class="complite-btn" @click="validAndGo">
      Я готов! Собрать и смотреть
    </button>
  </div>
</template>
<script setup>
import WordsList from "./WordsList.vue";
import GameDescription from "./GameDescription.vue";
import gameTestCount from "./gameTestCount.vue";
import AddBackground from "./AddBackground.vue";
import ColorSelection from "./ColorSelection.vue";
import SettingsBlock from "./SettingsBlock.vue";
import GameResultMessage from "./GameResultMessage.vue";

import { useGameSettings } from "@/stores/GameSettings";
const store = useGameSettings();

const validAndGo = () =>
  store
    .getWordsValid()
    .then((results) => {
      console.log("Все слова валидны");
    })
    .catch((error) => {
      console.error(error);
    });
</script>
<style lang="scss"></style>
