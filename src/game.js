import { GameLayoutClass } from './GameLayout/GameLayout';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Component } from 'react';

// export const Game = () => {
// 	const dispatch = useDispatch();

// 	const currentPlayer = useSelector((state) => state.currentPlayer);
// 	const isGameEnded = useSelector((state) => state.isGameEnded);
// 	const isDraw = useSelector((state) => state.isDraw);
// 	const field = useSelector((state) => state.field);

// 	const playButton = (index) => {
// 		dispatch({ type: 'PLAY_MOVE', payload: { index } });
// 	};

// 	const resetButton = () => {
// 		dispatch({ type: 'RESTART_GAME' });
// 	};

// 	return (
// 		<GameLayoutClass
// 			currentPlayer={currentPlayer}
// 			isGameEnded={isGameEnded}
// 			isDraw={isDraw}
// 			field={field}
// 			playButton={playButton}
// 			resetButton={resetButton}
// 		/>
// 	);
// };

export class OldGame extends Component {
	render() {
		const { currentPlayer, isGameEnded, isDraw, field, playButton, resetButton } =
			this.props;

		return (
			<GameLayoutClass
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				field={field}
				playButton={playButton}
				resetButton={resetButton}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
	field: state.field,
});

const mapDispatchToProps = (dispatch) => ({
	playButton: (index) => dispatch({ type: 'PLAY_MOVE', payload: { index } }),
	resetButton: () => dispatch({ type: 'RESTART_GAME' }),
});

export const Game = connect(mapStateToProps, mapDispatchToProps)(OldGame);

// Game.propTypes = {
// 	isDraw: PropTypes.bool,
// 	isGameEnded: PropTypes.bool,
// 	currentPlayer: PropTypes.string,
// 	field: PropTypes.arrayOf(PropTypes.string),
// 	playButton: PropTypes.func,
// 	resetButton: PropTypes.func,
// };

OldGame.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	field: PropTypes.arrayOf(PropTypes.string),
	playButton: PropTypes.func,
	resetButton: PropTypes.func,
};
