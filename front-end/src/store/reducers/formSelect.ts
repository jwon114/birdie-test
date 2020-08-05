interface FormSelectAction {
  type: string;
  careRecipientId: string;
  eventTypes: string;
}

const formSelect = (state = [], action: FormSelectAction) => {
  switch (action.type) {
    case 'SUBMIT':
      return [
        ...state,
        {
          careRecipient: action.careRecipientId,
          eventTypes: action.eventTypes
        }
      ];
    default:
      return state;
  }
};

export default formSelect;
