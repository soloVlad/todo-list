class HeaderController {
  constructor(modalView) {
    this.modalView = modalView;
  }

  // EventListener interface
  handleEvent(e) {
    e.stopPropagation();
    switch (e.type) {
      case 'click':
        this.modalView.toggleAppear();
        break;
      default:
        console.log(e.target);
    }
  }
}

export default HeaderController;
