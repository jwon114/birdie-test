interface FormType {
  type: string;
  careRecipientId: string;
  eventType: string;
}

export const submitForm = (careRecipientId: string, eventType: string): FormType => ({
  type: 'SUBMIT',
  careRecipientId,
  eventType
});