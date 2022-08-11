import {MarketGroupId, MarketTypeId} from '@/shared/domain'
import type {DashboardSchema} from '@/modules/dashboard/domain/types'

export const DASHBOARD_GROUPS_ORDER = [
  MarketGroupId.VICTORY,
  MarketGroupId.HANDICAP,
  MarketGroupId.TOTAL,
  MarketGroupId.HANDICAP,
  MarketGroupId.INDIVIDUAL_TOTAL_1,
  MarketGroupId.INDIVIDUAL_TOTAL_2,
]

/**
 * @todo Заменить названия на ключи переводов.
*/
export const DASHBOARD_MATCH_SCHEMA: DashboardSchema = {
  groups: [
    {
      groupId: MarketGroupId.VICTORY,
      types: [
        {
          typeId: MarketTypeId.WIN_FIRST,
          name: '1',
        },
        {
          typeId: MarketTypeId.DRAW,
          name: 'X',
        },
        {
          typeId: MarketTypeId.WIN_SECOND,
          name: '2',
        },
      ],
    },
    {
      groupId: MarketGroupId.DOUBLE_CHANCE,
      types: [
        {
          typeId: MarketTypeId.DOUBLE_CHANCE_FIRST_OR_DRAW,
          name: '1X',
        },
        {
          typeId: MarketTypeId.DOUBLE_CHANCE_FIRST_OR_SECOND,
          name: '12',
        },
        {
          typeId: MarketTypeId.DOUBLE_CHANCE_SECOND_OR_DRAW,
          name: '2X',
        },
      ],
    },
    {
      groupId: MarketGroupId.TOTAL,
      types: [
        {
          typeId: MarketTypeId.TOTAL_OVER,
          name: 'O',
        },
        {
          name: 'Total',
        },
        {
          typeId: MarketTypeId.TOTAL_UNDER,
          name: 'U',
        },
      ],
    },
    {
      groupId: MarketGroupId.HANDICAP,
      types: [
        {
          typeId: MarketTypeId.HANDICAP_FIRST,
          name: '1',
        },
        {
          name: 'Handicap',
        },
        {
          typeId: MarketTypeId.HANDICAP_SECOND,
          name: '2',
        },
      ],
    },
    {
      groupId: MarketGroupId.INDIVIDUAL_TOTAL_1,
      types: [
        {
          typeId: MarketTypeId.INDIVIDUAL_TOTAL_FIRST_MORE,
          name: 'O',
        },
        {
          name: 'IT1',
        },
        {
          typeId: MarketTypeId.INDIVIDUAL_TOTAL_FIRST_UNDER,
          name: 'U',
        },
      ],
    },
    {
      groupId: MarketGroupId.INDIVIDUAL_TOTAL_2,
      types: [
        {
          typeId: MarketTypeId.INDIVIDUAL_TOTAL_SECOND_MORE,
          name: 'O',
        },
        {
          name: 'IT2',
        },
        {
          typeId: MarketTypeId.INDIVIDUAL_TOTAL_SECOND_UNDER,
          name: 'U',
        },
      ],
    },
  ],
}

export const groupHeaderTextByGroupId = {
  [MarketGroupId.INDIVIDUAL_TOTAL_1]: 'betting_dashboard_it_1',
  [MarketGroupId.INDIVIDUAL_TOTAL_2]: 'betting_dashboard_it_2',
  [MarketGroupId.DOUBLE_CHANCE]: 'betting_dashboard_12',
  [MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_1]: 'betting_dashboard_oirt_1',
  [MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_2]: 'betting_dashboard_oirt_2',
  [MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_1_EVEN_ODD]: 'betting_dashboard_oirt_even_odd_1',
  [MarketGroupId.OVER_INDIVIDUAL_RUNS_TOTAL_2_EVEN_ODD]: 'betting_dashboard_oirt_even_odd_2',
}

