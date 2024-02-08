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
</template>
<script setup>
import WordsList from "./WordsList.vue";
import GameDescription from "./GameDescription.vue";
import gameTestCount from "./gameTestCount.vue";
import AddBackground from "./AddBackground.vue";
import ColorSelection from "./ColorSelection.vue";
import SettingsBlock from "./SettingsBlock.vue";
import GameResultMessage from "./GameResultMessage.vue";
</script>
<style lang="scss"></style>
