import { GameLayout } from './GameLayout/GameLayout';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

export const Game = () => {
	const dispatch = useDispatch();

	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const isDraw = useSelector((state) => state.isDraw);
	const field = useSelector((state) => state.field);

	const playButton = (index) => {
		dispatch({ type: 'PLAY_MOVE', payload: { index } });
	};

	const resetButton = () => {
		dispatch({ type: 'RESTART_GAME' });
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			playButton={playButton}
			resetButton={resetButton}
		/>
	);
};

GameLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	field: PropTypes.arrayOf(PropTypes.string),
	playButton: PropTypes.func,
	resetButton: PropTypes.func,
};
