import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const wordsGameId = document.querySelector('#app').dataset.id;
export const useGameSettings = defineStore("GameSettings", () => {
    // state refs
    const wordsList = ref([
        {
            id: "1",
            word: ["с", "л", "о", "в", "о"],
            theme: "Букварь какой нибудь",
            prompt: "Это буквально 'СЛОВО'"
        }
    ]);
    const gameDescription = ref('');
    // min 3 max 7
    const testWordsCount = ref(3);
    const backgroundUrl = ref({
        name: '',
        path: ''
    });
    const colors = ref(
        {
            borderColor: [
                {
                    "name": "Intercom",
                    "value": "#FA0056"
                },
                {
                    "name": "Оранжевый",
                    "value": "#FF6B00"
                },
                {
                    "name": "Зеленый",
                    "value": "#24D421"
                },
                {
                    "name": "Морской",
                    "value": "#13EADD"
                },
                {
                    "name": "Желтый",
                    "value": "#FFD600"
                },
                {
                    "name": "Салатовый",
                    "value": "#BDFF00"
                },
                {
                    "name": "Синий",
                    "value": "#1369EA"
                },
                {
                    "name": "Фиолетовый",
                    "value": "#7213EA"
                },
                {
                    "name": "Пурпурный",
                    "value": "#EA13D4"
                }
            ],
            textColor: [
                {
                    "name": "Чёрный",
                    "value": "#000000 "
                },
                {
                    "name": "Белый",
                    "value": "#FFFFFF"
                }

            ]
        }
    );
    const selectedColors = ref(
        {
            borderColor: {
                "name": "Intercom",
                "value": "#FA0056"
            },
            textColor: {
                "name": "Чёрный",
                "value": "#000000 "
            },
        }
    )
    const additionalSettings = ref({
        limitPlayTime: {
            enable: true,
            // min 1 max 59
            minutesCount: 10,
        },
        allowReplay: true,
        disableRepeatUsername: true,

    });

    // getters


    // Actions


    const getAppData = async (timeFilter) => {
        return new Promise((resolve, reject) => {

        })
    };

    return {
        wordsList,
        gameDescription,
        testWordsCount,
        backgroundUrl,
        colors,
        selectedColors,
        additionalSettings,
    }
}) 