// a reducer takes in two things

// 1. the action (info about what happened)
// 2. copy of current state

function cssVariables(state = [], action) {
	switch (action.type) {
		case 'TOGGLE_THEME':
			let stateCopy1 = { ...state };
			stateCopy1.mainTheme = stateCopy1.mainTheme ? false : true;
			if (stateCopy1.mainTheme) {
				stateCopy1.mainBgColor = '#000';
				stateCopy1.secBgColor = '#171717';
				stateCopy1.mobNavBgColor = 'rgba(0, 0, 0, 0.8)';
				stateCopy1.bgImgColor = 'rgba(0, 0, 0, 0.5)';
				stateCopy1.mainFontColor = '#fff';
				stateCopy1.secFontColor = '#F5F5F5';
			} else if (!stateCopy1.mainTheme) {
				stateCopy1.mainBgColor = '#fff';
				stateCopy1.secBgColor = '#F5F5F5';
				stateCopy1.mobNavBgColor = 'rgba(255, 255, 255, 0.8)';
				stateCopy1.bgImgColor = 'rgba(245, 245, 245, 0.6)';

				stateCopy1.mainFontColor = '#000';
				stateCopy1.secFontColor = '#171717';
			}
			return stateCopy1;
		case 'CHANGE_THEME_COLOR':
			let stateCopy2 = { ...state };
			stateCopy2.mainThemeColor = action.color;
			return stateCopy2;
		default:
			return state;
	}
}

export default cssVariables;
