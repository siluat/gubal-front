import { combineReducers } from 'redux';
import library, { librarySaga } from './library';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  library,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([librarySaga()]);
}
