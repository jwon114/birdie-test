import { combineReducers } from 'redux';
import EventTypes from './eventTypes';

export type RootState = Readonly<{
  eventTypes: Array<{}>
}>;

export const rootReducer = combineReducers<RootState>({
  EventTypes
});