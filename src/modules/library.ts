import { createAction, ActionType, createReducer } from 'typesafe-actions';

const NOP = 'library/NOP';

export const nop = createAction(NOP)();

const actions = { nop };
type LibraryAction = ActionType<typeof actions>;

export type ItemSummary = {
  id: number;
  name: string;
};

type LibraryState = {
  itemSummaries: ItemSummary[];
};

const initialState: LibraryState = {
  itemSummaries: [],
};

const library = createReducer<LibraryState, LibraryAction>(initialState, {
  [NOP]: state => state,
});

export default library;
