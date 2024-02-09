import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const wordsGameId = document.querySelector('#app').dataset.id;
export const useGameSettings = defineStore("GameSettings", () => {
    // state refs
    const wordsList = ref([
        {
            id: "1",
            word: "строка",
            theme: "",
            prompt: "",
            valid: false
        }
    ]);
    const wordsCountLimit = 3;
    const gameDescription = ref('');
    const gameResultMessage = ref('');
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
            minutesCount: 10,
        },
        allowReplay: true,
        disableRepeatUsername: true,

    });
    const checkValidate = ref(false);

    // getters


    // Actions
    const getAppData = async () => {
        return new Promise((resolve, reject) => {

        })
    };

    const getWordsValid = async () => {
        checkValidate.value = true;
        const promises = wordsList.value.map(word => {
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20240209T122003Z.8550ea5c2adb40b7.ab65585ec4b71375b975906f73afa4ea1ba17a6a&lang=ru-ru&text=${word.word}`
                    )
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.def.length > 0) {
                            word.valid = true;
                            resolve(res)
                        } else {
                            throw new Error(`Слова "${word.word}" не существует`)
                        }
                    })
                    .catch((err) => {
                        word.valid = false;
                        reject(err)
                    });
            });
        });

        return Promise.all(promises)
    };

    return {
        wordsCountLimit,
        wordsList,
        gameDescription,
        testWordsCount,
        backgroundUrl,
        colors,
        selectedColors,
        additionalSettings,
        gameResultMessage,
        checkValidate,
        getWordsValid
    }
}) 