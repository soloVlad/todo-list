const FullList = {
  list: [],

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
};

export default FullList;
