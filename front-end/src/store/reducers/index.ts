import { combineReducers } from 'redux';
import eventTypes from './eventTypes';

export type RootState = Readonly<{
  careRecipients: Array<string>,
  eventTypes: Array<string>
}>;

export const rootReducer = combineReducers<RootState>({
  eventTypes
});