interface EventType {
  type: string;
}

export const fetchEventTypes = (): EventType => ({
  type: 'FETCH'
});