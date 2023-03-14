import FullList from '../FullList';

class NavigationModel {
  constructor() {
    this.lists = FullList.getListNames();
  }
}

export default NavigationModel;
