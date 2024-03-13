<template>
  <div class="settings-item">
    <div class="toggle-head">
      <span>8. Дополнительные настройки</span>
    </div>
    <div class="toggle-body">
      <div class="toggle-option">
        <label class="toggle-option__label">
          <input
            type="checkbox"
            v-model="additionalSettings.limitPlayTime.enable"
            name="limitPlayTime"
            class="toggle-option__cb"
          />
          <div class="toggle-option__text">Ограничить время игры?</div>
        </label>
      </div>
      <Vue3SlideUpDown
        v-model="additionalSettings.limitPlayTime.enable"
        :duration="300"
      >
        <div class="limit-time-wrapper">
          <div class="time-wrapper__title">Укажите сколько минут</div>
          <div class="counter-wrapper">
            <button
              class="minus-btn"
              @click="setMinutesCount('minus')"
            ></button>
            <input
              v-model="additionalSettings.limitPlayTime.minutesCount"
              type="text"
              class="count-input"
              readonly
            />
            <button class="plus-btn" @click="setMinutesCount('plus')"></button>
          </div>
        </div>
      </Vue3SlideUpDown>
      <!-- <div class="toggle-option">
        <label class="toggle-option__label">
          <input
            type="checkbox"
            name="disableRepeatUsername"
            v-model="additionalSettings.disableRepeatUsername"
            class="toggle-option__cb"
          />
          <div class="toggle-option__text">
            Запретить повтор username в рейтинге?
          </div>
        </label>
      </div> -->

      <div class="toggle-option">
        <label class="toggle-option__label">
          <input
            type="checkbox"
            v-model="additionalSettings.allowReplay"
            name="allowReplay"
            class="toggle-option__cb"
          />
          <div class="toggle-option__text">
            Разрешить повторное прохождение?
          </div>
        </label>
      </div>

      <div class="toggle-option">
        <label class="toggle-option__label">
          <input
            type="checkbox"
            v-model="additionalSettings.hideFooterBlock"
            name="hideFooterBlock"
            class="toggle-option__cb"
          />
          <div class="toggle-option__text">Скрыть подвал игры ?</div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Vue3SlideUpDown } from "vue3-slide-up-down";

import { useGameSettings } from "@/stores/GameSettings";
import { storeToRefs } from "pinia";
const store = useGameSettings();
const { additionalSettings } = storeToRefs(store);
const limitPlayTime = additionalSettings.value.limitPlayTime;

const setMinutesCount = (type) => {
  if (type === "plus") {
    if (limitPlayTime.minutesCount < 59) {
      limitPlayTime.minutesCount++;
    }
  }
  if (type === "minus") {
    if (limitPlayTime.minutesCount > 1) {
      limitPlayTime.minutesCount--;
    }
  }
};
</script>

<style lang="scss">
.time-wrapper__title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}
.toggle-option__label {
  display: flex;
  position: relative;
}
.toggle-option__cb {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  z-index: 2;
  cursor: pointer;
  &:checked + .toggle-option__text {
    &::before {
      background-color: red;
    }
    &::after {
      left: 17px;
    }
  }
}
.toggle-option__text {
  &::selection {
    background-color: transparent;
  }
  margin-right: 10px;
  color: #262b31;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 25.2px */
  display: flex;
  align-items: center;
  &::before {
    transition: background-color 0.2s ease-in-out;
    margin-right: 30px;
    border-radius: 10px;
    content: "";
    display: block;
    width: 32px;
    height: 16px;
    background-color: #ecf4ff;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }
  &::after {
    position: absolute;
    content: "";
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #fff;
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
    transition: left 0.2s ease-in-out;
  }
}

.toggle-option {
  display: flex;
  align-items: center;
  padding: 10px 0;
}
</style>
