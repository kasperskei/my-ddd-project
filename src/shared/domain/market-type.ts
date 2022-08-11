export const enum MarketTypeId {
  /** Победа в матче. П1. */
  WIN_FIRST = 1,
  /** Победа в матче. X. */
  DRAW = 2,
  /** Победа в матче. П2. */
  WIN_SECOND = 3,
  /** Двойной шанс. 1Х. */
  DOUBLE_CHANCE_FIRST_OR_DRAW = 4,
  /** Двойной шанс. 12. */
  DOUBLE_CHANCE_FIRST_OR_SECOND = 5,
  /** Двойной шанс. 2X. */
  DOUBLE_CHANCE_SECOND_OR_DRAW = 6,
  /** Фора 1. */
  HANDICAP_FIRST = 7,
  /** Фора 2. */
  HANDICAP_SECOND = 8,
  /** Тотал. Больше. */
  TOTAL_OVER = 9,
  /** Тотал. Меньше. */
  TOTAL_UNDER = 10,
  /** Индивидуальный тотал 1 Б. */
  INDIVIDUAL_TOTAL_FIRST_MORE = 11,
  /** Индивидуальный тотал 1 М. */
  INDIVIDUAL_TOTAL_FIRST_UNDER = 12,
  /** Индивидуальный тотал 2 Б. */
  INDIVIDUAL_TOTAL_SECOND_MORE = 13,
  /** Индивидуальный тотал 2 М. */
  INDIVIDUAL_TOTAL_SECOND_UNDER = 14,
  /** Тайм / Матч. П1/П1. */
  TIME_FIRST_MATCH_FIRST = 15,
  /** Тайм / Матч. П1/Н. */
  TIME_FIRST_MATCH_DRAW = 16,
  /** Тайм / Матч. П1/П2. */
  TIME_FIRST_MATCH_SECOND = 17,
  /** Тайм / Матч. Н/П1. */
  TIME_DRAW_MATCH_FIRST = 18,
  /** Тайм / Матч. Н/Н. */
  TIME_DRAW_MATCH_DRAW = 19,
  /** Тайм / Матч. Н/П2. */
  TIME_DRAW_MATCH_SECOND = 20,
  /** Тайм / Матч. П2/П1. */
  TIME_SECOND_MATCH_FIRST = 21,
  /** Тайм / Матч. П2/Н. */
  TIME_SECOND_MATCH_DRAW = 22,
  /** Тайм / Матч. П2/П2. */
  TIME_SECOND_MATCH_SECOND = 23,
  /** Гейм () выиграет 1. */
  GAME_N_WIN_FIRST = 50,
  /** Гейм () выиграет 2. */
  GAME_N_WIN_SECOND = 51,
  /** Победа в сете. П1. */
  WIN_SET_FIRST = 58,
  /** Победа в сете. П2. */
  WIN_SET_SECOND = 59,
  /** Исход матча с учетом ОТ и Буллитов. П1. */
  WIN_FULL_MATCH_INCLUDING_BULLETS_FIRST = 123,
  /** Исход матча с учетом ОТ и Буллитов. П2. */
  WIN_FULL_MATCH_INCLUDING_BULLETS_SECOND = 124,
  /** Обе забьют. Да. */
  BOTH_SCORES_YES = 180,
  /** Обе забьют. Нет. */
  BOTH_SCORES_NO = 181,
  /** Тотал чет. Да. */
  EVEN_ODD_YES = 182,
  /** Тотал чет. Нет. */
  EVEN_ODD_NO = 183,
  /** Сухая победа команда 2. Да. */
  DRY_WIN_SECOND_YES = 195,
  /** Сухая победа команда 1. Да. */
  DRY_WIN_FIRST_YES = 200,
  /** Сухая победа команда 1. Нет. */
  DRY_WIN_FIRST_NO = 205,
  /** Сухая победа команда 2. Нет. */
  DRY_WIN_SECOND_NO = 210,
  /** Победа в матче. П1. */
  WIN_FULL_MATCH_FIRST = 401,
  /** Победа в матче. П2. */
  WIN_FULL_MATCH_SECOND = 402,
  /** Гандикап. () П1. */
  HANDICAP_FIRST_ALTERNATIVE_VIEW = 424,
  /** Гандикап. () X. */
  HANDICAP_X_ALTERNATIVE_VIEW = 425,
  /** Гандикап. () П2. */
  HANDICAP_SECOND_ALTERNATIVE_VIEW = 426,
  /** Точный счет. ()-(). */
  CORRECT_SCORE = 731,
  /** Кто победит. [] - да. */
  WIN_YES = 835,
  /** Кто победит. [] - Нет. */
  WIN_NO = 836,
  /** Двойной шанс + тотал. 12 + ТМ () - Да. */
  DOUBLE_CHANCE_FIRST_OR_SECOND_AND_TOTAL_UNDER_YES = 1558,
  /** Двойной шанс + тотал. 12 + ТБ () - Да. */
  DOUBLE_CHANCE_FIRST_OR_SECOND_AND_TOTAL_OVER_YES = 1559,
  /** Двойной шанс + тотал. 12 + ТМ () - Нет. */
  DOUBLE_CHANCE_FIRST_OR_SECOND_AND_TOTAL_UNDER_NO = 1635,
  /** Двойной шанс + тотал. 12 + ТБ () - Нет. */
  DOUBLE_CHANCE_FIRST_OR_SECOND_AND_TOTAL_OVER_NO = 1636,
  /** Первый выиграет () поинт в ()-м гейме. */
  FIRST_WILL_WIN_POINT_IN_THE_GAME = 1761,
  /** Второй выиграет () поинт в ()-м гейме. */
  SECOND_WILL_WIN_POINT_IN_THE_GAME = 1762,
  /** Первый выиграет () поинт в ()-м сете. */
  FIRST_WILL_WIN_POINT_IN_THE_SET = 1794,
  /** Второй выиграет () поинт в ()-м сете. */
  SECOND_WILL_WIN_POINT_IN_THE_SET = 1795,
  /** Овер, индивидуальный тотал ранов 1 Б. */
  OVER_INDIVIDUAL_RUNS_TOTAL_1_MORE = 2068,
  /** Овер, индивидуальный тотал ранов 1 М. */
  OVER_INDIVIDUAL_RUNS_TOTAL_1_UNDER = 2069,
  /** Овер, индивидуальный тотал ранов 2 Б. */
  OVER_INDIVIDUAL_RUNS_TOTAL_2_MORE = 2070,
  /** Овер, индивидуальный тотал ранов 2 М. */
  OVER_INDIVIDUAL_RUNS_TOTAL_2_UNDER = 2071,
  /** Овер, индивидуальный тотал ранов 1 Чет. */
  OVER_INDIVIDUAL_RUNS_TOTAL_1_EVEN = 2072,
  /** Овер, индивидуальный тотал ранов 1 Нечет. */
  OVER_INDIVIDUAL_RUNS_TOTAL_1_ODD = 2073,
  /** Овер, индивидуальный тотал ранов 2 Чет. */
  OVER_INDIVIDUAL_RUNS_TOTAL_2_EVEN = 2074,
  /** Овер, индивидуальный тотал ранов 2 Нечет. */
  OVER_INDIVIDUAL_RUNS_TOTAL_2_ODD = 2075,
  /** Победа по четвертям. П1. */
  WIN_QUARTERS_FIRST = 2466,
  /** Победа по четвертям. П2. */
  WIN_QUARTERS_SECOND = 2467,
  /** Победа по четвертям. Ничья. */
  WIN_QUARTERS_DRAW = 2468,
  /** Победитель раунда. */
  ROUND_WINNER = 2486,
  /** Ничья в раунде. */
  ROUND_DRAW = 2487,
  /** П1 + команда 2 не забьёт. */
  WIN_FIRST_AND_NOT_SCORES_SECOND = 2537,
  /** П1 + команда 2 забьёт. */
  WIN_FIRST_AND_SCORES_SECOND = 2538,
  /** П2 + команда 1 не забьёт. */
  WIN_SECOND_AND_NOT_SCORES_FIRST = 2539,
  /** П2 + команда 1 забьёт. */
  WIN_SECOND_AND_SCORES_FIRST = 2540,
  /** Ничья 0:0. */
  DRAW_ZERO_ZERO = 2541,
  /** Х + обе команды забьют. */
  DRAW_AND_BOTH_SCORES = 2542,
  /** Победитель. []. */
  WINNER = 2637,
  /** Кто забьет. Только команда 1. */
  SCORES_FIRST = 2828,
  /** Кто забьет. Только команда 2. */
  SCORES_SECOND = 2829,
  /** Кто забьет. Оба забьют. */
  SCORES_BOTH = 2830,
  /** Кто забьет. Никто. */
  SCORES_NOBODY = 2831,
  /** Обе забьют - Да + ТБ (). */
  BOTH_SCORE_YES_TOTAL_MORE = 2837,
  /** Обе забьют - Нет + ТБ (). */
  BOTH_SCORE_NO_TOTAL_MORE = 2838,
  /** Обе забьют - Да + ТМ (). */
  BOTH_SCORE_YES_TOTAL_UNDER = 2839,
  /** Обе забьют - Нет + ТМ (). */
  BOTH_SCORE_NO_TOTAL_UNDER = 2840,
  /** 1-й тайм обе забьют/2-й тайм обе забьют. Да/Да. */
  BOTH_SCORES_BOTH_TIMES_YES_YES = 2841,
  /** 1-й тайм обе забьют/2-й тайм обе забьют. Нет/Да. */
  BOTH_SCORES_BOTH_TIMES_NO_YES = 2842,
  /** 1-й тайм обе забьют/2-й тайм обе забьют. Да/Нет. */
  BOTH_SCORES_BOTH_TIMES_YES_NO = 2843,
  /** 1-й тайм обе забьют/2-й тайм обе забьют. Нет/Нет. */
  BOTH_SCORES_BOTH_TIMES_NO_NO = 2844,
  /** Тайм / Матч. П1/П2Х. */
  TIME_FIRST_MATCH_SECOND_OR_DRAW = 2858,
  /** Тайм / Матч. П2/П1Х. */
  TIME_SECOND_MATCH_FIRST_OR_DRAW = 2859,
  /** Тотал уайдов () Б. */
  TOTAL_WIDES_OVER = 3014,
  /** Тотал уайдов () M. */
  TOTAL_WIDES_UNDER = 3015,
  /** Тотал ран-аутов () Б. */
  TOTAL_RUN_OUTS_OVER = 3016,
  /** Тотал ран-аутов () M. */
  TOTAL_RUN_OUTS_UNDER = 3017,
  /** Тотал 4-очковых () Б. */
  TOTAL_FOUR_POINTS_OVER = 3018,
  /** Тотал 4-очковых () М. */
  TOTAL_FOUR_POINTS_UNDER = 3019,
  /** Тотал 6-очковых () Б. */
  TOTAL_SIX_POINTS_OVER = 3020,
  /** Тотал 6-очковых () М. */
  TOTAL_SIX_POINTS_UNDER = 3021,
  /** Тайм / Матч. П1/ П2X - Да. */
  TIME_FIRST_MATCH_SECOND_OR_DRAW_YES = 3527,
  /** Тайм / Матч. П1/ П2X - Нет. */
  TIME_FIRST_MATCH_SECOND_OR_DRAW_NO = 3528,
  /** Тайм / Матч. П2/ П1X - Да. */
  TIME_SECOND_MATCH_FIRST_OR_DRAW_YES = 3529,
  /** Тайм / Матч. П2/ П1X - Нет. */
  TIME_SECOND_MATCH_FIRST_OR_DRAW_NO = 3530,
  /** Победа в основное время. П1. */
  WIN_MAIN_TIME_FIRST = 3653,
  /** Победа в основное время. Ничья. */
  WIN_MAIN_TIME_DRAW = 3654,
  /** Победа в основное время. П2. */
  WIN_MAIN_TIME_SECOND = 3655,
  /** Двойной шанс на основное время. Победа 1 или Ничья. */
  DOUBLE_CHANCE_MAIN_TIME_FIRST_OR_DRAW = 3656,
  /** Двойной шанс на основное время. Победа 1 или Победа 2. */
  DOUBLE_CHANCE_MAIN_TIME_FIRST_OR_SECOND = 3657,
  /** Двойной шанс на основное время. Победа 2 или Ничья. */
  DOUBLE_CHANCE_MAIN_TIME_SECOND_OR_DRAW = 3658,
  /** Азиатский тотал. Больше. */
  ASIA_TOTAL_OVER = 3827,
  /** Азиатский тотал. Меньше. */
  ASIA_TOTAL_UNDER = 3828,
  /** Азиатская фора 1. */
  ASIA_HANDICAP_FIRST = 3829,
  /** Азиатская фора 2. */
  ASIA_HANDICAP_SECOND = 3830,
  /** Результат + тотал. П1 и ТБ (). */
  WIN_FIRST_AND_TOTAL_MORE = 4395,
  /** Результат + тотал. П1 и ТМ (). */
  WIN_FIRST_AND_TOTAL_UNDER = 4396,
  /** Результат + тотал. П2 и ТБ (). */
  WIN_SECOND_AND_TOTAL_MORE = 4397,
  /** Результат + тотал. П2 и ТМ (). */
  WIN_SECOND_AND_TOTAL_UNDER = 4398,
  /** Результат + тотал. Х и ТБ (). */
  DRAW_AND_TOTAL_MORE = 4401,
  /** Результат + тотал. Х и ТМ (). */
  DRAW_AND_TOTAL_UNDER = 4402,
  /** Тайм / Матч. П1/П1X - Да. */
  TIME_FIRST_MATCH_FIRST_OR_DRAW_YES = 4864,
  /** Тайм / Матч. П1/П1X - Нет. */
  TIME_FIRST_MATCH_FIRST_OR_DRAW_NO = 4865,
  /** Тайм / Матч. П2/П2X - Да. */
  TIME_SECOND_MATCH_SECOND_OR_DRAW_YES = 4866,
  /** Тайм / Матч. П2/П2X - Нет. */
  TIME_SECOND_MATCH_SECOND_OR_DRAW_NO = 4867,
  /** Наименьший номер Чет. */
  LOWEST_NUMBER_IS_EVEN = 5320,
  /** Наименьший номер Нечет. */
  LOWEST_NUMBER_IS_ODD = 5321,
  /** Наибольший номер Чет. */
  HIGHEST_NUMBER_IS_EVEN = 5322,
  /** Наибольший номер Нечет. */
  HIGHEST_NUMBER_IS_ODD = 5323,
  /** Наименьший выпавший номер. Выпавший номер больше. */
  SMALLEST_DROPPED_NUMBER_MORE = 5390,
  /** Наименьший выпавший номер. Выпавший номер меньше. */
  SMALLEST_DROPPED_NUMBER_LESS = 5391,
  /** Наибольший выпавший номер. Выпавший номер больше. */
  LARGEST_NUMBER_MORE = 5392,
  /** Наибольший выпавший номер. Выпавший номер меньше. */
  LARGEST_NUMBER_LESS = 5393,
  /** Победитель в гонке. []. */
  RACE_WINNER = 5497,
  /** Обе забьют и Двойной шанс. Да и 1Х. */
  BOTH_SCORES_YES_AND_DOUBLE_CHANCE_FIRST_OR_DRAW = 5624,
  /** Обе забьют и Двойной шанс. Нет и 1Х. */
  BOTH_SCORES_NO_AND_DOUBLE_CHANCE_FIRST_OR_DRAW = 5625,
  /** Обе забьют и Двойной шанс. Да и 12. */
  BOTH_SCORES_YES_AND_DOUBLE_CHANCE_FIRST_OR_SECOND = 5626,
  /** Обе забьют и Двойной шанс. Нет и 12. */
  BOTH_SCORES_NO_AND_DOUBLE_CHANCE_FIRST_OR_SECOND = 5627,
  /** Обе забьют и Двойной шанс. Да и 2X. */
  BOTH_SCORES_YES_AND_DOUBLE_CHANCE_SECOND_OR_DRAW = 5628,
  /** Обе забьют и Двойной шанс. Нет и 2X. */
  BOTH_SCORES_NO_AND_DOUBLE_CHANCE_SECOND_OR_DRAW = 5629,
  /** П1 и кол-во голов ()-(). */
  WIN_FIRST_AND_GOALS_COUNT = 5935,
  /** П1 и кол-во голов () и более. */
  WIN_FIRST_AND_GOALS_MORE = 5936,
  /** П2 и кол-во голов ()-(). */
  WIN_SECOND_AND_GOALS_COUNT = 5937,
  /** П2 и кол-во голов () и более. */
  WIN_SECOND_AND_GOALS_MORE = 5938,
  /** Специальные ставки. */
  SPECIAL = 6414,
  /** Двойной шанс в матче + Обе забьют в 1-м тайме. 1Х/Да. */
  DOUBLE_CHANCE_FIRST_OR_DRAW_AND_BOTH_SCORES_IN_FIRST_TIME_YES = 6812,
  /** Двойной шанс в матче + Обе забьют в 1-м тайме. 1Х/Нет. */
  DOUBLE_CHANCE_FIRST_OR_DRAW_AND_BOTH_SCORES_IN_FIRST_TIME_NO = 6813,
  /** Двойной шанс в матче + Обе забьют в 1-м тайме. 12/Да. */
  DOUBLE_CHANCE_FIRST_OR_SECOND_AND_BOTH_SCORES_IN_FIRST_TIME_YES = 6814,
  /** Двойной шанс в матче + Обе забьют в 1-м тайме. 12/Нет. */
  DOUBLE_CHANCE_FIRST_OR_SECOND_AND_BOTH_SCORES_IN_FIRST_TIME_NO = 6815,
  /** Двойной шанс в матче + Обе забьют в 1-м тайме. 2X/Да. */
  DOUBLE_CHANCE_SECOND_OR_DRAW_AND_BOTH_SCORES_IN_FIRST_TIME_YES = 6816,
  /** Двойной шанс в матче + Обе забьют в 1-м тайме. 2X/Нет. */
  DOUBLE_CHANCE_SECOND_OR_DRAW_AND_BOTH_SCORES_IN_FIRST_TIME_NO = 6817,
  /** Двойной шанс в матче + Обе забьют в 2-м тайме. 1Х/Да. */
  DOUBLE_CHANCE_FIRST_OR_DRAW_AND_BOTH_SCORES_IN_SECOND_TIME_YES = 6818,
  /** Двойной шанс в матче + Обе забьют в 2-м тайме. 1Х/Нет. */
  DOUBLE_CHANCE_FIRST_OR_DRAW_AND_BOTH_SCORES_IN_SECOND_TIME_NO = 6819,
  /** Двойной шанс в матче + Обе забьют в 2-м тайме. 12/Да. */
  DOUBLE_CHANCE_FIRST_OR_SECOND_AND_BOTH_SCORES_IN_SECOND_TIME_YES = 6820,
  /** Двойной шанс в матче + Обе забьют в 2-м тайме. 12/Нет. */
  DOUBLE_CHANCE_FIRST_OR_SECOND_AND_BOTH_SCORES_IN_SECOND_TIME_NO = 6821,
  /** Двойной шанс в матче + Обе забьют в 2-м тайме. 2X/Да. */
  DOUBLE_CHANCE_SECOND_OR_DRAW_AND_BOTH_SCORES_IN_SECOND_TIME_YES = 6822,
  /** Двойной шанс в матче + Обе забьют в 2-м тайме. 2X/Нет. */
  DOUBLE_CHANCE_SECOND_OR_DRAW_AND_BOTH_SCORES_IN_SECOND_TIME_NO = 6823,
  /** Победа (2 исхода). П1. */
  TWO_OUTCOMES_WIN_FIRST = 7736,
  /** Победа (2 исхода). П2. */
  TWO_OUTCOMES_WIN_SECOND = 7737,
  /** Выигрышная комбинация. Одна пара выиграет. */
  ONE_PAIR_WINNER = 9521,
  /** Выигрышная комбинация. Две пара выиграет. */
  TWO_PAIRS_WINNER = 9522,
  /** Выигрышная комбинация. Сет выиграет. */
  SET_WINNER = 9523,
  /** Выигрышная комбинация. Стрит выиграет. */
  STREET_WINNER = 9524,
  /** Температура воздуха в аэропорту. [], больше () °С. */
  AIRPORT_TEMPERATURE_MORE = 10_244,
  /** Температура воздуха в аэропорту. [], больше () °С. */
  AIRPORT_TEMPERATURE_LESS = 10_245,
  /** По () и более - Да. */
  BOTH_SCORES_GOALS_YES = 11_273,
  /** По () и более - Да. */
  BOTH_SCORES_GOALS_NO = 11_274,
  /** Будет перебор - Да. */
  ENUMERATION_YES = 11_278,
  /** Будет перебор - Нет. */
  ENUMERATION_NO = 11_279,
  /** Стрелка укажет на сектор Чет. */
  ARROW_POINTS_TO_EVEN = 11_291,
  /** Стрелка укажет на сектор Нечет. */
  ARROW_POINTS_TO_ODD = 11_292,
  /** Стрелка укажет на Черный сектор. */
  ARROW_POINTS_TO_BLACK = 11_293,
  /** Стрелка укажет на Красный сектор. */
  ARROW_POINTS_TO_RED = 11_294,
  /** Разность наибольшего и наименьшего номеров () Б. */
  DIFF_LARGEST_SMALLEST_NUMBER_OVER = 11_351,
  /** Разность наибольшего и наименьшего номеров () М. */
  DIFF_LARGEST_SMALLEST_NUMBER_UNDER = 11_352,
  /** Сумма наибольшего и наименьшего номеров () Б. */
  SUM_LARGEST_SMALLEST_NUMBER_OVER = 11_353,
  /** Сумма наибольшего и наименьшего номеров () М. */
  SUM_LARGEST_SMALLEST_NUMBER_UNDER = 11_354,
  /** Первый номер Чет. */
  FIRST_NUMBER_IS_EVEN = 11_425,
  /** Первый номер Нечет. */
  FIRST_NUMBER_IS_ODD = 11_426,
  /** Последний номер Чет. */
  LAST_NUMBER_IS_EVEN = 11_427,
  /** Последний номер Нечет. */
  LAST_NUMBER_IS_ODD = 11_428,
  /** Цвет карты Черный. */
  CARD_COLOR_IS_BLACK = 11_466,
  /** Цвет карты Красный. */
  CARD_COLOR_IS_RED = 11_467,
  /** Карта цифра. */
  CARD_IS_NUMERIC = 11_468,
  /** Карта не цифра. */
  CARD_IS_NOT_NUMERIC = 11_469,
  /** Какая рука выиграет. (). */
  WHICH_HAND_WIN = 11_453,
  /** Тотал чисел на 5-ти первых выпавших шарах. Больше. */
  TOTAL_OVER_FIRST_FIVE_BALLS = 11_498,
  /** Тотал чисел на 5-ти первых выпавших шарах. Меньше. */
  TOTAL_UNDER_FIRST_FIVE_BALLS = 11_499,
  /** Карта дилера красная. */
  DEALER_CARD_IS_RED = 11_511,
  /** Карта дилера черная. */
  DEALER_CARD_IS_BLACK = 11_512,
  /** Карта игрока красная. */
  PLAYER_CARD_IS_RED = 11_513,
  /** Карта игрока черная. */
  PLAYER_CARD_IS_BLACK = 11_514,
  /** Победит дилер. */
  DEALER_WINS = 11_508,
  /** Победит игрок. */
  PLAYER_WINS = 11_509,
  /** Исход игры. Победит Игрок 1. */
  GAME_OUTCOME_PLAYER_ONE_WINS = 11_721,
  /** Исход игры. Победит Игрок 2. */
  GAME_OUTCOME_PLAYER_TWO_WINS = 11_722,
  /** Исход игры. Ничья. */
  GAME_OUTCOME_DRAW = 11_725,
  /** Победа в игре. Белые. */
  WIN_GAME_WHITE = 13_191,
  /** Победа в игре. Черные. */
  WIN_GAME_BLACK = 13_192,
  /** Тотал ходов. Меньше. */
  TOTAL_MOVES_UNDER = 13_195,
  /** Тотал ходов. Больше. */
  TOTAL_MOVES_OVER = 13_196,
  /** Фора в игре. Белые. */
  HANDICAP_WHITE = 13_197,
  /** Фора в игре. Черные. */
  HANDICAP_BLACK = 13_198,
  /** Тотал выстрелов. Больше. */
  TOTAL_SHOTS_OVER = 13_409,
  /** Тотал выстрелов. Меньше. */
  TOTAL_SHOTS_UNDER = 13_410,
  /** Индивидуальный тотал выстрелов 1. Больше. */
  INDIVIDUAL_TOTAL_SHOTS_ONE_OVER = 13_411,
  /** Индивидуальный тотал выстрелов 1. Меньше. */
  INDIVIDUAL_TOTAL_SHOTS_ONE_UNDER = 13_412,
  /** Индивидуальный тотал выстрелов 2. Больше. */
  INDIVIDUAL_TOTAL_SHOTS_TWO_OVER = 13_413,
  /** Индивидуальный тотал выстрелов 2. Меньше. */
  INDIVIDUAL_TOTAL_SHOTS_TWO_UNDER = 13_414,
  /** Первый выпавший шар. Больше. */
  TOTAL_OVER_FIRST_BALL = 13_643,
  /** Первый выпавший шар. Меньше. */
  TOTAL_UNDER_FIRST_BALL = 13_644,
  /** Последний выпавший шар. Больше. */
  TOTAL_OVER_LAST_BALL = 13_645,
  /** Последний выпавший шар. Меньше. */
  TOTAL_UNDER_LAST_BALL = 13_646,
  /** Ничья. */
  NOBODY_WINS = 14_332,
}

