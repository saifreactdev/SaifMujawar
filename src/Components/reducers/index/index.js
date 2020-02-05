import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cssVariables from '../cssVariables';
import toggleTheme from '../toggleTheme';

const rootReducer = combineReducers({
	cssVariables,
	toggleTheme,
	routing: routerReducer
});

export default rootReducer;
