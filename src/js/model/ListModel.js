import FullList from '../FullList';

class ListModel {
  constructor(listName) {
    this.listName = listName;
    this.list = FullList.getByListName(this.listName);
  }

  add(task) {
    const taskId = `${this.listName}-${FullList.getAvailableId(this.listName)}`;
    const taskWithId = {
      id: taskId,
      ...task,
    };
    this.list.push(taskWithId);
    FullList.add(taskWithId);
  }

  remove(id) {
    this.listName = this.listName.filter((task) => task.id !== id);
    FullList.remove(id);
  }
}

export default ListModel;
