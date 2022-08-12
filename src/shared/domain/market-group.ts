import {MarketTypeId} from '@/shared/domain/market-type'

export const enum MarketGroupId {
  VICTORY = 1,
  HANDICAP = 2,
  DOUBLE_CHANCE = 8,
  INDIVIDUAL_TOTAL_1 = 15,
  TOTAL = 17,
  BOTH_WILL_SCORE = 19,
  WIN_THE_GAME = 22,
  WILL_WIN = 26,
  INDIVIDUAL_TOTAL_2 = 62,
  ASIA_TOTAL = 99,
  VICTORY_IN_MATCH = 101,
  WILL_WIN_YES_OR_NOT = 123,
  WILL_WIN_POINT_IN_THE_GAME = 135,
  VICTORY_BY_QUARTER = 2250,
  DRAW = 2257,
  TOTAL_WIDES = 2508,
  VICTORY_BY_THE_MAIN_TIME = 2766,
  DOUBLE_CHANCE_BY_THE_MAIN_TIME = 2768,
  ASIA_HANDICAP = 2854,
  LOWEST_NUMBER_IS_EVEN_ODD = 6771,
  HIGHEST_NUMBER_IS_EVEN_ODD = 6773,
  LOWEST_DROPPED_NUMBER = 6831,
  HIGHEST_DROPPED_NUMBER = 6833,
  RACE_WINNER = 6919,
  TOTAL_MOVES_OVER = 7079,
  SP = 7571,
  TWO_OUTCOMES = 8389,
  WINNING_COMBINATION = 9180,
  AIRPORT_TEMPERATURE = 9409,
  ARROW_POINTS_TO_EVEN_ODD = 9640,
  ARROW_POINTS_TO_RED_BLACK = 9641,
  FIRST_NUMBER_IS_EVEN_ODD = 9684,
  LAST_NUMBER_IS_EVEN_ODD = 9685,
  CARD_COLOR = 9699,
  CARD_IS_NUMERIC = 9700,
  TOTAL_FIRST_FIVE_BALLS = 9710,
  DEALER_CARD_COLOR = 9716,
  PLAYER_CARD_COLOR = 9717,
  PLAYER_VICTORY = 9781,
  WIN_GAME = 10_237,
  HANDICAP_BLACK_WHITE = 10_238,
  INDIVIDUAL_TOTAL_SHOTS_1 = 10_316,
  INDIVIDUAL_TOTAL_SHOTS_2 = 10_317,
  TOTAL_SHOTS = 10_318,
  TOTAL_FIRST_BALL = 10_393,
  TOTAL_LAST_BALL = 10_394,
  OVER_INDIVIDUAL_RUNS_TOTAL_1 = 10_694,
  OVER_INDIVIDUAL_RUNS_TOTAL_2 = 10_695,
  OVER_INDIVIDUAL_RUNS_TOTAL_1_EVEN_ODD = 10_696,
  OVER_INDIVIDUAL_RUNS_TOTAL_2_EVEN_ODD = 10_697,
}

/** Группы маркетов содержащих в себе 3 маркета. */
export const GROUP_IDS_WITH_TRIPLE_MARKET = [
  MarketGroupId.VICTORY,
  MarketGroupId.DOUBLE_CHANCE,
  MarketGroupId.VICTORY_IN_MATCH,
  MarketGroupId.VICTORY_BY_THE_MAIN_TIME,
  MarketGroupId.DOUBLE_CHANCE_BY_THE_MAIN_TIME,
  MarketGroupId.PLAYER_VICTORY,
  MarketGroupId.VICTORY_BY_QUARTER,
]

export const GROUP_IDS_WITH_ADDITIONAL_EVENTS = [
  MarketGroupId.HANDICAP,
  MarketGroupId.TOTAL,
  MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_1,
  MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_2,
  MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_1_EVEN_ODD,
  MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_2_EVEN_ODD,
]

export const GROUP_IDS_WITH_PARAM = [
  MarketGroupId.HANDICAP,
  MarketGroupId.INDIVIDUAL_TOTAL_1,
  MarketGroupId.TOTAL,
  MarketGroupId.INDIVIDUAL_TOTAL_2,
  MarketGroupId.ASIA_TOTAL,
  MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_1,
  MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_2,
  MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_1_EVEN_ODD,
  MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_2_EVEN_ODD,
]

export const GROUP_IDS_WITH_SAME_MARKET_TYPES = [
  MarketGroupId.DRAW,
]

