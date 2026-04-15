const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
};

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const winner = (field) => {
	for (let i = 0; i < WIN_PATTERNS.length; i++) {
		const [a, b, c] = WIN_PATTERNS[i];
		if (field[a] !== '' && field[a] === field[b] && field[a] === field[c]) {
			return field[a];
		}
	}
	return null;
};

const draw = (field) => {
	for (let i = 0; i < field.length; i++) {
		if (field[i] === '') {
			return false;
		}
	}
	return true;
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'PLAY_MOVE': {
			const { index } = payload;

			if (state.field[index] !== '' || state.isGameEnded) {
				return state;
			}

			const newField = [...state.field];
			newField[index] = state.currentPlayer;

			const winField = winner(newField);
			if (winField) {
				return {
					...state,
					field: newField,
					isGameEnded: true,
				};
			}

			if (draw(newField)) {
				return {
					...state,
					field: newField,
					isDraw: true,
					isGameEnded: true,
				};
			}

			return {
				...state,
				field: newField,
				currentPlayer: state.currentPlayer === 'X' ? '0' : 'X',
			};
		}
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};
