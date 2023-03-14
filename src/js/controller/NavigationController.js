class NavigationController {
  constructor(model) {
    this.model = model;
  }

  get modelListNames() {
    return this.model.lists;
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

export default NavigationController;