/**
 * Id ставок, где в качестве названия имя игрока
 */
export const MARKET_TYPES_WITH_PLAYER_NAMES = [
  MarketTypeId.WIN_YES,
  MarketTypeId.WINNER,
  MarketTypeId.RACE_WINNER,
  MarketTypeId.AIRPORT_TEMPERATURE_MORE,
  MarketTypeId.PLAYER_CARD_IS_RED,
  MarketTypeId.PLAYER_CARD_IS_BLACK,
  MarketTypeId.CARD_COLOR_IS_BLACK,
  MarketTypeId.CARD_COLOR_IS_RED,
  MarketTypeId.CARD_IS_NUMERIC,
  MarketTypeId.CARD_IS_NOT_NUMERIC,
  MarketTypeId.WHICH_HAND_WIN,
  MarketTypeId.SPECIAL,
  MarketTypeId.ROUND_WINNER,
]

/**
* Id ставок, которые скрываются если не приходят в выборке
*/
export const MARKET_TYPES_TO_HIDE_IF_EMPTY = [
  MarketTypeId.ARROW_POINTS_TO_EVEN,
  MarketTypeId.ARROW_POINTS_TO_ODD,
  MarketTypeId.ARROW_POINTS_TO_BLACK,
  MarketTypeId.ARROW_POINTS_TO_RED,
  MarketTypeId.GAME_OUTCOME_PLAYER_ONE_WINS,
  MarketTypeId.GAME_OUTCOME_PLAYER_TWO_WINS,
  MarketTypeId.GAME_OUTCOME_DRAW,
  MarketTypeId.FIRST_NUMBER_IS_EVEN,
  MarketTypeId.FIRST_NUMBER_IS_ODD,
  MarketTypeId.LAST_NUMBER_IS_EVEN,
  MarketTypeId.LAST_NUMBER_IS_ODD,
  MarketTypeId.ONE_PAIR_WINNER,
  MarketTypeId.TWO_PAIRS_WINNER,
  MarketTypeId.SET_WINNER,
  MarketTypeId.STREET_WINNER,
  MarketTypeId.WIN_GAME_WHITE,
  MarketTypeId.WIN_GAME_BLACK,
  MarketTypeId.TOTAL_MOVES_OVER,
  MarketTypeId.TOTAL_MOVES_UNDER,
  MarketTypeId.HANDICAP_WHITE,
  MarketTypeId.HANDICAP_BLACK,
  MarketTypeId.TOTAL_OVER_FIRST_FIVE_BALLS,
  MarketTypeId.TOTAL_UNDER_FIRST_FIVE_BALLS,
  MarketTypeId.TOTAL_OVER_FIRST_BALL,
  MarketTypeId.TOTAL_UNDER_FIRST_BALL,
  MarketTypeId.TOTAL_OVER_LAST_BALL,
  MarketTypeId.TOTAL_UNDER_LAST_BALL,
  MarketTypeId.WIN_FULL_MATCH_FIRST,
  MarketTypeId.WIN_FULL_MATCH_SECOND,
  MarketTypeId.DEALER_WINS,
  MarketTypeId.PLAYER_WINS,
  MarketTypeId.NOBODY_WINS,
  MarketTypeId.ENUMERATION_YES,
  MarketTypeId.ENUMERATION_NO,
  MarketTypeId.SMALLEST_DROPPED_NUMBER_MORE,
  MarketTypeId.SMALLEST_DROPPED_NUMBER_LESS,
  MarketTypeId.LARGEST_NUMBER_MORE,
  MarketTypeId.LARGEST_NUMBER_LESS,
  MarketTypeId.DIFF_LARGEST_SMALLEST_NUMBER_OVER,
  MarketTypeId.DIFF_LARGEST_SMALLEST_NUMBER_UNDER,
  MarketTypeId.SUM_LARGEST_SMALLEST_NUMBER_OVER,
  MarketTypeId.SUM_LARGEST_SMALLEST_NUMBER_UNDER,
]
