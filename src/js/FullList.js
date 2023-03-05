class TaskList {
  constructor(list = []) {
    this.list = list;
  }

  add(task) {
    this.list.push(task);
  }

  remove(id) {
    this.list = this.list.filter((task) => task.id !== id);
  }
}

export default TaskList;
