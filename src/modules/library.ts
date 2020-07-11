import { createAsyncAction, ActionType, createReducer } from 'typesafe-actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getItemSummaries } from '../lib/api';

export const NOP = 'library/NOP';

export const GET_ITEM_SUMMARIES = 'library/GET_ITEM_SUMMARIES';
export const GET_ITEM_SUMMARIES_SUCCESS = 'library/GET_ITEM_SUMMARIES_SUCCESS';
export const GET_ITEM_SUMMARIES_FAILURE = 'library/GET_ITEM_SUMMARIES_FAILURE';

export const getItemSummariesAsync = createAsyncAction(
  GET_ITEM_SUMMARIES,
  GET_ITEM_SUMMARIES_SUCCESS,
  GET_ITEM_SUMMARIES_FAILURE,
)<void, ItemSummary[], Error>();

const actions = { getItemSummariesAsync };
type LibraryAction = ActionType<typeof actions>;

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

export function* librarySaga() {
  yield takeEvery(GET_ITEM_SUMMARIES, getItemSummariesSaga);
}

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
  rarity: number;
  category: number;
  equipLevel: number;
};

type LibraryState = {
  readyToSearch: boolean;
  itemSummaries: ItemSummary[];
  error: Error | null;
};

const initialState: LibraryState = {
  readyToSearch: false,
  itemSummaries: [],
  error: null,
};

const library = createReducer<LibraryState, LibraryAction>(initialState, {
  [GET_ITEM_SUMMARIES]: state => ({
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
});

export default library;
