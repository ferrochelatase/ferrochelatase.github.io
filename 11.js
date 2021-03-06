﻿var total = 0

Survey
    .StylesManager
    .applyTheme("default");

var json =
{
 locale: "ru",
 pages: [
  {
   name: "ICRS+IKDC",
   elements: [
    {
     type: "text",
     name: "name",
     title: "Ф.И.О.",
     isRequired: true,
     placeHolder: {
      ru: "Иванов Иван Иванович"
     }
    },
    {
     type: "text",
     name: "email",
     title: {
      ru: "Электронная почта"
     },
     isRequired: true,
     validators: [
      {
       type: "email"
      }
     ],
     inputType: "email",
     placeHolder: {
      ru: "abc@mail.ru"
     }
    },
    {
     type: "text",
     name: "phone",
     title: {
      ru: "Контактный телефон"
     },
     inputType: "tel"
    },
    {
     type: "radiogroup",
     name: "gender",
     title: {
      ru: "Пол"
     },
     isRequired: true,
     choices: [
      {
       value: "m",
       text: {
        ru: "Мужской"
       }
      },
      {
       value: "f",
       text: {
        ru: "Женский"
       }
      }
     ]
    },
    {
     type: "text",
     name: "height",
     title: {
      ru: "Рост"
     },
     isRequired: true,
     inputType: "number"
    },
    {
     type: "text",
     name: "weight",
     title: {
      ru: "Вес"
     },
     isRequired: true,
     inputType: "number"
    },
    {
     type: "text",
     name: "dateOfBirth",
     title: {
      ru: "Дата рождения"
     },
     isRequired: true,
     inputType: "date"
    },
    {
     type: "boolean",
     name: "operation",
     title: {
      ru: "Была ли операция?"
     },
     defaultValue: "false",
     isRequired: true,
     valueTrue: "true"
    },
    {
     type: "dropdown",
     name: "question1",
     visible: false,
     visibleIf: "{operation} = \"true\"",
     title: {
      ru: "Срок после операции"
     },
     isRequired: true,
     choices: [
      {
       value: "item1",
       text: {
        ru: "3 месяца"
       }
      },
      {
       value: "item2",
       text: {
        ru: "6 месяцев"
       }
      }
     ]
    }
   ],
   title: {
    ru: "Анкета пациента"
   }
  },
  {
   name: "ICRS",
   elements: [
    {
     type: "panel",
     name: "activityPanel",
     elements: [
      {
       type: "checkbox",
       name: "activityBeforeOperation",
       title: {
        ru: "Физическая активность до операции"
       },
       choices: [
        {
         value: "dailyActivity",
         text: {
          ru: "Ежедневные бытовые действия"
         }
        },
        {
         value: "sports",
         text: {
          ru: "Занятия спортом"
         }
        },
        {
         value: "traffic",
         text: {
          ru: "Возможность передвигаться"
         }
        },
        {
         value: "work",
         text: {
          ru: "Работа"
         }
        }
       ]
      },
      {
       type: "matrixdropdown",
       name: "activityLevel",
       title: {
        ru: "Оцените уровень Вашей активности"
       },
       columns: [
        {
         name: "Column 1",
         title: {
          ru: "Выберите наиболее подходящее утверждение"
         },
         cellType: "dropdown",
         choices: [
          {
           value: "sportsman",
           text: {
            ru: "Профессиональный спортсмен"
           }
          },
          {
           value: "well-trained",
           text: {
            ru: "Высокий уровень физической подготовки, частые занятия спортом"
           }
          },
          {
           value: "sometimesSporting",
           text: {
            ru: "Занятия спортом время от времени"
           }
          },
          {
           value: "non-sporting",
           text: {
            ru: "Не занимаюсь спортом"
           }
          }
         ],
         choicesOrder: "asc"
        }
       ],
       choices: [
        1,
        2,
        3,
        4,
        5
       ],
       rows: [
        {
         value: "beforeInjury",
         text: {
          ru: "До травмы"
         }
        },
        {
         value: "nowPriortoSurgery",
         text: {
          ru: "Сейчас, перед операцией"
         }
        }
       ]
      },
      {
       type: "matrixdropdown",
       name: "functionalStatus",
       title: {
        ru: "Функциональное состояние"
       },
       columns: [
        {
         name: "Column 1",
         title: {
          ru: "Выберите наиболее подходящее утверждение"
         },
         cellType: "dropdown",
         choices: [
          {
           value: "everything",
           text: {
            ru: "Свободен в движениях"
           }
          },
          {
           value: "nearlyEverything",
           text: {
            ru: "В целом почти свободен в движениях"
           }
          },
          {
           value: "restricted",
           text: {
            ru: "Я скован в движениях, невозможно сделать многие вещи"
           }
          },
          {
           value: "veryRestricred",
           text: {
            ru: "Я очень скован в движениях, и почти ничего не могу сделать без сильной боли и последующей потери полного объема функций"
           }
          }
         ],
         choicesOrder: "asc"
        }
       ],
       choices: [
        1,
        2,
        3,
        4,
        5
       ],
       rows: [
        {
         value: "Preinjury",
         text: {
          ru: "До травмы"
         }
        },
        {
         value: "Just prior to surgery",
         text: {
          ru: "Перед операцией"
         }
        },
        {
         value: "Present activity level",
         text: {
          ru: "В настоящее время"
         }
        }
       ]
      }
     ],
     title: {
      ru: "Физическая активность"
     }
    }
   ],
   title: {
    ru: "Стандартная форма оценки повреждений хрящевой ткани"
   }
  },
  {
   name: "IKDC CURRENT HEALTH ASSESSMENT FORM",
   elements: [
    {
     type: "rating",
     name: "healthGeneral",
     title: {
      ru: "В целом, ваше состояние здоровья"
     },
     rateValues: [
      {
       value: "5",
       text: {
        ru: "Отличное"
       }
      },
      {
       value: "4",
       text: {
        ru: "Очень хорошее"
       }
      },
      {
       value: "3",
       text: {
        ru: "Хорошее"
       }
      },
      {
       value: "2",
       text: {
        ru: "Среднее"
       }
      },
      {
       value: "1",
       text: {
        ru: "Неудовлетворительное"
       }
      }
     ]
    },
    {
     type: "rating",
     name: "healthCompared",
     title: {
      ru: "Как Вы оцениваете состояние своего здоровья по сравнению с годом ранее?"
     },
     rateValues: [
      {
       value: "5",
       text: {
        ru: "Намного лучше"
       }
      },
      {
       value: "4",
       text: {
        ru: "Несколько лучше"
       }
      },
      {
       value: "3",
       text: {
        ru: "Такое же"
       }
      },
      {
       value: "2",
       text: {
        ru: "Несколько хуже"
       }
      },
      {
       value: "1",
       text: {
        ru: "Намного хуже"
       }
      }
     ]
    },
    {
     type: "panel",
     name: "dailyActivityPanel",
     elements: [
      {
       type: "matrix",
       name: "healthLimitYou",
       title: {
        ru: "Ограничивает ли Вас состояние здоровья при выполнении данных действий? Если да, насколько сильно?"
       },
       columns: [
        {
         value: "yesALot",
         text: {
          ru: "Да, сильно ограничивает"
         }
        },
        {
         value: "yesALittle",
         text: {
          ru: "Да, немного ограничивает"
         }
        },
        {
         value: "no",
         text: {
          ru: "Нет, совершенно не ограничивает"
         }
        }
       ],
       rows: [
        {
         value: "vigorous",
         text: {
          ru: "Очень напряженная деятельность (бег, тяжелый физический труд, активные виды спорта)"
         }
        },
        {
         value: "moderate",
         text: {
          ru: "Умеренная деятельность(перестановка стола, перемещение пылесоса, боулинг или гольф)"
         }
        },
        {
         value: "lifting",
         text: {
          ru: "Поднятие или перенос продуктов"
         }
        },
        {
         value: "climbingSeveral",
         text: {
          ru: "Преодоление нескольких лестничных пролетов"
         }
        },
        {
         value: "climbingOne",
         text: {
          ru: "Преодоление одного лестничного пролета"
         }
        },
        {
         value: "bending",
         text: {
          ru: "Согнуть колено, присесть или наклониться"
         }
        },
        {
         value: "walkingMore1",
         text: {
          ru: "Прохождение более 1,5 км"
         }
        },
        {
         value: "walkingSeveral",
         text: {
          ru: "Прохождение больше одного квартала"
         }
        },
        {
         value: "walkingOneBlock",
         text: {
          ru: "Прохождение одного квартала"
         }
        },
        {
         value: "bathing",
         text: {
          ru: "Вхождение в ванну, выход из ванны или переодевание"
         }
        }
       ]
      },
      {
       type: "matrixdropdown",
       name: "problemsWithWork",
       title: {
        ru: "За последние 4 недели сталкивались ли Вы с любой из указанных проблем в работе или в ходе другой регулярной деятельности вследствие состояния Вашего физического здоровья?"
       },
       columns: [
        {
         name: "yes",
         title: {
          ru: "Да"
         },
         cellType: "boolean",
         defaultValue: "false"
        }
       ],
       choices: [
        {
         value: "0",
         text: {
          ru: "No"
         }
        },
        {
         value: "1",
         text: {
          ru: "Yes"
         }
        }
       ],
       cellType: "boolean",
       rows: [
        {
         value: "cutDownTime",
         text: {
          ru: "Сокращение времени, потраченного на работу или другую деятельность"
         }
        },
        {
         value: "lessThanWouldLike",
         text: {
          ru: "Достиг меньшего, чем планировал"
         }
        },
        {
         value: "limited",
         text: {
          ru: "Был ограничен в виде выполняемых работ или другой деятельности"
         }
        },
        {
         value: "difficulty",
         text: {
          ru: "Испытывал проблемы с выполнением работы или другой деятельности (например, потребовалось больше усилий)"
         }
        }
       ]
      },
      {
       type: "matrixdropdown",
       name: "emotionalProblems",
       title: {
        ru: "За последние 4 недели сталкивались ли Вы с любой из указанных сложностей в работе или другой регулярной деятельности вследствие любых эмоциональных проблем (таких как чувство депрессии или тревожность)?"
       },
       defaultValue: {
        cutDownTime: {
         yes: false
        },
        lessThatWouldLike: {
         yes: false
        },
        didntDo: {
         yes: false
        }
       },
       columns: [
        {
         name: "yes",
         title: {
          ru: "Да"
         }
        }
       ],
       choices: [
        1,
        2,
        3,
        4,
        5
       ],
       cellType: "boolean",
       rows: [
        {
         value: "cutDownTime",
         text: {
          ru: "Сокращение времени на работу и другую деятельность"
         }
        },
        {
         value: "lessThatWouldLike",
         text: {
          ru: "Достиг меньшего, чем хотелось бы"
         }
        },
        {
         value: "didntDo",
         text: {
          ru: "Не выполнял работу или другую деятельность так же тщательно, как обычно"
         }
        }
       ]
      },
      {
       type: "rating",
       name: "interferWithSocial",
       title: {
        ru: "За последние 4 недели в какой степени Ваше физическое здоровье или эмоциональные проблемы влияли на Ваше взаимодействие с семьей, друзьями, соседями или другими социальными группами?"
       },
       rateValues: [
        {
         value: "5",
         text: {
          ru: "Не влияли"
         }
        },
        {
         value: "4",
         text: {
          ru: "Слегка"
         }
        },
        {
         value: "3",
         text: {
          ru: "Умеренно"
         }
        },
        {
         value: "2",
         text: {
          ru: "Сильно"
         }
        },
        {
         value: "1",
         text: {
          ru: "Очень сильно"
         }
        }
       ]
      },
      {
       type: "rating",
       name: "pain",
       title: {
        ru: "Насколько сильную физическую боль Вы испытывали за последние 4 недели?"
       },
       rateValues: [
        {
         value: "5",
         text: {
          ru: "Не испытывал(а)"
         }
        },
        {
         value: "4",
         text: {
          ru: "Едва ощутимую"
         }
        },
        {
         value: "3",
         text: {
          ru: "Легкую"
         }
        },
        {
         value: "2",
         text: {
          ru: "Умеренную"
         }
        },
        {
         value: "1",
         text: {
          ru: "Сильную"
         }
        },
        {
         value: "0",
         text: {
          ru: "Крайне сильную"
         }
        }
       ]
      },
      {
       type: "rating",
       name: "painInterfereWork",
       title: {
        ru: "Насколько сильно боль сказывалась на выполнении ежедневной работы (включая работу по дому и вне дома) за последние 4 недели?"
       },
       rateValues: [
        {
         value: "5",
         text: {
          default: "[object Object]",
          ru: "Не влияла"
         }
        },
        {
         value: "4",
         text: {
          default: "[object Object]",
          ru: "Слегка"
         }
        },
        {
         value: "3",
         text: {
          default: "[object Object]",
          ru: "Умеренно"
         }
        },
        {
         value: "2",
         text: {
          default: "[object Object]",
          ru: "Сильно"
         }
        },
        {
         value: "1",
         text: {
          default: "[object Object]",
          ru: "Очень сильно"
         }
        }
       ]
      }
     ],
     title: {
      ru: "Следующие вопросы касаются Вашей физической активности, которую Вы проявляете в течение типичного дня"
     }
    },
    {
     type: "panel",
     name: "howYouFeelPanel",
     elements: [
      {
       type: "matrix",
       name: "howMuch",
       title: {
        ru: "Сколько раз в течение последних 4 недель..."
       },
       columns: [
        {
         value: "allTheTime",
         text: {
          ru: "Все время"
         }
        },
        {
         value: "mostOfTheTime",
         text: {
          ru: "Почти все время"
         }
        },
        {
         value: "aGoodBit",
         text: {
          ru: "Значительное время"
         }
        },
        {
         value: "sometime",
         text: {
          ru: "Иногда"
         }
        },
        {
         value: "aLittle",
         text: {
          ru: "Почти никогда"
         }
        },
        {
         value: "none",
         text: {
          ru: "Никогда"
         }
        }
       ],
       rows: [
        {
         value: "fullOfPeep",
         text: {
          ru: "Вы чувствовали мотивацию к действиям?"
         }
        },
        {
         value: "nervous",
         text: {
          ru: "Вы испытывали нервозность?"
         }
        },
        {
         value: "calm",
         text: {
          ru: "Вы чувствовали спокойствие и умиротворение?"
         }
        },
        {
         value: "energy",
         text: {
          ru: "Вы были энергичны?"
         }
        },
        {
         value: "blue",
         text: {
          ru: "Вы чувствовали себя подавленным и унылым"
         }
        },
        {
         value: "wornout",
         text: {
          ru: "Вы чувствовали бессилие?"
         }
        },
        {
         value: "happy",
         text: {
          ru: "Вы были счастливы?"
         }
        },
        {
         value: "tired",
         text: {
          ru: "Вы чувствовали усталость?"
         }
        }
       ]
      },
      {
       type: "rating",
       name: "healthInterfereSocial",
       title: {
        ru: "За последние 4 недели как часто Ваше физическое здоровье или эмоциональное состояние влияли на Вашу социальную деятельность (например, встречи с друзьями, родственниками и т.п.)?"
       },
       rateValues: [
        {
         value: "5",
         text: {
          ru: "Никогда"
         }
        },
        {
         value: "4",
         text: {
          ru: "Редко"
         }
        },
        {
         value: "3",
         text: {
          ru: "Иногда"
         }
        },
        {
         value: "2",
         text: {
          ru: "Большую часть времени"
         }
        },
        {
         value: "1",
         text: {
          ru: "Все время"
         }
        }
       ]
      }
     ],
     title: {
      ru: "Следующие вопросы касаются Вашего самочувствия за последние 4 недели. Для каждого вопроса дайте ответ, наиболее близкий к тому, как Вы себя чувствовали."
     }
    },
    {
     type: "matrix",
     name: "healthStatements",
     title: {
      ru: "Насколько для Вас является Истинным и Ложным каждое следующее утверждение?"
     },
     columns: [
      {
       value: "dTrue",
       text: {
        ru: "Определенно верно"
       }
      },
      {
       value: "mTrue",
       text: {
        ru: "В основном верно"
       }
      },
      {
       value: "dontKnow",
       text: {
        ru: "Не знаю"
       }
      },
      {
       value: "mFalse",
       text: {
        ru: "В основном неверно"
       }
      },
      {
       value: "dFalse",
       text: {
        ru: "Определенно неверно"
       }
      }
     ],
     rows: [
      {
       value: "seemToGetSick",
       text: {
        ru: "Похоже, я простужаюсь легче, чем другие"
       }
      },
      {
       value: "healthyAsAnybody",
       text: {
        ru: "Я настолько же здоров, как и знакомые мне люди"
       }
      },
      {
       value: "expectToGetWorse",
       text: {
        ru: "Я ожидаю, что мое здоровье ухудшится"
       }
      },
      {
       value: "excellentHealth",
       text: {
        ru: "У меня отличное здоровье"
       }
      }
     ]
    }
   ],
   title: {
    ru: "Форма оценки текущего состояния здоровья"
   }
  },
  {
   name: "IKDC SUBJECTIVE KNEE EVALUATION FORM",
   elements: [
    {
     type: "panel",
     name: "symptomsPanel1",
     elements: [
      {
       type: "dropdown",
       name: "highestLevelOfActivityPain",
       title: {
        ru: "Какой самый высокий уровень физической активности, которым Вы можете заниматься без ярко выраженной боли в коленном суставе?"
       },
       choices: [
        {
         value: 5,
         text: {
          ru: "Очень трудная, напряженная деятельность, например, прыжки или развороты в баскетболе/футболе"
         }
        },
        {
         value: 4,
         text: {
          ru: "Напряженная деятельность (тяжелый физический труд, лыжи, теннис)"
         }
        },
        {
         value: 3,
         text: {
          ru: "Умеренная физическая активность (умеренный физический труд, бег или бег трусцой)"
         }
        },
        {
         value: 2,
         text: {
          ru: "Легкая активная деятельность (работа по дому, в саду, ходьба)"
         }
        },
        {
         value: 1,
         text: {
          ru: "Не способен заниматься ни одним из перечисленных видов деятельности из-за болей в коленном суставе"
         }
        }
       ]
      },
      {
       type: "rating",
       name: "howOftenHadPain",
       title: {
        ru: "Как часто за прошедшие 4 недели или с момента получения травмы проявляется боль?"
       },
       rateValues: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11
       ],
       rateMax: 11,
       minRateDescription: {
        ru: "Постоянно"
       },
       maxRateDescription: {
        ru: "Никогда"
       }
      },
      {
       type: "rating",
       name: "howSeverePain",
       title: {
        ru: "Если у вас есть боль, насколько она сильная?"
       },
       rateValues: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11
       ],
       rateMax: 11,
       minRateDescription: {
        ru: "Настолько сильная, насколько можно представить"
       },
       maxRateDescription: {
        ru: "Нет боли"
       }
      },
      {
       type: "rating",
       name: "howSwollenWasKnee",
       title: {
        ru: "Какова степень скованности или отека Вашего коленного сустава за последние 4 недели или с момента получения травмы?"
       },
       rateValues: [
        {
         value: 1,
         text: {
          ru: "Крайне сильная"
         }
        },
        {
         value: 2,
         text: {
          ru: "Сильная"
         }
        },
        {
         value: 3,
         text: {
          ru: "Умеренная"
         }
        },
        {
         value: 4,
         text: {
          ru: "Легкая"
         }
        },
        {
         value: 5,
         text: {
          ru: "Нет"
         }
        }
       ]
      },
      {
       type: "dropdown",
       name: "highestLevelOfActivity1",
       title: {
        ru: "Какой Ваш максимальный уровень физической активности, не вызывающий значительных отеков коленного сустава?"
       },
       choices: [
        {
         value: 5,
         text: {
          ru: "Очень трудная, напряженная деятельность, например, прыжки или развороты в баскетболе/футболе"
         }
        },
        {
         value: 4,
         text: {
          ru: "Напряженная деятельность (тяжелый физический труд, лыжи, теннис)"
         }
        },
        {
         value: 3,
         text: {
          ru: "Умеренная физическая активность (умеренный физический труд, бег или бег трусцой)"
         }
        },
        {
         value: 2,
         text: {
          ru: "Легкая активная деятельность (работа по дому, в саду, ходьба)"
         }
        },
        {
         value: 1,
         text: {
          ru: "Не способен заниматься ни одним из перечисленных видов деятельности из-за отека в коленном суставе"
         }
        }
       ]
      },
      {
       type: "radiogroup",
       name: "kneeLock",
       title: {
        ru: "Проявлялись ли у Вас скованность или медлительность во время движения в коленном суставе за последние 4 недели?"
       },
       choices: [
        {
         value: 1,
         text: {
          ru: "Нет"
         }
        },
        {
         value: 0,
         text: {
          ru: "Да"
         }
        }
       ]
      },
      {
       type: "dropdown",
       name: "highestLevelOfActivityInjury",
       title: {
        ru: "Какой максимальный уровень активной деятельности, которой Вы можете себе\nпозволить, чтобы не нанести существенный урон состоянию Вашего сустава?"
       },
       choices: [
        {
         value: 5,
         text: {
          ru: "Очень трудная, напряженная деятельность, например, прыжки или развороты в баскетболе/футболе"
         }
        },
        {
         value: 4,
         text: {
          ru: "Напряженная деятельность (тяжелый физический труд, лыжи, теннис)"
         }
        },
        {
         value: 3,
         text: {
          ru: "Умеренная физическая активность (умеренный физический труд, бег или бег трусцой)"
         }
        },
        {
         value: 2,
         text: {
          ru: "Легкая активная деятельность (работа по дому, в саду, ходьба)"
         }
        },
        {
         value: 1,
         text: {
          ru: "Не способен заниматься ни одним из перечисленных видов деятельности из-за состояния коленного сустава"
         }
        }
       ]
      }
     ],
     title: {
      ru: "Симптомы"
     },
     description: {
      ru: "Оцените Ваше состояние при максимальном уровне занятости/деятельности, который, по Вашему мнению, Вы могли бы демонстрировать без проявления симптомов, даже если на настоящий момент данному уровню Ваша фактическая деятельность не соответствует."
     }
    },
    {
     type: "panel",
     name: "sportsPanel",
     elements: [
      {
       type: "dropdown",
       name: "highestLevelOfActivityRegular",
       title: {
        ru: "Какой максимальный уровень активной деятельности, которой Вы можете заниматься регулярно?"
       },
       choices: [
        {
         value: 5,
         text: {
          ru: "Очень трудная, напряженная деятельность, например, прыжки или развороты в баскетболе/футболе"
         }
        },
        {
         value: 4,
         text: {
          ru: "Напряженная деятельность (тяжелый физический труд, лыжи, теннис)"
         }
        },
        {
         value: 3,
         text: {
          ru: "Умеренная физическая активность (умеренный физический труд, бег или бег трусцой)"
         }
        },
        {
         value: 2,
         text: {
          ru: "Легкая активная деятельность (работа по дому, в саду, ходьба)"
         }
        },
        {
         value: 1,
         text: {
          ru: "Не способен заниматься ни одним из перечисленных видов деятельности из-за состояния коленного сустава"
         }
        }
       ]
      },
      {
       type: "matrix",
       name: "kneeAffectAbility",
       title: {
        ru: "Как состояние Вашего коленного сустава влияет на способность выполнять следующие действия?"
       },
       columns: [
        {
         value: 5,
         text: {
          ru: "Никаких затруднений"
         }
        },
        {
         value: 4,
         text: {
          ru: "Минимальное затруднение"
         }
        },
        {
         value: 3,
         text: {
          ru: "Умеренное затруднение"
         }
        },
        {
         value: 2,
         text: {
          ru: "Крайнее затруднение"
         }
        },
        {
         value: 1,
         text: {
          ru: "Невозможно выполнить"
         }
        }
       ],
       rows: [
        {
         value: "upstairs",
         text: {
          ru: "Подняться по лестнице"
         }
        },
        {
         value: "downstairs",
         text: {
          ru: "Спуститься по лестнице"
         }
        },
        {
         value: "kneelOn",
         text: {
          ru: "Встать на колено"
         }
        },
        {
         value: "squat",
         text: {
          ru: "Присесть на корточки"
         }
        },
        {
         value: "sitWithKneeBent",
         text: {
          ru: "Сидеть с согнутыми коленями"
         }
        },
        {
         value: "riseFromAChair",
         text: {
          ru: "Встать со стула"
         }
        },
        {
         value: "RunStraightAhead",
         text: {
          ru: "Бежать по прямой"
         }
        },
        {
         value: "jumnAndLandOnInvolved",
         text: {
          ru: "Прыгнуть и опереться на больную ногу"
         }
        },
        {
         value: "stopAndStartQuickly",
         text: {
          ru: "Остановиться и быстро начать движение"
         }
        }
       ]
      }
     ],
     title: {
      ru: "Занятия спортом"
     }
    },
    {
     type: "panel",
     name: "functionalPanel",
     elements: [
      {
       type: "rating",
       name: "functionPriorToInjury",
       title: {
        ru: "Объем выполняемых функций до получения травмы"
       },
       rateMax: 10,
       minRateDescription: {
        ru: "Не могу выполнять повседневную работу"
       },
       maxRateDescription: {
        ru: "Никаких ограничений"
       }
      },
      {
       type: "rating",
       name: "functionCurrent",
       title: {
        ru: "Текущая функциональность"
       },
       rateMax: 10,
       minRateDescription: {
        ru: "Не могу выполнять повседневную работу"
       },
       maxRateDescription: {
        ru: "Никаких ограничений"
       }
      }
     ],
     title: {
      ru: "Функциональные баллы"
     },
     description: {
      ru: "Как бы Вы оценили функцию Вашего коленного сустава по 10-балльной шкале, где 10 - нормальная, отличная функциональность и 0 - неспособность выполнять какие-либо из привычных Вам рутинных занятий, включая занятия спортом?"
     }
    },
    {
     type: "expression",
     name: "total",
     expression: "{highestLevelOfActivityPain} + {howOftenHadPain} + {howSeverePain} + {howSwollenWasKnee} + {highestLevelOfActivity1} + {kneeLock} + {highestLevelOfActivityInjury} + {highestLevelOfActivityRegular} + {kneeAffectAbility}"
    }
   ],
   title: {
    ru: "Субъективная оценка функции коленного сустава"
   }
  },
  {
   name: "LYSHOLM KNEE SCALE",
   elements: [
    {
     type: "radiogroup",
     name: "limp",
     title: "Хромота",
     isRequired: true,
     choices: [
      {
       value: 5,
       text: "Я не хромаю при ходьбе"
      },
      {
       value: 3,
       text: "Иногда или слегка я хромаю при ходьбе"
      },
      {
       value: 0,
       text: "Я постоянно сильно хромаю при ходьбе"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "cane or crutches",
     title: "Средства опоры",
     isRequired: true,
     choices: [
      {
       value: 5,
       text: "Я не пользуюсь костылями или тростью"
      },
      {
       value: 2,
       text: "Я использую костыль или трость только как частичную опору"
      },
      {
       value: 0,
       text: "Я не могу наступить на прооперированную ногу"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "locking sensations",
     title: "Блокада сустава",
     isRequired: true,
     choices: [
      {
       value: 15,
       text: "Я не испытываю скованность или «медлительность» в коленном суставе"
      },
      {
       value: 10,
       text: "Я испытываю «медлительность» в коленном суставе, но не ощущаю скованности"
      },
      {
       value: 6,
       text: "Время от времени я ощущаю скованность в коленном суставе"
      },
      {
       value: 2,
       text: "Я часто ощущаю скованность в коленном суставе"
      },
      {
       value: 0,
       text: "Я ощущаю скованность в коленном суставе в данный момент"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "giving way sensation",
     title: "Нестабильность",
     isRequired: true,
     choices: [
      {
       value: 25,
       text: "Не ощущаю смещения в суставе"
      },
      {
       value: 20,
       text: "Мой коленный сустав редко смещается при легкой атлетике или других серьезных нагрузках"
      },
      {
       value: 15,
       text: "Мой коленный сустав часто смещается при легкой атлетике или других серьезных нагрузках (или не способен участвовать)"
      },
      {
       value: 10,
       text: "Мой коленный сустав иногда смещается при ежедневных действиях"
      },
      {
       value: 5,
       text: "Мой коленный сустав часто смещается при ежедневных действиях"
      },
      {
       value: 0,
       text: "Мой коленный сустав смещается при каждом шаге"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "pain",
     title: "Боль",
     isRequired: true,
     choices: [
      {
       value: 25,
       text: "Я не испытываю боли в коленном суставе"
      },
      {
       value: 20,
       text: "Непостояннная и не выраженная боль"
      },
      {
       value: 15,
       text: "Боль отмечается только в начале движения"
      },
      {
       value: 10,
       text: "Боль отмечается во время или после ходьбы более 1 км"
      },
      {
       value: 5,
       text: "Боль отмечается во время или после ходьбы менее 1 км"
      },
      {
       value: 0,
       text: "Постоянная и выраженная боль, не зависящая от движения"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "swelling",
     title: "Отечность",
     isRequired: true,
     choices: [
      {
       value: 10,
       text: "Не отмечаю отека коленного сустава"
      },
      {
       value: 6,
       text: "Мой коленный сустав отекает при тяжелых нагрузках"
      },
      {
       value: 2,
       text: "Мой коленный сустав отекает после обычной рутинной деятельности"
      },
      {
       value: 0,
       text: "Мой коленный сустав отекает постоянно"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "stairs",
     title: "Подъем по лестнице",
     isRequired: true,
     choices: [
      {
       value: 10,
       text: "Не испытываю затруднений при подъёме по лестнице"
      },
      {
       value: 6,
       text: "Испытываю небольшие затруднения при подъёме по лестнице"
      },
      {
       value: 2,
       text: "Я могу подняться только на одну ступень за один раз"
      },
      {
       value: 0,
       text: "Я не могу пользоваться лестницей"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "squat",
     title: "Приседание",
     isRequired: true,
     choices: [
      {
       value: 5,
       text: "Приседаю без проблем"
      },
      {
       value: 4,
       text: "Испытываю небольшие трудности при приседании"
      },
      {
       value: 1,
       text: "Я не могу приседать более 90 градусов"
      },
      {
       value: 0,
       text: "Я не могу приседать"
      }
     ]
    },
    {
     type: "expression",
     name: "total",
     visible: false,
     expression: "{limp} + {cane or crutches} + {locking sensations} + {giving way sensation} + {pain} + {swelling} + {stairs} + {squat}"
    },
    {
     type: "html",
     name: "mark",
     html: {
      ru: "Оцените по шкале от 1 до 10 боль в ваших коленных суставах за последние 24 часа"
     }
    },
    {
     type: "rating",
     name: "r-knee",
     title: "Правое колено",
     isRequired: true,
     rateMax: 10
    },
    {
     type: "rating",
     name: "l-knee",
     title: "Левое колено",
     isRequired: true,
     rateMax: 10
    },
    {
     type: "expression",
     name: "total",
     visible: false,
     expression: "{limp} + {cane or crutches} + {locking sensations} + {giving way sensation} + {pain} + {swelling} + {stairs} + {squat}"
    }
   ]
  }
 ],
 showQuestionNumbers: "off",
 clearInvisibleValues: "none",
 requiredText: ""
}

window.survey = new Survey.Model(json);

//survey.onComplete.add(
//    function (result)
//    {
//        document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
//    });

$("#surveyElement").Survey({ model: survey });
