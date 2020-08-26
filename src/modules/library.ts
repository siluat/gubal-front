import {
  createAsyncAction,
  ActionType,
  createReducer,
  createAction,
} from 'typesafe-actions';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getItemSummaries } from '../lib/api';
import { ItemRarity } from '../types/ItemRairity';

/**
 * Actions and Action Creators
 */

export const GET_ITEM_SUMMARIES = 'library/GET_ITEM_SUMMARIES';
export const GET_ITEM_SUMMARIES_SUCCESS = 'library/GET_ITEM_SUMMARIES_SUCCESS';
export const GET_ITEM_SUMMARIES_FAILURE = 'library/GET_ITEM_SUMMARIES_FAILURE';

export const SEARCH_ITEM = 'library/SEARCH_ITEM';
export const KEYWORD_CHANGED = 'library/KEYWORD_CHANGED';

export const FOCUSING_ITEM = 'library/FOCUSING_ITEM';

export const getItemSummariesAsync = createAsyncAction(
  GET_ITEM_SUMMARIES,
  GET_ITEM_SUMMARIES_SUCCESS,
  GET_ITEM_SUMMARIES_FAILURE,
)<void, ItemSummary[], Error>();

export const searchItem = createAction(SEARCH_ITEM)<string>();
export const keywordChanged = createAction(KEYWORD_CHANGED)<string>();

export const focusingItem = createAction(FOCUSING_ITEM)<number>();

const actions = {
  getItemSummariesAsync,
  searchItem,
  keywordChanged,
  focusingItem,
};
type LibraryAction = ActionType<typeof actions>;

/**
 * Sagas
 */

function* getItemSummariesSaga() {
  try {
    const { data } = yield call(getItemSummaries);
    const itemSummaries: ItemSummary[] = data.map((i: ItemSummaryRaw) => {
      return {
        id: i[0],
        name: i[1],
        icon: i[2],
        itemLevel: i[3],
        rarity: i[4],
        category: i[5],
        equipLevel: i[6],
      };
    });
    yield put(getItemSummariesAsync.success(itemSummaries));
  } catch (e) {
    yield put(getItemSummariesAsync.failure(e));
  }
}

function* searchItemSaga(action: { type: string; payload: string }) {
  yield put(searchItem(action.payload));
}

export function* librarySaga() {
  yield takeEvery(GET_ITEM_SUMMARIES, getItemSummariesSaga);
  yield takeLatest(KEYWORD_CHANGED, searchItemSaga);
}

/**
 * Reducer
 */

export type ItemSummaryRaw = [
  number,
  string,
  string,
  number,
  number,
  number,
  number,
];

export type ItemSummary = {
  id: number;
  name: string;
  icon: string;
  itemLevel: number;
  rarity: ItemRarity;
  category: number;
  equipLevel: number;
};

type LibraryState = {
  readyToSearch: boolean;
  itemSummaries: ItemSummary[];
  searchResults: ItemSummary[];
  focusedItemId: number | null;
  error: Error | null;
};

const initialState: LibraryState = {
  readyToSearch: false,
  itemSummaries: [],
  searchResults: [],
  focusedItemId: null,
  error: null,
};

const library = createReducer<LibraryState, LibraryAction>(initialState, {
  [GET_ITEM_SUMMARIES]: (state) => ({
    ...state,
    readyToSearch: false,
    itemSummaries: [],
    error: null,
  }),
  [GET_ITEM_SUMMARIES_SUCCESS]: (state, { payload: itemSummaries }) => ({
    ...state,
    readyToSearch: true,
    itemSummaries: itemSummaries,
    error: null,
  }),
  [GET_ITEM_SUMMARIES_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error: error,
  }),
  [SEARCH_ITEM]: (state, { payload: searchKeyword }) => ({
    ...state,
    focusedItemId: null,
    searchResults:
      !searchKeyword || searchKeyword.length === 0
        ? []
        : state.itemSummaries.filter((item) =>
            item.name.includes(searchKeyword),
          ),
  }),
  [FOCUSING_ITEM]: (state, { payload: id }) => ({
    ...state,
    focusedItemId: id,
  }),
});

export default library;
