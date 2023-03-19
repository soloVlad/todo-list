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
        this.clickHandler(e.target);
        break;
      default:
        console.log(e.target);
    }
  }

  clickHandler(target) {
    const listName = target.getAttribute('data-list-name');
  }
}

export default NavigationController;
