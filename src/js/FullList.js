const FullList = {
  list: {
    first: [
      {
        id: 1,
        text: 'first task',
        dueDate: '10:30',
      },
      {
        id: 2,
        text: 'second task',
        dueDate: '10:30',
      },
    ],
    second: [
      {
        id: 1,
        text: 'first task',
        dueDate: '10:30',
      },
      {
        id: 2,
        text: 'second task',
        dueDate: '10:30',
      },
    ],
    third: [
      {
        id: 1,
        text: 'first task',
        dueDate: '10:30',
      },
      {
        id: 2,
        text: 'second task',
        dueDate: '10:30',
      },
    ],
  },

  add(task) {
    const { listName } = task;
    this.list[listName] = this.list[listName] ?? [];
    this.list[listName].push(task);
  },

  remove(id) {
    const listName = id.split('-')[0];
    this.list[listName] = this.list[listName].filter((task) => task.id !== id);
  },

  getByListName(listName) {
    return this.list[listName];
  },

  getAvailableId(listName) {
    return this.list[listName][this.list[listName].length - 1] + 1;
  },

  getListNames() {
    return Object.keys(this.list);
  },
};

export default FullList;
