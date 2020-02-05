// toggle theme
export function toggleTheme() {
	return {
		type: 'TOGGLE_THEME'
	};
}

// change theme color
export function changeThemeColor(color) {
	return {
		type: 'CHANGE_THEME_COLOR',
		color
	};
}
