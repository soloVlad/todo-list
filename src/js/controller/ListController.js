class ListController {
  constructor(model) {
    this.model = model;
  }

  get modelList() {
    return this.model.list;
  }

  get modelListName() {
    return this.model.listName;
  }

  // EventListener interface
  handleEvent(e) {
    e.stopPropagation();
    switch (e.type) {
      case 'click':
        console.log(this.modelListName);
        break;
      default:
        console.log(e.target);
    }
  }
}

export default ListController;
