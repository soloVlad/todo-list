const Events = {
  events: {},

  on(eventName, handler) {
    this.events[eventName] = this.events[eventName] ?? [];
    this.events[eventName].push(handler);
  },

  off(eventName, handler) {
    if (!this.events[eventName]) return;

    const eventIndex = this.events[eventName].findIndex((fn) => fn === handler);
    if (eventIndex > 0) {
      this.events[eventName].splice(eventIndex, 1);
    }
  },

  emit(eventName, data) {
    if (!this.events[eventName]) return;
    this.events[eventName].forEach((fn) => {
      fn(data);
    });
  },
};

export default Events;
