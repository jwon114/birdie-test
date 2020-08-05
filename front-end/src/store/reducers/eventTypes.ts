interface EventTypeAction {
  type: string;
  payload: Array<string>;
}

const eventTypes = (state = [], action: EventTypeAction) => {
  switch (action.type) {
    case 'FETCH_EVENT_TYPES_SUCCESS':
      console.log('action.payload', action.payload);
      console.log('state', state);
      return action.payload;
    case 'FETCH_EVENT_TYPES_FAILED':
      return action.payload;
    default:
      return state;
  }
};

export default eventTypes;