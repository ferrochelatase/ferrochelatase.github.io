var total = 0

Survey
    .StylesManager
    .applyTheme("default");

var json =
{
    "locale": "ru",
    "pages": [
        {
            "name": "page0",
            "elements": [
                {
                    "type": "text",
                    "name": "name",
                    "title": "ФИО",
                    "isRequired": true,
                    "placeHolder": "Иванов Иван Иванович"
                },
                {
                    "type": "text",
                    "name": "email",
                    "title": "Электронная почта",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "email"
                        }
                    ],
                    "inputType": "email",
                    "placeHolder": "abc@mail.ru"
                },
                {
                    "type": "boolean",
                    "name": "operation",
                    "defaultValue": "false",
                    "isRequired": true,
                    "label": "Была ли операция?",
                    "valueTrue": "true"
                },
                {
                    "type": "dropdown",
                    "name": "when",
                    "visibleIf": "{operation} = true",
                    "title": {
                        "ru": "Срок после операции"
                    },
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "3",
                            "text": {
                                "ru": "3 мес"
                            }
                        },
                        {
                            "value": "6",
                            "text": {
                                "ru": "6 мес"
                            }
                        },
                        {
                            "value": "9",
                            "text": {
                                "ru": "9 мес"
                            }
                        },
                        {
                            "value": "12",
                            "text": {
                                "ru": "12 мес"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "page1",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "limp",
                    "title": "Хромота",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": 5,
                            "text": "Отсутствует"
                        },
                        {
                            "value": 3,
                            "text": "Слегка или периодически"
                        },
                        {
                            "value": 0,
                            "text": "Выражена или постоянна"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "cane or crutches",
                    "title": "Средства опоры",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": 5,
                            "text": "Поддержка не нужна"
                        },
                        {
                            "value": 2,
                            "text": "Трость или костыль"
                        },
                        {
                            "value": 0,
                            "text": "Опора на ногу невозможна"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "locking sensations",
                    "title": "Блокада сустава",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": 15,
                            "text": "Отсутствует"
                        },
                        {
                            "value": 10,
                            "text": "Ощущение неловкости в суставе, нет блокирования"
                        },
                        {
                            "value": 6,
                            "text": "Иногда блокируется"
                        },
                        {
                            "value": 2,
                            "text": "Часто блокируется"
                        },
                        {
                            "value": 0,
                            "text": "Блокада прямо сейчас"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "giving way sensation",
                    "title": "Нестабильность",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": 25,
                            "text": "В движении отсутствует"
                        },
                        {
                            "value": 20,
                            "text": "Редко при легкой атлетике или других серьезных нагрузках"
                        },
                        {
                            "value": 15,
                            "text": "Часто при легкой атлетике или других серьезных нагрузках (или не способен участвовать)"
                        },
                        {
                            "value": 10,
                            "text": "Иногда при ежедневных действиях"
                        },
                        {
                            "value": 5,
                            "text": "Часто при ежедневных действиях"
                        },
                        {
                            "value": 0,
                            "text": "При каждом шаге"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "pain",
                    "title": "Боль",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": 25,
                            "text": "Отсутствует"
                        },
                        {
                            "value": 20,
                            "text": "Непостояннная и не выраженная"
                        },
                        {
                            "value": 15,
                            "text": "Отмечается в начале движения"
                        },
                        {
                            "value": 10,
                            "text": "Отмечается во время или после ходьбы более 2 км"
                        },
                        {
                            "value": 5,
                            "text": "Отмечается во время или после ходьбы менее 2 км"
                        },
                        {
                            "value": 0,
                            "text": "Постоянная и выраженная"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "swelling",
                    "title": "Отечность",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": 10,
                            "text": "Отсутствует"
                        },
                        {
                            "value": 6,
                            "text": "После серьезной нагрузки"
                        },
                        {
                            "value": 2,
                            "text": "После обычной нагрузки"
                        },
                        {
                            "value": 0,
                            "text": "Постоянно"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "stairs",
                    "title": "Подъем по лестнице",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": 10,
                            "text": "Без проблем"
                        },
                        {
                            "value": 6,
                            "text": "Небольшие трудности"
                        },
                        {
                            "value": 2,
                            "text": "Замедленный, с вынужденной остановкой на каждой ступени"
                        },
                        {
                            "value": 0,
                            "text": "Невозможен"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "squat",
                    "title": "Приседание",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": 5,
                            "text": "Без проблем"
                        },
                        {
                            "value": 4,
                            "text": "Небольшие трудности"
                        },
                        {
                            "value": 1,
                            "text": "Невозможно приседать более 90 градусов"
                        },
                        {
                            "value": 0,
                            "text": "Невозможно"
                        }
                    ]
                }
            ]
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "html",
                    "name": "mark",
                    "html": {
                        "ru": "Оцените по шкале от 1 до 10 боль в ваших коленных суставах за последние 24 часа"
                    }
                },
                {
                    "type": "rating",
                    "name": "r-knee",
                    "title": "Правое колено",
                    "isRequired": true,
                    "rateMax": 10
                },
                {
                    "type": "rating",
                    "name": "l-knee",
                    "title": "Левое колено",
                    "isRequired": true,
                    "rateMax": 10
                },
                {
                    "type": "expression",
                    "name": "total",
                    "visible": false,
                    "expression": "{limp} + {cane or crutches} + {locking sensations} + {giving way sensation} + {pain} + {swelling} + {stairs} + {squat}"
                }
            ]
        }
    ],
    "showQuestionNumbers": "off",
    "clearInvisibleValues": "none",
    "requiredText": ""
}

window.survey = new Survey.Model(json);

//survey.onComplete.add(
//    function (result)
//    {
//        document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
//    });

$("#surveyElement").Survey({ model: survey });
