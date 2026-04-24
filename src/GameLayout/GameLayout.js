import { FieldClass } from './Field/Field';
import { InformationClass } from './Information/Information';
import PropTypes from 'prop-types';
import { Component } from 'react';

// export const GameLayout = ({
// 	isDraw,
// 	isGameEnded,
// 	currentPlayer,
// 	field,
// 	playButton,
// 	resetButton,
// }) => {
// 	return (
// 		<div className={styles.game}>
// 			<h1 className={styles.title}>Крестики - Нолики</h1>

// 			<Information
// 				isDraw={isDraw}
// 				isGameEnded={isGameEnded}
// 				currentPlayer={currentPlayer}
// 			/>

// 			<FieldClass field={field} playButton={playButton} resetButton={resetButton} />
// 		</div>
// 	);
// };

export class GameLayoutClass extends Component {
	render() {
		const { isDraw, isGameEnded } = this.props;
		return (
			<div className='min-h-screen flex items-center justify-center bg-slate-950 text-white px-4'>
				<div className='w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl'>
					<h1 className='text-3xl font-bold mb-6 text-center'>Крестики - Нолики</h1>

					<InformationClass
						isDraw={isDraw}
						isGameEnded={isGameEnded}
						currentPlayer={this.props.currentPlayer}
					/>

					<FieldClass
						field={this.props.field}
						playButton={this.props.playButton}
						resetButton={this.props.resetButton}
					/>
				</div>
			</div>
		);
	}
}

GameLayoutClass.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	field: PropTypes.arrayOf(PropTypes.string),
	playButton: PropTypes.func,
	resetButton: PropTypes.func,
};

// GameLayout.propTypes = {
// 	isDraw: PropTypes.bool,
// 	isGameEnded: PropTypes.bool,
// 	currentPlayer: PropTypes.string,
// 	field: PropTypes.arrayOf(PropTypes.string),
// 	playButton: PropTypes.func,
// 	resetButton: PropTypes.func,
// };
