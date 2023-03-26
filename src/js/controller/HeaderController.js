class HeaderController {
  // EventListener interface
  handleEvent(e) {
    e.stopPropagation();
    switch (e.type) {
      case 'click':
        console.log(e.target);
        break;
      default:
        console.log(e.target);
    }
  }
}

export default HeaderController;