export const groupTextByTypeIds = [
  {
    ids: [
      MarketTypeId.WIN_FIRST,
      MarketTypeId.WIN_MAIN_TIME_FIRST,
      MarketTypeId.HANDICAP_FIRST,
      MarketTypeId.WIN_SET_FIRST,
      MarketTypeId.WIN_FULL_MATCH_FIRST,
    ],
    title: 'betting_dashboard_1',
  },
  {
    ids: [
      MarketTypeId.WIN_SECOND,
      MarketTypeId.WIN_MAIN_TIME_SECOND,
      MarketTypeId.HANDICAP_SECOND,
      MarketTypeId.WIN_SET_SECOND,
      MarketTypeId.WIN_FULL_MATCH_SECOND,
    ],
    title: 'betting_dashboard_2',
  },
  {
    ids: [
      MarketTypeId.DRAW,
      MarketTypeId.WIN_MAIN_TIME_DRAW,
    ],
    title: 'betting_dashboard_x',
  },
  {
    ids: [
      MarketTypeId.DOUBLE_CHANCE_FIRST_OR_DRAW,
      MarketTypeId.DOUBLE_CHANCE_MAIN_TIME_FIRST_OR_DRAW,
    ],
    title: 'betting_dashboard_1x',
  },
  {
    ids: [
      MarketTypeId.DOUBLE_CHANCE_FIRST_OR_SECOND,
      MarketTypeId.DOUBLE_CHANCE_MAIN_TIME_FIRST_OR_SECOND,
    ],
    title: 'betting_dashboard_12',
  },
  {
    ids: [
      MarketTypeId.DOUBLE_CHANCE_SECOND_OR_DRAW,
      MarketTypeId.DOUBLE_CHANCE_MAIN_TIME_SECOND_OR_DRAW,
    ],
    title: 'betting_dashboard_2x',
  },

  {
    ids: [
      MarketTypeId.TOTAL_OVER,
      MarketTypeId.INDIVIDUAL_TOTAL_FIRST_MORE,
      MarketTypeId.INDIVIDUAL_TOTAL_SECOND_MORE,
      MarketTypeId.SMALLEST_DROPPED_NUMBER_MORE,
      MarketTypeId.LARGEST_NUMBER_MORE,
      MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_1_MORE,
      MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_2_MORE,
    ],
    title: 'betting_dashboard_more',
  },
  {
    ids: [
      MarketTypeId.TOTAL_UNDER,
      MarketTypeId.INDIVIDUAL_TOTAL_FIRST_UNDER,
      MarketTypeId.INDIVIDUAL_TOTAL_SECOND_UNDER,
      MarketTypeId.SMALLEST_DROPPED_NUMBER_LESS,
      MarketTypeId.LARGEST_NUMBER_LESS,
      MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_1_UNDER,
      MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_2_UNDER,
    ],
    title: 'betting_dashboard_less',
  },
  {
    ids: [
      MarketTypeId.WIN_QUARTERS_DRAW,
      MarketTypeId.GAME_OUTCOME_DRAW,
    ],
    title: 'betting_dashboard_draw',
  },
  {
    ids: [
      MarketTypeId.BOTH_SCORES_YES,
      MarketTypeId.WIN_YES,
    ],
    title: 'betting_dashboard_yes',
  },
  {
    ids: [
      MarketTypeId.BOTH_SCORES_NO,
      MarketTypeId.WIN_NO,
    ],
    title: 'betting_dashboard_no',
  },
  {
    ids: [
      MarketTypeId.WIN_QUARTERS_FIRST,
      MarketTypeId.WIN_FULL_MATCH_INCLUDING_BULLETS_FIRST,
      MarketTypeId.GAME_OUTCOME_PLAYER_ONE_WINS,
      MarketTypeId.TWO_OUTCOMES_WIN_FIRST,
    ],
    title: 'betting_dashboard_win_1',
  },
  {
    ids: [
      MarketTypeId.WIN_QUARTERS_SECOND,
      MarketTypeId.WIN_FULL_MATCH_INCLUDING_BULLETS_SECOND,
      MarketTypeId.GAME_OUTCOME_PLAYER_TWO_WINS,
      MarketTypeId.TWO_OUTCOMES_WIN_SECOND,
    ],
    title: 'betting_dashboard_win_2',
  },
  {
    ids: [
      MarketTypeId.LOWEST_NUMBER_IS_EVEN,
      MarketTypeId.HIGHEST_NUMBER_IS_EVEN,
      MarketTypeId.FIRST_NUMBER_IS_EVEN,
      MarketTypeId.LAST_NUMBER_IS_EVEN,
      MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_1_EVEN,
      MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_2_EVEN,
    ],
    title: 'betting_dashboard_even',
  },
  {
    ids: [
      MarketTypeId.LOWEST_NUMBER_IS_ODD,
      MarketTypeId.HIGHEST_NUMBER_IS_ODD,
      MarketTypeId.FIRST_NUMBER_IS_ODD,
      MarketTypeId.LAST_NUMBER_IS_ODD,
      MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_1_ODD,
      MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_2_ODD,
    ],
    title: 'betting_dashboard_odd',
  },
]

