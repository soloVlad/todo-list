import Footer from './js/view/FooterView';

import ListModel from './js/model/ListModel';
import ListController from './js/controller/ListController';
import ListView from './js/view/ListView';

const listModel = new ListModel('first');
const listController = new ListController(listModel);
const listView = new ListView(listController, document.body);

const footerView = new Footer(document.body);
