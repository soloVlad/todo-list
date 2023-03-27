import FullList from '../FullList';
import Events from '../Events';

class NavigationModel {
  constructor() {
    this.lists = FullList.getListNames();
    Events.on('list added', this.updateLists.bind(this));
  }

  updateLists() {
    this.lists = FullList.getListNames();
  }
}

export default NavigationModel;