export const marketGroupHintsByGroupId: Partial<Record<MarketGroupId, string>> = {
  [MarketGroupId.HANDICAP]: 'betting_dashboard_hint_handicap',
}

export const marketHintByMarketTypeId: Partial<Record<MarketTypeId, string>> = {
  [MarketTypeId.WIN_FIRST]: 'betting_dashboard_hint_p1',
  [MarketTypeId.DRAW]: 'betting_dashboard_hint_draw',
  [MarketTypeId.WIN_SECOND]: 'betting_dashboard_hint_p2',
  [MarketTypeId.DOUBLE_CHANCE_FIRST_OR_DRAW]: 'betting_dashboard_hint_1x',
  [MarketTypeId.DOUBLE_CHANCE_FIRST_OR_SECOND]: 'betting_dashboard_hint_12',
  [MarketTypeId.DOUBLE_CHANCE_SECOND_OR_DRAW]: 'betting_dashboard_hint_2x',
  [MarketTypeId.TOTAL_OVER]: 'betting_dashboard_hint_total_over',
  [MarketTypeId.TOTAL_UNDER]: 'betting_dashboard_hint_total_under',
  [MarketTypeId.TWO_OUTCOMES_WIN_FIRST]: 'betting_dashboard_hint_win_2_outcomes_1',
  [MarketTypeId.TWO_OUTCOMES_WIN_SECOND]: 'betting_dashboard_hint_win_2_outcomes_2',
  [MarketTypeId.WIN_FULL_MATCH_FIRST]: 'betting_dashboard_hint_team_1_wins',
  [MarketTypeId.WIN_FULL_MATCH_SECOND]: 'betting_dashboard_hint_team_2_wins',
  [MarketTypeId.WIN_MAIN_TIME_FIRST]: 'betting_dashboard_hint_p1_on_main_time',
  [MarketTypeId.WIN_MAIN_TIME_DRAW]: 'betting_dashboard_hint_x_on_main_time',
  [MarketTypeId.WIN_MAIN_TIME_SECOND]: 'betting_dashboard_hint_p2_on_main_time',
  [MarketTypeId.HANDICAP_FIRST]: 'betting_dashboard_hint_handicap_1',
  [MarketTypeId.HANDICAP_SECOND]: 'betting_dashboard_hint_handicap_2',
  [MarketTypeId.INDIVIDUAL_TOTAL_FIRST_MORE]: 'betting_dashboard_hint_individual_total_1_more',
  [MarketTypeId.INDIVIDUAL_TOTAL_FIRST_UNDER]: 'betting_dashboard_hint_individual_total_1_under',
  [MarketTypeId.INDIVIDUAL_TOTAL_SECOND_MORE]: 'betting_dashboard_hint_individual_total_2_more',
  [MarketTypeId.INDIVIDUAL_TOTAL_SECOND_UNDER]: 'betting_dashboard_hint_individual_total_2_under',
  [MarketTypeId.WIN_FULL_MATCH_INCLUDING_BULLETS_FIRST]: 'betting_dashboard_hint_win_team_1_with_ot_and_bullets',
  [MarketTypeId.WIN_FULL_MATCH_INCLUDING_BULLETS_SECOND]: 'betting_dashboard_hint_win_team_2_with_ot_and_bullets',
  [MarketTypeId.WIN_QUARTERS_FIRST]: 'betting_dashboard_hint_team_1_wins_by_quarters',
  [MarketTypeId.WIN_QUARTERS_DRAW]: 'betting_dashboard_hint_draw_by_quarters',
  [MarketTypeId.WIN_QUARTERS_SECOND]: 'betting_dashboard_hint_team_2_wins_by_quarters',
  [MarketTypeId.WIN_SET_FIRST]: 'betting_dashboard_hint_team_1_wins',
  [MarketTypeId.WIN_SET_SECOND]: 'betting_dashboard_hint_team_2_wins',
  [MarketTypeId.WIN_YES]: 'betting_dashboard_hint_win_yes',
  [MarketTypeId.LOWEST_NUMBER_IS_EVEN]: 'betting_dashboard_hint_lowest_number_is_even',
  [MarketTypeId.LOWEST_NUMBER_IS_ODD]: 'betting_dashboard_hint_lowest_number_is_odd',
  [MarketTypeId.HIGHEST_NUMBER_IS_EVEN]: 'betting_dashboard_hint_highest_number_is_even',
  [MarketTypeId.HIGHEST_NUMBER_IS_ODD]: 'betting_dashboard_hint_highest_number_is_odd',
  [MarketTypeId.FIRST_NUMBER_IS_EVEN]: 'betting_dashboard_hint_first_number_is_even',
  [MarketTypeId.FIRST_NUMBER_IS_ODD]: 'betting_dashboard_hint_first_number_is_odd',
  [MarketTypeId.LAST_NUMBER_IS_EVEN]: 'betting_dashboard_hint_last_number_is_even',
  [MarketTypeId.LAST_NUMBER_IS_ODD]: 'betting_dashboard_hint_last_number_is_odd',
  [MarketTypeId.GAME_OUTCOME_PLAYER_ONE_WINS]: 'betting_dashboard_hint_player_1_wins',
  [MarketTypeId.GAME_OUTCOME_PLAYER_TWO_WINS]: 'betting_dashboard_hint_player_2_wins',
  [MarketTypeId.GAME_OUTCOME_DRAW]: 'betting_dashboard_hint_draw',
  [MarketTypeId.BOTH_SCORES_YES]: 'betting_dashboard_hint_both_scores_yes',
  [MarketTypeId.BOTH_SCORES_NO]: 'betting_dashboard_hint_both_scores_no',
  [MarketTypeId.SMALLEST_DROPPED_NUMBER_MORE]: 'betting_dashboard_hint_dropped_number_more',
  [MarketTypeId.SMALLEST_DROPPED_NUMBER_LESS]: 'betting_dashboard_hint_dropped_number_less',
  [MarketTypeId.LARGEST_NUMBER_MORE]: 'betting_dashboard_hint_dropped_number_more',
  [MarketTypeId.LARGEST_NUMBER_LESS]: 'betting_dashboard_hint_dropped_number_less',
  [MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_1_MORE]: 'betting_dashboard_hint_over_individual_runs_total_1_more',
  [MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_1_UNDER]: 'betting_dashboard_hint_over_individual_runs_total_1_under',
  [MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_2_MORE]: 'betting_dashboard_hint_over_individual_runs_total_2_more',
  [MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_2_UNDER]: 'betting_dashboard_hint_over_individual_runs_total_2_under',
  [MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_1_EVEN]: 'betting_dashboard_hint_over_individual_runs_total_1_even',
  [MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_1_ODD]: 'betting_dashboard_hint_over_individual_runs_total_1_odd',
  [MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_2_EVEN]: 'betting_dashboard_hint_over_individual_runs_total_2_even',
  [MarketTypeId.OVER_INDIVIDUAL_RUNS_TOTAL_2_ODD]: 'betting_dashboard_hint_over_individual_runs_total_2_odd',
}

export const LONG_MARKET_LIMIT = 15
export const DEFAULT_TITLE = '-'
