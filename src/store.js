import { createStore } from 'redux';

import rootReducer from './Components/reducers/index/index';

const defaultStore = {
	cssVariables: {
		mainTheme: true,
		mainBgColor: '#000',
		secBgColor: '#171717',
		mobNavBgColor: 'rgba(0, 0, 0, 0.8)',
		bgImgColor: 'rgba(0, 0, 0, 0.5)',
		mainThemeColor: 'rgb(253, 55, 55)',
		mainFontColor: '#fff',
		secFontColor: '#F5F5F5'
	}
};

const store = createStore(rootReducer, defaultStore);

export default store;