/**
 * Market types grouped by GroupId
*/
export const MARKET_TYPES_BY_GROUP_ID: Partial<Record<MarketGroupId, MarketTypeId[]>> = {
  /** "Группа - 1  События - 1,3,2 Названия - П1/П2/Х". */
  [MarketGroupId.VICTORY]: [
    MarketTypeId.WIN_FIRST,
    MarketTypeId.DRAW,
    MarketTypeId.WIN_SECOND,
  ],
  /** "Группа - 2  События - 7,8 Названия - Фора 1 ()/Фора 2 ()". */
  [MarketGroupId.HANDICAP]: [
    MarketTypeId.HANDICAP_FIRST,
    MarketTypeId.HANDICAP_SECOND,
  ],
  /** "Группа - 8  События - 5,4,6 Названия - 1Х/12/2Х". */
  [MarketGroupId.DOUBLE_CHANCE]: [
    MarketTypeId.DOUBLE_CHANCE_FIRST_OR_DRAW,
    MarketTypeId.DOUBLE_CHANCE_FIRST_OR_SECOND,
    MarketTypeId.DOUBLE_CHANCE_SECOND_OR_DRAW,
  ],
  /** "Группа - 15  События - 11,12 Названия - Индивидуальный тотал 1 Больше ()/Индивидуальный тотал 1 Меньше ()". */
  [MarketGroupId.INDIVIDUAL_TOTAL_1]: [
    MarketTypeId.INDIVIDUAL_TOTAL_FIRST_MORE,
    MarketTypeId.INDIVIDUAL_TOTAL_FIRST_UNDER,
  ],
  /** "Группа - 17  События - 9,10 Названия - Тотал () Б/Тотал () М ". */
  [MarketGroupId.TOTAL]: [
    MarketTypeId.TOTAL_OVER,
    MarketTypeId.TOTAL_UNDER,
  ],
  /** "Группа - 19  События - 180,181 Названия - Обе забьют - Да/Обе забьют - Нет". */
  [MarketGroupId.BOTH_WILL_SCORE]: [
    MarketTypeId.BOTH_SCORES_YES,
    MarketTypeId.BOTH_SCORES_NO,
  ],
  /** "Группа - 22  События - 50,51 Названия - Гейм () выиграет 1/Гейм () выиграет 2". */
  [MarketGroupId.WIN_THE_GAME]: [
    MarketTypeId.GAME_N_WIN_FIRST,
    MarketTypeId.GAME_N_WIN_SECOND,
  ],
  /** "Группа - 26  События - 2637 Названия - Победит - []". */
  [MarketGroupId.WILL_WIN]: [
    MarketTypeId.WINNER,
  ],
  /** "Группа - 62  События - 13,14 Названия - Индивидуальный тотал 2 Больше ()/Индивидуальный тотал 2 Меньше ()". */
  [MarketGroupId.INDIVIDUAL_TOTAL_2]: [
    MarketTypeId.INDIVIDUAL_TOTAL_SECOND_MORE,
    MarketTypeId.INDIVIDUAL_TOTAL_SECOND_UNDER,
  ],
  /** "Группа - 99  События - 3827,3828 Названия - Тотал () Б/Тотал () М". */
  [MarketGroupId.ASIA_TOTAL]: [
    MarketTypeId.ASIA_TOTAL_OVER,
    MarketTypeId.ASIA_TOTAL_UNDER,
  ],
  /** "Группа - 101  События - 401,402,401,402 Названия - Победа в матче 1/Победа в матче 2/Победа в матче 1/Победа в матче 2". */
  [MarketGroupId.VICTORY_IN_MATCH]: [
    MarketTypeId.WIN_FULL_MATCH_FIRST,
    MarketTypeId.WIN_FULL_MATCH_SECOND,
  ],
  /** "Группа - 123  События - 835,836 Названия - Победит [] - Да/Победит [] - Нет". */
  [MarketGroupId.WILL_WIN_YES_OR_NOT]: [
    MarketTypeId.WIN_YES,
    MarketTypeId.WIN_NO,
  ],
  /** "Группа - 135  События - 1794,1795,1761,1762 Названия - Первый выиграет () поинт в ()-м гейме/Второй выиграет () поинт в ()-м гейме/Первый выиграет () поинт в ()-м сете/Второй выиграет () поинт в ()-м сете". */
  [MarketGroupId.WILL_WIN_POINT_IN_THE_GAME]: [
    MarketTypeId.FIRST_WILL_WIN_POINT_IN_THE_GAME,
    MarketTypeId.SECOND_WILL_WIN_POINT_IN_THE_GAME,
    MarketTypeId.FIRST_WILL_WIN_POINT_IN_THE_SET,
    MarketTypeId.SECOND_WILL_WIN_POINT_IN_THE_SET,
  ],
  /** "Группа - 2250  События - 2466,2467,2468 Названия - П1 по четвертям/П2 по четвертям/X по четвертям". */
  [MarketGroupId.VICTORY_BY_QUARTER]: [
    MarketTypeId.WIN_QUARTERS_FIRST,
    MarketTypeId.WIN_QUARTERS_SECOND,
    MarketTypeId.WIN_QUARTERS_DRAW,
  ],
  /** "Группа - 2257  События - 2486,2487 Названия - []/Ничья". */
  [MarketGroupId.DRAW]: [
    MarketTypeId.ROUND_WINNER,
    MarketTypeId.ROUND_DRAW,
  ],
  /** "Группа - 2508  События - 3014,3015,3016,3017,3018,3019,3020,3021 Названия - Тотал уайдов () Б/Тотал уайдов () M/Тотал ран-аутов () Б/Тотал ран-аутов () M/Тотал 4-очковых () Б/Тотал 4-очковых () М/Тотал 6-очковых () Б/Тотал 6-очковых () М". */
  [MarketGroupId.TOTAL_WIDES]: [
    MarketTypeId.TOTAL_WIDES_OVER,
    MarketTypeId.TOTAL_WIDES_UNDER,
    MarketTypeId.TOTAL_RUN_OUTS_OVER,
    MarketTypeId.TOTAL_RUN_OUTS_UNDER,
    MarketTypeId.TOTAL_FOUR_POINTS_OVER,
    MarketTypeId.TOTAL_FOUR_POINTS_UNDER,
    MarketTypeId.TOTAL_SIX_POINTS_OVER,
    MarketTypeId.TOTAL_SIX_POINTS_UNDER,
  ],
  /** "Группа - 2766  События - 3653,3654,3655 Названия - П1 по рез-ту основного времени/Х по рез-ту основного времени/П2 по рез-ту основного времени". */
  [MarketGroupId.VICTORY_BY_THE_MAIN_TIME]: [
    MarketTypeId.WIN_MAIN_TIME_FIRST,
    MarketTypeId.WIN_MAIN_TIME_DRAW,
    MarketTypeId.WIN_MAIN_TIME_SECOND,
  ],
  /** "Группа - 2768  События - 3656,3657,3658 Названия - 1Х по рез-ту основного времени/12 по рез-ту основного времени/2Х по рез-ту основного времени". */
  [MarketGroupId.DOUBLE_CHANCE_BY_THE_MAIN_TIME]: [
    MarketTypeId.DOUBLE_CHANCE_MAIN_TIME_FIRST_OR_DRAW,
    MarketTypeId.DOUBLE_CHANCE_MAIN_TIME_FIRST_OR_SECOND,
    MarketTypeId.DOUBLE_CHANCE_MAIN_TIME_SECOND_OR_DRAW,
  ],
  /** "Группа - 2854  События - 3829,3830 Названия - Фора 1 ()/Фора 2 ()". */
  [MarketGroupId.ASIA_HANDICAP]: [
    MarketTypeId.ASIA_HANDICAP_FIRST,
    MarketTypeId.ASIA_HANDICAP_SECOND,
  ],
  /** "Группа - 6771  События - 5320,5321 Названия - Наименьший выпавший номер Чет/Наименьший выпавший номер Нечет". */
  [MarketGroupId.LOWEST_NUMBER_IS_EVEN_ODD]: [
    MarketTypeId.LOWEST_NUMBER_IS_EVEN,
    MarketTypeId.LOWEST_NUMBER_IS_ODD,
  ],
  /** "Группа - 6773  События - 5322,5323 Названия - Наибольший выпавший номер Чет/Наибольший выпавший номер Нечет". */
  [MarketGroupId.HIGHEST_NUMBER_IS_EVEN_ODD]: [
    MarketTypeId.HIGHEST_NUMBER_IS_EVEN,
    MarketTypeId.HIGHEST_NUMBER_IS_ODD,
  ],
  /**  Группа 6831 Наименьший выпавший номер. События 5390 Наименьший выпавший номер () Б 5391 Наименьший выпавший номер () М. */
  [MarketGroupId.LOWEST_DROPPED_NUMBER]: [
    MarketTypeId.SMALLEST_DROPPED_NUMBER_MORE,
    MarketTypeId.SMALLEST_DROPPED_NUMBER_LESS,
  ],
  /**  Группа 6833 Наибольший выпавший номер. События 5392 Наибольший выпавший номер () Б 5393 Наибольший выпавший номер () М. */
  [MarketGroupId.HIGHEST_DROPPED_NUMBER]: [
    MarketTypeId.LARGEST_NUMBER_MORE,
    MarketTypeId.LARGEST_NUMBER_LESS,
  ],
  /** "Группа - 6919  События - 5497 Названия - [] победит в гонке". */
  [MarketGroupId.RACE_WINNER]: [
    MarketTypeId.RACE_WINNER,
  ],
  /** "Группа - 7079  События - 13196,13195 Названия - Тотал ходов: Больше / Меньше. */
  [MarketGroupId.TOTAL_MOVES_OVER]: [
    MarketTypeId.TOTAL_MOVES_OVER,
    MarketTypeId.TOTAL_MOVES_UNDER,
  ],
  /** "Группа - 8389  События - 7736,7737 Названия - П1 (2 исхода)/П2 (2 исхода)". */
  [MarketGroupId.TWO_OUTCOMES]: [
    MarketTypeId.TWO_OUTCOMES_WIN_FIRST,
    MarketTypeId.TWO_OUTCOMES_WIN_SECOND,
  ],
  /** "Группа - 9180  События - 9521,9522,9523,9524 Названия - Одна пара выиграет/Две пары выиграет/Сет выиграет/Стрит выиграет". */
  [MarketGroupId.WINNING_COMBINATION]: [
    MarketTypeId.ONE_PAIR_WINNER,
    MarketTypeId.TWO_PAIRS_WINNER,
    MarketTypeId.SET_WINNER,
    MarketTypeId.STREET_WINNER,
  ],
  /** "Группа - 9409  События - 10244,10245 Названия - Температура воздуха в аэропорту: Больше / Меньше". */
  [MarketGroupId.AIRPORT_TEMPERATURE]: [
    MarketTypeId.AIRPORT_TEMPERATURE_MORE,
    MarketTypeId.AIRPORT_TEMPERATURE_LESS,
  ],
  /** "Группа - 9640  События - 11291,11292 Названия - Стрелка укажет на сектор с четным числом/Стрелка укажет на сектор с нечетным числом". */
  [MarketGroupId.ARROW_POINTS_TO_EVEN_ODD]: [
    MarketTypeId.ARROW_POINTS_TO_EVEN,
    MarketTypeId.ARROW_POINTS_TO_ODD,
  ],
  /** "Группа - 9641  События - 11293,11294 Названия - Стрелка укажет на черный сектор/Стрелка укажет на красный сектор". */
  [MarketGroupId.ARROW_POINTS_TO_RED_BLACK]: [
    MarketTypeId.ARROW_POINTS_TO_BLACK,
    MarketTypeId.ARROW_POINTS_TO_RED,
  ],
  /** "Группа - 9684  События - 11425,11426 Названия - Первый номер - Чет/Первый номер - Нечет". */
  [MarketGroupId.FIRST_NUMBER_IS_EVEN_ODD]: [
    MarketTypeId.FIRST_NUMBER_IS_EVEN,
    MarketTypeId.FIRST_NUMBER_IS_ODD,
  ],
  /** "Группа - 9685  События - 11427,11428 Названия - Последний номер - Чет/Последний номер - Нечет". */
  [MarketGroupId.LAST_NUMBER_IS_EVEN_ODD]: [
    MarketTypeId.LAST_NUMBER_IS_EVEN,
    MarketTypeId.LAST_NUMBER_IS_ODD,
  ],
  /** "Группа - 9699  События - 11466,11467 Названия - Будет карта Черного цвета/Будет карта Красного цвета". */
  [MarketGroupId.CARD_COLOR]: [
    MarketTypeId.CARD_COLOR_IS_BLACK,
    MarketTypeId.CARD_COLOR_IS_RED,
  ],
  /** "Группа - 9700  События - 11468,11469 Названия - Карта будет цифрой - Да/Карта будет цифрой - Нет". */
  [MarketGroupId.CARD_IS_NUMERIC]: [
    MarketTypeId.CARD_IS_NUMERIC,
    MarketTypeId.CARD_IS_NOT_NUMERIC,
  ],
  /** "Группа - 9710  События - 11498,11499 Названия - Тотал чисел на 5-ти первых выпавших шарах: Больше / Меньше. */
  [MarketGroupId.TOTAL_FIRST_FIVE_BALLS]: [
    MarketTypeId.TOTAL_OVER_FIRST_FIVE_BALLS,
    MarketTypeId.TOTAL_UNDER_FIRST_FIVE_BALLS,
  ],
  /** "Группа - 9716  События - 11511,11512 Названия - Цвет карты дилера - Красный/Цвет карты дилера - Черный". */
  [MarketGroupId.DEALER_CARD_COLOR]: [
    MarketTypeId.DEALER_CARD_IS_RED,
    MarketTypeId.DEALER_CARD_IS_BLACK,
  ],
  /** "Группа - 9717  События - 11513,11514 Названия - Цвет карты игрока - Красный/Цвет карты игрока - Черный". */
  [MarketGroupId.PLAYER_CARD_COLOR]: [
    MarketTypeId.PLAYER_CARD_IS_RED,
    MarketTypeId.PLAYER_CARD_IS_BLACK,
  ],
  /** "Группа - 9781  События - 11721,11722,11725 Названия - Победит Игрок 1/Победит Игрок 2/Ничья". */
  [MarketGroupId.PLAYER_VICTORY]: [
    MarketTypeId.GAME_OUTCOME_PLAYER_ONE_WINS,
    MarketTypeId.GAME_OUTCOME_PLAYER_TWO_WINS,
    MarketTypeId.GAME_OUTCOME_DRAW,
  ],
  /** "Группа - 10237  События - 13192,13191 Названия - Победа в игре: Черные / Белые. */
  [MarketGroupId.WIN_GAME]: [
    MarketTypeId.WIN_GAME_BLACK,
    MarketTypeId.WIN_GAME_WHITE,
  ],
  /** "Группа - 10238  События - 13196,13195 Названия - Фора в игре: Черные / Белые. */
  [MarketGroupId.HANDICAP_BLACK_WHITE]: [
    MarketTypeId.HANDICAP_BLACK,
    MarketTypeId.HANDICAP_WHITE,
  ],
  /** "Группа - 10316  События - 13411,13412 Названия - Индивидуальный тотал выстрелов 1: Больше / Меньше. */
  [MarketGroupId.INDIVIDUAL_TOTAL_SHOTS_1]: [
    MarketTypeId.INDIVIDUAL_TOTAL_SHOTS_ONE_OVER,
    MarketTypeId.INDIVIDUAL_TOTAL_SHOTS_ONE_UNDER,
  ],
  /** "Группа - 10317  События - 13413,13414 Названия - Индивидуальный тотал выстрелов 2: Больше / Меньше. */
  [MarketGroupId.INDIVIDUAL_TOTAL_SHOTS_2]: [
    MarketTypeId.INDIVIDUAL_TOTAL_SHOTS_TWO_OVER,
    MarketTypeId.INDIVIDUAL_TOTAL_SHOTS_TWO_UNDER,
  ],
  /** "Группа - 10318  События - 13409,13410 Названия - Тотал выстрелов: Больше / Меньше. */
  [MarketGroupId.TOTAL_SHOTS]: [
    MarketTypeId.TOTAL_SHOTS_OVER,
    MarketTypeId.TOTAL_SHOTS_UNDER,
  ],
  /** "Группа - 10393  События - 13643,13644 Названия - Первый выпавший шар: Больше / Меньше. */
  [MarketGroupId.TOTAL_FIRST_BALL]: [
    MarketTypeId.TOTAL_OVER_FIRST_BALL,
    MarketTypeId.TOTAL_UNDER_FIRST_BALL,
  ],
  /** "Группа - 10394  События - 13645,13646 Названия - Последний выпавший шар: Больше / Меньше. */
  [MarketGroupId.TOTAL_LAST_BALL]: [
    MarketTypeId.TOTAL_OVER_LAST_BALL,
    MarketTypeId.TOTAL_UNDER_LAST_BALL,
  ],
  /** "Группа - 10694  События - 2068,2069 Названия - () - овер, () Б/() - овер, () М". */
  [MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_1]: [
    MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_1_MORE,
    MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_1_UNDER,
  ],
  /** "Группа - 10695  События - 2070,2071 Названия - () - овер, () Б/() - овер, () М". */
  [MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_2]: [
    MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_2_MORE,
    MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_2_UNDER,
  ],
  /** "Группа - 10696  События - 2072,2073 Названия - () - овер, Чет/() - овер, Нечет". */
  [MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_1_EVEN_ODD]: [
    MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_1_EVEN,
    MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_1_ODD,
  ],
  /** "Группа - 10697  События - 2074,2075 Названия - () - овер, Чет/() - овер, Нечет". */
  [MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_2_EVEN_ODD]: [
    MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_2_EVEN,
    MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_2_ODD,
  ],
}
