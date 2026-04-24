import PropTypes from 'prop-types';
import { Component } from 'react';

// export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
// 	if (isDraw) {
// 		return <div className={styles.information}>{`Ничья`}</div>;
// 	} else {
// 		if (isGameEnded === true) {
// 			return <div className={styles.information}>{`Победа: ${currentPlayer}`}</div>;
// 		} else {
// 			return <div className={styles.information}>{`Ходит: ${currentPlayer}`}</div>;
// 		}
// 	}
// };

export class InformationLayoutClass extends Component {
	render() {
		const { isDraw, isGameEnded } = this.props;
		if (isDraw) {
			return (
				<div className='mb-6 rounded-2xl border border-blue-500 bg-slate-800 px-4 py-4 text-center text-xl font-semibold text-white shadow-lg'>{`Ничья`}</div>
			);
		} else {
			if (isGameEnded === true) {
				return (
					<div className='mb-6 rounded-2xl border border-blue-500 bg-slate-800 px-4 py-4 text-center text-xl font-semibold text-white shadow-lg'>{`Победа: ${this.props.currentPlayer}`}</div>
				);
			} else {
				return (
					<div className='mb-6 rounded-2xl border border-blue-500 bg-slate-800 px-4 py-4 text-center text-xl font-semibold text-white shadow-lg'>{`Ходит: ${this.props.currentPlayer}`}</div>
				);
			}
		}
	}
}

// InformationLayout.propTypes = {
// 	isDraw: PropTypes.bool,
// 	isGameEnded: PropTypes.bool,
// 	currentPlayer: PropTypes.string,
// };

InformationLayoutClass.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
