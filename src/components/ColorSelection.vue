<template>
  <div class="settings-item">
    <div class="toggle-head">
      <span>{{ props.title }}</span>
    </div>
    <div class="toggle-body">
      <div class="word__title">
        <span>{{ props.descr }}</span>
      </div>
      <div class="color-selection">
        <label
          class="color-selection__item"
          v-for="(color, index) in colorsList"
          :key="index"
          :style="{
            'border-color':
              !isCustomColor && color.value == selectedColors[colorsType].value
                ? '#0078d2'
                : 'rgba(0, 66, 105, 0.28)',
          }"
        >
          <input
            :checked="color.value == selectedColors[colorsType].value"
            type="radio"
            :value="color.value"
            :name="`color-selection-${props.colorsType}`"
            class="color-selection__input"
            @input="colorSelect(color)"
          />
          <div
            class="color-selection__example"
            :style="{
              borderColor: color.value,
              backgroundColor: color.value,
            }"
          ></div>
          <div class="color-selection__name">{{ color.name }}</div>
        </label>
        <label
          class="color-selection__item custom-picker"
          :style="{
            'border-color':
              isCustomColor && pureColor == selectedColors[colorsType].value
                ? '#0078d2'
                : 'rgba(0, 66, 105, 0.28)',
          }"
        >
          <div
            class="color-ex"
            :style="{
              background:
                isCustomColor && pureColor
                  ? pureColor
                  : 'conic-gradient(red, #ff0, #0f0, #0ff, #00f, #f0f, red)',
            }"
          ></div>
          <ColorPicker
            format="rgb"
            :disableHistory="true"
            v-model:pureColor="pureColor"
            @pureColorChange="pureColorChange"
          />
          <div class="color-selection__name">Свой цвет</div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import { useGameSettings } from "@/stores/GameSettings";
import { storeToRefs } from "pinia";

const props = defineProps({
  colorsType: String,
  title: String,
  descr: String,
});

const store = useGameSettings();
const { colors, selectedColors } = storeToRefs(store);

const colorsType = props.colorsType;
const colorsList = colors.value[colorsType];

const isCustomColor = computed(
  () =>
    selectedColors.value[colorsType].name ==
    selectedColors.value[colorsType].value
);

const defaultColorForColorPicker = isCustomColor
  ? selectedColors.value[colorsType].value
  : colorsList[0].value;

const pureColor = ref(defaultColorForColorPicker);

const colorSelect = (color) => {
  selectedColors.value[colorsType] = color;
};

const pureColorChange = (e) => {
  colorSelect({
    name: pureColor.value,
    value: pureColor.value,
  });
};
</script>

<style lang="scss">
.color-selection {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
  margin-bottom: 25px;
}
.color-selection__item {
  background-color: #ecf4ff;
  position: relative;
  display: flex;
  align-items: center;
  // flex-direction: column;
  margin: 5px;
  padding: 10px;
  width: calc(25% - 10px);
  border-radius: 4px;
  border: 1px solid rgba(0, 66, 105, 0.28);
}

.color-selection__input {
  margin: 0;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  &:checked + .color-selection__example::before {
    opacity: 0;
  }
}

.color-selection__example {
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  // margin-bottom: 6px;
  margin-right: 10px;
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #ecf4ff;
  }
}
.color-selection__name {
  color: #868da4;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}

.vc-color-wrap {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  position: absolute !important;
  left: 0;
  top: 0;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
  opacity: 0;
}
.custom-picker {
  padding-left: 45px;
}

.color-ex {
  width: 24px !important;
  height: 24px !important;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  // background: conic-gradient(red, #ff0, #0f0, #0ff, #00f, #f0f, red);
}
</style>
