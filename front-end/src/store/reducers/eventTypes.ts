interface EventTypeAction {
  type: string;
}

const EventTypes = (state = [], action: EventTypeAction) => {
  switch (action.type) {
    case 'FETCH':
      return 'hello';
    default:
      return state;
  }
};

export default EventTypes;